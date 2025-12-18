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
  Globe,
  Building2,
  CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import heroImage from "@/assets/freepik_assistant_1765973033956.png"

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

const clients = [
  "Carrefour",
  "Apparel Group",
  "Danube",
  "Lulu",
  "Alfa Co.",
  "Giordano",
  "The Beauty Secrets",
  "Broasted Key",
  "Al-Rifai",
]

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden" style={{ backgroundColor: '#7CC405' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            <div className="text-center lg:text-left space-y-6 lg:space-y-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-tight">
                Leading Manufacturer of
                <br />
                <span className="text-white drop-shadow-lg">PP Spun-bond Non-Woven Fabric</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-xl leading-relaxed text-white/95 max-w-2xl mx-auto lg:mx-0">
                Established in 2017, Ibrahim Allari & Sons Co. is one of Saudi Arabia's premier manufacturers,
                suppliers, and exporters of non-woven fabrics. Known for trust, integrity, transparency, and
                advanced technical expertise.
              </p>
              <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 pt-4">
                <Button asChild size="lg" className="w-full sm:w-auto shadow-lg">
                  <Link to="/products">Explore Products</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-allari-green">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full max-w-xl lg:max-w-2xl relative"
              >
                {/* Animated background pattern */}
                <div className="absolute -inset-4 bg-gradient-to-br from-white/10 via-transparent to-white/5 rounded-3xl blur-2xl animate-pulse"></div>
                
                <div className="relative p-4 lg:p-6">
                  {/* Outer decorative border with gradient */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/50 via-white/35 to-white/15 border-4 border-white/70 backdrop-blur-md shadow-2xl"></div>
                  
                  {/* Animated border glow */}
                  <motion.div 
                    className="absolute inset-0 rounded-3xl border-2 border-white/50"
                    animate={{ 
                      boxShadow: [
                        '0 0 20px rgba(255,255,255,0.3)',
                        '0 0 40px rgba(255,255,255,0.5)',
                        '0 0 20px rgba(255,255,255,0.3)'
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  ></motion.div>
                  
                  {/* Inner glow effect with multiple layers */}
                  <div className="absolute inset-2 rounded-2xl bg-gradient-to-br from-white/15 via-white/5 to-transparent"></div>
                  <div className="absolute inset-3 rounded-xl bg-gradient-to-tl from-white/10 to-transparent"></div>
                  
                  {/* Geometric pattern overlay */}
                  <div className="absolute inset-0 rounded-3xl opacity-20">
                    <div className="absolute top-4 left-4 w-20 h-20 border-2 border-white/60 rounded-lg rotate-45"></div>
                    <div className="absolute bottom-4 right-4 w-16 h-16 border-2 border-white/60 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-2 border-white/50 rounded-lg rotate-12"></div>
                  </div>
                  
                  {/* Image container with enhanced styling */}
                  <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-md p-6 shadow-inner">
                    {/* Shine effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent rounded-2xl"></div>
                    
                    <img
                      src={heroImage}
                      alt="Non-woven fabric manufacturing"
                      className="w-full h-auto object-contain relative z-10 drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
                      loading="eager"
                    />
                  </div>
                  
                  {/* Enhanced decorative corner accents */}
                  <div className="absolute -top-2 -left-2 w-20 h-20 border-t-4 border-l-4 border-white/80 rounded-tl-3xl bg-white/15 backdrop-blur-sm"></div>
                  <div className="absolute -bottom-2 -right-2 w-20 h-20 border-b-4 border-r-4 border-white/80 rounded-br-3xl bg-white/15 backdrop-blur-sm"></div>
                  
                  {/* Additional corner details */}
                  <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-white/70 rounded-tl-xl"></div>
                  <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-white/70 rounded-br-xl"></div>
                  
                  {/* Floating particles effect */}
                  <div className="absolute top-8 right-8 w-2 h-2 bg-white/60 rounded-full animate-ping"></div>
                  <div className="absolute bottom-12 left-12 w-1.5 h-1.5 bg-white/50 rounded-full animate-pulse"></div>
                  <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white/40 rounded-full"></div>
                </div>
              </motion.div>
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
            viewport={{ once: true, margin: "-50px", amount: 0.2 }}
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
            viewport={{ once: true, margin: "-50px", amount: 0.2 }}
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
                  viewport={{ once: true, margin: "-50px", amount: 0.2 }}
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

      {/* Clients - merged from Clients page */}
      <section className="min-h-screen bg-white">
        {/* Clients Hero */}
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
              viewport={{ once: true, margin: "-50px", amount: 0.2 }}
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
                  viewport={{ once: true, margin: "-50px", amount: 0.2 }}
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
              viewport={{ once: true, margin: "-50px", amount: 0.2 }}
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
                  description: "Consistent high-quality products that meet and exceed expectations",
                },
                {
                  title: "Reliable Delivery",
                  description: "On-time delivery with flexible scheduling to meet your needs",
                },
                {
                  title: "Custom Solutions",
                  description: "Tailored products and services designed for your specific requirements",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px", amount: 0.2 }}
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
      </section>

      {/* Call to Action */}
      <section className="py-24 sm:py-32 bg-allari-green">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px", amount: 0.2 }}
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
              <Button asChild size="lg" className="shadow-lg">
                <Link to="/contact">Get in Touch</Link>
              </Button>
              <Button asChild size="lg">
                <Link to="/products">View Products</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

