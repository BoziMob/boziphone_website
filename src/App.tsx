function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-16 sm:py-24">
        <header className="flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400">
            Boziphone
          </p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Boziphone - for en enklere hverdag
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            You are running React + TypeScript + Tailwind. Start editing{" "}
            <code className="rounded bg-slate-800 px-2 py-1 text-sm text-slate-100">
              src/App.tsx
            </code>{" "}
            to shape the layout.
          </p>
        </header>

        <section className="grid gap-6 sm:grid-cols-3">
          {[
            {
              title: "Fast by default",
              detail: "Vite hot reload keeps the loop tight as you build.",
            },
            {
              title: "Typed everywhere",
              detail: "TypeScript is ready for components, props, and utils.",
            },
            {
              title: "Style in seconds",
              detail: "Tailwind utilities handle layout, color, and rhythm.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg shadow-black/30"
            >
              <h2 className="text-lg font-semibold text-slate-100">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                {item.detail}
              </p>
            </div>
          ))}
        </section>

        <footer className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900 px-4 py-2">
            Ready to ship
          </span>
          <span>Update the content and deploy.</span>
        </footer>
      </div>
    </div>
  );
}

export default App;
