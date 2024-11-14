"use client"

import * as React from "react"
import { Progress } from "@/components/ui/progress"

export function ProgressDemo() {
  const [progress, setProgress] = React.useState(0)
  const [isAnimationComplete, setIsAnimationComplete] = React.useState(false)
  const [decimalPlaces, setDecimalPlaces] = React.useState(2)

  // Calculate real-time progress
  const calculateRealProgress = () => {
    const startDate = new Date('2024-11-07')
    const endDate = new Date('2024-11-28')
    const currentDate = new Date()
    
    const totalDuration = endDate.getTime() - startDate.getTime()
    const elapsed = currentDate.getTime() - startDate.getTime()
    
    return Math.min(Math.max((elapsed / totalDuration) * 100, 0), 100)
  }

  React.useEffect(() => {
    // Initial animation
    const duration = 3000
    const startTime = performance.now()
    const targetValue = calculateRealProgress()
    const decimalStartTime = duration * 0.5 // Start increasing decimals halfway through

    const smootherstep = (t: number) => 6 * t ** 5 - 15 * t ** 4 + 10 * t ** 3

    const updateProgress = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const t = Math.min(elapsed / duration, 1)
      const easedProgress = smootherstep(t) * targetValue
      setProgress(easedProgress)

      // Start increasing decimal places halfway through the animation
      if (elapsed > decimalStartTime && decimalPlaces < 6) {
        const decimalT = (elapsed - decimalStartTime) / (duration - decimalStartTime)
        const newDecimals = Math.min(2 + Math.floor(decimalT * 5), 6)
        setDecimalPlaces(newDecimals)
      }

      if (t < 1) {
        requestId = requestAnimationFrame(updateProgress)
      } else {
        setIsAnimationComplete(true)
      }
    }

    let requestId = requestAnimationFrame(updateProgress)

    return () => cancelAnimationFrame(requestId)
  }, [])

  // Real-time updates after animation
  React.useEffect(() => {
    if (!isAnimationComplete) return

    const interval = setInterval(() => {
      setProgress(calculateRealProgress())
    }, 100)

    return () => clearInterval(interval)
  }, [isAnimationComplete])

  return (
    <div className="flex flex-col items-center">
      <Progress value={progress} className="w-[80vw]" />
      <span className="mt-2 text-lg font-semibold">
        We are about {progress.toFixed(decimalPlaces)}% the way there.
      </span>
    </div>
  )
}

export default ProgressDemo