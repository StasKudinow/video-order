type CreatePaymentRedirectUrlParams = {
  email: string
}

const getPaymentUrlFromEnv = () => {
  const raw = import.meta.env.VITE_PAYMENT_URL as string | undefined
  return raw?.trim() || undefined
}

export const createPaymentRedirectUrl = ({ email }: CreatePaymentRedirectUrlParams) => {
  const paymentUrl = getPaymentUrlFromEnv()
  if (!paymentUrl) return `/success?email=${encodeURIComponent(email)}`

  const url = new URL(paymentUrl, window.location.origin)
  url.searchParams.set('email', email)
  return url.toString()
}

export const redirectToPayment = ({ email }: CreatePaymentRedirectUrlParams) => {
  const url = createPaymentRedirectUrl({ email })
  window.location.assign(url)
}

