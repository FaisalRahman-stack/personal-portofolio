function App() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl items-center px-6 py-16">
      <section className="w-full rounded-xl border bg-surface p-6 sm:p-8">
        <p className="font-mono text-sm text-accent">DESIGN SYSTEM / 01</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          Modern Tech Developer
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-text-secondary">
          Halaman sementara untuk menguji token warna, tipografi, dan komponen dasar
          sebelum halaman portofolio dirakit.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            className="rounded-lg bg-accent px-5 py-2.5 font-medium text-background transition-colors duration-200 hover:bg-cyan-300"
            href="#tokens"
          >
            Lihat Token
          </a>
          <a
            className="rounded-lg border px-5 py-2.5 font-medium text-text-primary transition-colors duration-200 hover:bg-surface-hover"
            href="#components"
          >
            Komponen Dasar
          </a>
        </div>

        <div id="tokens" className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['background', 'Base body'],
            ['surface', 'Card & section'],
            ['accent', 'CTA & link'],
            ['text-secondary', 'Deskripsi'],
          ].map(([token, usage]) => (
            <div key={token} className="rounded-lg border bg-background p-4">
              <p className="font-mono text-sm text-accent">{token}</p>
              <p className="mt-2 text-sm text-text-secondary">{usage}</p>
            </div>
          ))}
        </div>

        <div id="components" className="mt-8 rounded-lg border bg-background p-5">
          <p className="text-lg font-semibold">Komponen dasar</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {['React', 'Node.js', 'MySQL', 'REST API'].map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-accent-muted px-3 py-1 font-mono text-sm text-accent"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
