"use client"

import { useEffect, useState } from "react"
import { Code, Database, Brain, Zap, Star, Award } from "lucide-react"

const icons = [Code, Database, Brain, Zap, Star, Award]

export function FloatingElements() {
  const [elements, setElements] = useState<
    Array<{
      id: number
      x: number
      y: number
      icon: any
      delay: number
      duration: number
    }>
  >([])

  useEffect(() => {
    const newElements = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      icon: icons[i],
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2,
    }))
    setElements(newElements)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element) => {
        const Icon = element.icon
        return (
          <div
            key={element.id}
            className="absolute opacity-10"
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              animationDelay: `${element.delay}s`,
              animationDuration: `${element.duration}s`,
            }}
          >
            <Icon className="w-8 h-8 text-primary-400 animate-float" />
          </div>
        )
      })}
    </div>
  )
}
