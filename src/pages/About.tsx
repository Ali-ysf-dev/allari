import { motion } from "framer-motion"
import { Target, Award, Users, Calendar, CheckCircle, Shield } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import companyOverviewImage from "@/assets/freepik_assistant_1766015046421.png"

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To be the leading manufacturer of non-woven fabrics in Saudi Arabia, delivering exceptional quality and value to our customers while maintaining the highest standards of integrity and transparency."
  },
  {
    icon: Award,
    title: "Our Vision",
    description: "To expand our global presence and become a recognized leader in the non-woven fabric industry, known for innovation, quality, and customer satisfaction."
  },
  {
    icon: Users,
    title: "Our Values",
    description: "Trust, integrity, transparency, and advanced technical expertise guide everything we do. We are committed to ethical practices and building lasting relationships with our clients."
  }
]

const milestones = [
  { year: "2017", event: "Company Established" },
  { year: "2018", event: "First Production Line Operational" },
  { year: "2019", event: "ISO 9001 Certification" },
  { year: "2020", event: "OEKO-TEX Standard 100 Certification" },
  { year: "2021", event: "Saudi Made Certification" },
  { year: "2022", event: "Expansion of Production Capacity" },
]

const certificates = [
  {
    name: "ISO 9001",
    description:
      "International standard for quality management systems, ensuring consistent quality and customer satisfaction",
    icon: Award,
    color: "bg-blue-100 text-blue-700",
    image:
      "https://static.wixstatic.com/media/4774ac_739b0b58a55045759ed81932ccc49d7f~mv2.png/v1/fill/w_210,h_210,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/4774ac_739b0b58a55045759ed81932ccc49d7f~mv2.png",
  },
  {
    name: "OEKO-TEX Standard 100",
    description:
      "Independent certification system for textile products tested for harmful substances, ensuring human-ecological safety",
    icon: Shield,
    color: "bg-[#7CC405]/10 text-[#7CC405]",
    image:
      "https://static.wixstatic.com/media/4774ac_bf31b33d97ae41ff9c5563118fadecc6~mv2.jpeg/v1/fill/w_238,h_238,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/4774ac_bf31b33d97ae41ff9c5563118fadecc6~mv2.jpeg",
  },
  {
    name: "Saudi Made",
    description:
      "Official certification recognizing products manufactured in Saudi Arabia, supporting local industry and quality standards",
    icon: CheckCircle,
    color: "bg-amber-100 text-amber-700",
    image:
      "https://static.wixstatic.com/media/4774ac_8de3205ff6524247a8d46c741688fb6a~mv2.jpg/v1/fill/w_180,h_300,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/SAUDI_MADE_main_vertical_PANTONEc_edited.jpg",
  },
]

export function About() {
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
              About Us
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-100 sm:text-xl max-w-3xl mx-auto">
              Learn more about Ibrahim Allari & Sons Co. and our commitment to excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px", amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                Company Overview
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Ibrahim Allari & Sons Co. is one of the leading manufacturers, suppliers, and exporters of
                PP Spun-bond Non-Woven Fabric in Saudi Arabia. Established in 2017, the company has quickly
                become a trusted name in the industry.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                We produce a wide range of non-woven fabric products including rolls, sheets, hydrophilic
                fabrics, agricultural fabrics, and custom-pattern fabrics. Our commitment to quality and
                customer satisfaction has made us a preferred partner for businesses across various sectors.
              </p>
              <p className="text-lg text-gray-600">
                The company is known for trust, integrity, transparency, and advanced technical expertise.
                We maintain the highest standards in every aspect of our operations, from raw material
                selection to final product delivery.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px", amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="relative flex items-center justify-center"
            >
              <div className="aspect-square w-full max-w-lg rounded-lg overflow-hidden">
                <img
                  src={companyOverviewImage}
                  alt="Ibrahim Allari & Sons Co. manufacturing facility"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 sm:py-32 bg-[rgb(17,24,39)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px", amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Our Mission, Vision & Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px", amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
              <Card className="h-full bg-white/5 border-white/10">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-white">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-200">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Company Milestones */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px", amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Company Milestones
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our journey of growth and achievement
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-allari-green hidden md:block"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px", amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative ${index % 2 === 0 ? 'md:text-right' : 'md:text-left md:ml-auto'} md:w-5/12`}
                >
                  <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-allari-green">
                    <div className="flex items-center gap-4 md:flex-row-reverse">
                      <div className="flex-shrink-0">
                        <div className="h-12 w-12 rounded-full bg-allari-green flex items-center justify-center text-white font-bold">
                          <Calendar className="h-6 w-6" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{milestone.year}</h3>
                        <p className="text-gray-600 mt-1">{milestone.event}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications (moved from Products page) */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px", amount: 0.2 }}
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
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px", amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center justify-center"
              >
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow w-full flex items-center justify-center">
                  <img
                    src={cert.image}
                    alt={`${cert.name} certificate`}
                    className="max-h-64 w-auto object-contain"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

