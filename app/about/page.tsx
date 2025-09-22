'use client';

import React from "react";
import { Card, CardBody, Image, Button, Slider, Select, SelectItem } from "@heroui/react";
import { subtitle } from "@/components/primitives";
import { HeartIcon } from "@/components/icons";

const PauseCircleIcon = ({ size = 24, width, height, ...props }: {
    size?: number;
    width?: number;
    height?: number;
    [key: string]: any;
}) => {
    return (
        <svg
            aria-hidden="true"
            fill="none"
            focusable="false"
            height={size || height}
            role="presentation"
            viewBox="0 0 24 24"
            width={size || width}
            {...props}
        >
            <path
                d="M11.9688 2C6.44875 2 1.96875 6.48 1.96875 12C1.96875 17.52 6.44875 22 11.9688 22C17.4888 22 21.9688 17.52 21.9688 12C21.9688 6.48 17.4988 2 11.9688 2ZM10.7188 15.03C10.7188 15.51 10.5188 15.7 10.0087 15.7H8.70875C8.19875 15.7 7.99875 15.51 7.99875 15.03V8.97C7.99875 8.49 8.19875 8.3 8.70875 8.3H9.99875C10.5087 8.3 10.7087 8.49 10.7087 8.97V15.03H10.7188ZM15.9987 15.03C15.9987 15.51 15.7987 15.7 15.2887 15.7H13.9987C13.4887 15.7 13.2887 15.51 13.2887 15.03V8.97C13.2887 8.49 13.4887 8.3 13.9987 8.3H15.2887C15.7987 8.3 15.9987 8.49 15.9987 8.97V15.03Z"
                fill="currentColor"
            />
        </svg>
    );
};

const PlayCircleIcon = ({ size = 24, width, height, ...props }: {
    size?: number;
    width?: number;
    height?: number;
    [key: string]: any;
}) => {
    return (
        <svg
            aria-hidden="true"
            fill="none"
            focusable="false"
            height={size || height}
            role="presentation"
            viewBox="0 0 24 24"
            width={size || width}
            {...props}
        >
            <path
                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM9.5 16.5V7.5L16.5 12L9.5 16.5Z"
                fill="currentColor"
            />
        </svg>
    );
};

const NextIcon = ({ size = 24, width, height, ...props }: {
    size?: number;
    width?: number;
    height?: number;
    [key: string]: any;
}) => {
    return (
        <svg
            aria-hidden="true"
            fill="none"
            focusable="false"
            height={size || height}
            role="presentation"
            viewBox="0 0 24 24"
            width={size || width}
            {...props}
        >
            <path
                d="M3.76172 7.21957V16.7896C3.76172 18.7496 5.89172 19.9796 7.59172 18.9996L11.7417 16.6096L15.8917 14.2096C17.5917 13.2296 17.5917 10.7796 15.8917 9.79957L11.7417 7.39957L7.59172 5.00957C5.89172 4.02957 3.76172 5.24957 3.76172 7.21957Z"
                fill="currentColor"
            />
            <path
                d="M20.2383 18.9303C19.8283 18.9303 19.4883 18.5903 19.4883 18.1803V5.82031C19.4883 5.41031 19.8283 5.07031 20.2383 5.07031C20.6483 5.07031 20.9883 5.41031 20.9883 5.82031V18.1803C20.9883 18.5903 20.6583 18.9303 20.2383 18.9303Z"
                fill="currentColor"
            />
        </svg>
    );
};

