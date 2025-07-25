"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, CheckCircle, Sparkles } from "lucide-react"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubscribed(true)
    setIsLoading(false)
    setEmail("")
  }

  if (isSubscribed) {
    return (
      <Card className="bg-gradient-to-r from-accent-50 to-secondary-50 border-accent-200 animate-bounce-in">
        <CardContent className="p-6 text-center">
          <CheckCircle className="h-12 w-12 text-accent-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-primary-800 mb-2">Welcome to the FAANG Tech Lab Community!</h3>
          <p className="text-neutral-600">
            You'll receive our latest coding tips, industry insights, and course updates.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-gradient-to-r from-primary-50 to-accent-50 border-primary-200 hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="h-5 w-5 text-secondary-600" />
          <Badge className="bg-secondary-100 text-secondary-800">Free Resources</Badge>
        </div>
        <h3 className="text-xl font-semibold text-primary-800 mb-2">Get FAANG Interview Tips & Industry Insights</h3>
        <p className="text-neutral-600 mb-4">
          Join 10,000+ developers getting weekly coding tips, salary insights, and exclusive course previews.
        </p>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <div className="flex-1 relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-400" />
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10 border-primary-200 focus:border-primary-400"
              required
            />
          </div>
          <Button type="submit" disabled={isLoading} className="bg-accent hover:bg-accent-600 text-accent-900 px-6">
            {isLoading ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
        <p className="text-xs text-neutral-500 mt-2">No spam, unsubscribe anytime. We respect your privacy.</p>
      </CardContent>
    </Card>
  )
}
