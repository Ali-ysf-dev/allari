import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { ScrollToTop } from "@/components/ScrollToTop"
import { Home } from "@/pages/Home"
import { About } from "@/pages/About"
import { ProductsColorsCertificates } from "@/pages/ProductsColorsCertificates"
import { TechnologyLaboratory } from "@/pages/TechnologyLaboratory"
import { Contact } from "@/pages/Contact"
import { Gallery } from "@/pages/Gallery"

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<ProductsColorsCertificates />} />
            <Route path="/technology" element={<TechnologyLaboratory />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
