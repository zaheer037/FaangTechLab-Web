"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send, Bot, User, Loader2, Sparkles } from "lucide-react"
import ReactMarkdown from "react-markdown"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

const quickQuestions = [
  "What courses do you offer?",
  "How much does the program cost?",
  "What's the job placement rate?",
  "Do you offer payment plans?",
  "How long are the courses?",
  "What are the prerequisites?",
]

const SYSTEM_PROMPT = `You are a helpful assistant for FAANG Tech Lab, a coding bootcamp that helps students land jobs at top tech companies like Facebook, Amazon, Apple, Netflix, and Google.

Key information about FAANG Tech Lab:
- We offer 4 main programs: Full Stack Web Development (16 weeks), Data Science & ML (20 weeks), System Design Mastery (12 weeks), and FAANG Interview Preparation (8 weeks)
- 95% job placement rate with average starting salary of $120K
- 2,500+ successful graduates
- Expert instructors who are former FAANG engineers
- Comprehensive career support including resume reviews, mock interviews, and direct connections to hiring managers
- Flexible learning options (full-time and part-time)
- Lifetime access to course materials and alumni network

Pricing:
- Full Stack: $15,000 (payment plans available)
- Data Science: $18,000 (payment plans available)
- System Design: $8,000
- Interview Prep: $3,000

Prerequisites:
- Basic computer literacy
- No prior coding experience required for Full Stack and Data Science
- Some programming experience recommended for System Design and Interview Prep

Be helpful, friendly, and encouraging. Always try to guide users toward enrolling or learning more about our programs. If asked about specific technical questions, provide helpful general guidance but suggest they enroll for comprehensive training.`

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Hi! I'm your FAANG Tech Lab assistant. I can help you with information about our courses, admissions, pricing, and career support. What would you like to know?",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = async (messageContent: string) => {
    if (!messageContent.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: messageContent,
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, userMessage])
    setInput("")
    setIsLoading(true)
    setError(null)

    try {
      // In a real implementation, you would call your Gemini API endpoint here
      // For now, I'll create a mock response that simulates the API call
      const response = await callGeminiAPI(messageContent)
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: response,
        timestamp: new Date(),
      }

      setMessages(prev => [...prev, assistantMessage])
    } catch (err) {
      setError("Sorry, I'm having trouble connecting. Please try again.")
      console.error("Chat error:", err)
    } finally {
      setIsLoading(false)
    }
  }

    const callGeminiAPI = async (userMessage: string): Promise<string> => {
    // Get API key from environment variables
    const API_KEY = (import.meta as any).env.VITE_GEMINI_API_KEY
    
    console.log('API Key available:', !!API_KEY) // Debug log
    
    if (!API_KEY) {
      // Mock responses for testing when API key is not set
      const mockResponses: { [key: string]: string } = {
        "courses": "We offer 4 main programs: Full Stack Web Development (16 weeks), Data Science & ML (20 weeks), System Design Mastery (12 weeks), and FAANG Interview Preparation (8 weeks). Each program is designed by former FAANG engineers to help you land your dream job!",
        "cost": "Our pricing varies by program: Full Stack ($15,000), Data Science ($18,000), System Design ($8,000), and Interview Prep ($3,000). We offer flexible payment plans to make our programs accessible. Would you like to know more about financing options?",
        "placement": "We have an amazing 95% job placement rate with an average starting salary of $120K! Our 2,500+ successful graduates are now working at top tech companies. We provide comprehensive career support including resume reviews, mock interviews, and direct connections to hiring managers.",
        "payment": "Yes! We offer flexible payment plans to make our programs accessible. You can choose from various options including monthly installments. Our admissions team can work with you to find a payment plan that fits your budget. Would you like to speak with someone about financing options?",
        "prerequisites": "For Full Stack and Data Science programs, you only need basic computer literacy - no prior coding experience required! For System Design and Interview Prep, some programming experience is recommended. We believe anyone can learn to code with the right guidance!",
      }
      
      const lowerMessage = userMessage.toLowerCase()
      for (const [key, response] of Object.entries(mockResponses)) {
        if (lowerMessage.includes(key)) {
          return response
        }
      }
      
      return "I'd be happy to help you with information about FAANG Tech Lab! I can tell you about our courses, pricing, job placement rates, and more. What specific information are you looking for?"
    }

    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `${SYSTEM_PROMPT}\n\nUser: ${userMessage}\nAssistant:`
                }
              ]
            }
          ],
          generationConfig: {
            maxOutputTokens: 500,
            temperature: 0.7,
          },
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        console.error('Gemini API error response:', errorData)
        throw new Error(`API Error: ${response.status} - ${errorData.error?.message || 'Unknown error'}`)
      }

      const data = await response.json()
      
      if (data.candidates && data.candidates[0] && data.candidates[0].content) {
        return data.candidates[0].content.parts[0].text
      } else {
        console.error('Invalid API response structure:', data)
        throw new Error("Invalid response from Gemini API")
      }
    } catch (error) {
      console.error("Gemini API error:", error)
      throw error
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessage(input)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleQuickQuestion = (question: string) => {
    sendMessage(question)
  }

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="rounded-full w-16 h-16 bg-accent hover:bg-accent-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-secondary-500 rounded-full animate-bounce">
          <div className="w-full h-full bg-secondary-500 rounded-full animate-ping"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className={`w-96 shadow-2xl transition-all duration-300 ${isMinimized ? "h-16" : "h-[600px]"}`}>
        <CardHeader className="flex flex-row items-center justify-between p-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-t-lg">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <Bot className="h-4 w-4" />
            </div>
            <div>
              <CardTitle className="text-sm">FAANG Assistant</CardTitle>
              <div className="flex items-center gap-1 text-xs opacity-90">
                <div className="w-2 h-2 bg-accent-300 rounded-full animate-pulse"></div>
                Online
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMinimized(!isMinimized)}
              className="text-white hover:bg-white/20 p-1 h-8 w-8"
            >
              <span className="text-lg">{isMinimized ? "□" : "−"}</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 p-1 h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>

        {!isMinimized && (
          <CardContent className="flex flex-col h-[536px] p-0">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-start gap-2 ${message.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.role === "user" ? "bg-primary-100 text-primary-700" : "bg-accent-100 text-accent-700"
                    }`}
                  >
                    {message.role === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                  </div>
                  <div
                    className={`max-w-[80%] p-3 rounded-lg text-sm ${
                      message.role === "user" ? "bg-primary-500 text-white ml-auto" : "bg-neutral-100 text-neutral-800"
                    }`}
                  >
                    {message.role === "assistant" ? (
                      <ReactMarkdown 
                        components={{
                          p: ({ children }) => <p className="mb-2 last:mb-0 text-neutral-800">{children}</p>,
                          strong: ({ children }) => <strong className="font-semibold text-neutral-900">{children}</strong>,
                          em: ({ children }) => <em className="italic text-neutral-700">{children}</em>,
                          ul: ({ children }) => <ul className="list-disc list-inside mb-2 space-y-1">{children}</ul>,
                          ol: ({ children }) => <ol className="list-decimal list-inside mb-2 space-y-1">{children}</ol>,
                          li: ({ children }) => <li className="text-neutral-800">{children}</li>,
                          h1: ({ children }) => <h1 className="text-lg font-bold text-neutral-900 mb-2">{children}</h1>,
                          h2: ({ children }) => <h2 className="text-base font-semibold text-neutral-900 mb-2">{children}</h2>,
                          h3: ({ children }) => <h3 className="text-sm font-medium text-neutral-900 mb-1">{children}</h3>,
                        }}
                      >
                        {message.content}
                      </ReactMarkdown>
                    ) : (
                      message.content
                    )}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex items-start gap-2">
                  <div className="w-8 h-8 rounded-full bg-accent-100 text-accent-700 flex items-center justify-center">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className="bg-neutral-100 p-3 rounded-lg">
                    <Loader2 className="h-4 w-4 animate-spin" />
                  </div>
                </div>
              )}

              {error && (
                <div className="text-center text-sm text-destructive bg-destructive-50 p-2 rounded-lg">
                  {error}
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            {messages.length <= 1 && (
              <div className="p-4 border-t bg-neutral-50">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="h-4 w-4 text-secondary-600" />
                  <span className="text-sm font-medium text-neutral-700">Quick questions:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {quickQuestions.slice(0, 3).map((question) => (
                    <Button
                      key={question}
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuickQuestion(question)}
                      className="text-xs h-7 bg-white hover:bg-primary-50 border-primary-200"
                    >
                      {question}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <Input
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Ask me anything..."
                  className="flex-1 border-primary-200 focus:border-primary-400"
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  size="sm"
                  disabled={isLoading || !input.trim()}
                  className="bg-accent hover:bg-accent-600 text-white px-3"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  )
}
