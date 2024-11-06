'use client'

import { useState, useEffect } from 'react'
import { Check, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Leaderboard from './Leaderboard'
import Image from 'next/image'

function FlipNumber({ number }) {
  return (
    <div className="relative h-20 w-16 bg-gradient-to-br from-white/10 to-white/5 rounded-xl border border-white/10 backdrop-blur-sm shadow-xl">
      <AnimatePresence mode='popLayout'>
        <motion.div
          key={number}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 300,
            damping: 30
          }}
          className="w-full h-full flex items-center justify-center text-4xl font-mono text-white/90"
        >
          {String(number).padStart(2, '0')}
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent rounded-xl"></div>
    </div>
  )
}

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 8,
    hours: 22,
    minutes: 41,
    seconds: 32
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section - Added responsive padding */}
      <div className="h-screen bg-[url('/gdg-bg.jpg')] bg-cover bg-center text-white relative overflow-hidden flex flex-col">
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A]/90 via-[#1E1B4B]/90 to-[#312E81]/90"></div>
        
        {/* Google Colors Accent Lines */}
        <div className="absolute inset-0">
          <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#FBBC05]"></div>
          <div className="absolute bottom-0 w-full h-1 bg-gradient-to-r from-[#34A853] via-[#4285F4] to-[#EA4335]"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute -left-32 -top-32 w-96 h-96 bg-[#4285F4]/20 rounded-full mix-blend-overlay filter blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
              rotate: 360
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          <motion.div 
            className="absolute -right-32 -bottom-32 w-96 h-96 bg-[#EA4335]/20 rounded-full mix-blend-overlay filter blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
              rotate: -360
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDBNIDAgMjAgTCA0MCAyMCBNIDIwIDAgTCAyMCA0MCBNIDAgMzAgTCA0MCAzMCBNIDMwIDAgTCAzMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20">
        </div>

        {/* Notification Banner - More vibrant */}
        <motion.div 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="w-full bg-gradient-to-r from-[#3B82F6]/80 to-[#6366F1]/80 backdrop-blur-sm p-3 px-4 flex items-center justify-center gap-2 border-b border-white/10"
        >
          <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-white/10">
            <Check className="h-4 w-4" />
            <span className="text-sm font-medium">GenAI Cloud Study Jams are resumed</span>
          </div>
        </motion.div>

        {/* Main Content - Updated padding for mobile */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div 
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8 sm:mb-12 relative px-4 sm:px-0"
            >
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-[#60A5FA]/20 to-[#34D399]/20 rounded-lg blur"
                animate={{ 
                  opacity: [0.5, 0.8, 0.5],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl font-extrabold mb-3 sm:mb-6 flex flex-wrap items-center justify-center gap-1 xs:gap-2 sm:gap-3">
                <motion.span 
                  className="text-white"
                  animate={{ x: [-20, 0], opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                >
                  Gen
                </motion.span>
                <motion.div
                  className="relative"
                  animate={{ scale: [0, 1] }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute -right-6 -top-6 sm:-right-8 sm:-top-8"
                  >
                    <Sparkles className="h-4 w-4 sm:h-6 sm:w-6 text-[#FBBC05]" />
                  </motion.div>
                  <span className="text-white">AI</span>
                </motion.div>
                <motion.span 
                  className="text-white"
                  animate={{ x: [20, 0], opacity: [0, 1] }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Study Jams
                </motion.span>
              </h1>
              <div className="text-lg xs:text-xl sm:text-2xl font-bold text-white tracking-wide">
                by GDGC DYPCOE
              </div>
            </motion.div>

            {/* Timer - Updated spacing for mobile */}
            <div className="mb-8 sm:mb-12 space-y-4 sm:space-y-6">
              <div className="text-xs sm:text-sm uppercase tracking-widest text-blue-200 flex items-center justify-center gap-2">
                Time Remaining ⌛
              </div>
              <div className="flex justify-center gap-3 sm:gap-8">
                {Object.entries(timeLeft).map(([unit, value]) => (
                  <div key={unit} className="flex flex-col items-center gap-2 sm:gap-3">
                    <div className="scale-75 sm:scale-100">
                      <FlipNumber number={value} />
                    </div>
                    <div className="text-xs sm:text-sm uppercase tracking-wider text-blue-200/80">{unit}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Google Developer Groups Logo - Updated for mobile */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="inline-flex justify-center items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/10 mx-auto"
            >
              <Image 
                src="/gdgc.svg"
                alt="GDSC Logo"
                width={48}
                height={48}
                className="w-8 h-8 sm:w-12 sm:h-12"
              />
              <div>
                <div className="text-base sm:text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  Google Developer Groups
                </div>
                <div className="text-xs sm:text-sm text-blue-200/80">
                  On Campus • D. Y. Patil College of Engineering, Pune
                </div>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator - Updated for mobile */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center h-24 sm:h-32 bg-gradient-to-t from-black/20 to-transparent">
            <motion.div 
              className="flex flex-col items-center"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="text-white/80 text-xs sm:text-sm mb-2 sm:mb-3 font-medium">
                Scroll to see leaderboard
              </div>
              <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/80 rounded-full flex justify-center relative">
                <motion.div
                  className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white/80 rounded-full"
                  animate={{ y: [4, 16, 4] }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Leaderboard Section - Updated background */}
      <div className="min-h-screen bg-gradient-to-br from-[#0F172A] to-[#1E1B4B] py-20">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Leaderboard />
        </motion.div>
      </div>
    </div>
  )
}

export default CountdownTimer