const PreviousIcon = ({ size = 24, width, height, ...props }: {
    size?: number;
    width?: number;
    height?: number;
    [key: string]: any;
}) => {
    return (
        <svg
            aria-hidden="true"
            fill="none"
            focusable="false"
            height={size || height}
            role="presentation"
            viewBox="0 0 24 24"
            width={size || width}
            {...props}
        >
            <path
                d="M20.2409 7.21957V16.7896C20.2409 18.7496 18.1109 19.9796 16.4109 18.9996L12.2609 16.6096L8.11094 14.2096C6.41094 13.2296 6.41094 10.7796 8.11094 9.79957L12.2609 7.39957L16.4109 5.00957C18.1109 4.02957 20.2409 5.24957 20.2409 7.21957Z"
                fill="currentColor"
            />
            <path
                d="M3.76172 18.9303C3.35172 18.9303 3.01172 18.5903 3.01172 18.1803V5.82031C3.01172 5.41031 3.35172 5.07031 3.76172 5.07031C4.17172 5.07031 4.51172 5.41031 4.51172 5.82031V18.1803C4.51172 18.5903 4.17172 18.9303 3.76172 18.9303Z"
                fill="currentColor"
            />
        </svg>
    );
};

const RepeatOneIcon = ({ size = 24, width, height, ...props }: {
    size?: number;
    width?: number;
    height?: number;
    [key: string]: any;
}) => {
    return (
        <svg
            aria-hidden="true"
            fill="none"
            focusable="false"
            height={size || height}
            role="presentation"
            viewBox="0 0 24 24"
            width={size || width}
            {...props}
        >
            <path
                d="M3.91 17.1814C3.72 17.1814 3.53 17.1114 3.38 16.9614C2.01 15.5814 1.25 13.7614 1.25 11.8314C1.25 7.82139 4.5 4.56139 8.5 4.56139L14.57 4.58139L13.48 3.54139C13.18 3.25139 13.17 2.78139 13.46 2.48139C13.75 2.18139 14.22 2.17139 14.52 2.46139L16.96 4.80139C17.18 5.01139 17.25 5.34139 17.14 5.62139C17.03 5.90139 16.75 6.09139 16.44 6.09139L8.5 6.07139C5.33 6.07139 2.75 8.66139 2.75 11.8414C2.75 13.3714 3.35 14.8214 4.44 15.9114C4.73 16.2014 4.73 16.6814 4.44 16.9714C4.29 17.1114 4.1 17.1814 3.91 17.1814Z"
                fill="currentColor"
            />
            <path
                d="M9.9999 21.75C9.8099 21.75 9.6299 21.68 9.4799 21.54L7.0399 19.2C6.8199 18.99 6.7499 18.66 6.8599 18.38C6.9799 18.1 7.2599 17.95 7.5599 17.91L15.5099 17.93C18.6799 17.93 21.2599 15.34 21.2599 12.16C21.2599 10.63 20.6599 9.18 19.5699 8.09C19.2799 7.8 19.2799 7.32 19.5699 7.03C19.8599 6.74 20.3399 6.74 20.6299 7.03C21.9999 8.41 22.7599 10.23 22.7599 12.16C22.7599 16.17 19.5099 19.43 15.5099 19.43L9.4399 19.41L10.5299 20.45C10.8299 20.74 10.8399 21.21 10.5499 21.51C10.3899 21.67 10.1999 21.75 9.9999 21.75Z"
                fill="currentColor"
            />
            <path
                d="M12.2485 15.4191C11.8385 15.4191 11.4985 15.0791 11.4985 14.6691V11.2791L11.3085 11.4891C11.0285 11.7991 10.5585 11.8191 10.2485 11.5491C9.93853 11.2791 9.91853 10.7991 10.1885 10.4891L11.6885 8.81909C11.8985 8.58909 12.2285 8.50909 12.5185 8.61909C12.8085 8.73909 12.9985 9.00909 12.9985 9.32909V14.6791C12.9985 15.0891 12.6585 15.4191 12.2485 15.4191Z"
                fill="currentColor"
            />
        </svg>
    );
};

