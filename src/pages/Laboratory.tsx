import { motion } from "framer-motion"
import { FlaskConical, TestTube, CheckCircle, BarChart3 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const tests = [
  {
    name: "Thickness",
    description: "Precise measurement of fabric thickness to ensure consistency and quality standards",
    icon: BarChart3
  },
  {
    name: "Tensile Strength (MD/CD)",
    description: "Comprehensive testing of machine direction (MD) and cross direction (CD) tensile strength",
    icon: TestTube
  },
  {
    name: "Elongation Tests",
    description: "Measurement of fabric elongation properties to determine durability and performance",
    icon: CheckCircle
  }
]

export function Laboratory() {
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
              Laboratory & Quality Control
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-100 sm:text-xl max-w-3xl mx-auto">
              In-house testing facilities ensuring the highest quality standards for every product
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                In-House Testing Facilities
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Our state-of-the-art laboratory is equipped with advanced testing equipment to ensure
                every product meets our stringent quality standards before leaving our facility.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                We conduct comprehensive in-house testing including thickness measurements, tensile strength
                analysis, and elongation tests. This allows us to maintain consistent quality and quickly
                identify any issues during production.
              </p>
              <p className="text-lg text-gray-600">
                Our quality control team works closely with production to ensure that every batch meets
                specifications and customer requirements.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-lg bg-gray-200 flex items-center justify-center">
                <FlaskConical className="h-32 w-32 text-gray-400" />
                <span className="sr-only">Laboratory Image Placeholder</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testing Capabilities */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Testing Capabilities
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Comprehensive testing to ensure product quality and performance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tests.map((test, index) => {
              const Icon = test.icon
              return (
                <motion.div
                  key={test.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="h-12 w-12 rounded-lg bg-allari-green/10 flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-allari-green" />
                      </div>
                      <CardTitle>{test.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{test.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-24 sm:py-32">
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
                  Quality Assurance Process
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Our quality assurance process begins with raw material inspection and continues through
                    every stage of production. Each batch undergoes rigorous testing to ensure it meets our
                    high standards.
                  </p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Raw material quality verification</li>
                    <li>In-process quality checks during production</li>
                    <li>Final product testing and inspection</li>
                    <li>Documentation and quality certificates</li>
                    <li>Continuous improvement based on test results</li>
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

