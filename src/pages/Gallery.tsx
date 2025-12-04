import { motion } from "framer-motion"
import { Image as ImageIcon } from "lucide-react"
import { useState } from "react"

// Gallery images - you can add/remove images here
// Each image can have different sizes: 'small', 'medium', 'large', 'wide', 'tall'
const galleryImages = [
  { id: 1, src: "/placeholder-1.jpg", alt: "Gallery Image 1", size: "medium" },
  { id: 2, src: "/placeholder-2.jpg", alt: "Gallery Image 2", size: "large" },
  { id: 3, src: "/placeholder-3.jpg", alt: "Gallery Image 3", size: "small" },
  { id: 4, src: "/placeholder-4.jpg", alt: "Gallery Image 4", size: "wide" },
  { id: 5, src: "/placeholder-5.jpg", alt: "Gallery Image 5", size: "medium" },
  { id: 6, src: "/placeholder-6.jpg", alt: "Gallery Image 6", size: "tall" },
  { id: 7, src: "/placeholder-7.jpg", alt: "Gallery Image 7", size: "small" },
  { id: 8, src: "/placeholder-8.jpg", alt: "Gallery Image 8", size: "medium" },
  { id: 9, src: "/placeholder-9.jpg", alt: "Gallery Image 9", size: "large" },
  { id: 10, src: "/placeholder-10.jpg", alt: "Gallery Image 10", size: "wide" },
  { id: 11, src: "/placeholder-11.jpg", alt: "Gallery Image 11", size: "medium" },
  { id: 12, src: "/placeholder-12.jpg", alt: "Gallery Image 12", size: "tall" },
]

// Size classes for different grid cell sizes
const sizeClasses = {
  small: "col-span-1 row-span-1",
  medium: "col-span-1 md:col-span-2 row-span-1 md:row-span-2",
  large: "col-span-1 md:col-span-2 lg:col-span-3 row-span-2 md:row-span-3",
  wide: "col-span-1 md:col-span-2 lg:col-span-4 row-span-1 md:row-span-2",
  tall: "col-span-1 md:col-span-2 row-span-2 md:row-span-3",
}

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

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
              Gallery
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-100 sm:text-xl max-w-3xl mx-auto">
              Explore our facilities, products, and achievements through our photo gallery
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
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
              Photo Gallery
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Add your photos to the galleryImages array in Gallery.tsx to display them here
            </p>
          </motion.div>

          {/* Masonry Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-fr">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px", amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`${sizeClasses[image.size as keyof typeof sizeClasses]} cursor-pointer group`}
                onClick={() => setSelectedImage(image.id)}
              >
                <div className="relative w-full h-full min-h-[200px] rounded-lg overflow-hidden bg-gray-200 hover:shadow-xl transition-shadow">
                  {/* Placeholder - Replace with actual image */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
                    <ImageIcon className="h-16 w-16 text-gray-400 group-hover:text-allari-green transition-colors" />
                  </div>
                  {/* Uncomment and use this when you have actual images */}
                  {/* <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      e.currentTarget.style.display = 'none'
                    }}
                  /> */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 text-white font-semibold transition-opacity">
                      {image.alt}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Instructions for adding images */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px", amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mt-16 p-6 bg-gray-50 rounded-lg"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">How to Add Images</h3>
            <div className="space-y-2 text-gray-600">
              <p>To add images to the gallery:</p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Add your images to the <code className="bg-gray-200 px-2 py-1 rounded">public</code> folder</li>
                <li>Open <code className="bg-gray-200 px-2 py-1 rounded">src/pages/Gallery.tsx</code></li>
                <li>Add new objects to the <code className="bg-gray-200 px-2 py-1 rounded">galleryImages</code> array:</li>
              </ol>
              <pre className="bg-gray-800 text-green-400 p-4 rounded-lg mt-4 overflow-x-auto text-sm">
{`{
  id: 13,
  src: "/your-image.jpg",
  alt: "Description",
  size: "medium" // Options: "small", "medium", "large", "wide", "tall"
}`}
              </pre>
              <p className="mt-4">
                <strong>Size options:</strong> small, medium, large, wide, tall - each creates different grid cell sizes
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative max-w-5xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-allari-green transition-colors"
            >
              ✕ Close
            </button>
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <ImageIcon className="h-32 w-32 text-gray-400" />
                {/* Replace with actual image when available */}
                {/* <img
                  src={galleryImages.find(img => img.id === selectedImage)?.src}
                  alt={galleryImages.find(img => img.id === selectedImage)?.alt}
                  className="max-w-full max-h-[90vh] object-contain"
                /> */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {galleryImages.find(img => img.id === selectedImage)?.alt}
                </h3>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}

