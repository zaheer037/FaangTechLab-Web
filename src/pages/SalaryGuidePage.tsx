import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { ProgressBar } from "@/components/ui/progress-bar"
import { MapPin } from "lucide-react"

const salaryData = [
  {
    company: "Google",
    role: "Software Engineer",
    level: "L4",
    baseSalary: 165000,
    totalComp: 280000,
    location: "Mountain View, CA",
  },
  {
    company: "Meta",
    role: "Software Engineer",
    level: "E4",
    baseSalary: 170000,
    totalComp: 290000,
    location: "Menlo Park, CA",
  },
  {
    company: "Amazon",
    role: "Software Engineer",
    level: "SDE II",
    baseSalary: 155000,
    totalComp: 250000,
    location: "Seattle, WA",
  },
  {
    company: "Apple",
    role: "Software Engineer",
    level: "ICT4",
    baseSalary: 160000,
    totalComp: 275000,
    location: "Cupertino, CA",
  },
]

const skillImpact = [
  { skill: "System Design", impact: 95, salary: "+$45K" },
  { skill: "Machine Learning", impact: 88, salary: "+$38K" },
  { skill: "Cloud Architecture", impact: 82, salary: "+$32K" },
  { skill: "Mobile Development", impact: 75, salary: "+$28K" },
  { skill: "DevOps", impact: 70, salary: "+$25K" },
]

export default function SalaryGuidePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-secondary text-secondary-900 hover:bg-secondary-400">💰 Salary Intelligence</Badge>
            <h1 className="text-4xl font-bold tracking-tight text-primary-900 sm:text-5xl lg:text-6xl">
              Tech <span className="text-accent-700">Salary Guide</span> 2024
            </h1>
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
              Get the latest salary data, negotiation strategies, and compensation insights from top tech companies.
            </p>
          </div>
        </div>
      </section>

      {/* Salary Overview */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-primary-900 mb-4">FAANG Salary Ranges</h2>
              <p className="text-neutral-600">Software Engineer compensation at top tech companies</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {salaryData.map((data, index) => (
                <Card
                  key={data.company}
                  className="hover:shadow-lg transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-primary-900">{data.company}</CardTitle>
                      <Badge className="bg-accent-100 text-accent-800">{data.level}</Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-neutral-600">
                      <MapPin className="h-4 w-4" />
                      {data.location}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-neutral-600">Base Salary</span>
                      <span className="font-semibold text-primary-800">
                        <AnimatedCounter end={data.baseSalary} prefix="$" />
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-neutral-600">Total Compensation</span>
                      <span className="font-bold text-accent-700 text-lg">
                        <AnimatedCounter end={data.totalComp} prefix="$" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Impact */}
      <section className="py-20 bg-gradient-to-br from-accent-50 to-secondary-50">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-primary-900 mb-4">Skills That Pay</h2>
              <p className="text-neutral-600">How different skills impact your salary potential</p>
            </div>

            <Card className="animate-fade-in">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {skillImpact.map((skill, index) => (
                    <div key={skill.skill} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-primary-800">{skill.skill}</span>
                        <span className="text-accent-700 font-semibold">{skill.salary}</span>
                      </div>
                      <ProgressBar
                        label=""
                        percentage={skill.impact}
                        color="bg-accent-500"
                        className="animate-scale-in"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
