export default function Home() {
  return (
    <div className="min-h-screen bg-[#f6f5ef] text-[#242720]">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-10 focus:bg-white focus:p-4">Skip to content</a>

      <header className="mx-auto flex max-w-7xl items-center justify-between border-b border-[#242720]/15 px-6 py-6 sm:px-10 lg:px-16">
        <a href="#" aria-label="The Vibe Coders home" className="flex items-center gap-3">
          <span className="grid h-10 w-10 -rotate-6 place-items-center rounded-xl bg-[#f35b38] font-mono text-xl font-bold">&lt;/&gt;</span>
          <span className="text-sm font-bold leading-[1.05] tracking-tight">the vibe<br />coders<span className="text-[#f35b38]">.</span></span>
        </a>
        <a href="#about" className="group flex items-center gap-4 text-xs font-semibold">Meet the club <span aria-hidden="true" className="text-lg transition-transform group-hover:translate-x-1">↗</span></a>
      </header>

      <main id="main">
        <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-16 sm:px-10 sm:py-24 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:px-16 lg:py-28">
          <div>
            <p className="mb-7 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.16em] text-[#666b5c]"><span className="h-1.5 w-1.5 rounded-full bg-[#7c9256]" /> A club for curious minds</p>
            <h1 className="text-[clamp(3.4rem,7.1vw,6rem)] font-semibold leading-[.99] tracking-[-.065em]">Good people.<br />Wild ideas.<br /><span className="text-[#ed5835]">Great vibes.</span></h1>
            <p className="mt-7 max-w-[370px] text-base leading-relaxed text-[#707467]">We’re The Vibe Coders. A club for people who love turning “what if” into “look what I made.”</p>
            <a href="#about" className="mt-8 inline-flex items-center gap-8 rounded-md bg-[#262c22] px-6 py-4 text-sm font-medium text-[#f6f5ef] transition-colors hover:bg-[#454e3b]">Find your kind of people <span aria-hidden="true">↗</span></a>
            <p className="mt-5 font-mono text-[10px] text-[#7c8071]">A little code. A little chaos. A lot of possibility.</p>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:mt-8">
            <div className="absolute -right-2 -top-5 z-10 rotate-6 rounded-sm border border-[#262c22] bg-[#e5edab] px-4 py-3 font-mono text-[10px] font-bold tracking-wide shadow-[3px_3px_0_#262c22] sm:-right-3">LESS SCROLLING. MORE BUILDING. ↗</div>
            <div className="overflow-hidden rounded-xl border border-[#454c3e] bg-[#252b23] shadow-[10px_12px_0_#e4e5db]">
              <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
                <span className="h-2 w-2 rounded-full bg-[#f07860]" /><span className="h-2 w-2 rounded-full bg-[#d9bd75]" /><span className="h-2 w-2 rounded-full bg-[#a9bd81]" />
                <span className="ml-3 font-mono text-[10px] text-[#a4ad99]">club.config.ts</span>
              </div>
              <pre aria-label="Our club values, written as code" className="overflow-x-auto px-5 py-9 font-mono text-[12px] leading-[2.1] text-[#eeeee3] sm:px-8 sm:text-sm"><code><span className="text-[#c7afe8]">const</span>{" club = {\n"}{"  name: "}<span className="text-[#d5e7a5]">&quot;The Vibe Coders&quot;</span>{",\n\n"}{"  bring: [\n"}{"    "}<span className="text-[#d5e7a5]">&quot;your curiosity&quot;</span>{",\n"}{"    "}<span className="text-[#d5e7a5]">&quot;your wild ideas&quot;</span>{",\n"}{"    "}<span className="text-[#d5e7a5]">&quot;your unfinished projects&quot;</span>{"\n  ],\n\n"}{"  gatekeeping: "}<span className="text-[#efa47e]">false</span>{",\n"}{"  goodVibes: "}<span className="text-[#efa47e]">true</span>{"\n};"}</code></pre>
              <div className="flex items-center justify-between border-t border-white/10 px-5 py-3 font-mono text-[9px] text-[#a4ad99]"><span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#c6df8e]" /> All skill levels welcome</span><span>let’s build something.</span></div>
            </div>
            <p className="mt-7 text-right font-mono text-[10px] text-[#858879]">{"// better together, by default."}</p>
          </div>
        </section>

        <section id="about" className="border-y border-[#242720]/15 bg-[#eeeee5]">
          <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10 lg:px-16">
            <div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><h2 className="max-w-sm text-2xl font-medium leading-tight tracking-[-.04em]">Serious about making things.<br /><span className="text-[#818575]">Here for a good time, too.</span></h2><p className="max-w-xs text-xs leading-relaxed text-[#747869]">No perfect portfolio required. Just a little curiosity and a willingness to figure it out together.</p></div>
            <div className="grid gap-7 sm:grid-cols-3 sm:gap-8">
              {[
                ["01", "Build cool stuff.", "Tiny tools, side projects, and big experiments. Bring that idea you can’t stop thinking about."],
                ["02", "Learn out loud.", "Try something new, ask the obvious question, and share what you discover along the way."],
                ["03", "Find your people.", "Meet other curious builders who get just as excited about your next idea as you do."],
              ].map(([number, title, description]) => (
                <article key={number} className="border-t border-[#242720]/15 pt-5"><span className="font-mono text-[10px] text-[#ba5437]">/{number}</span><h3 className="mt-3 text-lg font-semibold tracking-tight">{title}</h3><p className="mt-2 max-w-xs text-xs leading-[1.8] text-[#747869]">{description}</p></article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto flex max-w-7xl flex-wrap justify-between gap-3 px-6 py-6 font-mono text-[9px] text-[#838777] sm:px-10 lg:px-16"><span>© {new Date().getFullYear()} The Vibe Coders</span><span>Stay curious. Make something good. <span className="ml-1 text-[#ed5835]">✳</span></span></footer>
    </div>
  );
}
