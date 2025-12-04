import { motion } from "framer-motion"
import { Building2, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const clients = [
  "Carrefour",
  "Apparel Group",
  "Danube",
  "Lulu",
  "Alfa Co.",
  "Giordano",
  "The Beauty Secrets",
  "Broasted Key",
  "Al-Rifai"
]

export function Clients() {
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
              Our Clients
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-100 sm:text-xl max-w-3xl mx-auto">
              Trusted by leading businesses across various industries
            </p>
          </motion.div>
        </div>
      </section>

      {/* Clients Grid */}
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
              Trusted Partners
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We are proud to serve some of the most recognized brands and businesses in the region
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {clients.map((client, index) => (
              <motion.div
                key={client}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="h-full flex items-center justify-center p-8 hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-0 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="h-16 w-16 rounded-lg bg-allari-green/10 flex items-center justify-center">
                        <Building2 className="h-8 w-8 text-allari-green" />
                      </div>
                    </div>
                    <p className="font-semibold text-gray-900 text-lg">{client}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
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
              <CheckCircle className="h-8 w-8 text-allari-green" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Why Clients Choose Us
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our commitment to quality, reliability, and customer service has earned us the trust of
              leading businesses across various industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality Assurance",
                description: "Consistent high-quality products that meet and exceed expectations"
              },
              {
                title: "Reliable Delivery",
                description: "On-time delivery with flexible scheduling to meet your needs"
              },
              {
                title: "Custom Solutions",
                description: "Tailored products and services designed for your specific requirements"
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

