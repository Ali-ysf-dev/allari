import { motion } from "framer-motion"
import { Award, CheckCircle, Shield, FileCheck } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const certificates = [
  {
    name: "ISO 9001",
    description: "International standard for quality management systems, ensuring consistent quality and customer satisfaction",
    icon: Award,
    color: "bg-blue-100 text-blue-700"
  },
  {
    name: "OEKO-TEX Standard 100",
    description: "Independent certification system for textile products tested for harmful substances, ensuring human-ecological safety",
    icon: Shield,
    color: "bg-green-100 text-green-700"
  },
  {
    name: "Saudi Made",
    description: "Official certification recognizing products manufactured in Saudi Arabia, supporting local industry and quality standards",
    icon: FileCheck,
    color: "bg-amber-100 text-amber-700"
  }
]

export function Certificates() {
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
              Certifications
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-100 sm:text-xl max-w-3xl mx-auto">
              Our commitment to quality and standards is validated by internationally recognized certifications
            </p>
          </motion.div>
        </div>
      </section>

      {/* Certificates Grid */}
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
              Our Certifications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We maintain the highest industry standards through rigorous certification processes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certificates.map((cert, index) => {
              const Icon = cert.icon
              return (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className={`${cert.color} rounded-lg p-6 mb-4 flex items-center justify-center`}>
                        <Icon className="h-12 w-12" />
                      </div>
                      <CardTitle className="text-2xl">{cert.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{cert.description}</CardDescription>
                      <div className="mt-6 aspect-video rounded-lg bg-gray-200 flex items-center justify-center">
                        <Award className="h-16 w-16 text-gray-400" />
                        <span className="sr-only">Certificate Image Placeholder</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Certification Benefits */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-allari-green" />
                  Why Certifications Matter
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Our certifications demonstrate our commitment to quality, safety, and environmental
                    responsibility. They provide assurance to our customers that our products meet the
                    highest international standards.
                  </p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Quality assurance and consistency</li>
                    <li>Compliance with international standards</li>
                    <li>Customer confidence and trust</li>
                    <li>Competitive advantage in the market</li>
                    <li>Continuous improvement processes</li>
                    <li>Environmental and safety compliance</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

