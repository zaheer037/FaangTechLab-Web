import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Clock, Trophy, Star } from "lucide-react"

const challenges = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array",
    timeLimit: "15 min",
    description: "Find two numbers in an array that add up to a target sum.",
    solved: 1250,
    rating: 4.2,
  },
  {
    id: 2,
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    category: "String",
    timeLimit: "25 min",
    description: "Find the length of the longest substring without repeating characters.",
    solved: 890,
    rating: 4.5,
  },
  {
    id: 3,
    title: "Merge k Sorted Lists",
    difficulty: "Hard",
    category: "Linked List",
    timeLimit: "35 min",
    description: "Merge k sorted linked lists and return it as one sorted list.",
    solved: 420,
    rating: 4.8,
  },
]

export default function ChallengesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-secondary text-secondary-900 hover:bg-secondary-400">💻 Coding Challenges</Badge>
            <h1 className="text-4xl font-bold tracking-tight text-primary-900 sm:text-5xl lg:text-6xl">
              Practice with <span className="text-accent-700">Real Interview</span> Questions
            </h1>
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
              Sharpen your coding skills with curated problems from actual FAANG interviews. Track your progress and
              improve your problem-solving speed.
            </p>
          </div>
        </div>
      </section>

      {/* Challenges List */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            {challenges.map((challenge, index) => (
              <Card
                key={challenge.id}
                className="hover:shadow-lg transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <h3 className="text-xl font-bold text-primary-900">{challenge.title}</h3>
                        <Badge
                          className={
                            challenge.difficulty === "Easy"
                              ? "bg-accent-100 text-accent-800"
                              : challenge.difficulty === "Medium"
                                ? "bg-secondary-100 text-secondary-800"
                                : "bg-destructive-100 text-destructive-800"
                          }
                        >
                          {challenge.difficulty}
                        </Badge>
                        <Badge variant="outline">{challenge.category}</Badge>
                      </div>

                      <p className="text-neutral-600 mb-4">{challenge.description}</p>

                      <div className="flex items-center gap-6 text-sm text-neutral-600">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {challenge.timeLimit}
                        </div>
                        <div className="flex items-center gap-1">
                          <Trophy className="h-4 w-4" />
                          {challenge.solved} solved
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-secondary-400 text-secondary-400" />
                          {challenge.rating}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <Button size="sm" className="bg-accent hover:bg-accent-600 text-white">
                        <Code className="mr-2 h-4 w-4" />
                        Solve
                      </Button>
                      <Button variant="outline" size="sm">
                        View Solution
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <div className="text-center">
              <Button asChild size="lg" variant="outline">
                <Link to="/portal">
                  View All Challenges <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
