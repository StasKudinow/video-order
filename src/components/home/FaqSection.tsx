type FaqItem = {
  id: string
  question: string
  answer: string
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'delivery',
    question: 'Сколько времени занимает разбор?',
    answer: 'В среднем 3–7 дней. Точные сроки зависят от загрузки и длины видео.',
  },
  {
    id: 'format',
    question: 'В каком формате я получу разбор?',
    answer: 'Это будет личное видео с комментариями и конкретными правками.',
  },
  {
    id: 'refunds',
    question: 'Есть ли возвраты?',
    answer: 'Условия возврата будут прописаны в оферте. В MVP это заглушка, потом уточним.',
  },
  {
    id: 'contact',
    question: 'Как вы со мной свяжетесь?',
    answer: 'После оплаты мы используем email, который вы укажете при оформлении.',
  },
]

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
