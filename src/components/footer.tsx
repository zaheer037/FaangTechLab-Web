import { Link } from "react-router-dom"
import { Facebook, MessageCircle, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary-800 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-16 h-10 overflow-hidden">
                <img 
                  src="/images/faang-logo.jpg" 
                  alt="FAANG Tech Lab" 
                  className="w-full h-full object-contain" 
                />
              </div>
            </div>
            <p className="text-sm text-primary-100">
              Empowering the next generation of tech professionals with world-class coding education designed to land
              jobs at top tech companies.
            </p>
            <div className="flex space-x-4">
              <Link to="https://www.facebook.com/p/FAANG-Tech-Lab-61563588312882/" className="text-primary-200 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link to="https://api.whatsapp.com/send?phone=918179423238&text=Hi,%20I%20want%20more%20details%20about%20FAANG%20Tech%20Lab%20courses" className="text-primary-200 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
              </Link>
              <Link to="https://www.linkedin.com/in/faang-tech-lab-043855349/" className="text-primary-200 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link to="https://www.instagram.com/faangtechlab?igsh=N3BienRqY3lxeW10" className="text-primary-200 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-primary-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-primary-200 hover:text-white transition-colors">
                  Our Courses
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-primary-200 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-200 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/resources/career-guide" className="text-primary-200 hover:text-white transition-colors">
                  Career Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Popular Courses</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/courses#fullstack" className="text-primary-200 hover:text-white transition-colors">
                  Full Stack Development
                </Link>
              </li>
              <li>
                <Link to="/courses#datascience" className="text-primary-200 hover:text-white transition-colors">
                  Data Science & ML
                </Link>
              </li>
              <li>
                <Link to="/courses#systemdesign" className="text-primary-200 hover:text-white transition-colors">
                  System Design
                </Link>
              </li>
              <li>
                <Link to="/courses#interview" className="text-primary-200 hover:text-white transition-colors">
                  Interview Preparation
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-primary-200 hover:text-white transition-colors">
                  View All Courses
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary-200" />
                <span className="text-primary-200">learn@faangtechlab.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary-200" />
                <span className="text-primary-200">+91 99089 70375</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary-200 mt-0.5" />
                <span className="text-primary-200">
                  Lakshmipuram Main Road,
                  <br />
                  Guntur, Andhra Pradesh
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-primary-700 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-primary-200">
              © {new Date().getFullYear()} FAANG Tech Lab. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-primary-200 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-primary-200 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-primary-200 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
