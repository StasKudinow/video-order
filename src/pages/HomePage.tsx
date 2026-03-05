import { Link } from 'react-router-dom'
import { ServiceVideoSection } from '../components/home/ServiceVideoSection'
import { FaqSection } from '../components/home/FaqSection'
import { SERVICE_TITLE } from '../constants/service'

export const HomePage = () => {
  return (
    <main className="flex-1">
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-10 text-center">
        <header className="space-y-10">
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            {SERVICE_TITLE}
          </h1>

          <p className="text-pretty text-base text-white/85 sm:text-lg">
            Здарова, это Максон!
            <br />
            Здесь вы можете заказать персональный обзор на ваше видео в стиле моего шоу +100500.
            <br />
            Такой обзор отлично подойдёт в качестве оригинального подарка для ваших близких или коллег на день рождения,
            корпоратив, свадьбу либо другую памятную дату или важное событие.
            <br />
            Короче, чтоб не читать кучу текста, просто включите видос ниже, где я расскажу всё более подробно.
          </p>
        </header>

        <ServiceVideoSection />

        <FaqSection />

        <Link
          className={[
            'inline-flex items-center justify-center rounded-xl px-6 py-3',
            'text-sm font-medium text-white',
            'bg-linear-to-b from-orange-600 to-orange-900',
            'shadow-lg shadow-orange-950/30',
            'transition will-change-transform',
            'hover:cursor-pointer hover:brightness-110 hover:scale-[1.02]',
            'focus:outline-none focus-visible:ring-2 focus-visible:ring-white',
            'focus-visible:ring-offset-2 focus-visible:ring-offset-black',
          ].join(' ')}
          to="/order"
          aria-label="Перейти к оформления заказа"
        >
          Перейти к оформлению заказа
        </Link>
      </div>
    </main>
  )
}
