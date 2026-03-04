import { Outlet } from 'react-router-dom'
import { SiteFooter } from './SiteFooter'
import bg from '/images/app-bg.jpg'

export const AppLayout = () => {
  return (
    <div className="relative min-h-dvh bg-black text-white">
      <div
        className="pointer-events-none fixed inset-0 bg-black bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.4)), url(${bg})` }}
        aria-hidden="true"
      />

      <div className="relative flex min-h-dvh flex-col">
        <div className="mx-auto w-full max-w-5xl flex-1 px-4 py-8">
          <Outlet />
        </div>

        <SiteFooter />
      </div>
    </div>
  )
}
