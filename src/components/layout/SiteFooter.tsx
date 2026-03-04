const currentYear = new Date().getFullYear()

export const SiteFooter = () => {
  return (
    <footer
      className={[
        'w-full border-t border-white/15 bg-black/30 py-8',
        'text-sm text-white/70 backdrop-blur',
      ].join(' ')}
    >
      <div className="mx-auto w-full max-w-5xl px-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-1">
            <div className="font-medium text-white">ИП/ООО (будет уточнено)</div>

            <div>© {currentYear}</div>
          </div>

          <div className="space-y-1 sm:text-right">
            <a
              className="inline-flex underline underline-offset-4 hover:text-white"
              href="mailto:hello@example.com"
            >
              hello@example.com
            </a>

            <div className="flex gap-3 sm:justify-end">
              <a
                className="underline underline-offset-4 hover:text-white"
                href="#"
                aria-label="Соцсеть: Telegram"
              >
                Telegram
              </a>

              <a
                className="underline underline-offset-4 hover:text-white"
                href="#"
                aria-label="Соцсеть: YouTube"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 text-xs text-white/55">
          Это коммерческий лендинг. Оплата проходит через платёжного провайдера.
        </div>
      </div>
    </footer>
  )
}
