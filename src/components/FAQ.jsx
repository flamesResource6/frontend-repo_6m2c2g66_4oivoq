export default function FAQ({ items }) {
  return (
    <div className="divide-y divide-black/10">
      {items.map((q, idx) => (
        <details key={idx} className="py-4 group">
          <summary className="flex cursor-pointer list-none items-center justify-between">
            <span className="font-semibold">{q}</span>
            <span className="ml-4 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-white group-open:rotate-45 transition">+</span>
          </summary>
          <p className="mt-3 text-slate-600">Pronto publicaremos una respuesta detallada para esta pregunta.</p>
        </details>
      ))}
    </div>
  )
}
