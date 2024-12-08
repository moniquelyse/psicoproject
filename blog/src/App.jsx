import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Post from './pages/Post'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-primary-bg font-albert text-primary-text flex flex-col">
        <Navbar />
        <main className="flex-grow w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<Post />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App