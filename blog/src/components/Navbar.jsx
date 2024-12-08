import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-primary-bg border-b border-primary-text/10 py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-white">
            Mi Blog
          </Link>
          <div className="flex space-x-8">
            <Link to="/" className="text-primary-text hover:text-white transition-colors">
              Inicio
            </Link>
            <Link to="/categorias" className="text-primary-text hover:text-white transition-colors">
              Categorías
            </Link>
            <Link to="/about" className="text-primary-text hover:text-white transition-colors">
              Acerca de
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar