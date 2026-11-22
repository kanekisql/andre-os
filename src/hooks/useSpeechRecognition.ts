import { useCallback, useEffect, useRef, useState } from "react";

/* La Web Speech API no está en las definiciones DOM de TypeScript: tipado mínimo propio. */
interface RecognitionAlternative {
  transcript: string;
}
interface RecognitionResult {
  isFinal: boolean;
  [index: number]: RecognitionAlternative;
}
interface RecognitionEventLike {
  resultIndex: number;
  results: ArrayLike<RecognitionResult>;
}
interface RecognitionErrorLike {
  error: string;
}
interface RecognitionLike {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  onresult: ((event: RecognitionEventLike) => void) | null;
  onerror: ((event: RecognitionErrorLike) => void) | null;
  onend: (() => void) | null;
  start: () => void;
  stop: () => void;
  abort: () => void;
}
type RecognitionConstructor = new () => RecognitionLike;

function getRecognitionConstructor(): RecognitionConstructor | null {
  if (typeof window === "undefined") return null;
  const w = window as unknown as {
    SpeechRecognition?: RecognitionConstructor;
    webkitSpeechRecognition?: RecognitionConstructor;
  };
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null;
}

const ERROR_MESSAGES: Record<string, string> = {
  "not-allowed": "El navegador no tiene permiso para usar el micrófono.",
  "service-not-allowed": "El reconocimiento de voz no está permitido en este navegador.",
  "no-speech": "No se detectó voz. Intenta de nuevo.",
  "audio-capture": "No se encontró un micrófono disponible.",
  network: "El reconocimiento de voz del navegador no pudo conectarse.",
};

export interface SpeechRecognitionState {
  supported: boolean;
  listening: boolean;
  /** Texto parcial que aún se está reconociendo. */
  interim: string;
  error: string | null;
  start: () => void;
  stop: () => void;
}

/**
 * Dictado por voz con la Web Speech API del navegador.
 * `onFinalText` recibe cada fragmento ya confirmado para que el usuario lo revise antes de guardar.
 * Si el navegador no la soporta, `supported` es false y debe quedar el ingreso por teclado.
 */
export function useSpeechRecognition(
  onFinalText: (text: string) => void,
  lang = "es-PE",
): SpeechRecognitionState {
  const [supported] = useState(() => getRecognitionConstructor() !== null);
  const [listening, setListening] = useState(false);
  const [interim, setInterim] = useState("");
  const [error, setError] = useState<string | null>(null);

  const recognitionRef = useRef<RecognitionLike | null>(null);
  const callbackRef = useRef(onFinalText);

  useEffect(() => {
    callbackRef.current = onFinalText;
  }, [onFinalText]);

  useEffect(() => {
    return () => {
      recognitionRef.current?.abort();
      recognitionRef.current = null;
    };
  }, []);

  const start = useCallback(() => {
    const Ctor = getRecognitionConstructor();
    if (!Ctor || recognitionRef.current) return;

    const recognition = new Ctor();
    recognition.lang = lang;
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onresult = (event) => {
      let interimText = "";
      for (let i = event.resultIndex; i < event.results.length; i += 1) {
        const result = event.results[i];
        const transcript = result[0]?.transcript ?? "";
        if (result.isFinal) {
          callbackRef.current(transcript.trim());
        } else {
          interimText += transcript;
        }
      }
      setInterim(interimText);
    };

    recognition.onerror = (event) => {
      setError(ERROR_MESSAGES[event.error] ?? "Ocurrió un error con el reconocimiento de voz.");
    };

    recognition.onend = () => {
      recognitionRef.current = null;
      setListening(false);
      setInterim("");
    };

    setError(null);
    recognitionRef.current = recognition;
    try {
      recognition.start();
      setListening(true);
    } catch {
      recognitionRef.current = null;
      setError("No se pudo iniciar el micrófono.");
    }
  }, [lang]);

  const stop = useCallback(() => {
    recognitionRef.current?.stop();
  }, []);

  return { supported, listening, interim, error, start, stop };
}
