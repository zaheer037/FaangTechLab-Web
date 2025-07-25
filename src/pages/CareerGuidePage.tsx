import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Download, BookOpen, Target, Users, Award, CheckCircle } from "lucide-react"

export default function CareerGuidePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-secondary text-secondary-900 hover:bg-secondary-400 animate-bounce-in">
              🎯 Career Resources
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-primary-900 sm:text-5xl lg:text-6xl animate-fade-in">
              Your Complete <span className="text-accent-700">FAANG Career</span> Guide
            </h1>
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto animate-slide-up">
              Everything you need to know about landing your dream job at top tech companies. From preparation to
              negotiation, we've got you covered.
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent-600 text-white animate-scale-in">
              <a href="#guide">
                Start Reading <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Guide Content */}
      <section id="guide" className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Introduction */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl text-primary-900">Getting Started</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p>
                  Landing a job at FAANG companies (Facebook/Meta, Amazon, Apple, Netflix, Google) requires strategic
                  preparation, technical excellence, and understanding of what these companies value most in candidates.
                </p>
              </CardContent>
            </Card>

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="animate-slide-up" style={{ animationDelay: "100ms" }}>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6 text-primary-700" />
                  </div>
                  <CardTitle className="text-primary-800">1. Master the Fundamentals</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent-600" />
                      <span className="text-sm">Data Structures & Algorithms</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent-600" />
                      <span className="text-sm">System Design Principles</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent-600" />
                      <span className="text-sm">Programming Languages</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="animate-slide-up" style={{ animationDelay: "200ms" }}>
                <CardHeader>
                  <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-accent-700" />
                  </div>
                  <CardTitle className="text-primary-800">2. Practice Coding</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent-600" />
                      <span className="text-sm">LeetCode Problems (300+)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent-600" />
                      <span className="text-sm">Mock Interviews</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent-600" />
                      <span className="text-sm">Time Management</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="animate-slide-up" style={{ animationDelay: "300ms" }}>
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-secondary-700" />
                  </div>
                  <CardTitle className="text-primary-800">3. Build Your Network</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent-600" />
                      <span className="text-sm">LinkedIn Optimization</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent-600" />
                      <span className="text-sm">Tech Meetups & Events</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent-600" />
                      <span className="text-sm">Referral Strategy</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="animate-slide-up" style={{ animationDelay: "400ms" }}>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-primary-700" />
                  </div>
                  <CardTitle className="text-primary-800">4. Ace the Interview</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent-600" />
                      <span className="text-sm">Behavioral Questions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent-600" />
                      <span className="text-sm">Technical Deep Dives</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent-600" />
                      <span className="text-sm">Salary Negotiation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Download CTA */}
            <Card className="bg-gradient-to-r from-accent-50 to-secondary-50 border-accent-200 animate-bounce-in">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-primary-900 mb-4">Download the Complete Guide</h3>
                <p className="text-neutral-600 mb-6">
                  Get our comprehensive 50-page PDF guide with detailed strategies, templates, and checklists.
                </p>
                <Button size="lg" className="bg-accent hover:bg-accent-600 text-white">
                  <Download className="mr-2 h-5 w-5" />
                  Download Free Guide
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
