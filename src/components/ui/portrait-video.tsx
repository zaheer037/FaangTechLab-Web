"use client"

import { useEffect, useRef, useState } from "react"
import { Maximize } from "lucide-react"

interface PortraitVideoProps {
  src: string
  title?: string
  className?: string
  autoPlay?: boolean
  muted?: boolean
  loop?: boolean
  enableFullscreen?: boolean
}

export function PortraitVideo({ 
  src, 
  title, 
  className = "", 
  autoPlay = true, 
  muted = true, 
  loop = true,
  enableFullscreen = true
}: PortraitVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [, setIsHovered] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (video && autoPlay) {
      video.play().catch(console.error)
      setIsPlaying(true)
    }
  }, [autoPlay])

  const handleVideoClick = () => {
    const video = videoRef.current
    if (video && enableFullscreen) {
      // Enable audio and enter fullscreen
      video.muted = false
      if (video.requestFullscreen) {
        video.requestFullscreen()
      } else if ((video as any).webkitRequestFullscreen) {
        (video as any).webkitRequestFullscreen()
      } else if ((video as any).msRequestFullscreen) {
        (video as any).msRequestFullscreen()
      }
      
      // Add fullscreen change listener to restore muted state when exiting
      const handleFullscreenChange = () => {
        if (!document.fullscreenElement) {
          video.muted = muted
          document.removeEventListener('fullscreenchange', handleFullscreenChange)
          document.removeEventListener('webkitfullscreenchange', handleFullscreenChange)
          document.removeEventListener('msfullscreenchange', handleFullscreenChange)
        }
      }
      
      document.addEventListener('fullscreenchange', handleFullscreenChange)
      document.addEventListener('webkitfullscreenchange', handleFullscreenChange)
      document.addEventListener('msfullscreenchange', handleFullscreenChange)
    }
  }

  return (
    <div 
      className={`relative overflow-hidden rounded-xl shadow-xl bg-gradient-to-br from-slate-100 to-slate-200 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleVideoClick}
    >
      <video
        ref={videoRef}
        src={src}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        playsInline
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        onLoadedData={() => {
          if (videoRef.current && autoPlay) {
            videoRef.current.play().catch(console.error)
            setIsPlaying(true)
          }
        }}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      
      {/* Overlay for hover effects */}
      <div className={`absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center`}>
        <div className="flex space-x-3">
          {enableFullscreen && (
            <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300">
              <Maximize className="w-6 h-6 text-gray-800" />
            </div>
          )}
        </div>
      </div>
      
      {/* Video title */}
      {title && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
          <p className="text-white text-sm font-medium drop-shadow-lg">{title}</p>
        </div>
      )}
      
      {/* Play indicator */}
      <div className="absolute top-3 right-3">
        <div className={`w-3 h-3 rounded-full ${isPlaying ? 'bg-green-500' : 'bg-red-500'} shadow-lg`}></div>
      </div>
    </div>
  )
}
