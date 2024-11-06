'use client'

import { useState, useEffect } from 'react'
import { Check } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Leaderboard from './Leaderboard'

function FlipNumber({ number }) {
  return (
    <div className="relative h-20 w-16 bg-black/20 rounded-lg overflow-hidden">
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
          className="w-full h-full flex items-center justify-center text-4xl font-mono"
        >
          {String(number).padStart(2, '0')}
        </motion.div>
      </AnimatePresence>
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
      {/* Hero Section */}
      <div className="h-screen bg-gradient-to-br from-blue-600 to-red-500 text-white relative overflow-hidden flex flex-col">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/4 top-1/4 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute right-1/4 bottom-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute left-1/3 bottom-1/3 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        {/* Notification Banner */}
        <motion.div 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="w-full bg-green-600 p-2 px-4 flex items-center justify-center gap-2"
        >
          <Check className="h-5 w-5" />
          <span className="text-sm font-medium">GenAI Cloud Study Jams are resumed</span>
        </motion.div>

        {/* Centered Hero Content */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div 
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-4 flex items-center justify-center gap-3">
                GenAI
                <motion.span 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="text-yellow-300 inline-block"
                >
                  ✨
                </motion.span>
                Study Jams
              </h1>
              <div className="text-blue-200 text-xl font-light">
                by GDGC DYPCOE
              </div>
            </motion.div>

            {/* Timer */}
            <div className="mb-12 flex flex-col items-center justify-center">
              <div className="text-sm text-blue-200 mb-4 flex items-center justify-center gap-2">
                Time Left ⌛
              </div>
              <div className="flex justify-center gap-8">
                {Object.entries(timeLeft).map(([unit, value]) => (
                  <div key={unit} className="flex flex-col items-center">
                    <FlipNumber number={value} />
                    <div className="text-sm text-blue-200 mt-2 capitalize">{unit}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Google Developer Groups Logo */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex justify-center items-center gap-3 text-blue-200"
            >
              <img src="/gdgc.svg" alt="GDGC Logo" className="h-16 w-16" />
              <div className="text-lg">
                Google Developer Groups
                <div className="text-sm font-light">On Campus • D. Y. Patil College of Engineering, Pune</div>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator - Centered */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center h-32 bg-gradient-to-t from-black/20 to-transparent">
            <motion.div 
              className="flex flex-col items-center"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="text-white/80 text-sm mb-3 font-medium">
                Scroll to see leaderboard
              </div>
              <div className="w-6 h-10 border-2 border-white/80 rounded-full flex justify-center relative">
                <motion.div
                  className="absolute w-1.5 h-1.5 bg-white/80 rounded-full"
                  animate={{ y: [4, 20, 4] }}
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

      {/* Leaderboard Section */}
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-20">
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