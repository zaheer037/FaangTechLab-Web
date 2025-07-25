"use client"

import { LandscapeVideo } from "./ui/landscape-video"
import { Crosshair, Goal, Sparkles, Trophy } from "lucide-react";

export function InstitutionVision() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-indigo-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-6">
            <span className="text-2xl mr-2">  <Crosshair className="h-6 w-6 text-secondary-700" />
</span>
            <span className="text-lg font-semibold text-gray-800">Institution Vision</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Shaping Tomorrow's 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Tech Leaders</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Experience our commitment to excellence and innovation in tech education. 
            Take a virtual tour of our state-of-the-art facilities and see how we're revolutionizing tech education.
          </p>
        </div>
        
        <div className="flex justify-center mb-16">
          <div className="relative max-w-4xl w-full">
            <div className="w-full h-96 mx-auto">
              <LandscapeVideo
                src="/videos/Faang/institute videos/faang_office.mp4"
                title="FAANG Tech Lab - State-of-the-Art Facilities Tour"
                className="w-full h-full border-4 border-white/20"
              />
            </div>
            
            {/* Enhanced decorative elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl opacity-80 animate-float"></div>
            <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl opacity-80 animate-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 -left-12 w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/4 -right-8 w-6 h-6 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full opacity-80 animate-float" style={{ animationDelay: '3s' }}></div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="group p-8 bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 hover:bg-white/80">
           <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
  <span className="text-white text-2xl">
    <Sparkles className="h-6 w-6 text-white" />
  </span>
</div>

            <h3 className="font-bold text-xl mb-4 text-gray-900">Innovation First</h3>
            <p className="text-gray-700 leading-relaxed">Cutting-edge curriculum designed with the latest industry trends and technologies to prepare students for tomorrow's challenges</p>
          </div>
          
          <div className="group p-8 bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 hover:bg-white/80">
<div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-2xl"><Goal className="h-6 w-6 text-white" /></span>
            </div>
            <h3 className="font-bold text-xl mb-4 text-gray-900">Excellence Driven</h3>
            <p className="text-gray-700 leading-relaxed">Industry experts and former FAANG engineers delivering world-class education with personalized mentorship and guidance</p>
          </div>
          
          <div className="group p-8 bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 hover:bg-white/80">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-2xl"><Trophy className="h-6 w-6 text-white" /></span>
            </div>
            <h3 className="font-bold text-xl mb-4 text-gray-900">Success Guaranteed</h3>
            <p className="text-gray-700 leading-relaxed">Proven track record with 95% job placement rate and graduates thriving at top tech companies worldwide</p>
          </div>
        </div>
      </div>
    </section>
  )
}
