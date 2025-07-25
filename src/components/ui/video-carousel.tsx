"use client"

import { useEffect, useRef, useState } from "react"
import { PortraitVideo } from "./portrait-video"

interface VideoCarouselProps {
  videos: Array<{
    src: string
    title?: string
  }>
  className?: string
  speed?: number
}

export function VideoCarousel({ videos, className = "", speed = 50 }: VideoCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const animationFrameRef = useRef<number | null>(null)
  const startTimeRef = useRef<number | null>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const scroll = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp
      
      if (!isPaused && !isHovered) {
        const elapsed = timestamp - startTimeRef.current
        const scrollAmount = (elapsed / 1000) * speed
        scrollContainer.scrollLeft = scrollAmount % (scrollContainer.scrollWidth / 2)
      }

      animationFrameRef.current = requestAnimationFrame(scroll)
    }

    animationFrameRef.current = requestAnimationFrame(scroll)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [speed, isPaused, isHovered])

  // Duplicate videos for seamless loop
  const duplicatedVideos = [...videos, ...videos]

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Main carousel container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden pb-4"
        style={{ scrollBehavior: 'auto' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {duplicatedVideos.map((video, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 w-64 h-96 transform transition-all duration-500 hover:scale-105"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <PortraitVideo
              src={video.src}
              title={video.title}
              className="w-full h-full shadow-2xl"
            />
          </div>
        ))}
      </div>
      
      {/* Gradient overlays for smooth edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-10" />
      
      {/* Scroll indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {!isHovered && !isPaused && (
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span>Auto-scrolling • Hover to pause</span>
          </div>
        )}
        {(isHovered || isPaused) && (
          <div className="flex items-center space-x-2 text-sm text-gray-700">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <span>Paused • Click video for fullscreen</span>
          </div>
        )}
      </div>
    </div>
  )
}
