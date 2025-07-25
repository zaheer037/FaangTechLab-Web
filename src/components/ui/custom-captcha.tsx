"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RefreshCw, Check, X } from "lucide-react"

interface CustomCaptchaProps {
  onVerify: (verified: boolean) => void
  className?: string
}

export function CustomCaptcha({ onVerify, className = "" }: CustomCaptchaProps) {
  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")
  const [userAnswer, setUserAnswer] = useState("")
  const [isVerified, setIsVerified] = useState(false)
  const [attempts, setAttempts] = useState(0)
  const [showError, setShowError] = useState(false)

  const questions = [
    { q: "What is 5 + 3?", a: "8" },
    { q: "What is 10 - 4?", a: "6" },
    { q: "What is 2 × 6?", a: "12" },
    { q: "What is 15 ÷ 3?", a: "5" },
    { q: "What is 7 + 2?", a: "9" },
    { q: "What is 12 - 5?", a: "7" },
    { q: "What is 3 × 4?", a: "12" },
    { q: "What is 20 ÷ 4?", a: "5" },
    { q: "Complete: F-A-A-N-?", a: "G" },
    { q: "How many letters in 'CODE'?", a: "4" },
    { q: "What comes after 'Java'Script?", a: "Script" },
    { q: "HTML stands for HyperText Markup ___?", a: "Language" },
  ]

  const generateQuestion = () => {
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)]
    setQuestion(randomQuestion.q)
    setAnswer(randomQuestion.a.toLowerCase())
    setUserAnswer("")
    setShowError(false)
  }

  useEffect(() => {
    generateQuestion()
  }, [])

  const handleVerify = () => {
    if (userAnswer.toLowerCase().trim() === answer) {
      setIsVerified(true)
      setShowError(false)
      onVerify(true)
    } else {
      setAttempts((prev) => prev + 1)
      setShowError(true)
      setIsVerified(false)
      onVerify(false)

      if (attempts >= 2) {
        generateQuestion()
        setAttempts(0)
      }
    }
  }

  const handleRefresh = () => {
    generateQuestion()
    setAttempts(0)
    setIsVerified(false)
    onVerify(false)
  }

  if (isVerified) {
    return (
      <Card className={`bg-accent-50 border-accent-200 ${className}`}>
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center">
              <Check className="h-4 w-4 text-white" />
            </div>
            <div>
              <p className="text-sm font-medium text-accent-800">Verification Complete</p>
              <p className="text-xs text-accent-600">You're human! 🎉</p>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className={`border-primary-200 ${className}`}>
      <CardContent className="p-4">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-primary-100 rounded flex items-center justify-center">
                <span className="text-xs font-bold text-primary-700">?</span>
              </div>
              <span className="text-sm font-medium text-primary-800">Verify you're human</span>
            </div>
            <Button variant="ghost" size="sm" onClick={handleRefresh} className="h-8 w-8 p-0 hover:bg-primary-50">
              <RefreshCw className="h-4 w-4 text-primary-600" />
            </Button>
          </div>

          <div className="bg-gradient-to-r from-primary-50 to-accent-50 p-3 rounded-lg border border-primary-100">
            <p className="text-sm font-medium text-primary-800 mb-2">{question}</p>
            <div className="flex gap-2">
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                className="flex-1 px-3 py-2 text-sm border border-primary-200 rounded focus:outline-none focus:border-primary-400"
                placeholder="Your answer..."
                onKeyPress={(e) => e.key === "Enter" && handleVerify()}
              />
              <Button onClick={handleVerify} size="sm" className="bg-primary-500 hover:bg-primary-600 text-white">
                Verify
              </Button>
            </div>
          </div>

          {showError && (
            <div className="flex items-center gap-2 text-destructive text-sm">
              <X className="h-4 w-4" />
              <span>
                Incorrect answer. {attempts >= 2 ? "New question generated." : `${3 - attempts} attempts left.`}
              </span>
            </div>
          )}

          <p className="text-xs text-neutral-500">
            This helps us prevent spam and ensure you're a real person interested in our programs.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
