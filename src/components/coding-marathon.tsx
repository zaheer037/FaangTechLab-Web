"use client"

import { OptimizedVideoCarousel } from "./ui/optimized-video-carousel"

export function CodingMarathon() {
  const marathonVideos = [
    {
      src: "/videos/Faang/institute videos/AQOYVd6O6hB_3agnyNP36Kj093vOZq1gbCv-LywCtPKX9w9uaIBGRKvPHbQoI4u7eCxa-7a3gGbkdlMkNN_5deEIwecF4NZI9DYtBtA.mp4",
      title: "Marathon Intensity Behind the Scenes"
    },
    {
      src: "/videos/Faang/marathon/Video-133.mp4",
      title: "Algorithm Marathon Day 1"
    },
    {
      src: "/videos/Faang/marathon/Video-366.mp4", 
      title: "Data Structures Deep Dive"
    },
    {
      src: "/videos/Faang/marathon/Video-610.mp4",
      title: "System Design Challenge"
    },
    {
      src: "/videos/Faang/marathon/Video-779.mp4",
      title: "Coding Interview Practice"
    },
    {
      src: "/videos/Faang/marathon/Video-846.mp4",
      title: "Final Challenge Round"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-indigo-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-16 left-20 w-40 h-40 bg-indigo-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-16 right-20 w-48 h-48 bg-cyan-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-xl mb-8">
            <span className="text-2xl mr-3">⚡</span>
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">Coding Marathon</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Experience the 
            <span className="bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent"> Intensity</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Dive into the high-energy world of our coding marathons. Watch our students tackle 
            challenging problems, master new concepts, and push their limits in real-time collaborative sessions.
          </p>
        </div>

        <div className="mb-12">
          <OptimizedVideoCarousel videos={marathonVideos} speed={50} className="mb-8" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="group text-center p-8 bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border-l-4 border-indigo-500 hover:bg-white/80">
            <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-3xl">⚡</span>
            </div>
            <h3 className="font-bold text-xl mb-4 text-gray-900">Intensive Learning</h3>
            <p className="text-gray-700 leading-relaxed">24-hour coding sessions that push boundaries and accelerate learning through immersive problem-solving experiences</p>
          </div>
          
          <div className="group text-center p-8 bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border-l-4 border-cyan-500 hover:bg-white/80">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-3xl">🏆</span>
            </div>
            <h3 className="font-bold text-xl mb-4 text-gray-900">Competitive Spirit</h3>
            <p className="text-gray-700 leading-relaxed">Team challenges that simulate real-world tech company environments and foster collaborative problem-solving skills</p>
          </div>
          
          <div className="group text-center p-8 bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border-l-4 border-purple-500 hover:bg-white/80">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-3xl">🚀</span>
            </div>
            <h3 className="font-bold text-xl mb-4 text-gray-900">Skill Breakthrough</h3>
            <p className="text-gray-700 leading-relaxed">Rapid skill development through concentrated practice, expert mentorship, and peer collaboration in high-pressure environments</p>
          </div>
        </div>
        
        {/* Statistics bar */}
        <div className="mt-16 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">24</div>
              <div className="text-indigo-100">Hours Non-Stop</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100+</div>
              <div className="text-indigo-100">Problems Solved</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-indigo-100">Teams Participating</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-indigo-100">Completion Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
