import { Link, useLocation } from 'wouter'
import PropTypes from 'prop-types'

const navigation = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

function NavLinks({ location, mobile = false }) {
  const layoutClass = mobile ? 'grid gap-1 pt-3' : 'hidden items-center gap-1 sm:flex'

  return (
    <nav className={layoutClass} aria-label="Navigasi utama">
      {navigation.map((item) => {
        const isActive = location === item.href
        const activeClass = isActive
          ? 'bg-accent-muted text-accent'
          : 'text-text-secondary hover:bg-surface-hover hover:text-text-primary'

        return (
          <Link
            key={item.href}
            className={`rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 ${activeClass}`}
            href={item.href}
            aria-current={isActive ? 'page' : undefined}
          >
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}

NavLinks.propTypes = {
  location: PropTypes.string.isRequired,
  mobile: PropTypes.bool,
}

NavLinks.defaultProps = {
  mobile: false,
}

function Navbar() {
  const [location] = useLocation()

  return (
    <header className="sticky top-0 z-10 border-b bg-surface/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <Link className="flex items-center gap-3" href="/" aria-label="Kembali ke halaman utama Faisal Rahman">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700 bg-slate-950 font-mono text-xs font-medium text-cyan-400">
            &lt;FR /&gt;
          </span>
          <span className="text-sm font-semibold text-slate-100">Faisal Rahman</span>
          <span className="hidden items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2 py-1 text-xs font-medium text-emerald-300 md:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
            Open to Intern
          </span>
        </Link>
        <NavLinks location={location} />
        <details className="relative sm:hidden">
          <summary className="cursor-pointer list-none rounded-md px-3 py-2 text-sm font-medium text-text-secondary hover:bg-surface-hover hover:text-text-primary">
            Menu
          </summary>
          <div className="absolute right-0 mt-2 w-44 rounded-lg border bg-surface p-2 shadow-xl">
            <NavLinks location={location} mobile />
          </div>
        </details>
      </div>
    </header>
  )
}

export default Navbar
