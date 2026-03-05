import { Link } from 'react-router-dom'
import { OrderForm } from '../components/order/OrderForm'

export const OrderPage = () => {
  return (
    <main className="flex-1">
      <div className="flex flex-col gap-2">
        <Link
          className={[
            'text-sm text-white/80 w-max underline underline-offset-4',
            'hover:text-orange-600/80 transition',
          ].join(' ')}
          to="/"
          aria-label="Вернуться на главную"
        >
          ← На главную
        </Link>

        <h1 className="text-3xl font-semibold tracking-tight text-white">
          Условия заказа
        </h1>

        <p className="text-sm text-white/75">
          Перед оплатой ознакомьтесь с офертой и укажите email для чека.
        </p>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <section className="rounded-2xl border border-white/15 bg-black/30 p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-white">
            Оферта (заглушка)
          </h2>

          <div className="mt-3 space-y-3 text-sm text-white/80">
            <p>
              Здесь будет публичная оферта/соглашение. В MVP это текст-заглушка,
              позже подключим управление через Strapi.
            </p>

            <ul className="list-disc space-y-2 pl-5">
              <li>Услуга: персональный видео-разбор</li>
              <li>Сроки выполнения: будут уточнены</li>
              <li>Условия возврата: будут уточнены</li>
              <li>Контакты поддержки: будут уточнены</li>
            </ul>
          </div>
        </section>

        <section className="rounded-2xl border border-white/15 bg-black/30 p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-white">Оплата</h2>

          <p className="mt-2 text-sm text-white/75">
            Заполните email и подтвердите согласие, чтобы перейти к оплате.
          </p>

          <div className="mt-6">
            <OrderForm />
          </div>
        </section>
      </div>
    </main>
  )
}
