import { useEffect, useMemo, useRef, useState } from 'react'

const getServiceVideo = () => {
  const src = import.meta.env.VITE_SERVICE_VIDEO_URL as string | undefined
  const poster = import.meta.env.VITE_SERVICE_VIDEO_POSTER_URL as string | undefined

  return {
    src: src?.trim() || undefined,
    poster: poster?.trim() || undefined,
  }
}

export const ServiceVideoSection = () => {
  const { src, poster } = useMemo(() => getServiceVideo(), [])
  const rootRef = useRef<HTMLDivElement | null>(null)
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    if (shouldLoad) return

    const element = rootRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0]
        if (!first?.isIntersecting) return
        setShouldLoad(true)
        observer.disconnect()
      },
      { rootMargin: '200px' },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [shouldLoad])

  return (
    <section className="w-full">
      <div ref={rootRef} className="mt-4">
        {shouldLoad && src ? (
          <video
            className="aspect-video w-full rounded-xl bg-black"
            controls
            preload="none"
            poster={poster}
          >
            <source src={src} />
            Ваш браузер не поддерживает видео.
          </video>
        ) : (
          <div
            className={[
              'flex aspect-video w-full items-center justify-center rounded-xl',
              'bg-white/10 text-sm text-white/70 ring-1 ring-white/15',
            ].join(' ')}
          >
            Видео будет здесь
          </div>
        )}
      </div>
    </section>
  )
}
