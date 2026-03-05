import { FAQ_ITEMS } from '../../constants/faq'

export const FaqSection = () => {
  return (
    <section className="w-full text-left">
      <h2 className="text-base font-semibold tracking-tight text-white">
        FAQ
      </h2>

      <div className="mt-4 divide-y divide-white/15">
        {FAQ_ITEMS.map((item) => (
          <details key={item.id} className="group py-4">
            <summary
              className={[
                'flex cursor-pointer list-none items-center justify-between gap-4',
                'text-sm font-medium text-white',
                'hover:text-orange-600/80 transition',
                'group-open:text-orange-600/80',
              ].join(' ')}
            >
              <span className="">{item.question}</span>

              <span className="text-white/60 group-open:hidden">+</span>
              <span className="text-white/60 hidden group-open:block">−</span>
            </summary>

            <div className="pt-3 text-sm text-white/80">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}
