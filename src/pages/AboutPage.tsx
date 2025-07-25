import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { StudentAchievements } from "@/components/student-achievements"
import {
  Target,
  Users,
  Award,
  Code,
  Lightbulb,
  ArrowRight,
  Star,
  TrendingUp,
} from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-secondary text-secondary-900 hover:bg-secondary-400">About FAANG Tech Lab</Badge>
            <h1 className="text-4xl font-bold tracking-tight text-primary-900 sm:text-5xl lg:text-6xl">
              Empowering the Next Generation of <span className="text-accent-700">Tech Leaders</span>
            </h1>
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
              Founded by former FAANG engineers, we're on a mission to democratize access to top-tier tech education and
              help ambitious individuals break into the world's most prestigious technology companies.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-primary-100 text-primary-800 hover:bg-primary-200">Our Mission</Badge>
                <h2 className="text-3xl font-bold text-primary-900 sm:text-4xl">
                  Breaking Down Barriers to Tech Success
                </h2>
                <p className="text-lg text-neutral-600">
                  We believe that talent is equally distributed, but opportunity is not. Our mission is to level the
                  playing field by providing world-class coding education that's accessible, practical, and directly
                  aligned with what top tech companies are looking for.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Target className="h-4 w-4 text-accent-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-800 mb-2">Industry-Aligned Curriculum</h3>
                    <p className="text-neutral-600">
                      Our courses are designed by engineers who've worked at FAANG companies and are updated regularly
                      to reflect current industry standards and practices.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="h-4 w-4 text-secondary-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-800 mb-2">Personalized Support</h3>
                    <p className="text-neutral-600">
                      Every student gets dedicated mentorship, career coaching, and ongoing support throughout their
                      learning journey and beyond graduation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="h-4 w-4 text-primary-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-800 mb-2">Proven Results</h3>
                    <p className="text-neutral-600">
                      With a 95% job placement rate and graduates at every major tech company, our track record speaks
                      for itself.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="images\Faang_pictures\upskillyourself.jpg"
                alt="Students collaborating on coding projects"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-800">2,500+</div>
                  <div className="text-sm text-neutral-600">Successful Graduates</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gradient-to-br from-accent-50 to-primary-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <Badge className="bg-accent-100 text-accent-800 hover:bg-accent-200">Our Story</Badge>
              <h2 className="text-3xl font-bold text-primary-900 sm:text-4xl">
                FAANG Tech Lab – From Local Roots to Tech Empowerment
              </h2>
            </div>

            <div className="space-y-8">
              {/* Founding and Early Years */}
              <Card className="bg-white border-primary-100">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    <div className="md:col-span-2 space-y-4">
                      <h3 className="text-2xl font-bold text-primary-800">Founding and Early Years</h3>
                      <p className="text-neutral-600">
                        FAANG Tech Lab was founded in <strong>August 2024</strong> in Lakshmipuram, Guntur, Andhra Pradesh.
                        As a modern training institute, it focuses on hands-on tech education for learners at all levels.
                        Backed by <strong>FAANG IT Solutions (OPC) Pvt. Ltd</strong>, it delivers programs in
                        <strong> Java development, full-stack web technologies, and cybersecurity</strong>.
                      </p>
                      <p className="text-neutral-600">
                        Known for limited batch sizes, air-conditioned classrooms, weekly assessments, and a placement-driven
                        curriculum, it quickly became a destination for job-ready tech education in the region.
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Lightbulb className="h-12 w-12 text-primary-700" />
                      </div>
                      <div className="text-2xl font-bold text-primary-800">2024</div>
                      <div className="text-sm text-neutral-600">Founded</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Growth and Achievements */}
              <Card className="bg-white border-primary-100">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    <div className="text-center md:order-1">
                      <div className="w-24 h-24 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <TrendingUp className="h-12 w-12 text-accent-700" />
                      </div>
                      <div className="text-2xl font-bold text-primary-800">2025</div>
                      <div className="text-sm text-neutral-600">Growth Phase</div>
                    </div>
                    <div className="md:col-span-2 space-y-4 md:order-2">
                      <h3 className="text-2xl font-bold text-primary-800">Growth and Community Building</h3>
                      <p className="text-neutral-600">
                        By early 2025, the lab had already seen success stories—students placed as Java developers and
                        participating in campus drives. An active presence on platforms like <strong>Instagram</strong> helped
                        share recruitment updates and student journeys.
                      </p>
                      <p className="text-neutral-600">
                        This contributed to a growing reputation for delivering quality tech education and forging recruiter
                        collaborations. While inspired by the FAANG acronym, this Guntur-based institution operates
                        independently, with a distinct focus on education.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Transparency Note */}
              <Card className="bg-white border-primary-100">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    <div className="md:col-span-2 space-y-4">
                      <h3 className="text-2xl font-bold text-primary-800">Transparency & The Road Ahead</h3>
                      <p className="text-neutral-600">
                        While detailed biographies or founders' info is limited in the public domain, FAANG Tech Lab continues
                        to evolve as a key player in the local tech ecosystem. For deeper insights or collaboration, you can
                        directly reach out at <strong>+91 99089 70375</strong> or email <strong>learn@faangtechlab.com</strong>.
                      </p>
                      <p className="text-neutral-600">
                        As of July 2025, the lab remains committed to <strong>bridging education and industry</strong> and
                        expanding career-focused programs for emerging tech professionals.
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-24 h-24 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Star className="h-12 w-12 text-secondary-700" />
                      </div>
                      <div className="text-2xl font-bold text-primary-800">2025</div>
                      <div className="text-sm text-neutral-600">Ongoing Impact</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-accent-100 text-accent-800 hover:bg-accent-200">Meet Our Team</Badge>
            <h2 className="text-3xl font-bold text-primary-900 sm:text-4xl">Led by Passionate Educators</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Our core team blends technical expertise with a shared mission to empower students through practical, job-focused education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Kolla Ashok Babu */}
            <Card className="bg-white border-primary-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-primary-100 border-4 border-white shadow-lg">
                    <img
                      src="/images/Faang_pictures/ashoaksir.jpg"
                      alt="Kolla Ashok Babu"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-secondary-500 text-white px-3 py-1 text-xs font-medium">Director</Badge>
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-primary-800 mb-2">Kolla Ashok Babu</CardTitle>
                <CardDescription className="text-secondary-600 font-medium">
                  Director & Academic Operations
                </CardDescription>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <p className="text-sm text-neutral-600 text-center leading-relaxed">
                  Handles institutional operations, guiding company governance and supporting core operations. He contributes to decision-making, helps manage training workflows, and actively supports placement and student success initiatives.
                </p>
              </CardContent>
            </Card>
            {/* Venkat Jillellamudi */}
            <Card className="bg-white border-primary-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-primary-100 border-4 border-white shadow-lg">
                    <img
                      src="/images/Faang_pictures/vjsir.jpg"
                      alt="Venkat Jillellamudi"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-accent-500 text-white px-3 py-1 text-xs font-medium">CEO</Badge>
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-primary-800 mb-2">Venkat Jillellamudi</CardTitle>
                <CardDescription className="text-secondary-600 font-medium">
                  CEO and Director of FAANG IT Solutions
                </CardDescription>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <p className="text-sm text-neutral-600 text-center leading-relaxed">
                  Leads overall operations, strategy, and program development. He ensures smooth execution of training, exams, and events, while driving innovation in Java, Cybersecurity, and Full Stack Development education.
                </p>
              </CardContent>
            </Card>



            {/* Chandhana */}
            <Card className="bg-white border-primary-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-primary-100 border-4 border-white shadow-lg">
                    <img
                      src="/images/Faang_pictures/chandhanamadam.jpeg"
                      alt="Chandhana"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary-500 text-white px-3 py-1 text-xs font-medium">Head of Training</Badge>
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-primary-800 mb-2">Chandhana</CardTitle>
                <CardDescription className="text-secondary-600 font-medium">
                  Head of Training Department
                </CardDescription>
              </CardHeader>
              <CardContent className="px-6 pb-6">
                <p className="text-sm text-neutral-600 text-center leading-relaxed">
                  Leads the training department, ensuring quality instruction, smooth curriculum flow, and trainer coordination. She focuses on hands-on learning, student progress, and placement readiness through continuous evaluation.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Team Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-accent-700" />
              </div>
              <div className="text-2xl font-bold text-primary-800 mb-2">15+</div>
              <div className="text-sm text-neutral-600">Years Combined Experience</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-secondary-700" />
              </div>
              <div className="text-2xl font-bold text-primary-800 mb-2">500+</div>
              <div className="text-sm text-neutral-600">Students Mentored</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-primary-700" />
              </div>
              <div className="text-2xl font-bold text-primary-800 mb-2">95%</div>
              <div className="text-sm text-neutral-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>


      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-primary-100 text-primary-800 hover:bg-primary-200">Our Values</Badge>
            <h2 className="text-3xl font-bold text-primary-900 sm:text-4xl">What Drives Us Every Day</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Target className="h-4 w-4 text-accent-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-800 mb-2">Excellence</h3>
                  <p className="text-neutral-600">
                    We maintain the highest standards in everything we do, from curriculum design to student support.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="h-4 w-4 text-secondary-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-800 mb-2">Inclusivity</h3>
                  <p className="text-neutral-600">
                    We believe diverse perspectives make better technologists and actively work to create an inclusive
                    environment.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Lightbulb className="h-4 w-4 text-primary-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-800 mb-2">Innovation</h3>
                  <p className="text-neutral-600">
                    We continuously evolve our teaching methods and curriculum to stay ahead of industry trends.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Award className="h-4 w-4 text-accent-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-800 mb-2">Integrity</h3>
                  <p className="text-neutral-600">
                    We're transparent about our outcomes and committed to honest, ethical practices in all our
                    interactions.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <TrendingUp className="h-4 w-4 text-secondary-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-800 mb-2">Growth Mindset</h3>
                  <p className="text-neutral-600">
                    We foster a culture of continuous learning and improvement, both for our students and our team.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Star className="h-4 w-4 text-primary-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-800 mb-2">Impact</h3>
                  <p className="text-neutral-600">
                    We measure our success by the positive impact we have on our students' lives and careers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Achievements Section */}
      <StudentAchievements />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-accent-50 to-secondary-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-accent-100 text-accent-800 hover:bg-accent-200">Join Our Mission</Badge>
            <h2 className="text-3xl font-bold text-primary-900 sm:text-4xl lg:text-5xl">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Join thousands of successful graduates who've launched their tech careers with FAANG Tech Lab. Your
              journey to a top tech company starts here.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent-600 text-accent-900 text-lg px-8 py-6">
                <Link to="/contact">
                  Start Your Application <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 border-primary-300 text-primary-700 hover:bg-primary-50 bg-transparent"
              >
                <Link to="/courses">Explore Our Courses</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
