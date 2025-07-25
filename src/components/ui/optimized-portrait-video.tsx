"use client"

import { useEffect, useRef, useState } from "react"
import { Maximize, X, Volume2, VolumeX } from "lucide-react"

interface OptimizedPortraitVideoProps {
  src: string
  title?: string
  className?: string
  autoPlay?: boolean
  muted?: boolean
  loop?: boolean
  onVideoClick?: () => void
  onModalClose?: () => void
}

export function OptimizedPortraitVideo({ 
  src, 
  title, 
  className = "", 
  autoPlay = true, 
  muted = true, 
  loop = true,
  onVideoClick,
  onModalClose
}: OptimizedPortraitVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const modalVideoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isModalMuted, setIsModalMuted] = useState(false)
  const [isModalLoading, setIsModalLoading] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (video && autoPlay) {
      const playPromise = video.play()
      if (playPromise !== undefined) {
        playPromise.then(() => {
          setIsPlaying(true)
        }).catch(() => {
          // Auto-play failed, which is fine
        })
      }
    }
  }, [autoPlay])

  // Effect to handle modal video playback
  useEffect(() => {
    if (isModalOpen && modalVideoRef.current) {
      const modalVideo = modalVideoRef.current
      modalVideo.muted = isModalMuted
      modalVideo.currentTime = 0 // Start from beginning
      
      const handleLoadedData = () => {
        setIsModalLoading(false)
      }
      
      const handleCanPlay = () => {
        setIsModalLoading(false)
      }
      
      modalVideo.addEventListener('loadeddata', handleLoadedData)
      modalVideo.addEventListener('canplay', handleCanPlay)
      
      const playPromise = modalVideo.play()
      if (playPromise !== undefined) {
        playPromise.then(() => {
          console.log('Modal video started playing with audio:', !isModalMuted)
          setIsModalLoading(false)
        }).catch((error) => {
          console.log('Modal video play failed:', error)
          setIsModalLoading(false)
        })
      }
      
      return () => {
        modalVideo.removeEventListener('loadeddata', handleLoadedData)
        modalVideo.removeEventListener('canplay', handleCanPlay)
      }
    }
  }, [isModalOpen, isModalMuted])

  // Keyboard support for modal (ESC to close)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal()
      }
    }

    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown)
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [isModalOpen])

  const handleVideoClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    console.log('Video clicked, opening modal') // Debug log
    setIsModalLoading(true)
    setIsModalOpen(true)
    setIsModalMuted(false) // Enable audio by default
    onVideoClick?.()
  }

  const closeModal = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault()
      e.stopPropagation()
    }
    console.log('Closing modal') // Debug log
    setIsModalOpen(false)
    if (modalVideoRef.current) {
      modalVideoRef.current.pause()
      modalVideoRef.current.currentTime = 0 // Reset video to beginning
    }
    onModalClose?.()
  }

  const handleModalBackdropClick = (e: React.MouseEvent) => {
    // Only close if clicking the backdrop, not the video itself
    if (e.target === e.currentTarget) {
      closeModal(e)
    }
  }

  const handleVideoContainerClick = (e: React.MouseEvent) => {
    // Prevent modal from closing when clicking on video container
    e.stopPropagation()
  }

  const toggleModalMute = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (modalVideoRef.current) {
      modalVideoRef.current.muted = !modalVideoRef.current.muted
      setIsModalMuted(modalVideoRef.current.muted)
    }
  }

  return (
    <>
      <div 
        className={`relative overflow-hidden rounded-xl shadow-lg bg-gray-100 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group ${className}`}
        onClick={handleVideoClick}
        style={{ willChange: 'transform' }}
        title="Click to watch in fullscreen with audio"
      >
        <video
          ref={videoRef}
          src={src}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          playsInline
          preload="metadata"
          className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          style={{ 
            objectFit: 'cover',
            backfaceVisibility: 'hidden',
            transform: 'translateZ(0)'
          }}
        />
        
        {/* Enhanced hover overlay with play icon */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
            <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-xl">
              <Maximize className="w-6 h-6 text-gray-800" />
            </div>
          </div>
          
          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="bg-emerald-500 rounded-full p-3 shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        </div>
        
        {/* Enhanced title with better visibility */}
        {title && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3">
            <p className="text-white text-sm font-semibold leading-tight">{title}</p>
          </div>
        )}
        
        {/* Enhanced status indicator */}
        <div className="absolute top-3 right-3">
          <div className={`w-3 h-3 rounded-full border-2 border-white shadow-lg ${isPlaying ? 'bg-green-400' : 'bg-red-400'}`}></div>
        </div>

        {/* Play indicator overlay */}
        <div className="absolute top-3 left-3 bg-white/20 backdrop-blur-sm rounded-full px-2 py-1">
          <span className="text-white text-xs font-medium">
            {isPlaying ? '▶' : '⏸'}
          </span>
        </div>
      </div>

      {/* Enhanced Fullscreen Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm" 
          onClick={handleModalBackdropClick}
          style={{ backdropFilter: 'blur(8px)' }}
        >
          {/* Enhanced Close button */}
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 z-60 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all duration-200 group"
          >
            <X className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </button>

          {/* Enhanced Mute/Unmute button */}
          <button
            onClick={toggleModalMute}
            className="absolute top-6 left-6 z-60 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all duration-200 group"
          >
            {isModalMuted ? (
              <VolumeX className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            ) : (
              <Volume2 className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            )}
          </button>

          {/* Fullscreen indicator */}
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-60 bg-white/20 rounded-full px-4 py-2">
            <p className="text-white text-sm font-medium">🎬 Fullscreen Mode - Audio Enabled</p>
          </div>

          {/* Enhanced Video container for portrait orientation */}
          <div 
            className="relative flex items-center justify-center w-full h-full p-8" 
            onClick={handleVideoContainerClick}
          >
            <div className="relative w-full max-w-md h-full max-h-[90vh] bg-black rounded-2xl overflow-hidden shadow-2xl">
              {/* Portrait aspect ratio container */}
              <div className="relative w-full h-full aspect-[9/16] bg-black">
                <video
                  ref={modalVideoRef}
                  src={src}
                  autoPlay
                  muted={isModalMuted}
                  loop={loop}
                  playsInline
                  controls={false}
                  className="w-full h-full object-cover rounded-2xl cursor-pointer"
                  style={{ 
                    objectFit: 'cover',
                    transform: 'scale(1)',
                    filter: 'brightness(1.05) contrast(1.05)'
                  }}
                  onClick={handleVideoContainerClick}
                />
                
                {/* Loading indicator */}
                {isModalLoading && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="bg-white/20 rounded-full p-4">
                      <div className="animate-spin rounded-full h-8 w-8 border-2 border-white border-t-transparent"></div>
                    </div>
                  </div>
                )}
                
                {/* Enhanced Video Controls Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 pointer-events-none">
                  {/* Top area - additional controls could go here */}
                  <div className="flex justify-end">
                    <div className="bg-white/20 rounded-full px-3 py-1">
                      <span className="text-white text-xs font-medium">Success Story</span>
                    </div>
                  </div>
                  
                  {/* Bottom area - title and info */}
                  <div>
                    {title && (
                      <div className="text-center mb-4">
                        <h3 className="text-white text-xl font-bold mb-2 leading-tight">{title}</h3>
                        <p className="text-white/80 text-sm">🔊 Audio Enabled • Click outside video to close</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Audio indicator */}
                <div className="absolute bottom-6 right-6 bg-white/20 rounded-full p-2 pointer-events-none">
                  {isModalMuted ? (
                    <VolumeX className="w-4 h-4 text-white" />
                  ) : (
                    <Volume2 className="w-4 h-4 text-white" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
