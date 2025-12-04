import { motion } from "framer-motion"
import { Cpu, Settings, Ruler, Gauge, Package } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const machines = [
  {
    name: "Machine 1 (1.6 S)",
    width: "200–1600 mm",
    gsm: "12–200",
    description: "High-precision machine for medium-width fabric production"
  },
  {
    name: "Machine 2 (3.2 S)",
    width: "200–3200 mm",
    gsm: "12–200",
    description: "Advanced wide-format machine for large-scale production"
  }
]

const technologyFeatures = [
  {
    icon: Cpu,
    title: "Advanced Machinery",
    description: "State-of-the-art equipment for consistent, high-quality output"
  },
  {
    icon: Settings,
    title: "Precision Control",
    description: "Advanced control systems for exact specifications"
  },
  {
    icon: Ruler,
    title: "Flexible Dimensions",
    description: "Wide range of width and GSM options to meet your needs"
  },
  {
    icon: Gauge,
    title: "Quality Assurance",
    description: "Continuous monitoring and quality control throughout production"
  }
]

export function Technology() {
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
              Technology & Machinery
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-100 sm:text-xl max-w-3xl mx-auto">
              Advanced machinery and technology for superior non-woven fabric production
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technology Overview */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Our Machinery
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We use carefully selected polypropylene with strict supplier vetting and advanced global machinery
              to ensure the highest quality standards in every product we manufacture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {machines.map((machine, index) => (
              <motion.div
                key={machine.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="h-16 w-16 rounded-lg bg-allari-green/10 flex items-center justify-center mb-4">
                      <Cpu className="h-8 w-8 text-allari-green" />
                    </div>
                    <CardTitle className="text-2xl">{machine.name}</CardTitle>
                    <CardDescription className="text-base">{machine.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Ruler className="h-5 w-5 text-allari-green" />
                        <div>
                          <p className="font-semibold text-gray-900">Width Range</p>
                          <p className="text-gray-600">{machine.width}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Gauge className="h-5 w-5 text-allari-green" />
                        <div>
                          <p className="font-semibold text-gray-900">GSM Range</p>
                          <p className="text-gray-600">{machine.gsm}</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 aspect-video rounded-lg bg-gray-200 flex items-center justify-center">
                      <Settings className="h-16 w-16 text-gray-400" />
                      <span className="sr-only">Machine Image Placeholder</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Features */}
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
              Technology Features
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologyFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full text-center">
                    <CardHeader>
                      <div className="h-12 w-12 rounded-lg bg-allari-green/10 flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-6 w-6 text-allari-green" />
                      </div>
                      <CardTitle>{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Raw Material Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                Premium Raw Materials
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                We use carefully selected polypropylene with strict supplier vetting to ensure the highest
                quality standards. Our commitment to using premium raw materials is fundamental to producing
                superior non-woven fabrics.
              </p>
              <p className="text-lg text-gray-600">
                Every batch of raw material undergoes rigorous quality checks before being used in production,
                ensuring consistency and reliability in every product we manufacture.
              </p>
            </div>
            <div className="aspect-square rounded-lg bg-gray-200 flex items-center justify-center">
              <Package className="h-32 w-32 text-gray-400" />
              <span className="sr-only">Raw Material Image Placeholder</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

