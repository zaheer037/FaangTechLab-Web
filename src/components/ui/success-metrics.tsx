"use client"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedCounter } from "./animated-counter"
import { TrendingUp, Users, Award, DollarSign } from "lucide-react"

const metrics = [
  {
    icon: Users,
    value: 2500,
    suffix: "+",
    label: "Graduates Placed",
    color: "text-accent-600",
    bgColor: "bg-accent-100",
  },
  {
    icon: TrendingUp,
    value: 95,
    suffix: "%",
    label: "Job Placement Rate",
    color: "text-secondary-600",
    bgColor: "bg-secondary-100",
  },
  {
    icon: DollarSign,
    value: 120,
    prefix: "$",
    suffix: "K",
    label: "Average Starting Salary",
    color: "text-primary-600",
    bgColor: "bg-primary-100",
  },
  {
    icon: Award,
    value: 4.9,
    suffix: "/5",
    label: "Student Satisfaction",
    color: "text-accent-600",
    bgColor: "bg-accent-100",
  },
]

export function SuccessMetrics() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {metrics.map((metric, index) => {
        const Icon = metric.icon
        return (
          <Card
            key={metric.label}
            className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardContent className="p-6">
              <div className={`w-12 h-12 ${metric.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <Icon className={`h-6 w-6 ${metric.color}`} />
              </div>
              <div className="text-3xl font-bold text-primary-800 mb-2">
                <AnimatedCounter end={metric.value} prefix={metric.prefix} suffix={metric.suffix} />
              </div>
              <div className="text-sm text-neutral-600">{metric.label}</div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
