/*
 * Formspree Integration Setup:
 * 1. Go to https://formspree.io and create a free account
 * 2. Create a new form and get your form ID (it looks like: YOUR_FORM_ID)
 * 3. Replace "YOUR_FORM_ID" in the formspreeEndpoint variable below
 * 4. Example: "https://formspree.io/f/xpzgkwqr"
 * 
 * Formspree Features:
 * - Free tier: 50 submissions/month
 * - Email notifications
 * - Spam protection
 * - Form validation
 * - Dashboard to view submissions
 */

import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ParticleBackground } from "@/components/ui/particle-background"
import { InteractiveCard } from "@/components/ui/interactive-card"
import { CustomCaptcha } from "@/components/ui/custom-captcha"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Calendar,
  Users,
  MessageSquare,
} from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    course: "",
    experience: "",
    goals: "",
    timeline: "",
    message: "",
    newsletter: false,
    terms: false,
    captchaVerified: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleCaptchaVerify = (verified: boolean) => {
    setFormData((prev) => ({ ...prev, captchaVerified: verified }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.captchaVerified) {
      alert("Please complete the verification challenge.")
      return
    }

    setIsSubmitting(true)

    try {
      // Formspree submission
      const formspreeEndpoint = "https://formspree.io/f/mvgqaonj" // Replace with your actual Formspree form ID
      
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          course: formData.course,
          experience: formData.experience,
          goals: formData.goals,
          timeline: formData.timeline,
          message: formData.message,
          newsletter: formData.newsletter,
          // Note: Don't send sensitive data like captcha verification to external services
          _subject: `New Application from ${formData.firstName} ${formData.lastName}`,
          _replyto: formData.email,
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        throw new Error("Failed to submit form")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      alert("There was an error submitting your application. Please try again or contact us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-accent-50 flex items-center justify-center p-4">
        <Card className="max-w-2xl w-full animate-bounce-in">
          <CardContent className="p-12 text-center">
            <div className="w-20 h-20 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-accent-600" />
            </div>
            <h1 className="text-3xl font-bold text-primary-900 mb-4">Application Submitted Successfully!</h1>
            <p className="text-lg text-neutral-600 mb-6">
              Thank you for your interest in FAANG Tech Lab. Our admissions team will review your application and get
              back to you within 24 hours.
            </p>
            <div className="bg-secondary-50 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-primary-800 mb-2">What happens next?</h3>
              <ul className="text-sm text-neutral-600 space-y-2 text-left">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent-600" />
                  Application review (within 24 hours)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent-600" />
                  Technical assessment invitation
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent-600" />
                  One-on-one interview with our team
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent-600" />
                  Enrollment confirmation and course start
                </li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-accent hover:bg-accent-600 text-accent-900">
                <Link to="/">Return to Homepage</Link>
              </Button>
              <Button asChild variant="outline" className="border-primary-300 text-primary-700 hover:bg-primary-50">
                <Link to="/courses">Browse Courses</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-accent-50 py-20 overflow-hidden">
        <ParticleBackground />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-secondary text-secondary-900 hover:bg-secondary-400">Get in Touch</Badge>
            <h1 className="text-4xl font-bold tracking-tight text-primary-900 sm:text-5xl lg:text-6xl">
              Start Your <span className="text-accent-700">FAANG Journey</span> Today
            </h1>
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
              Ready to transform your career? Our admissions team is here to help you choose the right program and get
              started on your path to a top tech job.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-primary-900 mb-6">Get in Touch</h2>
                <p className="text-neutral-600 mb-8">
                  Have questions about our programs? Want to speak with an admissions counselor? We're here to help you
                  take the next step in your tech career.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-accent-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-800 mb-1">Phone</h3>
                    <p className="text-neutral-600">+91 99089 70375</p>
                    <p className="text-sm text-neutral-500">Mon-Sat, 9AM-6PM PST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-secondary-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-800 mb-1">Email</h3>
                    <p className="text-neutral-600">learn@faangtechlab.com</p>
                    <p className="text-sm text-neutral-500">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-800 mb-1">Locations</h3>
                    <p className="text-neutral-600">Lakshmipuram Main Road,</p>
                    <p className="text-neutral-600">Guntur, Andhra Pradesh (1st floor)</p>
                    <p className="text-sm text-neutral-500">+ Online Programs</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-accent-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-800 mb-1">Office Hours</h3>
                    <p className="text-neutral-600">Monday - Friday: 9AM - 6PM PST</p>
                    <p className="text-neutral-600">Saturday: 10AM - 4PM PST</p>
                    <p className="text-sm text-neutral-500">Closed Sundays</p>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-gradient-to-br from-accent-50 to-primary-50 rounded-xl p-6">
                <h3 className="font-semibold text-primary-800 mb-4">Why Students Choose Us</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-neutral-600">Job Placement Rate</span>
                    <span className="font-bold text-accent-700">95%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-neutral-600">Average Salary Increase</span>
                    <span className="font-bold text-accent-700">$75K</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-neutral-600">Student Satisfaction</span>
                    <span className="font-bold text-accent-700">4.9/5</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-neutral-600">Career Support</span>
                    <span className="font-bold text-accent-700">Lifetime</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Application Form */}
            <div className="lg:col-span-2">
              <Card className="border-primary-100 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary-900">Apply for Admission</CardTitle>
                  <CardDescription className="text-lg">
                    Fill out this form to get started with your application. We'll contact you within 24 hours to
                    schedule your interview.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Hidden fields for Formspree configuration */}
                    <input type="hidden" name="_subject" value="New FAANG Tech Lab Application" />
                    <input type="hidden" name="_next" value={window.location.origin + "/contact"} />
                    <input type="hidden" name="_captcha" value="false" />
                    
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="firstName" className="text-primary-800">
                          First Name *
                        </Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          className="mt-1"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-primary-800">
                          Last Name *
                        </Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          className="mt-1"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="email" className="text-primary-800">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="mt-1"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-primary-800">
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="mt-1"
                          required
                        />
                      </div>
                    </div>

                    {/* Course Selection */}
                    <div>
                      <Label htmlFor="course" className="text-primary-800">
                        Which course are you interested in? *
                      </Label>
                      <Select name="course" onValueChange={(value) => handleInputChange("course", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select a course" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fullstack">Full Stack Web Development</SelectItem>
                          <SelectItem value="datascience">Data Science & Machine Learning</SelectItem>
                          <SelectItem value="devops">DevOps & Cloud Engineering</SelectItem>
                          <SelectItem value="mobile">Mobile App Development</SelectItem>
                          <SelectItem value="cybersecurity">Cybersecurity Engineering</SelectItem>
                          <SelectItem value="systemdesign">System Design Mastery</SelectItem>
                          <SelectItem value="not-sure">Not sure yet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Experience Level */}
                    <div>
                      <Label htmlFor="experience" className="text-primary-800">
                        Current Experience Level *
                      </Label>
                      <Select name="experience" onValueChange={(value) => handleInputChange("experience", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select your experience level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="beginner">Complete Beginner</SelectItem>
                          <SelectItem value="some-coding">Some Coding Experience</SelectItem>
                          <SelectItem value="junior">Junior Developer (0-2 years)</SelectItem>
                          <SelectItem value="mid">Mid-level Developer (2-5 years)</SelectItem>
                          <SelectItem value="senior">Senior Developer (5+ years)</SelectItem>
                          <SelectItem value="career-change">Career Change from Another Field</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Timeline */}
                    <div>
                      <Label htmlFor="timeline" className="text-primary-800">
                        When would you like to start? *
                      </Label>
                      <Select name="timeline" onValueChange={(value) => handleInputChange("timeline", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select your preferred start time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediately">Immediately</SelectItem>
                          <SelectItem value="1-month">Within 1 month</SelectItem>
                          <SelectItem value="2-3-months">2-3 months</SelectItem>
                          <SelectItem value="6-months">6 months</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Goals */}
                    <div>
                      <Label htmlFor="goals" className="text-primary-800">
                        What are your career goals? *
                      </Label>
                      <Textarea
                        id="goals"
                        name="goals"
                        value={formData.goals}
                        onChange={(e) => handleInputChange("goals", e.target.value)}
                        placeholder="Tell us about your career aspirations, target companies, or specific roles you're interested in..."
                        className="mt-1"
                        rows={4}
                        required
                      />
                    </div>

                    {/* Additional Message */}
                    <div>
                      <Label htmlFor="message" className="text-primary-800">
                        Additional Questions or Comments
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Any specific questions about our programs, financing options, or anything else we should know?"
                        className="mt-1"
                        rows={3}
                      />
                    </div>

                    {/* Checkboxes */}
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id="newsletter"
                          name="newsletter"
                          checked={formData.newsletter}
                          onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
                        />
                        <Label htmlFor="newsletter" className="text-sm text-neutral-600 leading-5">
                          I'd like to receive updates about new courses, career tips, and industry insights via email.
                        </Label>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id="terms"
                          name="terms"
                          checked={formData.terms}
                          onCheckedChange={(checked) => handleInputChange("terms", checked as boolean)}
                          required
                        />
                        <Label htmlFor="terms" className="text-sm text-neutral-600 leading-5">
                          I agree to the{" "}
                          <Link to="/terms" className="text-accent-600 hover:text-accent-700 underline">
                            Terms of Service
                          </Link>{" "}
                          and{" "}
                          <Link to="/privacy" className="text-accent-600 hover:text-accent-700 underline">
                            Privacy Policy
                          </Link>
                          . *
                        </Label>
                      </div>
                    </div>

                    {/* Captcha Verification */}
                    <div className="space-y-4">
                      <CustomCaptcha onVerify={handleCaptchaVerify} />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-accent hover:bg-accent-600 text-accent-900 text-lg py-6"
                      disabled={isSubmitting || !formData.terms || !formData.captchaVerified}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin h-5 w-5 mr-2 border-2 border-accent-900 border-t-transparent rounded-full" />
                          Submitting Application...
                        </>
                      ) : (
                        <>
                          Submit Application <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>

                    <p className="text-sm text-neutral-500 text-center">
                      By submitting this form, you'll hear from our admissions team within 24 hours.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Options */}
      <section className="py-20 bg-gradient-to-br from-accent-50 to-primary-50">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold text-primary-900 sm:text-4xl">Other Ways to Connect</h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Choose the method that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <InteractiveCard className="text-center bg-white border-primary-100">
              <CardHeader>
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-accent-700" />
                </div>
                <CardTitle className="text-primary-800">Schedule a Call</CardTitle>
                <CardDescription>
                  Book a 30-minute call with our admissions team to discuss your goals and find the right program.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full bg-accent hover:bg-accent-600 text-accent-900">
                  <Link to="/schedule">Book a Call</Link>
                </Button>
              </CardContent>
            </InteractiveCard>

            <InteractiveCard className="text-center bg-white border-primary-100">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-secondary-700" />
                </div>
                <CardTitle className="text-primary-800">Info Session</CardTitle>
                <CardDescription>
                  Join our weekly virtual info sessions to learn about our programs and ask questions live.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full border-secondary-300 text-secondary-700 hover:bg-secondary-50">
                  <Link to="/info-session">Join Info Session</Link>
                </Button>
              </CardContent>
            </InteractiveCard>

            <InteractiveCard className="text-center bg-white border-primary-100">
              <CardHeader>
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-8 w-8 text-primary-700" />
                </div>
                <CardTitle className="text-primary-800">Live Chat</CardTitle>
                <CardDescription>
                  Get instant answers to your questions from our admissions team via live chat.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full border-primary-300 text-primary-700 hover:bg-primary-50">
                  Start Live Chat
                </Button>
              </CardContent>
            </InteractiveCard>
          </div>
        </div>
      </section>
    </div>
  )
}
