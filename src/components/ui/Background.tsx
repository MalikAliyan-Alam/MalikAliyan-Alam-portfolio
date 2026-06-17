/** Decorative animated gradient blobs + faint grid for hero/section backdrops. */
export function Blobs() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-accent/20 blur-[110px] animate-blob-drift" />
      <div className="absolute right-0 top-32 h-80 w-80 rounded-full bg-accent-glow/15 blur-[120px] animate-blob-drift [animation-delay:-6s]" />
      <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-indigo-500/10 blur-[110px] animate-blob-drift [animation-delay:-12s]" />
    </div>
  );
}

export function GridBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-grid-faint bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
    </div>
  );
}
