import { useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import { redirectToPayment } from '../../api/payment'
import { SERVICE_PRICE_LABEL } from '../../constants/service'

const isEmailValid = (value: string) => /^\S+@\S+\.\S+$/.test(value.trim())

export const OrderForm = () => {
  const [email, setEmail] = useState('')
  const [hasAgreed, setHasAgreed] = useState(false)
  const [isTouched, setIsTouched] = useState(false)

  const canProceed = useMemo(() => {
    return isEmailValid(email) && hasAgreed
  }, [email, hasAgreed])

  const showEmailError = isTouched && email.trim().length > 0 && !isEmailValid(email)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsTouched(true)
    if (!canProceed) return

    redirectToPayment({ email: email.trim() })
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit} noValidate>
      <div className="rounded-xl border border-white/15 bg-black/30 p-4 text-sm text-white/85">
        Цена: <span className="font-semibold text-white">{SERVICE_PRICE_LABEL}</span>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-white" htmlFor="email">
          Email
        </label>

        <input
          id="email"
          name="email"
          className={[
            'w-full rounded-xl px-3 py-2 text-sm',
            'border border-white/20 bg-black/30 text-white',
            'placeholder:text-white/50',
            'focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20',
          ].join(' ')}
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setIsTouched(true)}
          required
          aria-invalid={showEmailError}
          aria-describedby={showEmailError ? 'email-error' : undefined}
        />

        {showEmailError ? (
          <div id="email-error" className="text-xs text-red-600">
            Пожалуйста, укажите корректный email
          </div>
        ) : null}
      </div>

      <label
        className={[
          'flex cursor-pointer items-start gap-3 rounded-xl p-4 text-sm',
          'border border-white/15 bg-black/20 text-white/80 hover:bg-black/30',
        ].join(' ')}
      >
        <input
          className="mt-0.5 h-4 w-4 rounded border-white/30 bg-black/30 text-white focus:ring-white/20"
          type="checkbox"
          checked={hasAgreed}
          onChange={(e) => setHasAgreed(e.target.checked)}
          required
          aria-label="Я согласен с условиями оферты"
        />

        <span>
          Я согласен с условиями оферты и политикой обработки персональных данных
        </span>
      </label>

      <button
        type="submit"
        className={[
          [
            'inline-flex w-full items-center justify-center rounded-xl px-5 py-3',
            'text-sm font-medium',
            'focus:outline-none focus-visible:ring-2 focus-visible:ring-white',
            'focus-visible:ring-offset-2 focus-visible:ring-offset-black',
          ].join(' '),
          canProceed
            ? [
                'bg-gradient-to-b from-orange-600 to-orange-900 text-white',
                'shadow-lg shadow-orange-950/30',
                'hover:brightness-110 active:brightness-95',
              ].join(' ')
            : 'cursor-not-allowed bg-white/20 text-white/50',
        ].join(' ')}
        disabled={!canProceed}
        aria-label="Перейти к оплате"
      >
        Перейти к оплате
      </button>

      <div className="text-xs text-white/60">
        Нажимая кнопку, вы будете перенаправлены на страницу оплаты.
      </div>
    </form>
  )
}

