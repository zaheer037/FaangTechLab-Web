"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

interface ProgressBarProps {
  label: string
  percentage: number
  color?: string
  className?: string
}

export function ProgressBar({ label, percentage, color = "bg-accent-500", className = "" }: ProgressBarProps) {
  const [progress, setProgress] = useState(0)
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setProgress(percentage)
      }, 200)
      return () => clearTimeout(timer)
    }
  }, [inView, percentage])

  return (
    <div ref={ref} className={`space-y-2 ${className}`}>
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-primary-800">{label}</span>
        <span className="text-sm text-neutral-600">{percentage}%</span>
      </div>
      <div className="w-full bg-neutral-200 rounded-full h-2 overflow-hidden">
        <div
          className={`h-full ${color} rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}
