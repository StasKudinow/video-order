import { useId, useState } from 'react'

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
  const sectionId = useId()
  const [openItemId, setOpenItemId] = useState<string | null>(FAQ_ITEMS[0]?.id ?? null)

  const handleToggle = (id: string) => {
    setOpenItemId((prev) => (prev === id ? null : id))
  }

  return (
    <section className="w-full text-left">
      <h2 className="text-base font-semibold tracking-tight text-white">FAQ</h2>

      <div className="mt-4 divide-y divide-white/15">
        {FAQ_ITEMS.map((item) => {
          const isOpen = openItemId === item.id
          const buttonId = `${sectionId}-${item.id}-button`
          const panelId = `${sectionId}-${item.id}-panel`

          return (
            <div key={item.id}>
              <button
                id={buttonId}
                type="button"
                className={[
                  'flex w-full items-center justify-between gap-4 py-4 text-left',
                  'text-sm font-medium text-white',
                  'focus:outline-none focus-visible:ring-2 focus-visible:ring-white',
                  'focus-visible:ring-offset-2 focus-visible:ring-offset-black',
                ].join(' ')}
                onClick={() => handleToggle(item.id)}
                aria-expanded={isOpen}
                aria-controls={panelId}
              >
                <span>{item.question}</span>

                <span className="text-white/60" aria-hidden="true">
                  {isOpen ? '-' : '+'}
                </span>
              </button>

              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={isOpen ? 'pb-4 text-sm text-white/80' : 'hidden'}
              >
                {item.answer}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

