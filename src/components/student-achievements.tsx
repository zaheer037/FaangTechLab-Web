"use client"

import { OptimizedVideoCarousel } from "./ui/optimized-video-carousel"
import "../styles/company-scroll.css"

export function StudentAchievements() {
  const successStories = [
    {
      src: "/videos/Faang/success stories/Video-139.mp4",
      title: "From Bootcamp to Google"
    },
    {
      src: "/videos/Faang/success stories/Video-153.mp4",
      title: "Career Change Success at Meta"
    },
    {
      src: "/videos/Faang/success stories/Video-244.mp4",
      title: "Landing Dream Job at Amazon"
    },
    {
      src: "/videos/Faang/success stories/Video-265.mp4",
      title: "Netflix Engineer Journey"
    },
    {
      src: "/videos/Faang/success stories/Video-322.mp4",
      title: "Apple iOS Developer Success"
    },
    {
      src: "/videos/Faang/success stories/Video-585.mp4",
      title: "Microsoft Cloud Engineer"
    },
    {
      src: "/videos/Faang/success stories/Video-90.mp4",
      title: "Startup to FAANG Journey"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-16 w-36 h-36 bg-emerald-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-16 w-44 h-44 bg-teal-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-28 h-28 bg-cyan-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-xl mb-8">
            <span className="text-2xl mr-3">🏆</span>
            <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Student Achievements</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Inspiring 
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"> Success Stories</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Discover the remarkable journeys of our graduates who transformed their careers and landed 
            their dream jobs at the world's most prestigious tech companies through dedication and our comprehensive program.
          </p>
        </div>
        
        <div className="mb-16">
          <OptimizedVideoCarousel videos={successStories} speed={40} className="mb-8" />
        </div>
        
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="group text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border-t-4 border-emerald-500 transform hover:scale-105">
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-2xl font-bold">95%</span>
            </div>
            <h3 className="font-bold text-xl mb-3 text-gray-900">Job Placement</h3>
            <p className="text-gray-700 text-sm leading-relaxed">Successfully placed in tech roles within 6 months</p>
          </div>
          
          <div className="group text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border-t-4 border-teal-500 transform hover:scale-105">
            <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-xl font-bold">$120K</span>
            </div>
            <h3 className="font-bold text-xl mb-3 text-gray-900">Avg Salary</h3>
            <p className="text-gray-700 text-sm leading-relaxed">Average starting salary for our graduates</p>
          </div>
          
          <div className="group text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border-t-4 border-cyan-500 transform hover:scale-105">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-xl font-bold">2500+</span>
            </div>
            <h3 className="font-bold text-xl mb-3 text-gray-900">Graduates</h3>
            <p className="text-gray-700 text-sm leading-relaxed">Success stories and growing every month</p>
          </div>
          
          <div className="group text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border-t-4 border-blue-500 transform hover:scale-105">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-xl font-bold">6mo</span>
            </div>
            <h3 className="font-bold text-xl mb-3 text-gray-900">Avg Time</h3>
            <p className="text-gray-700 text-sm leading-relaxed">Average time to land first tech job</p>
          </div>
        </div>
        
        {/* Enhanced company showcase */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Our Graduates Work At</h3>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl overflow-hidden">
            <div className="relative">
              <div className="flex animate-company-scroll space-x-8 items-center">
                {/* First set of logos */}
                <div className="flex space-x-8 items-center min-w-max">
                  <div className="group hover:scale-110 transition-transform duration-300">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg border hover:shadow-xl transition-shadow duration-300">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" 
                        alt="Google" 
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                  </div>
                  
                  <div className="group hover:scale-110 transition-transform duration-300">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg border hover:shadow-xl transition-shadow duration-300">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" 
                        alt="Meta" 
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                  </div>
                  
                  <div className="group hover:scale-110 transition-transform duration-300">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg border hover:shadow-xl transition-shadow duration-300">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" 
                        alt="Amazon" 
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                  </div>
                  
                  <div className="group hover:scale-110 transition-transform duration-300">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg border hover:shadow-xl transition-shadow duration-300">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
                        alt="Netflix" 
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                  </div>
                  
                  <div className="group hover:scale-110 transition-transform duration-300">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg border hover:shadow-xl transition-shadow duration-300">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" 
                        alt="Apple" 
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                  </div>
                  
                  <div className="group hover:scale-110 transition-transform duration-300">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg border hover:shadow-xl transition-shadow duration-300">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" 
                        alt="Microsoft" 
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                  </div>
                  
                  <div className="group hover:scale-110 transition-transform duration-300">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg border hover:shadow-xl transition-shadow duration-300">
                      <img 
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAABklBMVEX///////38//////v//f7///nrGyPvO4TqBBL5///8//3wMGP89PDufoCmxuUAcczoAADqER71ycsAZ8jsHirvrrPp9vvXPYj216n7oRz4lR7x9vgAc9MAascAWMgAcdQAatHR5fOXv+bH3e9wpdvtJzfyvcFkndnuKEi81Ozq2ebxv8n0vtT68/a4Oo6NRZZChtb88ND78sj///H40134xhT42nX87Lb/wgD+tQD74rD8pwD7nAD63LX4kAD2z6v5gQ35iiX2cwD2eifzXSfvSRvuamL66NT1xJr4qHT1lVDygzrvej7sgVbwkHjvrJ3319D9y4H2r1f4o0H0uJbyw6v2WQb5pVP0ZhfuWD/0wbf7y0HyMwDyqybvayjRMztGld/rlpf4vFH0porpaULBmrT61H2lO2ygkL6nJl72yWFLNZDSx9uLO3jzmnL576RVRJR+W6DrRlNsMIr2lKPuXXiRaqPlaGy5kLqMM4+nVJmhOZDsaZbuN3TspcK3cKHwibLRi7TtVIrPqtHfcKDEXp+zTB7YAAAI30lEQVR4nO1Y/X/Txh2+O0mOTwlSjJ1LE8UvOskocqNEkHXDQDsSCFlZgbB2EDrWKrRbYdCtJaMFjEMI8H/vOSkvxMA+C4wP/HBPsPGdTr7H35fn+z0RoqGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhofGmoIQRk1D6vnnsAzVtkzPzwyJFDDZ/9Nj8+2YxAHP+N5988tsPjdXvjgPHyIfkQEZOdIETcOP7prIHkDoJnPifb6Dbr3cJg3x0amLi1KdKGUzzhb0ZoxRvg/ZjBuaNd8yKko8+m5yc/JTsJ0ANxUux2rfaxCKmJt8tK0p+f3phYQGkFPbmuTGiQAcsxeYxab1TRgWpxTNnl84dynGEUWIrky3/4fPzf/ziiwsXL63AZrayjMmIdezyn7788vznX63AXqayJRFODs9znHj/4K1I/flKpVSqlBVGy4cZHGcsXz19enFxcXX1ypWlpWtfW0wFm82W/9I9OTE5uYArF0bymxmNG82pZqsu4mbTFUE+cD2nNdXixluRGi3toDI6xgw+f/nUZ5+dPnMGpM6ePbu0dP1SoRedvx7vTihSZ7755srFPKxsJmTYdEPpRaDjCBk1XenwdMptOW9lqTFFqpKjdG4EnrtxamJyYeH0IvYGJeAaU2Hvfdvtnjw5cfXqedAFKa5u5xaBWXwiWm7mZpzIlusTv9nMmhl/myo/NlqrVdYO5zCw042TMMfi6nfLy8srK999f/369YtMxfvfRieOd28cHTFGVr76/sLybgLmpGQrDdxqoEgFVDbToD7lG/TNaY2VQepIkfuM2H/vnpxcHT2UFGNGVi59balQ7/xQXup2l/O53EZ7pJq+lzZDol7KUiKtSi9rhbjrbUmpxgo7Hu12F0qja4qeYRgWs/GJqZC6eatcO9O1DWZTw4Y3d8XCaTT8uNUISNioe7LR8p1GVQ2qXHVqbwSakyodIbZKcZP9o3u2VD700jKD3r41WqotHsM++6WLer7gwvdtyn2fiwAvTFieH3CI/xuTqrTbtYKUac0fXy2V2yt88Nvonds/liu1yj8Rdfb+K5QYlmHAmoZFbRsvxJJhq2n+puUIpErtdvvI9lb/Wq2UymsvNwz05vpP31ZKtcq5EWLui19Djaih8hNfYeDnqEjK/xkD1Tu/j5EdU1NlyMGSsY2x2vT0NilGLkMfyocJGwyG5Of1n36A/2q1u4dV/du+jqC3fBk5BHIFYYqlbQWxJcIwJtKnhhS+JCKUMpQ8kMKm0iHU8SmJwzDAAi59wx7kk/MYa09PTxfuY9YFqHv5FS37nfX12zfXIB7tdunfCTG3vwoC5rRC6Qg3dNwI0e0QGamBQ1oxJciAJvFkWFXq2pKUuA2fZI4dTUnpy5Q4rvfKBLV3Sak9rHPlUq2kGpoB3J+be3CHrFVAqj19r7PnO+GqKhdmhAauH2ap54R+y8dUKzZI1Y9TuM+fYlgnM4OkWUSiOKgKzIo0SB36mmI0Np2TygVh5Bo81B5YgJwkc3Nz64lBDk/X1E+YnjFzD5q2ETQYtWgqqcFTJ5RR6ERMtjKfugEpSDHqux5xQuEKksZuHMUSPwGZ4LQifPurVWNsenh4+uMi+kbu5qQGkp6SzoO5uV+UNq38WgGr4eGxYgmjQYMjzFNpMNgslH5dhhb1o4w3A0JzUkZOKkqjpkPSwEkjB45TeepBzl4NRj4eBnZInau1XyKlvPdAeY+qwB67q0gNz6g1yDSRhsIWDqyAAAmlIVuhJUjgellI/aqIUy44SAnXgXNhKR65sV+NuceoV/VfQ4qQjYJUwfBXBE2tM9hYJg97cw+TvA80yco9ReqRmftb+SZNQxgidWMahsRzQx+fJUIsg/3iappKkHJSbgWugE/9hkMd3ONQrx68JqIYmRnu9/s7pNZUJG/s105K7vd6vfvbI5MnW8PDO3cAEHJhEOFzyoRA/MJwPgLZgLhTA3LvC4opgZyC8qPL8lH0UQG4jdFrxBWk+i+Q6iBk2veS/Ys7vdnZXmfvjg4s1Z/ZoQzZVt08wsTKP1B73rIs20YwccgjjMutfBEuQvap6mPz5VDX1yr+TH+ojy24EmqLtFV2beDG3D0qw1jyeHZ29jHZ7uHxxclQf7i/URhRSbmllJka+WjnqLN74tnZGgGZs2JGfhow8Dd4LNlPamhok5tqO3Lnlsr4oRnUiiJmYOsn4yC1G2e2SZMh/IyCFEWmRQ4LwyhkEkLuyVgJeyCZFYSZFOoCCbDkYA92aGdIoZM/FOr05oZBqj+0YRYVHlOb4yC1wYpfq1iRjXGwUulHmeGj/Y1pHRrO09CpKw3imYxT5lRxQTSkA7nHp4ORspNHitT4TJIkT3u9uR9VMvaHttQ4STob4wpwXnL/55udBP5MZsZBakt1gZRbPvKaknpgcpYGJJLQdVEXTkbyJp1XfcZ85CU5ECm0RzO5qZQ9ZnuoJkoi+sqlW48ebeUXxp8lqvrh2sPHT548H1ekctNhIyarmU/cFJUvjcJUEDeGYDqZqCL3DN5yoRdqiepoDsCKk83+Lqle7ynpqHQcegHPEugRSjJqTQ+JOAtSm6YqM3noizD13EAIlkoJ6UapkYpUK0Bc8nogIJNqyYEeoKCKJZuFQRSrO0gijF8khUKHrsC7v/6gIIWVmwnLO1VqeoI5U6IecJCKGRwVpDjPOBnNUqgTdwPOuaBx/dXtwH8BY53NrS3s9fxpQvLkTTaebSnXDW09m0m2V9Hk6S8PH4LU8yc7moWshnynDsnwLrJC0rOIkzjiHkQ+EpjP8iUH70GR/kkHSHBaUGOcFng+gRnGt+2O/8xiFdvtHXFKhWLjDVAC7QnoNvQddiOW8D2qLhCl8AeHqSqtUrLd7m6voeBs+wmRufcQefeZkdJpy7Bx8LEs9eQIco3DjoE5mjfFtvqshPLgZ3hzb8di2xdOLHvPrHBJrdp/IybMXKqLZCyKSSH8CLj8AdfA4xwNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ2N/x/+A1HALnOzGJOHAAAAAElFTkSuQmCC" 
                        alt="TCS" 
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                  </div>
                  
                  <div className="group hover:scale-110 transition-transform duration-300">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg border hover:shadow-xl transition-shadow duration-300">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" 
                        alt="Accenture" 
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                  </div>
                  
                  <div className="group hover:scale-110 transition-transform duration-300">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg border hover:shadow-xl transition-shadow duration-300">
                      <img 
                        src="https://images.seeklogo.com/logo-png/40/2/deloitte-logo-png_seeklogo-407173.png" 
                        alt="Deloitte" 
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                  </div>

                  <div className="group hover:scale-110 transition-transform duration-300">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg border hover:shadow-xl transition-shadow duration-300">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" 
                        alt="Infosys" 
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                  </div>

                  <div className="group hover:scale-110 transition-transform duration-300">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg border hover:shadow-xl transition-shadow duration-300">
                      <img 
                        src="data:image/png;base64,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" 
                        alt="Wipro" 
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Duplicate set for seamless loop */}
                <div className="flex space-x-8 items-center min-w-max">
                  <div className="group hover:scale-110 transition-transform duration-300">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg border hover:shadow-xl transition-shadow duration-300">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" 
                        alt="Google" 
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                  </div>
                  
                  <div className="group hover:scale-110 transition-transform duration-300">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg border hover:shadow-xl transition-shadow duration-300">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" 
                        alt="Meta" 
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                  </div>
                  
                  <div className="group hover:scale-110 transition-transform duration-300">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg border hover:shadow-xl transition-shadow duration-300">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" 
                        alt="Amazon" 
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                  </div>
                  
                  <div className="group hover:scale-110 transition-transform duration-300">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg border hover:shadow-xl transition-shadow duration-300">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
                        alt="Netflix" 
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                  </div>
                  
                  <div className="group hover:scale-110 transition-transform duration-300">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg border hover:shadow-xl transition-shadow duration-300">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" 
                        alt="Apple" 
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                  </div>
                  
                  <div className="group hover:scale-110 transition-transform duration-300">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg border hover:shadow-xl transition-shadow duration-300">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" 
                        alt="Microsoft" 
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                  </div>
                  
                  <div className="group hover:scale-110 transition-transform duration-300">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg border hover:shadow-xl transition-shadow duration-300">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/7/7e/TCS_logo.svg" 
                        alt="TCS" 
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                  </div>
                  
                  <div className="group hover:scale-110 transition-transform duration-300">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg border hover:shadow-xl transition-shadow duration-300">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" 
                        alt="Accenture" 
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                  </div>
                  
                  <div className="group hover:scale-110 transition-transform duration-300">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg border hover:shadow-xl transition-shadow duration-300">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/1/15/Deloitte.svg" 
                        alt="Deloitte" 
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                  </div>

                  <div className="group hover:scale-110 transition-transform duration-300">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg border hover:shadow-xl transition-shadow duration-300">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" 
                        alt="Infosys" 
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                  </div>

                  <div className="group hover:scale-110 transition-transform duration-300">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg border hover:shadow-xl transition-shadow duration-300">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Wipro_Primary_Logo_Color_RGB.svg" 
                        alt="Wipro" 
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
