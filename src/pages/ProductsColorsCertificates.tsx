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
  Recycle,
  Palette
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const applications = [
  {
    category: "Agriculture",
    icon: Sprout,
    color: "bg-green-100 text-green-700",
    image:
      "https://i.pinimg.com/1200x/5c/3f/9a/5c3f9ad68987dca864503ffe84b0b7a0.jpg",
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
    image:
      "https://i.pinimg.com/1200x/31/6a/29/316a292dc29d6421bcfe5fccd8c8e5c5.jpg",
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
    image:
      "https://i.pinimg.com/1200x/34/aa/17/34aa177bc8d7b820f2cce9121bb902a0.jpg",
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
    image:
      "https://i.pinimg.com/736x/64/a6/55/64a655facf6cc073b31eff9309a258ec.jpg",
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
    image:
      "https://i.pinimg.com/736x/61/b5/ef/61b5efaeea3a6c84c051dcd64880974e.jpg",
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

const standardColors = [
  { name: "White", hex: "#FFFFFF", bg: "bg-white", border: "border-gray-300" },
  { name: "Black", hex: "#000000", bg: "bg-black", border: "border-gray-800" },
  { name: "Navy Blue", hex: "#1e3a8a", bg: "bg-blue-900", border: "border-blue-800" },
  { name: "Royal Blue", hex: "#2563eb", bg: "bg-blue-600", border: "border-blue-500" },
  { name: "Red", hex: "#dc2626", bg: "bg-red-600", border: "border-red-500" },
  { name: "Green", hex: "#16a34a", bg: "bg-green-600", border: "border-green-500" },
  { name: "Yellow", hex: "#eab308", bg: "bg-yellow-500", border: "border-yellow-400" },
  { name: "Orange", hex: "#ea580c", bg: "bg-orange-600", border: "border-orange-500" },
  { name: "Pink", hex: "#db2777", bg: "bg-pink-600", border: "border-pink-500" },
  { name: "Purple", hex: "#9333ea", bg: "bg-purple-600", border: "border-purple-500" },
  { name: "Brown", hex: "#92400e", bg: "bg-amber-800", border: "border-amber-700" },
  { name: "Gray", hex: "#6b7280", bg: "bg-gray-500", border: "border-gray-400" },
]

export function ProductsColorsCertificates() {
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
              Products & Colors
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-100 sm:text-xl max-w-3xl mx-auto">
              Discover our products, color options, and quality certifications
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products & Applications Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px", amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Products & Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our wide range of non-woven fabric products and their diverse applications across industries
            </p>
          </motion.div>

          <div className="space-y-16">
            {applications.map((app, index) => {
              const Icon = app.icon
              return (
                <motion.div
                  key={app.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px", amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-1 p-6">
                        <div className={`${app.color} rounded-lg p-6 mb-6`}>
                          <Icon className="h-16 w-16 mx-auto" />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">{app.category}</h3>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Products:</h4>
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
                        <h4 className="font-semibold text-gray-900 mb-4 text-lg">Features:</h4>
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
                      <div className="mt-6 aspect-video rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
                        {app.image ? (
                          <img
                            src={app.image}
                            alt={`${app.category} example`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        ) : (
                          <>
                            <Package className="h-16 w-16 text-gray-400" />
                            <span className="sr-only">Product Image Placeholder</span>
                          </>
                        )}
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

      {/* Colors Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px", amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Color Options
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our standard colors or request custom Pantone-matched colors for your specific needs
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12">
            {standardColors.map((color, index) => (
              <motion.div
                key={color.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px", amount: 0.2 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
                  <div className={`${color.bg} h-32 w-full border-2 ${color.border}`}></div>
                  <CardContent className="p-4">
                    <p className="font-semibold text-gray-900 text-center">{color.name}</p>
                    <p className="text-xs text-gray-500 text-center mt-1">{color.hex}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px", amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="h-6 w-6 text-allari-green" />
                  Custom Pantone-Matched Colors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Need a specific color that's not in our standard range? We offer custom Pantone-matched colors
                    to perfectly match your brand or design requirements.
                  </p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Pantone color code matching</li>
                    <li>Sample-based color matching</li>
                    <li>Color consistency across production runs</li>
                    <li>Minimum order quantities apply</li>
                  </ul>
                  <p className="pt-4">
                    Contact us to discuss your custom color requirements and get a quote.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

    </div>
  )
}

