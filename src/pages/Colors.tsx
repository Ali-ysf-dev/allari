import { motion } from "framer-motion"
import { Palette, CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

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

export function Colors() {
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
              Color Options
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-100 sm:text-xl max-w-3xl mx-auto">
              Choose from our standard colors or request custom Pantone-matched colors for your specific needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Standard Colors */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Standard Colors
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer a wide range of standard fabric colors to meet your requirements
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {standardColors.map((color, index) => (
              <motion.div
                key={color.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
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
        </div>
      </section>

      {/* Custom Colors */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-allari-green/10 mb-6">
              <Palette className="h-8 w-8 text-allari-green" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Custom Pantone-Matched Colors
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Need a specific color that's not in our standard range? We offer custom Pantone-matched colors
              to perfectly match your brand or design requirements.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-allari-green" />
                  Custom Color Matching Service
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Our custom color matching service allows you to provide a Pantone color code or sample,
                    and we'll create a fabric that matches your exact specifications.
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
          </div>
        </div>
      </section>
    </div>
  )
}

