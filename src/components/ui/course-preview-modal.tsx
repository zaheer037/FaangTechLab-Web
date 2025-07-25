"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Play, Clock, Users, Award, CheckCircle } from "lucide-react"

interface CoursePreviewModalProps {
  course: {
    title: string
    description: string
    duration: string
    students: string
    level: string
    preview: string
    highlights: string[]
    instructor: {
      name: string
      title: string
      image: string
    }
  }
}

export function CoursePreviewModal({ course }: CoursePreviewModalProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="hover:scale-105 transition-transform bg-transparent">
          <Play className="mr-2 h-4 w-4" />
          Preview Course
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-primary-900">{course.title}</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Video Preview */}
          <div className="space-y-4">
            <div className="relative aspect-video bg-neutral-100 rounded-lg overflow-hidden">
              {!isPlaying ? (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-100 to-accent-100">
                  <Button
                    onClick={() => setIsPlaying(true)}
                    size="lg"
                    className="bg-white/90 hover:bg-white text-primary-800 rounded-full w-16 h-16 p-0 hover:scale-110 transition-transform"
                  >
                    <Play className="h-6 w-6 ml-1" />
                  </Button>
                </div>
              ) : (
                <div className="w-full h-full bg-neutral-900 flex items-center justify-center text-white">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-2" />
                    <p>Loading preview...</p>
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center gap-4 text-sm text-neutral-600">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {course.duration}
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                {course.students}
              </div>
              <div className="flex items-center gap-1">
                <Award className="h-4 w-4" />
                {course.level}
              </div>
            </div>
          </div>

          {/* Course Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-primary-800 mb-2">What You'll Learn</h3>
              <ul className="space-y-2">
                {course.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-accent-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-neutral-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t pt-4">
              <h3 className="text-lg font-semibold text-primary-800 mb-3">Your Instructor</h3>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-700 font-semibold">
                    {course.instructor.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-primary-800">{course.instructor.name}</div>
                  <div className="text-sm text-neutral-600">{course.instructor.title}</div>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Button className="flex-1 bg-accent hover:bg-accent-600 text-accent-900">Enroll Now</Button>
              <Button variant="outline" className="flex-1 bg-transparent">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
