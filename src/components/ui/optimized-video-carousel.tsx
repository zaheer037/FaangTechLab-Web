"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { OptimizedPortraitVideo } from "./optimized-portrait-video"

interface OptimizedVideoCarouselProps {
  videos: Array<{
    src: string
    title?: string
  }>
  className?: string
  speed?: number
}

export function OptimizedVideoCarousel({ videos, className = "", speed = 30 }: OptimizedVideoCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const animationFrameRef = useRef<number | null>(null)
  const scrollPositionRef = useRef<number>(0)
  const isScrollingRef = useRef<boolean>(false)

  const startScrolling = useCallback(() => {
    if (animationFrameRef.current || isScrollingRef.current) return
    
    isScrollingRef.current = true
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const smoothScroll = () => {
      if ((!isHovered && !isPaused) && scrollContainer) {
        // Use a smaller increment for smoother animation
        const scrollIncrement = speed / 60 // 60fps target
        scrollPositionRef.current += scrollIncrement
        
        // Get content width for seamless loop
        const contentWidth = scrollContainer.scrollWidth / 3 // Divided by 3 because we triple duplicate
        
        // Reset to beginning when reaching the end of first set
        if (scrollPositionRef.current >= contentWidth) {
          scrollPositionRef.current = 0
        }
        
        // Use transform for hardware acceleration instead of scrollLeft
        scrollContainer.style.transform = `translateX(-${scrollPositionRef.current}px)`
      }

      if (isScrollingRef.current) {
        animationFrameRef.current = requestAnimationFrame(smoothScroll)
      }
    }

    animationFrameRef.current = requestAnimationFrame(smoothScroll)
  }, [speed, isHovered, isPaused])

  const stopScrolling = useCallback(() => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)
      animationFrameRef.current = null
    }
    isScrollingRef.current = false
  }, [])

  useEffect(() => {
    startScrolling()
    return stopScrolling
  }, [startScrolling, stopScrolling])

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false)
  }, [])

  const handleVideoClick = useCallback(() => {
    setIsPaused(true)
  }, [])

  const handleModalClose = useCallback(() => {
    setIsPaused(false)
  }, [])

  // Triple duplication for smoother loop effect
  const duplicatedVideos = [...videos, ...videos, ...videos]

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="relative h-80">
        <div
          ref={scrollRef}
          className="flex gap-6 absolute left-0 top-0 will-change-transform"
          style={{ 
            transition: 'none',
            backfaceVisibility: 'hidden',
            perspective: '1000px'
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {duplicatedVideos.map((video, index) => (
            <div 
              key={`${video.src}-${index}`}
              className="flex-shrink-0 w-56 h-80 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:z-10 relative"
            >
              <OptimizedPortraitVideo
                src={video.src}
                title={video.title}
                className="w-full h-full rounded-lg overflow-hidden shadow-lg"
                onVideoClick={handleVideoClick}
                onModalClose={handleModalClose}
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Enhanced gradient overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-emerald-50 via-emerald-50/90 to-transparent pointer-events-none z-20" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-emerald-50 via-emerald-50/90 to-transparent pointer-events-none z-20" />
      
      {/* Enhanced status indicator */}
      <div className="flex justify-center mt-6">
        <div className="flex items-center space-x-3 text-sm bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
          {!isHovered && !isPaused ? (
            <>
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-emerald-700 font-medium">Auto-scrolling • Hover to pause</span>
            </>
          ) : (
            <>
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span className="text-orange-700 font-medium">
                {isPaused ? 'Video playing • Close to resume' : 'Paused • Click video for fullscreen'}
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
