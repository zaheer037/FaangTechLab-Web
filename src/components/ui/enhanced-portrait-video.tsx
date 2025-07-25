"use client"

import { useEffect, useRef, useState } from "react"
import { Maximize, X, Volume2, VolumeX } from "lucide-react"
import { createPortal } from "react-dom"

interface EnhancedPortraitVideoProps {
  src: string
  title?: string
  className?: string
  autoPlay?: boolean
  muted?: boolean
  loop?: boolean
  enableFullscreen?: boolean
}

export function EnhancedPortraitVideo({ 
  src, 
  title, 
  className = "", 
  autoPlay = true, 
  muted = true, 
  loop = true,
  enableFullscreen = true
}: EnhancedPortraitVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const modalVideoRef = useRef<HTMLVideoElement>(null)
  const [, setIsHovered] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isModalMuted, setIsModalMuted] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (video && autoPlay) {
      video.play().catch(console.error)
      setIsPlaying(true)
    }
  }, [autoPlay])

  const handleVideoClick = () => {
    if (enableFullscreen) {
      setIsModalOpen(true)
      setIsModalMuted(false) // Enable audio in modal
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
    if (modalVideoRef.current) {
      modalVideoRef.current.pause()
    }
  }

  const toggleModalMute = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.muted = !modalVideoRef.current.muted
      setIsModalMuted(modalVideoRef.current.muted)
    }
  }

  // Modal component
  const Modal = () => {
    if (!isModalOpen) return null

    return createPortal(
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4">
        {/* Close button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 md:top-6 md:right-6 z-60 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 md:p-3 transition-colors duration-200"
        >
          <X className="w-5 h-5 md:w-6 md:h-6 text-white" />
        </button>

        {/* Mute/Unmute button */}
        <button
          onClick={toggleModalMute}
          className="absolute top-4 left-4 md:top-6 md:left-6 z-60 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 md:p-3 transition-colors duration-200"
        >
          {isModalMuted ? (
            <VolumeX className="w-5 h-5 md:w-6 md:h-6 text-white" />
          ) : (
            <Volume2 className="w-5 h-5 md:w-6 md:h-6 text-white" />
          )}
        </button>

        {/* Portrait video container */}
        <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg h-full flex items-center justify-center">
          <div className="relative w-full aspect-[9/16] max-h-[85vh] bg-black rounded-xl md:rounded-2xl overflow-hidden shadow-2xl">
            <video
              ref={modalVideoRef}
              src={src}
              autoPlay
              muted={isModalMuted}
              loop={loop}
              playsInline
              className="w-full h-full object-cover"
              style={{ 
                objectPosition: "center center",
                maxHeight: "85vh"
              }}
            />
            
            {/* Video title overlay */}
            {title && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 md:p-6">
                <h3 className="text-white text-lg md:text-xl font-bold drop-shadow-lg mb-1 md:mb-2">{title}</h3>
                <p className="text-white/80 text-xs md:text-sm">Tap outside to close • Use volume button for audio</p>
              </div>
            )}

            {/* Quality indicator */}
            <div className="absolute top-3 right-3">
              <div className="bg-green-500/90 backdrop-blur-sm rounded-full px-2 py-1">
                <span className="text-white text-xs font-medium">HD</span>
              </div>
            </div>
          </div>
        </div>

        {/* Click outside to close */}
        <div 
          className="absolute inset-0 z-40" 
          onClick={closeModal}
        />
      </div>,
      document.body
    )
  }

  return (
    <>
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
          <div className="flex flex-col items-center space-y-2">
            {enableFullscreen && (
              <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                <Maximize className="w-6 h-6 text-gray-800" />
              </div>
            )}
            <div className="bg-black/60 backdrop-blur-sm rounded-lg px-3 py-1 transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-75">
              <span className="text-white text-sm font-medium">Portrait View</span>
            </div>
          </div>
        </div>
        
        {/* Video title */}
        {title && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 md:p-4">
            <p className="text-white text-sm font-medium drop-shadow-lg">{title}</p>
            <p className="text-white/70 text-xs mt-1">Click for HD portrait view</p>
          </div>
        )}
        
        {/* Play indicator and quality badge */}
        <div className="absolute top-3 right-3 flex flex-col space-y-2">
          <div className={`w-3 h-3 rounded-full ${isPlaying ? 'bg-green-500' : 'bg-red-500'} shadow-lg`}></div>
          <div className="bg-blue-500/90 backdrop-blur-sm rounded px-1.5 py-0.5">
            <span className="text-white text-xs font-medium">HD</span>
          </div>
        </div>
      </div>

      <Modal />
    </>
  )
}
