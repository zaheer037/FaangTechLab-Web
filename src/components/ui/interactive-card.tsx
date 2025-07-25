"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface InteractiveCardProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  hoverScale?: boolean
  glowEffect?: boolean
}

export function InteractiveCard({
  children,
  className = "",
  style,
  hoverScale = true,
  glowEffect = false,
}: InteractiveCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className={cn(
        "transition-all duration-300 cursor-pointer",
        hoverScale && "hover:scale-105",
        glowEffect && isHovered && "shadow-2xl shadow-primary-200/50",
        "hover:shadow-xl border-primary-100",
        className,
      )}
      style={style}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </Card>
  )
}
