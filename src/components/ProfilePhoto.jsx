import { useState } from 'react'

function ProfilePhoto() {
  const [hasImageError, setHasImageError] = useState(false)

  return (
    <div className="group relative mx-auto w-64 shrink-0 animate-float-slow motion-reduce:animate-none sm:w-72">
      <div className="absolute -inset-2 -z-10 rounded-3xl bg-cyan-400/10 blur-2xl transition-opacity duration-200 group-hover:bg-cyan-400/20" />
      {hasImageError ? (
        <div
          className="flex aspect-square w-full items-center justify-center rounded-2xl border-2 border-slate-800 bg-slate-900 font-mono text-3xl font-medium text-cyan-400 shadow-2xl shadow-cyan-400/10 transition-colors duration-200 group-hover:border-cyan-400"
          role="img"
          aria-label="Monogram Muhammad Faisal Rahman"
        >
          &lt;FR /&gt;
        </div>
      ) : (
        <img
          className="aspect-square w-full rounded-2xl border-2 border-slate-800 object-cover shadow-2xl shadow-cyan-400/10 transition-colors duration-200 group-hover:border-cyan-400"
          src="/pp.png"
          alt="Muhammad Faisal Rahman"
          onError={() => setHasImageError(true)}
        />
      )}
      <div className="absolute -bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs font-medium text-slate-300 shadow-lg">
        <span className="relative flex h-2 w-2" aria-hidden="true">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:animate-none" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        Open to Intern
      </div>
    </div>
  )
}

export default ProfilePhoto
