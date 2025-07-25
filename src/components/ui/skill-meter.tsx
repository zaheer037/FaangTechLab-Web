"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

interface SkillMeterProps {
  skills: Array<{
    name: string
    level: number
    color: string
  }>
}

export function SkillMeter({ skills }: SkillMeterProps) {
  const [animatedSkills, setAnimatedSkills] = useState(skills.map((skill) => ({ ...skill, currentLevel: 0 })))
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setAnimatedSkills(skills.map((skill) => ({ ...skill, currentLevel: skill.level })))
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [inView, skills])

  return (
    <div ref={ref} className="space-y-6">
      {animatedSkills.map((skill, index) => (
        <div key={skill.name} className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-primary-800">{skill.name}</span>
            <span className="text-sm text-neutral-600">{skill.level}%</span>
          </div>
          <div className="relative">
            <div className="w-full bg-neutral-200 rounded-full h-3 overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-1000 ease-out ${skill.color}`}
                style={{
                  width: `${skill.currentLevel}%`,
                  transitionDelay: `${index * 200}ms`,
                }}
              />
            </div>
            <div
              className="absolute top-0 left-0 h-full bg-white/30 rounded-full transition-all duration-1000 ease-out"
              style={{
                width: `${skill.currentLevel}%`,
                transitionDelay: `${index * 200}ms`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
