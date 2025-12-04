import { motion } from "framer-motion"
import { 
  Sprout, 
  Sofa, 
  Package, 
  Layers, 
  Sparkles,
  Shield,
  Droplets,
  Sun,
  Wind,
  Leaf,
  Printer,
  Recycle
} from "lucide-react"
import { Card } from "@/components/ui/card"

const applications = [
  {
    category: "Agriculture",
    icon: Sprout,
    color: "bg-green-100 text-green-700",
    products: [
      "Crop covers",
      "Fruit covers",
      "Banana covers",
      "Garden covers"
    ],
    features: [
      { icon: Sun, text: "UV protection" },
      { icon: Shield, text: "Insect protection" },
      { icon: Shield, text: "Hail protection" },
      { icon: Wind, text: "Breathable" },
      { icon: Leaf, text: "Environmentally friendly" }
    ]
  },
  {
    category: "Furniture & Mattress",
    icon: Sofa,
    color: "bg-blue-100 text-blue-700",
    products: [
      "Spring mattress liners",
      "Sofa liners",
      "Furniture bonding layers",
      "Pillow ticking",
      "Curtains/carpets",
      "Bed sheets"
    ],
    features: [
      { icon: Shield, text: "Strong" },
      { icon: Droplets, text: "Smooth" },
      { icon: Shield, text: "Skin-safe" },
      { icon: Sparkles, text: "Ultrasonic bonding" },
      { icon: Sparkles, text: "Customizable" }
    ]
  },
  {
    category: "Packaging",
    icon: Package,
    color: "bg-orange-100 text-orange-700",
    products: [
      "Shopping bags",
      "Grocery bags",
      "Laundry bags",
      "Nursery bags"
    ],
    features: [
      { icon: Recycle, text: "Reusable" },
      { icon: Leaf, text: "Eco-friendly" },
      { icon: Printer, text: "Printable" },
      { icon: Sparkles, text: "Multi-color" },
      { icon: Shield, text: "Cost-efficient" }
    ]
  },
  {
    category: "Laminated Packaging",
    icon: Layers,
    color: "bg-purple-100 text-purple-700",
    products: [
      "Food & beverage bags",
      "Protective cloth",
      "Waterproof materials"
    ],
    features: [
      { icon: Droplets, text: "Moisture resistance" },
      { icon: Sun, text: "UV protection" },
      { icon: Shield, text: "High strength" },
      { icon: Shield, text: "Insect resistance" },
      { icon: Layers, text: "Laminated PP/BOPP/metalized/aluminum composites" }
    ]
  },
  {
    category: "SPA & Saloon",
    icon: Sparkles,
    color: "bg-pink-100 text-pink-700",
    products: [
      "Disposable bed cover rolls",
      "Massage table sheets (round/sun/cross holes)"
    ],
    features: [
      { icon: Droplets, text: "Waterproof" },
      { icon: Droplets, text: "Soft" },
      { icon: Wind, text: "Breathable" },
      { icon: Shield, text: "Hygienic" },
      { icon: Leaf, text: "Eco-friendly" }
    ]
  }
]

export function Products() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-allari-green to-allari-green-dark text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Products & Applications
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-100 sm:text-xl max-w-3xl mx-auto">
              Discover our wide range of non-woven fabric products and their diverse applications across industries
            </p>
          </motion.div>
        </div>
      </section>

      {/* Applications Grid */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {applications.map((app, index) => {
              const Icon = app.icon
              return (
                <motion.div
                  key={app.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-1 p-6">
                        <div className={`${app.color} rounded-lg p-6 mb-6`}>
                          <Icon className="h-16 w-16 mx-auto" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">{app.category}</h2>
                        <div className="space-y-4">
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-2">Products:</h3>
                            <ul className="space-y-1">
                              {app.products.map((product) => (
                                <li key={product} className="text-gray-600 flex items-center">
                                  <span className="w-2 h-2 bg-allari-green rounded-full mr-2"></span>
                                  {product}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="lg:col-span-2 p-6">
                        <h3 className="font-semibold text-gray-900 mb-4 text-lg">Features:</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {app.features.map((feature, featureIndex) => {
                            const FeatureIcon = feature.icon
                            return (
                              <div
                                key={featureIndex}
                                className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                              >
                                <FeatureIcon className="h-5 w-5 text-allari-green flex-shrink-0" />
                                <span className="text-gray-700">{feature.text}</span>
                              </div>
                            )
                          })}
                        </div>
                        <div className="mt-6 aspect-video rounded-lg bg-gray-200 flex items-center justify-center">
                          <Package className="h-16 w-16 text-gray-400" />
                          <span className="sr-only">Product Image Placeholder</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

