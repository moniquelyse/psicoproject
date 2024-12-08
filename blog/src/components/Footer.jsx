function Footer() {
  return (
    <footer className="text-primary-text/70">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-bold text-primary-text">Mi Blog</h3>
            <p>© 2024 Todos los derechos reservados</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-primary-text">Twitter</a>
            <a href="#" className="hover:text-primary-text">GitHub</a>
            <a href="#" className="hover:text-primary-text">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer