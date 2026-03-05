import { useEffect, useRef, useState } from 'react'

interface ServiceVideoSectionProps {
  video?: { src?: string; poster?: string }
  error?: string | null
}

export const ServiceVideoSection = ({ video, error }: ServiceVideoSectionProps) => {
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
        {error ? (
          <div
            className={[
              'flex aspect-video w-full items-center justify-center rounded-xl',
              'bg-white/10 text-sm text-white/70 ring-1 ring-white/15',
            ].join(' ')}
          >
            {error}
          </div>
        ) : shouldLoad && video?.src ? (
          <video
            className="aspect-video w-full rounded-xl bg-black"
            controls
            preload="none"
            poster={video?.poster}
          >
            <source src={video?.src} type="video/mp4" />
            Ваш браузер не поддерживает видео.
          </video>
        ) : (
          <div
            className={[
              'flex aspect-video w-full items-center justify-center rounded-xl',
              'bg-white/10 text-sm text-white/70 ring-1 ring-white/15',
            ].join(' ')}
          >
            Видео недоступно
          </div>
        )}
      </div>
    </section>
  )
}
