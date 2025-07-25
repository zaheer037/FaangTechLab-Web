import type React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { BookOpen, Video, Users, Award, Lock, ArrowRight, Eye, EyeOff, AlertCircle, CheckCircle } from "lucide-react"

export default function PortalPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    setError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!formData.email || !formData.password) {
      setError("Please fill in all fields")
      return
    }

    setIsLoading(true)

    try {
      // Simulate login process
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Demo credentials
      if (formData.email === "student@faangtechlab.com" && formData.password === "demo123") {
        setIsLoggedIn(true)
      } else {
        setError("Invalid credentials. Try: student@faangtechlab.com / demo123")
      }
    } catch (err) {
      setError("Login failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoggedIn) {
    return (
      <div className="flex flex-col">
        {/* Dashboard Header */}
        <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-12">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-primary-900">Welcome back, John!</h1>
                  <p className="text-neutral-600">Continue your Full Stack Web Development journey</p>
                </div>
                <div className="flex items-center gap-4">
                  <Badge className="bg-accent-100 text-accent-800">Active Student</Badge>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setIsLoggedIn(false)}
                    className="bg-white/80 hover:bg-white"
                  >
                    Logout
                  </Button>
                </div>
              </div>

              {/* Progress Overview */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-primary-800">68%</div>
                    <div className="text-sm text-neutral-600">Course Progress</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-accent-700">12/16</div>
                    <div className="text-sm text-neutral-600">Weeks Completed</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-secondary-600">4</div>
                    <div className="text-sm text-neutral-600">Projects Done</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-destructive-600">A-</div>
                    <div className="text-sm text-neutral-600">Current Grade</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Content */}
        <section className="py-12 bg-white">
          <div className="container">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Current Module */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Video className="h-5 w-5 text-primary-600" />
                      Current Module: Advanced React Patterns
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-primary-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-primary-800 mb-2">Next Lesson: Custom Hooks</h4>
                        <p className="text-sm text-neutral-600 mb-3">
                          Learn how to create reusable custom hooks for state management and side effects.
                        </p>
                        <div className="flex items-center gap-4">
                          <Button className="bg-accent hover:bg-accent-600 text-white">
                            <Video className="mr-2 h-4 w-4" />
                            Continue Learning
                          </Button>
                          <span className="text-sm text-neutral-500">25 min remaining</span>
                        </div>
                      </div>

                      <div className="w-full bg-neutral-200 rounded-full h-2">
                        <div className="bg-accent-500 h-2 rounded-full" style={{ width: "75%" }}></div>
                      </div>
                      <p className="text-sm text-neutral-600">Module Progress: 75% complete</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Assignments */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Assignments</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-accent-50 rounded-lg">
                        <div>
                          <h4 className="font-medium text-primary-800">E-commerce Cart Component</h4>
                          <p className="text-sm text-neutral-600">Due: Tomorrow</p>
                        </div>
                        <Badge className="bg-secondary-100 text-secondary-800">In Progress</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                        <div>
                          <h4 className="font-medium text-primary-800">API Integration Project</h4>
                          <p className="text-sm text-neutral-600">Submitted 2 days ago</p>
                        </div>
                        <Badge className="bg-accent-100 text-accent-800">Graded: A-</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Upcoming Events */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Upcoming Events</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="p-3 bg-primary-50 rounded-lg">
                      <h4 className="font-medium text-primary-800 text-sm">1:1 Mentor Session</h4>
                      <p className="text-xs text-neutral-600">Tomorrow, 2:00 PM</p>
                    </div>
                    <div className="p-3 bg-secondary-50 rounded-lg">
                      <h4 className="font-medium text-primary-800 text-sm">Mock Interview</h4>
                      <p className="text-xs text-neutral-600">Friday, 10:00 AM</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Links */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Quick Links</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <BookOpen className="mr-2 h-4 w-4" />
                      Course Materials
                    </Button>
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <Users className="mr-2 h-4 w-4" />
                      Study Groups
                    </Button>
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <Award className="mr-2 h-4 w-4" />
                      Certificates
                    </Button>
                  </CardContent>
                </Card>

                {/* Support */}
                <Card className="bg-gradient-to-br from-accent-50 to-secondary-50 border-accent-200">
                  <CardContent className="p-4 text-center">
                    <h3 className="font-semibold text-primary-800 mb-2">Need Help?</h3>
                    <p className="text-sm text-neutral-600 mb-3">Our support team is here to help you succeed.</p>
                    <Button size="sm" className="bg-accent hover:bg-accent-600 text-white">
                      Contact Support
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-secondary text-secondary-900 hover:bg-secondary-400">🎓 Student Portal</Badge>
            <h1 className="text-4xl font-bold tracking-tight text-primary-900 sm:text-5xl lg:text-6xl">
              Access Your <span className="text-accent-700">Learning</span> Dashboard
            </h1>
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
              Continue your journey with exclusive course materials, progress tracking, and community access.
            </p>
          </div>
        </div>
      </section>

      {/* Login Form */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-md mx-auto">
            <Card className="animate-fade-in">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-primary-900">Student Login</CardTitle>
                <p className="text-neutral-600">Access your courses and materials</p>
              </CardHeader>
              <CardContent className="space-y-4">
                {error && (
                  <Alert className="border-destructive bg-destructive-50">
                    <AlertCircle className="h-4 w-4 text-destructive" />
                    <AlertDescription className="text-destructive">{error}</AlertDescription>
                  </Alert>
                )}

                <Alert className="border-primary bg-primary-50">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <AlertDescription className="text-primary">
                    <strong>Demo Login:</strong> student@faangtechlab.com / demo123
                  </AlertDescription>
                </Alert>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-primary-200 bg-white
                               placeholder:text-neutral-400 text-neutral-700
                               hover:border-primary-300 hover:bg-white/90
                               focus:outline-none focus:border-primary-400 focus:bg-white 
                               focus:shadow-lg focus:shadow-primary-100/50
                               transition-all duration-300 ease-in-out"
                      disabled={isLoading}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={formData.password}
                        onChange={(e) => handleInputChange("password", e.target.value)}
                        className="w-full px-3 py-2 pr-10 rounded-lg border border-primary-200 bg-white
                                 placeholder:text-neutral-400 text-neutral-700
                                 hover:border-primary-300 hover:bg-white/90
                                 focus:outline-none focus:border-primary-400 focus:bg-white 
                                 focus:shadow-lg focus:shadow-primary-100/50
                                 transition-all duration-300 ease-in-out"
                        disabled={isLoading}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="remember"
                      checked={formData.rememberMe}
                      onChange={(e) => handleInputChange("rememberMe", e.target.checked)}
                      className="rounded border-primary-300"
                    />
                    <Label htmlFor="remember" className="text-sm">
                      Remember me
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent-600 text-white"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <div className="mr-2 h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Signing In...
                      </>
                    ) : (
                      <>
                        <Lock className="mr-2 h-4 w-4" />
                        Sign In
                      </>
                    )}
                  </Button>
                </form>

                <div className="text-center space-y-2">
                  <button className="text-sm text-primary-600 hover:text-primary-800">
                    Forgot your password?
                  </button>
                  <div className="text-sm text-neutral-500">
                    Not enrolled yet?{" "}
                    <Link to="/contact" className="text-primary-600 hover:text-primary-800">
                      Apply now <ArrowRight className="inline h-3 w-3 ml-1" />
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Preview Features */}
            <div className="mt-12 space-y-6">
              <h3 className="text-lg font-semibold text-primary-900 text-center">What's Inside</h3>
              <div className="grid grid-cols-2 gap-4">
                <Card className="text-center animate-slide-up">
                  <CardContent className="p-4">
                    <BookOpen className="h-8 w-8 text-primary-600 mx-auto mb-2" />
                    <p className="text-sm font-medium">Course Materials</p>
                    <p className="text-xs text-neutral-500">PDFs, code samples, resources</p>
                  </CardContent>
                </Card>
                <Card className="text-center animate-slide-up" style={{ animationDelay: "100ms" }}>
                  <CardContent className="p-4">
                    <Video className="h-8 w-8 text-accent-600 mx-auto mb-2" />
                    <p className="text-sm font-medium">Video Lectures</p>
                    <p className="text-xs text-neutral-500">HD videos, live sessions</p>
                  </CardContent>
                </Card>
                <Card className="text-center animate-slide-up" style={{ animationDelay: "200ms" }}>
                  <CardContent className="p-4">
                    <Users className="h-8 w-8 text-secondary-600 mx-auto mb-2" />
                    <p className="text-sm font-medium">Community</p>
                    <p className="text-xs text-neutral-500">Study groups, forums</p>
                  </CardContent>
                </Card>
                <Card className="text-center animate-slide-up" style={{ animationDelay: "300ms" }}>
                  <CardContent className="p-4">
                    <Award className="h-8 w-8 text-destructive-600 mx-auto mb-2" />
                    <p className="text-sm font-medium">Certificates</p>
                    <p className="text-xs text-neutral-500">Completion certificates</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
