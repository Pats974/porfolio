import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Accueil' },
  { to: '/galerie', label: 'Galerie' },
  { to: '/apropos', label: 'À propos' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <nav className="fixed w-full z-10 bg-gray-900 bg-opacity-70 backdrop-blur text-white">
      <div className="max-w-5xl mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-xl font-bold">Mon Portfolio</Link>
        <div className="space-x-4">
          {navItems.map(item => (
            <NavLink key={item.to} to={item.to} className={({ isActive }) =>
              `hover:text-teal-400 transition-colors ${isActive ? 'text-teal-400' : ''}`
            }>{item.label}</NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}
