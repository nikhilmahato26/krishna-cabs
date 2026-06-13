import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Placeholder from './pages/Placeholder'
import useScrollToTop from './hooks/useScrollToTop'

const App = () => {
  useScrollToTop()

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Placeholder title="About Us" />} />
          <Route path="/fleet" element={<Placeholder title="Our Fleet" />} />
          <Route path="/tariff" element={<Placeholder title="Tariff" />} />
          <Route path="/routes" element={<Placeholder title="Routes" />} />
          <Route path="/services" element={<Placeholder title="Services" />} />
          <Route path="/contact" element={<Placeholder title="Contact Us" />} />
          <Route path="/privacy" element={<Placeholder title="Privacy Policy" />} />
          <Route path="/terms" element={<Placeholder title="Terms & Conditions" />} />
          <Route path="*" element={<Placeholder title="Page Not Found" />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
