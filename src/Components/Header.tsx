import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/works', label: 'Works' },
  { to: '/about', label: 'About' },
]

export default function Header() {
  return (
    <header className="header fixed top-0 inset-x-0 z-50 flex items-center justify-between px-4 md:px-8 py-4 pb-8">
      <NavLink to="/" className="header-logo text-white text-sm tracking-[0.2em] uppercase">
        <svg className="size-6 md:size-10" width="51" height="45" viewBox="0 0 51 45" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.1247 5.74515C7.22406 11.6292 6.93043 18.6551 5.12467 24.2452L-8.17873e-06 22.1464C0.865354 18.6085 3.01327 10.4816 10.2133 4.48157C17.4133 -1.51843 28.1247 -0.254847 32.6247 1.24515C39.6247 3.57849 46.7208 11.5832 47.0541 20.5832C47.3874 29.5832 44.0423 36.9904 38.2477 40.8534C32.2477 44.8534 19.8914 45.6908 13.1247 42.2451C8.75423 40.0197 8.124 35.2452 8.12467 30.7452C8.12533 26.324 11.1247 20.2452 11.1247 20.2452L17.5085 23.3449C17.5085 23.3449 16.0341 25.6992 14.4341 32.0992C12.8341 38.4992 16.6247 40.5839 20.6247 41.7451C27.1247 43.6322 35.3721 40.5028 38.1247 32.2451C41.6247 21.7451 39.0793 11.6847 36.1247 7.74515C31.041 0.966959 20.1247 0.62908 14.1247 5.74515Z" fill="white"/>
          <circle cx="48.25" cy="42.25" r="2.25" fill="white"/>
        </svg>
      </NavLink>
      <nav className="flex gap-6 md:gap-8">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.end}
            className={({ isActive }) =>
              `header-link text-xs tracking-[0.2em] uppercase transition-colors ${
                isActive ? 'text-white' : 'text-neutral-400 hover:text-white'
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}