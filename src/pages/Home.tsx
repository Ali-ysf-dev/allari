import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { 
  Factory, 
  Award, 
  Package, 
  Users, 
  TrendingUp,
  Shield,
  Zap,
  Globe
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const benefits = [
  { icon: Factory, title: "World-class infrastructure", description: "State-of-the-art facilities" },
  { icon: Award, title: "High-quality fabric output", description: "Premium quality standards" },
  { icon: TrendingUp, title: "Competitive pricing", description: "Best value in the market" },
  { icon: Package, title: "Premium raw materials", description: "Carefully selected materials" },
  { icon: Zap, title: "Advanced machinery", description: "Cutting-edge technology" },
  { icon: Users, title: "Skilled workforce", description: "Expert professionals" },
  { icon: Shield, title: "Durable product quality", description: "Long-lasting products" },
  { icon: Globe, title: "Wide customization", description: "Size, color, finish options" },
]

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-allari-green to-allari-green-dark text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl text-white">
              Leading Manufacturer of
              <br />
              <span className="text-white drop-shadow-lg">PP Spun-bond Non-Woven Fabric</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-white sm:text-xl max-w-2xl mx-auto">
              Established in 2017, Ibrahim Allari & Sons Co. is one of Saudi Arabia's premier manufacturers,
              suppliers, and exporters of non-woven fabrics. Known for trust, integrity, transparency, and
              advanced technical expertise.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 flex-wrap">
              <Button asChild size="lg" className="bg-white text-allari-green-dark hover:bg-gray-50 font-semibold shadow-lg">
                <Link to="/products">Explore Products</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white !text-white hover:bg-white hover:!text-allari-green-dark font-semibold bg-transparent">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Intro */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              About Ibrahim Allari & Sons Co.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
              We produce non-woven fabric rolls, sheets, hydrophilic fabrics, agricultural fabrics, and
              custom-pattern fabrics. Our commitment to excellence has made us a trusted partner for businesses
              across various industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Allari */}
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
              Why Choose Allari?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We deliver excellence through quality, innovation, and customer commitment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="h-12 w-12 rounded-lg bg-allari-green/10 flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-allari-green" />
                      </div>
                      <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{benefit.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 sm:py-32 bg-allari-green">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-100 max-w-2xl mx-auto">
              Contact us today to discuss your non-woven fabric needs. We're here to help you find the perfect
              solution for your business.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 flex-wrap">
              <Button asChild size="lg" className="bg-white text-allari-green-dark hover:bg-gray-50 font-semibold shadow-lg">
                <Link to="/contact">Get in Touch</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white !text-white hover:bg-white hover:!text-allari-green-dark font-semibold bg-transparent">
                <Link to="/products">View Products</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

