import React, { useState, useEffect } from 'react'

interface PreloaderProps {
  onLoadingComplete: () => void
}

const Preloader: React.FC<PreloaderProps> = ({ onLoadingComplete }) => {
  const [lettersVisible, setLettersVisible] = useState<boolean[]>([false, false, false, false, false])
  const [loadingTextVisible, setLoadingTextVisible] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)

  const letters = ['F', 'A', 'A', 'N', 'G']

  useEffect(() => {
    // Show letters sequentially
    const letterTimers = letters.map((_, index) => 
      setTimeout(() => {
        setLettersVisible(prev => {
          const newVisible = [...prev]
          newVisible[index] = true
          return newVisible
        })
      }, 500 + (index * 300)) // Start at 500ms, then 300ms between each letter
    )

    // Show loading text after all letters are visible
    const loadingTextTimer = setTimeout(() => {
      setLoadingTextVisible(true)
    }, 500 + (letters.length * 300) + 500) // 500ms after last letter

    // Start fade out and complete loading
    const fadeOutTimer = setTimeout(() => {
      setFadeOut(true)
      setTimeout(() => {
        onLoadingComplete()
      }, 800) // Wait for fade out animation
    }, 3500) // Total display time of 3.5 seconds

    // Cleanup timers
    return () => {
      letterTimers.forEach(timer => clearTimeout(timer))
      clearTimeout(loadingTextTimer)
      clearTimeout(fadeOutTimer)
    }
  }, [onLoadingComplete])

  return (
    <div className={`faang-preloader ${fadeOut ? 'fade-out' : ''}`}>
      <div className="faang-content">
        {/* FAANG Letters */}
        <div className="faang-letters">
          {letters.map((letter, index) => (
            <span
              key={index}
              className={`faang-letter ${lettersVisible[index] ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {letter}
            </span>
          ))}
        </div>
        
        {/* Loading Text */}
        <div className={`loading-text ${loadingTextVisible ? 'visible' : ''}`}>
          Loading...
        </div>
      </div>
    </div>
  )
}

export default Preloader
