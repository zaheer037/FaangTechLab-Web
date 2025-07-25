import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Code,
  Users,
  Trophy,
  ArrowRight,
  CheckCircle,
  BookOpen,
  Target,
  Zap,
  Award,
  TrendingUp,
  Clock,
} from "lucide-react"

import { ParticleBackground } from "@/components/ui/particle-background"
import { FloatingElements } from "@/components/ui/floating-elements"
import { TypingAnimation } from "@/components/ui/typing-animation"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { TestimonialCarousel } from "@/components/ui/testimonial-carousel"
import { InteractiveCard } from "@/components/ui/interactive-card"
import { InstitutionVision } from "@/components/institution-vision"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-accent-50 py-20 lg:py-10 overflow-hidden">
        <ParticleBackground />
        <FloatingElements />
        <div className="container relative z-1">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-4 animate-fade-in">
              <div className="space-y-1">
                <h2 className="text-4xl font-bold tracking-tight text-primary-900 sm:text-5xl lg:text-6xl">
                  Master Coding Skills for{" "}
                  <TypingAnimation
                    texts={["FAANG-Level", "Google", "Facebook", "Amazon", "Netflix", "Apple"]}
                    className="text-accent-700"
                  />{" "}
                  Jobs
                </h2>
                <p className="text-xl text-neutral-700 max-w-2xl animate-slide-up">
                  Join thousands of successful graduates who landed their dream jobs at Facebook, Amazon, Apple,
                  Netflix, Google, and other top tech companies. Our expert-led courses and personalized career support
                  will get you there.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 animate-scale-in">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent hover:bg-accent-600 text-accent-900 text-lg px-8 py-6 hover:scale-105 transition-transform"
                >
                  <Link to="/contact">
                    Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6 border-primary-300 text-primary-700 hover:bg-primary-50 bg-transparent hover:scale-105 transition-transform"
                >
                  <Link to="/courses">Explore Courses</Link>
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4 animate-slide-up" style={{ animationDelay: "600ms" }}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-800">
                    <AnimatedCounter end={95} suffix="%" />
                  </div>
                  <div className="text-sm text-neutral-600">Job Placement Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-800">
                    <AnimatedCounter end={8} prefix="₹" suffix="LPA" />
                  </div>
                  <div className="text-sm text-neutral-600">Average Starting Salary</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-800">
                    <AnimatedCounter end={2500} suffix="+" />
                  </div>
                  <div className="text-sm text-neutral-600">Successful Graduates</div>
                </div>
              </div>
            </div>

            <div className="relative animate-slide-in">
              <div className="relative">
                <img
                  src="/images/Faang_pictures/AP1traininginstutute.jpg"
                  alt="Full Stack Developer Training"
                  className="w-full h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500 object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg animate-float">
                  <div className="flex items-center space-x-2">
                    <Trophy className="h-6 w-6 text-secondary-600" />
                    <span className="font-semibold text-primary-800">Top Rated Bootcamp</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-primary-100 text-primary-800 hover:bg-primary-200">Why Choose FAANG Tech Lab</Badge>
            <h2 className="text-3xl font-bold text-primary-900 sm:text-4xl">Everything You Need to Succeed</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Our comprehensive approach combines cutting-edge curriculum, expert mentorship, and proven career support
              to maximize your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <InteractiveCard className="border-primary-100">
              <CardHeader>
                <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Code className="h-6 w-6 text-accent-700" />
                </div>
                <CardTitle className="text-primary-800">Industry-Relevant Curriculum</CardTitle>
                <CardDescription>
                  Learn the exact technologies and frameworks used by FAANG companies, updated quarterly based on
                  industry trends.
                </CardDescription>
              </CardHeader>
            </InteractiveCard>

            <InteractiveCard className="border-primary-100">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="h-6 w-6 text-secondary-700" />
                </div>
                <CardTitle className="text-primary-800">Expert Mentorship</CardTitle>
                <CardDescription>
                  Get personalized guidance from senior engineers who currently work at or have worked at top tech
                  companies.
                </CardDescription>
              </CardHeader>
            </InteractiveCard>

            <InteractiveCard className="border-primary-100">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Target className="h-6 w-6 text-primary-700" />
                </div>
                <CardTitle className="text-primary-800">Career Support</CardTitle>
                <CardDescription>
                  Comprehensive job placement assistance including resume reviews, mock interviews, and direct
                  connections to hiring managers.
                </CardDescription>
              </CardHeader>
            </InteractiveCard>

            <InteractiveCard className="border-primary-100">
              <CardHeader>
                <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <BookOpen className="h-6 w-6 text-accent-700" />
                </div>
                <CardTitle className="text-primary-800">Hands-On Projects</CardTitle>
                <CardDescription>
                  Build real-world applications that showcase your skills to potential employers and demonstrate your
                  problem-solving abilities.
                </CardDescription>
              </CardHeader>
            </InteractiveCard>

            <InteractiveCard className="border-primary-100">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="h-6 w-6 text-secondary-700" />
                </div>
                <CardTitle className="text-primary-800">Flexible Learning</CardTitle>
                <CardDescription>
                  Choose from full-time intensive or part-time evening programs designed to fit your schedule and
                  learning style.
                </CardDescription>
              </CardHeader>
            </InteractiveCard>

            <InteractiveCard className="border-primary-100">
              <CardHeader>
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Award className="h-6 w-6 text-primary-700" />
                </div>
                <CardTitle className="text-primary-800">Lifetime Access</CardTitle>
                <CardDescription>
                  Get lifetime access to course materials, alumni network, and continued career support even after
                  graduation.
                </CardDescription>
              </CardHeader>
            </InteractiveCard>
          </div>
        </div>
      </section>

      {/* Institution Vision Section */}
      <InstitutionVision />

      {/* Course Highlights */}
      <section className="py-20 bg-gradient-to-br from-accent-50 to-primary-50">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-accent-100 text-accent-800 hover:bg-accent-200">Our Programs</Badge>
            <h2 className="text-3xl font-bold text-primary-900 sm:text-4xl">Choose Your Path to Success</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Specialized programs designed to prepare you for specific roles at top tech companies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Full Stack Web Development Card */}
            <Card className="bg-white border-primary-100 hover:shadow-xl transition-all duration-300">
              <div className="relative w-full h-80 overflow-hidden rounded-t-lg">
                <img
                  src="/images/Faang_pictures/homefullstack.jpeg"
                  alt="MERN Stack Development"
                  className="w-full h-full object-contain object-center"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge className="bg-accent-100 text-accent-800">Most Popular</Badge>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary-800">16 weeks</div>
                    <div className="text-sm text-neutral-600">Full-time</div>
                  </div>
                </div>
                <CardTitle className="text-2xl text-primary-800">Full Stack Web Development</CardTitle>
                <CardDescription className="text-lg">
                  Master modern web technologies including React, Node.js, databases, and cloud deployment.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-accent-600" />
                    <span>Frontend: React, TypeScript, Next.js</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-accent-600" />
                    <span>Backend: Node.js, Express, PostgreSQL</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-accent-600" />
                    <span>DevOps: AWS, Docker, CI/CD</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-accent-600" />
                    <span>5+ Portfolio Projects</span>
                  </div>
                  <Button asChild className="w-full mt-6 bg-accent hover:bg-accent-600 text-accent-900">
                    <Link to="/courses#fullstack">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Data Science & Machine Learning Card */}
            <Card className="bg-white border-primary-100 hover:shadow-xl transition-all duration-300">
              <div className="relative w-full h-80 overflow-hidden rounded-t-lg">
                <img
                  src="/images/Faang_pictures/homeML.jpeg"
                  alt="Data Science & Analytics"
                  className="w-full h-full object-contain object-center"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge className="bg-secondary-100 text-secondary-800">High Demand</Badge>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary-800">20 weeks</div>
                    <div className="text-sm text-neutral-600">Part-time</div>
                  </div>
                </div>
                <CardTitle className="text-2xl text-primary-800">Data Science & Machine Learning</CardTitle>
                <CardDescription className="text-lg">
                  Learn Python, machine learning algorithms, and data analysis techniques used by top tech companies.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-accent-600" />
                    <span>Python, Pandas, NumPy, Scikit-learn</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-accent-600" />
                    <span>Machine Learning & Deep Learning</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-accent-600" />
                    <span>Data Visualization & Statistics</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-accent-600" />
                    <span>Real-world Data Projects</span>
                  </div>
                  <Button asChild className="w-full mt-6 bg-accent hover:bg-accent-600 text-accent-900">
                    <Link to="/courses#datascience">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary-300 text-primary-700 hover:bg-primary-50 bg-transparent"
            >
              <Link to="/courses">
                View All Courses <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-secondary-100 text-secondary-800 hover:bg-secondary-200 animate-bounce-in">
              Success Stories
            </Badge>
            <h2 className="text-3xl font-bold text-primary-900 sm:text-4xl animate-fade-in">What Our Graduates Say</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto animate-slide-up">
              Join thousands of successful graduates who transformed their careers with FAANG Tech Lab.
            </p>
          </div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary-800 text-white">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold sm:text-4xl">Proven Results That Speak for Themselves</h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Our track record of success demonstrates our commitment to your career transformation.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-300 mb-2">2,500+</div>
              <div className="text-primary-100">Graduates Placed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-300 mb-2">95%</div>
              <div className="text-primary-100">Job Placement Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-300 mb-2">8 LPA</div>
              <div className="text-primary-100">Average Starting Salary</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-300 mb-2">4.9/5</div>
              <div className="text-primary-100">Student Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-accent-50 to-secondary-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-accent-100 text-accent-800 hover:bg-accent-200">Ready to Start?</Badge>
            <h2 className="text-3xl font-bold text-primary-900 sm:text-4xl lg:text-5xl">
              Transform Your Career in Tech Today
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Join the next cohort of successful tech professionals. Limited spots available - secure your future with
              FAANG Tech Lab.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent-600 text-accent-900 text-lg px-8 py-6">
                <Link to="/contact">
                  Enroll Now - Limited Spots <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 border-primary-300 text-primary-700 hover:bg-primary-50 bg-transparent"
              >
                <Link to="/courses">Browse Courses</Link>
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-8 pt-8">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-accent-600" />
                <span className="text-sm text-neutral-600">Next cohort starts in 2 weeks</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-accent-600" />
                <span className="text-sm text-neutral-600">95% job placement rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
