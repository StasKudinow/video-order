import { Link, useLocation } from 'react-router-dom'

const useQueryParam = (key: string) => {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const value = params.get(key)
  return value?.trim() || undefined
}

export const SuccessPage = () => {
  const email = useQueryParam('email')

  return (
    <main className="flex-1">
      <div className="rounded-2xl border border-white/15 bg-black/30 p-6 sm:p-10">
        <h1 className="text-3xl font-semibold tracking-tight text-white">
          Оплата прошла успешно
        </h1>

        <p className="mt-3 text-sm text-white/80">
          Заказ получен. Мы свяжемся с вами по email.
        </p>

        {email ? (
          <div className="mt-4 rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-sm text-white/80">
            Email: <span className="font-medium text-white">{email}</span>
          </div>
        ) : null}

        <div className="mt-8">
          <Link
            className={[
              'inline-flex items-center justify-center rounded-xl px-6 py-3',
              'text-sm font-semibold text-white',
              'bg-linear-to-b from-orange-600 to-orange-900',
              'shadow-lg shadow-orange-950/30',
              'transition will-change-transform',
              'hover:brightness-110 active:brightness-95',
              'hover:scale-[1.02] active:scale-[0.99]',
              'focus:outline-none focus-visible:ring-2 focus-visible:ring-white',
              'focus-visible:ring-offset-2 focus-visible:ring-offset-black',
            ].join(' ')}
            to="/"
            aria-label="Вернуться на главную"
          >
            На главную
          </Link>
        </div>
      </div>
    </main>
  )
}