const ShuffleIcon = ({ size = 24, width, height, ...props }: {
    size?: number;
    width?: number;
    height?: number;
    [key: string]: any;
}) => {
    return (
        <svg
            aria-hidden="true"
            fill="none"
            focusable="false"
            height={size || height}
            role="presentation"
            viewBox="0 0 24 24"
            width={size || width}
            {...props}
        >
            <path
                d="M21.7507 17.9809C21.7507 17.9609 21.7407 17.9409 21.7407 17.9209C21.7307 17.8409 21.7207 17.7609 21.6907 17.6909C21.6507 17.6009 21.6007 17.5309 21.5407 17.4609C21.5407 17.4609 21.5407 17.4509 21.5307 17.4509C21.4607 17.3809 21.3807 17.3309 21.2907 17.2909C21.2007 17.2509 21.1007 17.2309 21.0007 17.2309L16.3307 17.2509C16.3307 17.2509 16.3307 17.2509 16.3207 17.2509C15.7207 17.2509 15.1407 16.9709 14.7807 16.4909L13.5607 14.9209C13.3107 14.5909 12.8407 14.5309 12.5107 14.7909C12.1807 15.0509 12.1207 15.5109 12.3807 15.8409L13.6007 17.4109C14.2507 18.2509 15.2707 18.7509 16.3307 18.7509H16.3407L19.1907 18.7409L18.4807 19.4509C18.1907 19.7409 18.1907 20.2209 18.4807 20.5109C18.6307 20.6609 18.8207 20.7309 19.0107 20.7309C19.2007 20.7309 19.3907 20.6609 19.5407 20.5109L21.5407 18.5109C21.6107 18.4409 21.6607 18.3609 21.7007 18.2709C21.7307 18.1709 21.7507 18.0709 21.7507 17.9809Z"
                fill="currentColor"
            />
            <path
                d="M8.42 6.69172C7.77 5.79172 6.73 5.26172 5.62 5.26172C5.61 5.26172 5.61 5.26172 5.6 5.26172L3 5.27172C2.59 5.27172 2.25 5.61172 2.25 6.02172C2.25 6.43172 2.59 6.77172 3 6.77172L5.61 6.76172H5.62C6.25 6.76172 6.84 7.06172 7.2 7.57172L8.28 9.07172C8.43 9.27172 8.66 9.38172 8.89 9.38172C9.04 9.38172 9.2 9.33172 9.33 9.24172C9.67 8.99172 9.74 8.52172 9.5 8.19172L8.42 6.69172Z"
                fill="currentColor"
            />
            <path
                d="M21.74 6.07875C21.74 6.05875 21.75 6.03875 21.75 6.02875C21.75 5.92875 21.73 5.82875 21.69 5.73875C21.65 5.64875 21.6 5.56875 21.53 5.49875L19.53 3.49875C19.24 3.20875 18.76 3.20875 18.47 3.49875C18.18 3.78875 18.18 4.26875 18.47 4.55875L19.18 5.26875L16.45 5.25875C16.44 5.25875 16.44 5.25875 16.43 5.25875C15.28 5.25875 14.2 5.82875 13.56 6.79875L7.17 16.3787C6.81 16.9187 6.2 17.2487 5.55 17.2487H5.54L3 17.2287C2.59 17.2287 2.25 17.5587 2.25 17.9787C2.25 18.3887 2.58 18.7287 3 18.7287L5.55 18.7387C5.56 18.7387 5.56 18.7387 5.57 18.7387C6.73 18.7387 7.8 18.1688 8.44 17.1988L14.83 7.61875C15.19 7.07875 15.8 6.74875 16.45 6.74875H16.46L21 6.76875C21.1 6.76875 21.19 6.74875 21.29 6.70875C21.38 6.66875 21.46 6.61875 21.53 6.54875C21.53 6.54875 21.53 6.53875 21.54 6.53875C21.6 6.46875 21.66 6.39875 21.69 6.30875C21.72 6.23875 21.73 6.15875 21.74 6.07875Z"
                fill="currentColor"
            />
        </svg>
    );
};

/* ───────────────────────────── Voces (local vs IA) ───────────────────────────── */

