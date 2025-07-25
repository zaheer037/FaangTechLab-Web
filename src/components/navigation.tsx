import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"

const resources = [
  {
    title: "Blog",
    href: "/blog",
    description: "Latest coding tips and industry insights",
  },
  {
    title: "Career Guide",
    href: "/resources/career-guide",
    description: "Complete guide to landing FAANG jobs",
  },
  {
    title: "Coding Challenges",
    href: "/resources/challenges",
    description: "Practice problems and solutions",
  },
  {
    title: "Interview Questions",
    href: "/resources/interview-questions",
    description: "Common FAANG interview questions",
  },
  {
    title: "Salary Guide",
    href: "/resources/salary-guide",
    description: "Tech salary data and negotiation tips",
  },
  {
    title: "Student Portal",
    href: "/portal",
    description: "Access your courses and materials",
  },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const pathname = location.pathname

  const isActive = (path: string) => pathname === path

  return (
    <header className="sticky top-0 z-50 w-full nav-backdrop shadow-xl border-b-2 border-primary-100">
      <div className="container flex h-16 items-center justify-between py-2">
        <Link to="/" className="flex items-center space-x-4 group logo-hover">
          <div className="relative w-28 h-14 overflow-hidden">
            <img
              src="/images/faang-logo-svg.jpeg"
              alt="FAANG Tech Lab"
              className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          {/* <div className="hidden lg:block">
            <h1 className="text-xl font-bold text-primary-800 group-hover:text-primary-600 transition-colors">
              FAANG Tech Lab
            </h1>
            <p className="text-sm text-primary-600 font-medium">Code Your Future</p>
          </div> */}
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="space-x-2">
            <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink
                  className={cn(
                    "nav-link group inline-flex h-10 w-max items-center justify-center px-4 py-2 text-sm font-medium transition-all duration-200 hover:text-accent-600 hover:bg-accent/10 rounded-md",
                    isActive("/") && "text-accent-600 bg-accent/10",
                  )}
                >
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="/about">
                <NavigationMenuLink
                  className={cn(
                    "nav-link group inline-flex h-10 w-max items-center justify-center px-4 py-2 text-sm font-medium transition-all duration-200 hover:text-accent-600 hover:bg-accent/10 rounded-md",
                    isActive("/about") && "text-accent-600 bg-accent/10",
                  )}
                >
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="/courses">
                <NavigationMenuLink className={cn(
                  "nav-link group inline-flex h-10 w-max items-center justify-center px-4 py-2 text-sm font-medium transition-all duration-200 hover:text-accent-600 hover:bg-accent/10 rounded-md",
                  isActive("/courses") && "text-accent-600 bg-accent/10",
                )}>
                  Courses
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="nav-link h-10 px-4 py-2 text-sm font-medium transition-all duration-200 hover:text-accent-600 hover:bg-accent/10 rounded-md bg-transparent data-[state=open]:bg-accent/10 data-[state=open]:text-accent-600">
                Resources
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-6 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {resources.map((resource) => (
                    <li key={resource.title}>
                      <NavigationMenuLink asChild>
                        <Link
                          to={resource.href}
                          className="block select-none space-y-2 rounded-lg p-4 leading-none no-underline outline-none transition-all duration-200 hover:bg-accent/10 hover:text-accent-600 focus:bg-accent/10 focus:text-accent-600 border border-transparent hover:border-accent/20"
                        >
                          <div className="text-base font-semibold leading-none">{resource.title}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {resource.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="/blog">
                <NavigationMenuLink
                  className={cn(
                    "nav-link group inline-flex h-10 w-max items-center justify-center px-4 py-2 text-sm font-medium transition-all duration-200 hover:text-accent-600 hover:bg-accent/10 rounded-md",
                    isActive("/blog") && "text-accent-600 bg-accent/10",
                  )}
                >
                  Blog
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link to="/contact">
                <NavigationMenuLink
                  className={cn(
                    "nav-link group inline-flex h-10 w-max items-center justify-center px-4 py-2 text-sm font-medium transition-all duration-200 hover:text-accent-600 hover:bg-accent/10 rounded-md",
                    isActive("/contact") && "text-accent-600 bg-accent/10",
                  )}
                >
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center space-x-4">
          <Button
            asChild
            size="lg"
            className="hidden md:inline-flex enhanced-nav-button text-white font-bold px-8 py-3 text-base hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl rounded-lg border-2 border-accent-300 nav-glow"
          >
            <Link to="/contact">Enroll Now</Link>
          </Button>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="lg" className="p-3">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] sm:w-[400px] mobile-menu-enter">
              <nav className="flex flex-col space-y-6">
                <Link
                  to="/"
                  className="flex items-center space-x-4 text-xl font-bold border-b border-primary-100 pb-4"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="relative w-28 h-16 overflow-hidden">
                    <img src="/images/faang-logo-svg.jpeg" alt="FAANG Tech Lab" className="w-full h-full object-contain" />
                  </div>
                  {/* <div>
                    <h1 className="text-primary-800">FAANG Tech Lab</h1>
                    <p className="text-sm text-primary-600 font-medium">Code Your Future</p>
                  </div> */}
                </Link>
                <div className="flex flex-col space-y-4">
                  <Link 
                    to="/" 
                    className={cn(
                      "text-lg font-semibold hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-accent/20",
                      isActive("/") && "text-primary bg-accent/20"
                    )} 
                    onClick={() => setIsOpen(false)}
                  >
                    🏠 Home
                  </Link>
                  <Link
                    to="/about"
                    className={cn(
                      "text-lg font-semibold hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-accent/20",
                      isActive("/about") && "text-primary bg-accent/20"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    👥 About
                  </Link>
                  <Link
                    to="/courses"
                    className={cn(
                      "text-lg font-semibold hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-accent/20",
                      isActive("/courses") && "text-primary bg-accent/20"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    📚 Courses
                  </Link>
                  <Link
                    to="/blog"
                    className={cn(
                      "text-lg font-semibold hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-accent/20",
                      isActive("/blog") && "text-primary bg-accent/20"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    📝 Blog
                  </Link>
                  <Link
                    to="/contact"
                    className={cn(
                      "text-lg font-semibold hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-accent/20",
                      isActive("/contact") && "text-primary bg-accent/20"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    📞 Contact
                  </Link>
                  
                  {/* Mobile Resources Section */}
                  <div className="border-t border-primary-100 pt-4">
                    <h3 className="text-lg font-bold text-primary-800 mb-3 px-4">📋 Resources</h3>
                    <div className="space-y-2">
                      {resources.slice(0, 4).map((resource) => (
                        <Link
                          key={resource.title}
                          to={resource.href}
                          className="block text-base font-medium hover:text-primary transition-colors py-2 px-6 rounded-lg hover:bg-accent/10"
                          onClick={() => setIsOpen(false)}
                        >
                          {resource.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    asChild 
                    size="lg" 
                    className="mt-6 enhanced-nav-button text-white font-bold text-lg py-4 shadow-lg rounded-lg"
                  >
                    <Link to="/contact" onClick={() => setIsOpen(false)}>
                      Enroll Now
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
