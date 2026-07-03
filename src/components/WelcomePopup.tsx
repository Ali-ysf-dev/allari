import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { X, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const STORAGE_KEY = "allari-welcome-dismissed"

export function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const dismissed = sessionStorage.getItem(STORAGE_KEY)
    if (!dismissed) {
      const timer = setTimeout(() => setIsOpen(true), 500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    sessionStorage.setItem(STORAGE_KEY, "true")
    setIsOpen(false)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm"
            onClick={handleClose}
            aria-hidden="true"
          />

          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="welcome-title"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative w-full max-w-md pointer-events-auto overflow-hidden rounded-2xl bg-white shadow-2xl"
            >
              <div className="bg-gradient-to-br from-allari-green to-allari-green-dark px-6 py-8 text-white text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                  <Sparkles className="h-7 w-7" />
                </div>
                <h2 id="welcome-title" className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Welcome to Allari
                </h2>
                <p className="mt-2 text-sm text-white/90 sm:text-base">
                  Ibrahim Allari & Sons Co.
                </p>
              </div>

              <div className="px-6 py-6">
                <p className="text-center text-gray-600 leading-relaxed">
                  Thank you for visiting our website. We are a leading manufacturer of PP
                  Spun-bond Non-Woven Fabric in Saudi Arabia, committed to quality, innovation,
                  and customer satisfaction since 2017.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg" className="flex-1">
                    <Link to="/products" onClick={handleClose}>
                      Explore Products
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="flex-1 border-gray-300"
                    onClick={handleClose}
                  >
                    Continue Browsing
                  </Button>
                </div>
              </div>

              <button
                onClick={handleClose}
                className="absolute right-3 top-3 rounded-full p-1.5 text-white/80 transition-colors hover:bg-white/20 hover:text-white"
                aria-label="Close welcome popup"
              >
                <X className="h-5 w-5" />
              </button>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
