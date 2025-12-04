import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { ScrollToTop } from "@/components/ScrollToTop"
import { Home } from "@/pages/Home"
import { About } from "@/pages/About"
import { Products } from "@/pages/Products"
import { Technology } from "@/pages/Technology"
import { Colors } from "@/pages/Colors"
import { Laboratory } from "@/pages/Laboratory"
import { Certificates } from "@/pages/Certificates"
import { Clients } from "@/pages/Clients"
import { Contact } from "@/pages/Contact"

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
            <Route path="/products" element={<Products />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/colors" element={<Colors />} />
            <Route path="/laboratory" element={<Laboratory />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
