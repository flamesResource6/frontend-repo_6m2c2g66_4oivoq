export function Section({ id, title, children, tone = 'light' }) {
  const toneClasses = tone === 'dark'
    ? 'bg-black text-emerald-50'
    : tone === 'beige'
    ? 'bg-[#F3E9DD] text-slate-900'
    : 'bg-white text-slate-900'

  return (
    <section id={id} className={`${toneClasses} py-20`}> 
      <div className="max-w-7xl mx-auto px-6">
        {title && (
          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">{title}</h2>
          </div>
        )}
        <div className="prose prose-lg max-w-none prose-invert:prose-emerald">
          {children}
        </div>
      </div>
    </section>
  )
}

export function FeatureGrid({ items }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map((item, idx) => (
        <div key={idx} className="rounded-2xl bg-white/5 backdrop-blur border border-black/10 p-6 shadow-sm hover:shadow-md transition">
          <div className="text-3xl mb-3">{item.icon}</div>
          <h3 className="font-bold text-lg mb-2">{item.title}</h3>
          <p className="text-sm text-slate-600">{item.text}</p>
        </div>
      ))}
    </div>
  )
}

export function Timeline({ steps }) {
  return (
    <ol className="relative border-l border-emerald-600/30 ml-3 pl-6 space-y-8">
      {steps.map((s, i) => (
        <li key={i} className="">
          <span className="absolute -left-[9px] mt-1 h-4 w-4 rounded-full bg-emerald-600"></span>
          <p className="text-base">{s}</p>
        </li>
      ))}
    </ol>
  )
}