type VoiceOption =
    | { key: string; label: string; kind: "static"; url: string }
    | { key: string; label: string; kind: "eleven"; voiceId: string };

const voiceOptions: VoiceOption[] = [
    { key: "local-cassidy", label: "Cassidy", kind: "static", url: "/audio/Cassidy.mp3" },
    { key: "local-liam", label: "Liam", kind: "static", url: "/audio/Liam.mp3" },
    { key: "ia-mark", label: "Mark", kind: "eleven", voiceId: "UgBBYS2sOqTuMpoF3BR0" },
];

export default function AboutPage() {
    const [liked, setLiked] = React.useState(false);
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [progress, setProgress] = React.useState(0);
    const [loadingTTS, setLoadingTTS] = React.useState(false);

    const audioRef = React.useRef<HTMLAudioElement | null>(null);
    const [audioURL, setAudioURL] = React.useState<string | null>(null);
    const [selectedKey, setSelectedKey] = React.useState<string>(voiceOptions[0].key);

    const selectedOption = React.useMemo(
        () => voiceOptions.find(v => v.key === selectedKey),
        [selectedKey]
    );

    const textToRead = `
        ¡Hola! soy Luis Jorge Reynaga, ingeniero en Teleinformática egresado de la Universidad de Guadalajara.
        Construyo aplicaciones web y APIs enfocadas en eficiencia, escalabilidad y automatización—sobre todo en chatbots y flujos financieros.
        Me gusta mantener código limpio, trazable y fácil de mantener, y estoy en mejora continua.
        
        He entregado soluciones end-to-end: dashboards en Next.js, simuladores de conversación en tiempo real con Socket.io, integraciones con WhatsApp,
        OCR para validación de documentos, autenticación con JWT, y generación de reportes en PDF y Word.
        También he desplegado y afinado servicios en Nginx, cuidando logs, seguridad y experiencia de desarrollo.
        
        Mi stack de trabajo más común: React con Next.js y TypeScript, Tailwind, Node.js con Express, FastAPI, WebSockets y Socket.io, JWT,
        y despliegue en Nginx. Disfruto optimizar procesos para reducir trabajo manual y convertir requisitos difusos en productos listos para producción.
    `;

    React.useEffect(() => {
        if (!audioRef.current) audioRef.current = new Audio();
        const a = audioRef.current;

        const onTime = () => {
            if (!a.duration || isNaN(a.duration)) return;
            setProgress(Math.min((a.currentTime / a.duration) * 100, 100));
        };
        const onPlay = () => setIsPlaying(true);
        const onPause = () => setIsPlaying(false);
        const onEnded = () => { setIsPlaying(false); setProgress(0); };

        a.addEventListener("timeupdate", onTime);
        a.addEventListener("play", onPlay);
        a.addEventListener("pause", onPause);
        a.addEventListener("ended", onEnded);

        return () => {
            a.removeEventListener("timeupdate", onTime);
            a.removeEventListener("play", onPlay);
            a.removeEventListener("pause", onPause);
            a.removeEventListener("ended", onEnded);
            if (audioURL?.startsWith("blob:")) URL.revokeObjectURL(audioURL);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    /* Helper: verificar existencia de archivo estático */
    const exists = async (url: string) => {
        try {
            const rHead = await fetch(url, { method: "HEAD", cache: "no-store" });
            if (rHead.ok) return true;
        } catch { }
        try {
            const rRange = await fetch(url, { method: "GET", headers: { Range: "bytes=0-0" }, cache: "no-store" });
            return rRange.ok;
        } catch { }
        return false;
    };

    /* Resolver URL según selección (prioriza local) */
    const resolveForSelection = React.useCallback(async (): Promise<string | null> => {
        if (!selectedOption) return null;

        if (selectedOption.kind === "static") {
            if (await exists(selectedOption.url)) {
                return selectedOption.url; // usar archivo local
            }
            return null; // si no existe, ya veremos fallback a IA
        }

        // Es IA → no hay URL local
        return null;
    }, [selectedOption]);

    React.useEffect(() => {
        (async () => {
            const url = await resolveForSelection();
            setAudioURL(url);
            const a = audioRef.current;
            if (a) {
                a.pause();
                a.currentTime = 0;
                if (url) a.src = url; else a.removeAttribute("src");
                setIsPlaying(false);
                setProgress(0);
            }
        })();
    }, [resolveForSelection]);

    const fetchTTS = async () => {
        setLoadingTTS(true);
        try {
            // Si la opción seleccionada es Mark, usamos su voiceId; si no, usa un default
            const voiceId =
                selectedOption && selectedOption.kind === "eleven"
                    ? selectedOption.voiceId
                    : "UgBBYS2sOqTuMpoF3BR0"; // default IA

            const res = await fetch("/api/tts", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text: textToRead.trim(), voiceId })
            });
            if (!res.ok) throw new Error("TTS request failed");
            const blob = await res.blob();
            const url = URL.createObjectURL(blob);
            setAudioURL(url);
            return url;
        } finally {
            setLoadingTTS(false);
        }
    };

    const handlePlayPause = async () => {
        const a = audioRef.current!;
        if (!a) return;

        if (isPlaying) {
            a.pause();
            return;
        }

        let url = audioURL;

        if (!url) {
            url = await resolveForSelection();
            if (!url) url = await fetchTTS();
            if (!url) return;
            setAudioURL(url);
        }

        const absolute = new URL(url, window.location.href).toString();
        if (!a.src || a.src !== absolute) a.src = url;

        await a.play().catch(console.error);
    };

    const handleStop = () => {
        const a = audioRef.current!;
        if (!a) return;
        a.pause();
        a.currentTime = 0;
        setProgress(0);
        setIsPlaying(false);
    };

    return (
        <>
            <h1 className="text-5xl mb-6">Acerca de mí</h1>
            <Card
                isBlurred
                className="border-none bg-background/60 dark:bg-default-100/50 w-full"
                shadow="sm"
            >
                <CardBody>
                    <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                        <div className="relative col-span-6 md:col-span-4">
                            <Image
                                alt="Album cover"
                                className="object-cover"
                                height={200}
                                shadow="md"
                                src="images/profile.png"
                                width="100%"
                            />
                        </div>

                        <div className="flex flex-col col-span-6 md:col-span-8">
                            <div className="flex justify-between items-start">
                                <div className="flex flex-col gap-0">
                                    <h3 className="font-semibold text-foreground/90">¿Quién soy?</h3>
                                    <p className="text-small text-foreground/80">3 tracks</p>
                                    <h1 className="text-large font-medium mt-2">Luis Jorge Reynaga</h1>
                                </div>
                                <Button
                                    isIconOnly
                                    className="text-default-900/60 data-hover:bg-foreground/10! -translate-y-2 translate-x-2"
                                    radius="full"
                                    variant="light"
                                    onPress={() => setLiked((v) => !v)}
                                >
                                    <HeartIcon
                                        className={liked ? "[&>path]:stroke-transparent" : ""}
                                        fill={liked ? "currentColor" : "none"}
                                    />
                                </Button>
                            </div>

                            <div className="flex flex-col mt-3 gap-1">
                                <Slider
                                    aria-label="Audio progress"
                                    classNames={{ track: "bg-default-500/30", thumb: "w-2 h-2 after:w-2 after:h-2 after:bg-foreground" }}
                                    color="foreground"
                                    value={progress}
                                    size="sm"
                                    isDisabled
                                />
                                <div className="flex justify-between">
                                    <p className="text-small">
                                        {loadingTTS ? "Preparando voz..." : isPlaying ? "Reproduciendo..." : (audioURL ? "Listo!" : "Listo")}
                                    </p>
                                    <p className="text-small text-foreground/50">🎙️ IA Text-to-Speech</p>
                                </div>
                            </div>

                            <div className="mt-3">
                                <Select
                                    label="Voz"
                                    selectedKeys={[selectedKey]}
                                    onSelectionChange={(keys) => {
                                        const k = Array.from(keys)[0] as string;
                                        setSelectedKey(k);
                                        // Limpia el player y blobs; se recalculará en el próximo play
                                        if (audioURL?.startsWith("blob:")) URL.revokeObjectURL(audioURL);
                                        setAudioURL(null);
                                        const a = audioRef.current;
                                        if (a) { a.pause(); a.currentTime = 0; a.removeAttribute("src"); }
                                        setProgress(0);
                                        setIsPlaying(false);
                                    }}
                                    size="sm"
                                    className="max-w-xs"
                                >
                                    {voiceOptions.map(v => <SelectItem key={v.key}>{v.label}</SelectItem>)}
                                </Select>
                                <p className="text-tiny text-gray-500 mt-1">
                                    Seleccionada: {selectedOption?.label ?? "—"}
                                </p>
                            </div>

                            <div className="flex w-full items-center justify-center">
                                <Button
                                    isIconOnly
                                    className="data-hover:bg-foreground/10!"
                                    radius="full"
                                    variant="light"
                                    onPress={handleStop}
                                    isDisabled={!isPlaying}
                                >
                                    <RepeatOneIcon className="text-foreground/80" />
                                </Button>
                                <Button
                                    isIconOnly
                                    className="data-hover:bg-foreground/10!"
                                    radius="full"
                                    variant="light"
                                    isDisabled
                                >
                                    <PreviousIcon />
                                </Button>
                                <Button
                                    isIconOnly
                                    className={`w-auto h-auto data-hover:bg-foreground/10! ${isPlaying ? 'bg-primary/20' : ''}`}
                                    radius="full"
                                    variant="light"
                                    onPress={handlePlayPause}
                                >
                                    {isPlaying ? (
                                        <PauseCircleIcon size={54} />
                                    ) : (
                                        <PlayCircleIcon size={54} />
                                    )}
                                </Button>
                                <Button
                                    isIconOnly
                                    className="data-hover:bg-foreground/10!"
                                    radius="full"
                                    variant="light"
                                    isDisabled
                                >
                                    <NextIcon />
                                </Button>
                                <Button
                                    isIconOnly
                                    className="data-hover:bg-foreground/10!"
                                    radius="full"
                                    variant="light"
                                    onPress={handleStop}
                                    isDisabled={!isPlaying}
                                >
                                    <ShuffleIcon className="text-foreground/80" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </CardBody>

                <div className={subtitle({ class: "p-5" })}>
                    <p className="mb-4">
                        ¡Hola! soy Luis Jorge Reynaga, ingeniero en Teleinformática egresado de la Universidad de Guadalajara.
                        Construyo aplicaciones web y APIs enfocadas en eficiencia, escalabilidad y automatización—sobre todo en chatbots y flujos financieros.
                        Me gusta mantener código limpio, trazable y fácil de mantener, y estoy en mejora continua.
                    </p>

                    <p className="mb-4">
                        He entregado soluciones end-to-end: dashboards en Next.js, simuladores de conversación en tiempo real (Socket.io), integraciones con WhatsApp,
                        OCR para validación de documentos, autenticación con JWT, y generación de reportes (PDF/Word).
                        También he desplegado y afinado servicios en Nginx, cuidando logs, seguridad y DX.
                    </p>

                    <p>
                        Mi stack de trabajo más común: React + Next.js + TypeScript, Tailwind, Node.js (Express), FastAPI, WebSockets/Socket.io, JWT,
                        y despliegue en Nginx. Disfruto optimizar procesos para reducir trabajo manual y convertir requisitos difusos en productos listos para producción.
                    </p>
                </div>
            </Card>
        </>
    );
}