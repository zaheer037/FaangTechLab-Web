import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MessageSquare, Brain, Code, Users } from "lucide-react"

const questionCategories = [
  {
    title: "Behavioral Questions",
    icon: MessageSquare,
    color: "bg-primary-100 text-primary-700",
    questions: [
      {
        question: "Tell me about a time you had to work with a difficult team member.",
        tips: "Use the STAR method (Situation, Task, Action, Result) to structure your answer.",
      },
      {
        question: "Describe a challenging project you worked on.",
        tips: "Focus on your problem-solving process and the impact of your solution.",
      },
      {
        question: "How do you handle tight deadlines?",
        tips: "Discuss prioritization, communication, and time management strategies.",
      },
    ],
  },
  {
    title: "Technical Questions",
    icon: Code,
    color: "bg-accent-100 text-accent-700",
    questions: [
      {
        question: "Explain the difference between SQL and NoSQL databases.",
        tips: "Cover use cases, scalability, consistency, and when to choose each.",
      },
      {
        question: "How would you optimize a slow database query?",
        tips: "Discuss indexing, query optimization, caching, and monitoring.",
      },
      {
        question: "What is the difference between REST and GraphQL?",
        tips: "Compare flexibility, performance, caching, and learning curve.",
      },
    ],
  },
  {
    title: "System Design Questions",
    icon: Brain,
    color: "bg-secondary-100 text-secondary-700",
    questions: [
      {
        question: "Design a URL shortener like bit.ly",
        tips: "Cover database design, caching, load balancing, and analytics.",
      },
      {
        question: "How would you design a chat system like WhatsApp?",
        tips: "Discuss real-time messaging, scalability, and data consistency.",
      },
      {
        question: "Design a social media feed",
        tips: "Consider timeline generation, caching strategies, and personalization.",
      },
    ],
  },
  {
    title: "Leadership Questions",
    icon: Users,
    color: "bg-destructive-100 text-destructive-700",
    questions: [
      {
        question: "How do you motivate underperforming team members?",
        tips: "Discuss one-on-one meetings, goal setting, and providing support.",
      },
      {
        question: "Describe a time you had to make a difficult technical decision.",
        tips: "Explain your decision-making process and how you communicated it.",
      },
      {
        question: "How do you handle conflicting priorities?",
        tips: "Talk about stakeholder communication and impact assessment.",
      },
    ],
  },
]

export default function InterviewQuestionsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-secondary text-secondary-900 hover:bg-secondary-400">❓ Interview Prep</Badge>
            <h1 className="text-4xl font-bold tracking-tight text-primary-900 sm:text-5xl lg:text-6xl">
              Common <span className="text-accent-700">FAANG Interview</span> Questions
            </h1>
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
              Prepare for your interviews with real questions asked at top tech companies, complete with expert tips and
              sample answers.
            </p>
          </div>
        </div>
      </section>

      {/* Questions by Category */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-12">
            {questionCategories.map((category, categoryIndex) => {
              const Icon = category.icon
              return (
                <Card
                  key={category.title}
                  className="animate-slide-up"
                  style={{ animationDelay: `${categoryIndex * 200}ms` }}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${category.color}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {category.questions.map((item, index) => (
                        <AccordionItem key={index} value={`item-${categoryIndex}-${index}`}>
                          <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                          <AccordionContent>
                            <div className="bg-accent-50 p-4 rounded-lg">
                              <p className="text-sm text-neutral-700">
                                <strong>💡 Expert Tip:</strong> {item.tips}
                              </p>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
