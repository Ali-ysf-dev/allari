import { Link } from "react-router-dom"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src="https://static.wixstatic.com/media/4774ac_affae09a06934273960d79741b06df9c~mv2.png/v1/fill/w_510,h_140,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/4774ac_affae09a06934273960d79741b06df9c~mv2.png"
                alt="Ibrahim Allari & Sons Co. logo"
                className="h-10 w-auto"
                loading="lazy"
              />
              <span className="sr-only">Ibrahim Allari & Sons Co.</span>
            </div>
            <p className="text-gray-400 mb-4">
              Leading manufacturer, supplier, and exporter of PP Spun-bond Non-Woven Fabric in Saudi Arabia.
              Established in 2017, we are known for trust, integrity, transparency, and advanced technical expertise.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-allari-green transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-allari-green transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/technology" className="text-gray-400 hover:text-allari-green transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-allari-green transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-allari-green mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">Saudi Arabia</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-allari-green mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">+966 XX XXX XXXX</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-allari-green mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">info@allari.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2025 Ali Youssef . All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

