import { useCallback, useId, useState } from "react";
import { Lightbulb, Mic, MicOff } from "lucide-react";
import { Button, Card, CardHeader } from "@/components/ui";
import { useSpeechRecognition } from "@/hooks/useSpeechRecognition";
import { cn } from "@/lib/cn";

/**
 * "CAPTURAR UNA IDEA": el dictado por voz ya funciona y deja el texto editable para revisarlo.
 * Guardar queda desactivado hasta conectar Supabase (Fase 4): hoy no persiste nada.
 */
export function CaptureIdeaCard() {
  const fieldId = useId();
  const [text, setText] = useState("");

  const appendText = useCallback((fragment: string) => {
    if (!fragment) return;
    setText((current) => (current ? `${current.trimEnd()} ${fragment}` : fragment));
  }, []);

  const { supported, listening, interim, error, start, stop } = useSpeechRecognition(appendText);

  return (
    <Card>
      <CardHeader title="Capturar una idea" icon={Lightbulb} />

      <label htmlFor={fieldId} className="sr-only">
        Idea o pendiente
      </label>
      <textarea
        id={fieldId}
        value={text}
        onChange={(event) => setText(event.target.value)}
        rows={4}
        placeholder="Escribe o dicta: «El sábado debo publicar los perfumes y estudiar francés»"
        className="w-full resize-none rounded-xl border border-line bg-canvas px-3 py-2.5 text-sm text-ink placeholder:text-muted/70 focus:border-brand/60 focus:outline-none"
      />

      {listening && interim ? (
        <p className="mt-2 text-xs italic text-muted" aria-live="polite">
          {interim}
        </p>
      ) : null}
      {error ? (
        <p className="mt-2 text-xs text-danger" role="alert">
          {error}
        </p>
      ) : null}

      <div className="mt-3 flex flex-wrap items-center gap-2">
        {supported ? (
          <Button
            variant="secondary"
            onClick={listening ? stop : start}
            aria-pressed={listening}
            className={cn(listening && "border-danger/50 text-danger")}
          >
            {listening ? <MicOff className="size-4" aria-hidden /> : <Mic className="size-4" aria-hidden />}
            {listening ? "Detener" : "Dictar"}
          </Button>
        ) : null}
        <Button variant="ghost" onClick={() => setText("")} disabled={text.length === 0}>
          Limpiar
        </Button>
        <Button
          className="ml-auto"
          disabled
          title="Guardar se activa en la Fase 4, cuando se conecte Supabase"
        >
          Guardar
        </Button>
      </div>

      <p className="mt-3 text-[11px] leading-relaxed text-muted">
        {supported
          ? "El dictado lo procesa el reconocimiento de voz de tu navegador; esta app no graba ni envía audio. Guardar se activa al conectar la base de datos."
          : "Tu navegador no soporta dictado por voz: usa el teclado. Guardar se activa al conectar la base de datos."}
      </p>
    </Card>
  );
}
