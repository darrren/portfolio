import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/works', label: 'Works' },
  { to: '/about', label: 'About' },
]

export default function Header() {
  return (
    <header className="header fixed top-0 inset-x-0 z-50 flex items-center justify-between px-4 md:px-8 py-4">
      <NavLink to="/" className="header-logo text-white text-sm tracking-[0.2em] uppercase">
        Darren Chan
      </NavLink>
      <nav className="flex gap-6 md:gap-8">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.end}
            className={({ isActive }) =>
              `header-link text-xs tracking-[0.2em] uppercase transition-colors ${
                isActive ? 'text-white' : 'text-white/50 hover:text-white'
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