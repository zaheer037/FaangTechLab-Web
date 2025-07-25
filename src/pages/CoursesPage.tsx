import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CourseDetailsModal } from "@/components/course-details-modal-fixed"
import {
  Code,
  Brain,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Target,
  Zap,
  BookOpen,
  TrendingUp,
  Laptop,
  Shield,
  Palette,
  Gamepad2,
  School
} from "lucide-react"

export default function CoursesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-secondary text-secondary-900 hover:bg-secondary-400">World-Class Curriculum</Badge>
            <h1 className="text-4xl font-bold tracking-tight text-primary-900 sm:text-5xl lg:text-6xl">
              Courses Designed by <span className="text-accent-700">FAANG Engineers</span>
            </h1>
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
              Master the skills that top tech companies are looking for with our comprehensive, hands-on programs. From
              beginner to FAANG-ready in months, not years.
            </p>
            <div className="flex items-center justify-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-800">12+</div>
                <div className="text-sm text-neutral-600">Course Programs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-800">8-24</div>
                <div className="text-sm text-neutral-600">Weeks Duration</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-800">95%</div>
                <div className="text-sm text-neutral-600">Job Placement</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Courses Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-primary-100 text-primary-800 hover:bg-primary-200">Complete Course Catalog</Badge>
            <h2 className="text-3xl font-bold text-primary-900 sm:text-4xl">All Available Courses</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of courses designed to take you from beginner to industry expert.
            </p>
          </div>

          {/* Main Programming Courses */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-primary-900 mb-8 text-center">Core Programming Tracks</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Full Stack Development */}
              <Card className="bg-white border-primary-100 hover:shadow-xl transition-all duration-300 group">
                <div className="relative w-full h-56 overflow-hidden rounded-t-lg bg-gray-50">
                  <img
                    src="/images/Faang_pictures/fullstackdeveloper.jpg"
                    alt="Full Stack Development"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 left-3 bg-accent-100 text-accent-800">Most Popular</Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <Code className="h-5 w-5 text-accent-600" />
                      <span className="text-sm font-medium text-accent-600">16 weeks</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-neutral-500" />
                      <span className="text-sm text-neutral-500">Max 20</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-primary-800">Full Stack Web Development</CardTitle>
                  <CardDescription>
                    Master modern web development from frontend to backend. Build scalable applications using FAANG technologies.
                  </CardDescription>
                  <div className="flex flex-col sm:flex-row gap-2 pt-4">
                    <CourseDetailsModal 
                      courseId="fullstack" 
                      trigger={
                        <Button className="bg-accent hover:bg-accent-600 text-accent-900 flex-1">
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      } 
                    />
                    <CourseDetailsModal 
                      courseId="fullstack" 
                      variant="quick"
                      trigger={
                        <Button variant="outline" size="sm" className="border-primary-300 text-primary-700">
                          Quick View
                        </Button>
                      } 
                    />
                  </div>
                </CardHeader>
              </Card>

              {/* MERN Stack */}
              <Card className="bg-white border-primary-100 hover:shadow-xl transition-all duration-300 group">
                <div className="relative w-full h-56 overflow-hidden rounded-t-lg bg-gray-50">
                  <img
                    src="/images/Faang_pictures/MERN.jpg"
                    alt="MERN Stack Development"
                    
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 left-3 bg-blue-100 text-blue-800">JavaScript</Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-blue-600" />
                      <span className="text-sm font-medium text-blue-600">18 weeks</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-neutral-500" />
                      <span className="text-sm text-neutral-500">Max 18</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-primary-800">MERN Stack Development</CardTitle>
                  <CardDescription>
                    MongoDB, Express, React, Node.js - the complete JavaScript stack for modern web applications.
                  </CardDescription>
                  <div className="flex flex-col sm:flex-row gap-2 pt-4">
                    <CourseDetailsModal 
                      courseId="mern" 
                      trigger={
                        <Button className="bg-blue-500 hover:bg-blue-600 text-white flex-1">
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      } 
                    />
                    <CourseDetailsModal 
                      courseId="mern" 
                      variant="quick"
                      trigger={
                        <Button variant="outline" size="sm" className="border-primary-300 text-primary-700">
                          Quick View
                        </Button>
                      } 
                    />
                  </div>
                </CardHeader>
              </Card>

              {/* MEAN Stack */}
              <Card className="bg-white border-primary-100 hover:shadow-xl transition-all duration-300 group">
                <div className="relative w-full h-56 overflow-hidden rounded-t-lg bg-gray-50">
                  <img
                    src="/images/Faang_pictures/mean.jpg"
                    alt="MEAN Stack Development"
                    
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 left-3 bg-green-100 text-green-800">Angular</Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-green-600" />
                      <span className="text-sm font-medium text-green-600">20 weeks</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-neutral-500" />
                      <span className="text-sm text-neutral-500">Max 15</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-primary-800">MEAN Stack Development</CardTitle>
                  <CardDescription>
                    MongoDB, Express, Angular, Node.js - enterprise-grade web development with Angular framework.
                  </CardDescription>
                  <div className="flex flex-col sm:flex-row gap-2 pt-4">
                    <CourseDetailsModal 
                      courseId="mean" 
                      trigger={
                        <Button className="bg-green-500 hover:bg-green-600 text-white flex-1">
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      } 
                    />
                    <CourseDetailsModal 
                      courseId="mean" 
                      variant="quick"
                      trigger={
                        <Button variant="outline" size="sm" className="border-primary-300 text-primary-700">
                          Quick View
                        </Button>
                      } 
                    />
                  </div>
                </CardHeader>
              </Card>

              {/* Java Full Stack */}
              <Card className="bg-white border-primary-100 hover:shadow-xl transition-all duration-300 group">
                <div className="relative w-full h-56 overflow-hidden rounded-t-lg bg-gray-50">
                  <img
                    src="/images/Faang_pictures/javafullstack.jpg"
                    alt="Java Full Stack Development"
                    
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 left-3 bg-orange-100 text-orange-800">Enterprise</Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-orange-600" />
                      <span className="text-sm font-medium text-orange-600">22 weeks</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-neutral-500" />
                      <span className="text-sm text-neutral-500">Max 16</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-primary-800">Java Full Stack Development</CardTitle>
                  <CardDescription>
                    Enterprise-level Java development with Spring Boot, microservices, and cloud deployment.
                  </CardDescription>
                  <div className="flex flex-col sm:flex-row gap-2 pt-4">
                    <CourseDetailsModal 
                      courseId="java" 
                      trigger={
                        <Button className="bg-orange-500 hover:bg-orange-600 text-white flex-1">
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      } 
                    />
                    <CourseDetailsModal 
                      courseId="java" 
                      variant="quick"
                      trigger={
                        <Button variant="outline" size="sm" className="border-primary-300 text-primary-700">
                          Quick View
                        </Button>
                      } 
                    />
                  </div>
                </CardHeader>
              </Card>

              {/* Python Development */}
              <Card className="bg-white border-primary-100 hover:shadow-xl transition-all duration-300 group">
                <div className="relative w-full h-56 overflow-hidden rounded-t-lg bg-gray-50">
                  <img
                    src="/images/Faang_pictures/python.jpg"
                    alt="Python Development"
                    
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 left-3 bg-purple-100 text-purple-800">Versatile</Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-purple-600" />
                      <span className="text-sm font-medium text-purple-600">16 weeks</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-neutral-500" />
                      <span className="text-sm text-neutral-500">Max 20</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-primary-800">Python Development</CardTitle>
                  <CardDescription>
                    From web development to AI/ML, master Python for diverse applications in modern tech companies.
                  </CardDescription>
                  <div className="flex flex-col sm:flex-row gap-2 pt-4">
                    <CourseDetailsModal 
                      courseId="python" 
                      trigger={
                        <Button className="bg-purple-500 hover:bg-purple-600 text-white flex-1">
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      } 
                    />
                    <CourseDetailsModal 
                      courseId="python" 
                      variant="quick"
                      trigger={
                        <Button variant="outline" size="sm" className="border-primary-300 text-primary-700">
                          Quick View
                        </Button>
                      } 
                    />
                  </div>
                </CardHeader>
              </Card>

              {/* Data Science & Analytics */}
              <Card className="bg-white border-primary-100 hover:shadow-xl transition-all duration-300 group">
                <div className="relative w-full h-56 overflow-hidden rounded-t-lg bg-gray-50">
                  <img
                    src="/images/Faang_pictures/dataAnalytics.jpg"
                    alt="Data Science & Analytics"
                    
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 left-3 bg-teal-100 text-teal-800">High Demand</Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <Brain className="h-5 w-5 text-teal-600" />
                      <span className="text-sm font-medium text-teal-600">20 weeks</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-neutral-500" />
                      <span className="text-sm text-neutral-500">Max 15</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-primary-800">Data Science & Machine Learning</CardTitle>
                  <CardDescription>
                    Master data science, machine learning, and AI techniques used by top tech companies.
                  </CardDescription>
                  <div className="flex flex-col sm:flex-row gap-2 pt-4">
                    <CourseDetailsModal 
                      courseId="datascience" 
                      trigger={
                        <Button className="bg-teal-500 hover:bg-teal-600 text-white flex-1">
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      } 
                    />
                    <CourseDetailsModal 
                      courseId="datascience" 
                      variant="quick"
                      trigger={
                        <Button variant="outline" size="sm" className="border-primary-300 text-primary-700">
                          Quick View
                        </Button>
                      } 
                    />
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>

          {/* Specialized Courses */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-primary-900 mb-8 text-center">Specialized Programs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Mobile App Development */}
              <Card className="bg-white border-primary-100 hover:shadow-xl transition-all duration-300 group">
                <div className="relative w-full h-56 overflow-hidden rounded-t-lg bg-gray-50">
                  <img
                    src="/images/Faang_pictures/softwaredeveloper.jpg"
                    alt="Mobile App Development"
                    
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 left-3 bg-pink-100 text-pink-800">Cross-Platform</Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <Laptop className="h-5 w-5 text-pink-600" />
                      <span className="text-sm font-medium text-pink-600">18 weeks</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-neutral-500" />
                      <span className="text-sm text-neutral-500">Max 15</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-primary-800">Mobile App Development</CardTitle>
                  <CardDescription>
                    Build native and cross-platform mobile apps using React Native, Flutter, and native technologies.
                  </CardDescription>
                  <div className="flex flex-col sm:flex-row gap-2 pt-4">
                    <CourseDetailsModal 
                      courseId="mobile" 
                      trigger={
                        <Button className="bg-pink-500 hover:bg-pink-600 text-white flex-1">
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      } 
                    />
                    <CourseDetailsModal 
                      courseId="mobile" 
                      variant="quick"
                      trigger={
                        <Button variant="outline" size="sm" className="border-primary-300 text-primary-700">
                          Quick View
                        </Button>
                      } 
                    />
                  </div>
                </CardHeader>
              </Card>

              {/* DevOps & Cloud */}
              <Card className="bg-white border-primary-100 hover:shadow-xl transition-all duration-300 group">
                <div className="relative w-full h-56 overflow-hidden rounded-t-lg bg-gray-50">
                  <img
                    src="/images/Faang_pictures/cybercourse.jpg"
                    alt="DevOps & Cloud Engineering"
                    
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 left-3 bg-indigo-100 text-indigo-800">Cloud-First</Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <Shield className="h-5 w-5 text-indigo-600" />
                      <span className="text-sm font-medium text-indigo-600">16 weeks</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-neutral-500" />
                      <span className="text-sm text-neutral-500">Max 12</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-primary-800">DevOps & Cloud Engineering</CardTitle>
                  <CardDescription>
                    Master AWS, Docker, Kubernetes, CI/CD pipelines, and infrastructure automation.
                  </CardDescription>
                  <div className="flex flex-col sm:flex-row gap-2 pt-4">
                    <CourseDetailsModal 
                      courseId="devops" 
                      trigger={
                        <Button className="bg-indigo-500 hover:bg-indigo-600 text-white flex-1">
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      } 
                    />
                    <CourseDetailsModal 
                      courseId="devops" 
                      variant="quick"
                      trigger={
                        <Button variant="outline" size="sm" className="border-primary-300 text-primary-700">
                          Quick View
                        </Button>
                      } 
                    />
                  </div>
                </CardHeader>
              </Card>

              {/* UI/UX Design */}
              <Card className="bg-white border-primary-100 hover:shadow-xl transition-all duration-300 group">
                <div className="relative w-full h-56 overflow-hidden rounded-t-lg bg-gray-50">
                  <img
                    src="/images/Faang_pictures/upskillyourself.jpg"
                    alt="UI/UX Design"
                    
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 left-3 bg-rose-100 text-rose-800">Creative</Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <Palette className="h-5 w-5 text-rose-600" />
                      <span className="text-sm font-medium text-rose-600">14 weeks</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-neutral-500" />
                      <span className="text-sm text-neutral-500">Max 18</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-primary-800">UI/UX Design</CardTitle>
                  <CardDescription>
                    Design beautiful, user-centered interfaces with modern tools and design thinking principles.
                  </CardDescription>
                  <div className="flex flex-col sm:flex-row gap-2 pt-4">
                    <CourseDetailsModal 
                      courseId="uiux" 
                      trigger={
                        <Button className="bg-rose-500 hover:bg-rose-600 text-white flex-1">
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      } 
                    />
                    <CourseDetailsModal 
                      courseId="uiux" 
                      variant="quick"
                      trigger={
                        <Button variant="outline" size="sm" className="border-primary-300 text-primary-700">
                          Quick View
                        </Button>
                      } 
                    />
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>

          {/* Special Programs */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-primary-900 mb-8 text-center">Special Programs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Interview Prep Program */}
              <Card className="bg-gradient-to-br from-accent-50 to-secondary-50 border-accent-200 hover:shadow-xl transition-all duration-300 group">
                <div className="relative w-full h-72 overflow-hidden rounded-t-lg bg-gray-50">
                  <img
                    src="/images/Faang_pictures/conquer.jpg"
                    alt="Interview Preparation"
                    
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 left-3 bg-accent text-accent-900 font-semibold">🎯 Interview Prep</Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Target className="h-5 w-5 text-accent-600" />
                      <span className="text-sm font-medium text-accent-600">8 weeks intensive</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-yellow-500 -current" />
                      <span className="text-sm text-neutral-600">95% success rate</span>
                    </div>
                  </div>
                  <CardTitle className="text-2xl text-primary-800 mb-3">FAANG Interview Mastery</CardTitle>
                  <CardDescription className="text-base mb-4">
                    Intensive program designed to help you crack interviews at top tech companies. Practice with real FAANG engineers, 
                    solve 200+ coding problems, and master system design.
                  </CardDescription>
                  
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-neutral-700">Mock Interviews</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-neutral-700">System Design</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-neutral-700">DSA Practice</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-neutral-700">Resume Review</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <CourseDetailsModal 
                      courseId="interview" 
                      trigger={
                        <Button className="bg-accent hover:bg-accent-600 text-accent-900 flex-1">
                          Start Interview Prep <Zap className="ml-2 h-4 w-4" />
                        </Button>
                      } 
                    />
                    <CourseDetailsModal 
                      courseId="interview" 
                      variant="quick"
                      trigger={
                        <Button variant="outline" size="sm" className="border-accent-300 text-accent-700">
                          View Syllabus
                        </Button>
                      } 
                    />
                  </div>
                </CardHeader>
              </Card>

              {/* Kids Programming */}
              <Card className="bg-gradient-to-br from-primary-50 to-accent-50 border-primary-200 hover:shadow-xl transition-all duration-300 group">
                <div className="relative w-full h-72 overflow-hidden rounded-t-lg bg-gray-50">
                  <img
                    src="/images/Faang_pictures/kids.jpg"
                    alt="Kids Programming"
                    
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 left-3 bg-primary text-primary-900 font-semibold">👨‍👩‍👧‍👦 Kids Program</Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Gamepad2 className="h-5 w-5 text-primary-600" />
                      <span className="text-sm font-medium text-primary-600">12 weeks fun learning</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <School className="h-4 w-4 text-neutral-500" />
                      <span className="text-sm text-neutral-600">Ages 8-16</span>
                    </div>
                  </div>
                  <CardTitle className="text-2xl text-primary-800 mb-3">Kids Coding Academy</CardTitle>
                  <CardDescription className="text-base mb-4">
                    Fun and engaging programming courses designed specifically for young minds. Build games, create animations, 
                    and learn computational thinking through interactive projects.
                  </CardDescription>
                  
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-neutral-700">Scratch Programming</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-neutral-700">Game Development</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-neutral-700">Robotics Basics</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-neutral-700">Python for Kids</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <CourseDetailsModal 
                      courseId="kids" 
                      trigger={
                        <Button className="bg-primary hover:bg-primary-600 text-primary-900 flex-1">
                          Enroll Your Child <TrendingUp className="ml-2 h-4 w-4" />
                        </Button>
                      } 
                    />
                    <CourseDetailsModal 
                      courseId="kids" 
                      variant="quick"
                      trigger={
                        <Button variant="outline" size="sm" className="border-primary-300 text-primary-700">
                          Age Groups
                        </Button>
                      } 
                    />
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-secondary-100 text-secondary-800 hover:bg-secondary-200">Learning Journey</Badge>
            <h2 className="text-3xl font-bold text-primary-900 sm:text-4xl">Your Path to FAANG Success</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Follow our proven methodology that has helped thousands of students land their dream jobs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="bg-white border-primary-100 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-accent-700" />
                </div>
                <CardTitle className="text-primary-800">1. Foundation</CardTitle>
                <CardDescription>Master the fundamentals with hands-on projects and expert guidance.</CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white border-primary-100 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="h-8 w-8 text-secondary-700" />
                </div>
                <CardTitle className="text-primary-800">2. Practice</CardTitle>
                <CardDescription>Build real-world projects and solve complex coding challenges.</CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white border-primary-100 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary-700" />
                </div>
                <CardTitle className="text-primary-800">3. Interview Prep</CardTitle>
                <CardDescription>Practice with mock interviews and get personalized feedback.</CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white border-primary-100 text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-accent-700" />
                </div>
                <CardTitle className="text-primary-800">4. Job Placement</CardTitle>
                <CardDescription>Get connected with top companies and land your dream job.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-accent-100 text-accent-800 hover:bg-accent-200">Ready to Start?</Badge>
            <h2 className="text-3xl font-bold text-primary-900 sm:text-4xl lg:text-5xl">
              Your FAANG Career Starts Here
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Join the next cohort and transform your career with our proven curriculum. Limited spots available for our
              upcoming programs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent-600 text-accent-900 text-lg px-8 py-6">
                <Link to="/contact">
                  Apply Now - Limited Spots <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 border-primary-300 text-primary-700 hover:bg-primary-50 bg-transparent"
              >
                <Link to="/contact">Schedule a Call</Link>
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-8 pt-8">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-accent-600" />
                <span className="text-sm text-neutral-600">Next cohort starts February 1st</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-accent-600" />
                <span className="text-sm text-neutral-600">Small class sizes</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
