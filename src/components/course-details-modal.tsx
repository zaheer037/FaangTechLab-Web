import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  CheckCircle,
  Clock,
  Users,
  Star,
  Award,
  Target,
  BookOpen,
  Code,
  DollarSign
} from "lucide-react"

export interface CourseData {
  id: string
  title: string
  subtitle: string
  description: string
  image: string
  duration: string
  capacity: string
  level: string
  badge: {
    text: string
    color: string
  }
  price: {
    original: string
    current: string
  }
  features: string[]
  curriculum: {
    module: string
    topics: string[]
  }[]
  instructor: {
    name: string
    title: string
    experience: string
  }
  outcomes: string[]
  prerequisites: string[]
  tools: string[]
  certificate: string
  jobSupport: string[]
}

const courseDatabase: Record<string, CourseData> = {
  "fullstack": {
    id: "fullstack",
    title: "Full Stack Web Development",
    subtitle: "Master Modern Web Technologies",
    description: "Complete bootcamp covering frontend, backend, and DevOps. Build production-ready applications using the latest technologies preferred by FAANG companies.",
    image: "/images/Faang_pictures/fullstackdeveloper.jpg",
    duration: "16 weeks",
    capacity: "Max 20 students",
    level: "Beginner to Advanced",
    badge: { text: "Most Popular", color: "bg-accent-100 text-accent-800" },
    price: { original: "$4,999", current: "$3,499" },
    features: [
      "Frontend: React, TypeScript, Next.js",
      "Backend: Node.js, Express, PostgreSQL",
      "DevOps: AWS, Docker, CI/CD",
      "5+ Portfolio Projects",
      "1-on-1 Mentorship",
      "Job Placement Support"
    ],
    curriculum: [
      {
        module: "Frontend Development",
        topics: ["HTML5, CSS3, JavaScript ES6+", "React.js & Hooks", "TypeScript", "Next.js", "Tailwind CSS", "State Management (Redux/Zustand)"]
      },
      {
        module: "Backend Development", 
        topics: ["Node.js & Express", "RESTful APIs", "Database Design", "Authentication & Security", "Testing (Jest, Supertest)", "API Documentation"]
      },
      {
        module: "Database & Cloud",
        topics: ["PostgreSQL/MongoDB", "Prisma ORM", "AWS Services", "Docker & Containerization", "CI/CD Pipelines", "Performance Optimization"]
      }
    ],
    instructor: {
      name: "Sarah Chen",
      title: "Senior Full Stack Engineer at Meta",
      experience: "8+ years at Facebook, Google"
    },
    outcomes: [
      "Build full-stack applications from scratch",
      "Deploy applications to cloud platforms",
      "Implement authentication and security",
      "Work with modern development workflows",
      "Pass technical interviews at top companies"
    ],
    prerequisites: ["Basic programming knowledge", "Familiarity with web browsers"],
    tools: ["VS Code", "Git & GitHub", "Postman", "AWS Console", "Docker"],
    certificate: "Industry-recognized certificate upon completion",
    jobSupport: ["Resume optimization", "Mock interviews", "Portfolio review", "Job referrals", "Salary negotiation"]
  },
  "mern": {
    id: "mern",
    title: "MERN Stack Development",
    subtitle: "MongoDB, Express, React, Node.js",
    description: "Master the complete JavaScript stack used by leading startups and tech companies. Build scalable web applications with modern JavaScript technologies.",
    image: "/images/Faang_pictures/MERN.jpg",
    duration: "18 weeks",
    capacity: "Max 18 students",
    level: "Intermediate",
    badge: { text: "JavaScript", color: "bg-blue-100 text-blue-800" },
    price: { original: "$4,799", current: "$3,299" },
    features: [
      "MongoDB Database Design",
      "Express.js Server Development",
      "React.js Frontend",
      "Node.js Backend",
      "Real-time Applications",
      "E-commerce Project"
    ],
    curriculum: [
      {
        module: "React Frontend",
        topics: ["Component Architecture", "State Management", "React Router", "Forms & Validation", "Performance Optimization", "Testing"]
      },
      {
        module: "Node.js Backend",
        topics: ["Express.js Framework", "Middleware", "Authentication", "File Uploads", "Email Integration", "Real-time with Socket.io"]
      },
      {
        module: "MongoDB & Deployment",
        topics: ["Database Modeling", "Aggregation Pipelines", "Indexing", "Cloud Deployment", "Security Best Practices", "Monitoring"]
      }
    ],
    instructor: {
      name: "Michael Rodriguez",
      title: "Lead Developer at Netflix",
      experience: "6+ years at Netflix, Airbnb"
    },
    outcomes: [
      "Build complete MERN applications",
      "Implement real-time features",
      "Design scalable architectures",
      "Deploy to production environments",
      "Optimize application performance"
    ],
    prerequisites: ["JavaScript fundamentals", "Basic React knowledge"],
    tools: ["MongoDB Compass", "Postman", "React DevTools", "Node.js", "Git"],
    certificate: "MERN Stack Developer Certificate",
    jobSupport: ["Technical interview prep", "Portfolio projects", "Industry connections", "Career guidance"]
  },
  "interview": {
    id: "interview",
    title: "FAANG Interview Mastery",
    subtitle: "Crack Technical Interviews",
    description: "Intensive program designed specifically for landing jobs at FAANG companies. Practice with real engineers and master the interview process.",
    image: "/images/Faang_pictures/conquer.jpg",
    duration: "8 weeks intensive",
    capacity: "Max 12 students",
    level: "All Levels",
    badge: { text: "Interview Prep", color: "bg-accent text-accent-900" },
    price: { original: "$2,999", current: "$1,999" },
    features: [
      "200+ Coding Problems",
      "System Design Practice",
      "Mock Interviews",
      "Resume Optimization",
      "Behavioral Prep",
      "Salary Negotiation"
    ],
    curriculum: [
      {
        module: "Data Structures & Algorithms",
        topics: ["Arrays & Strings", "Linked Lists", "Trees & Graphs", "Dynamic Programming", "Recursion & Backtracking", "Time & Space Complexity"]
      },
      {
        module: "System Design",
        topics: ["Scalability Principles", "Database Design", "Caching Strategies", "Load Balancing", "Microservices", "Real System Examples"]
      },
      {
        module: "Interview Skills",
        topics: ["Communication Techniques", "Problem-solving Approach", "Behavioral Questions", "Company Research", "Negotiation Tactics", "Follow-up Strategies"]
      }
    ],
    instructor: {
      name: "David Kim",
      title: "Staff Engineer at Google",
      experience: "10+ years at Google, Amazon"
    },
    outcomes: [
      "Solve complex coding problems",
      "Design large-scale systems",
      "Excel in behavioral interviews",
      "Negotiate competitive offers",
      "Land offers at top companies"
    ],
    prerequisites: ["Programming experience", "Basic CS knowledge"],
    tools: ["LeetCode Premium", "System Design Tools", "Mock Interview Platform"],
    certificate: "Interview Mastery Certificate",
    jobSupport: ["Direct referrals", "Offer evaluation", "Negotiation support", "Onboarding guidance"]
  },
  "kids": {
    id: "kids",
    title: "Kids Coding Academy",
    subtitle: "Programming for Young Minds",
    description: "Fun and engaging programming courses designed for children. Build games, create animations, and learn computational thinking through hands-on projects.",
    image: "/images/Faang_pictures/kids.jpg",
    duration: "12 weeks",
    capacity: "Max 15 students",
    level: "Beginner (Ages 8-16)",
    badge: { text: "Kids Program", color: "bg-primary text-primary-900" },
    price: { original: "$1,499", current: "$999" },
    features: [
      "Scratch Programming",
      "Game Development",
      "Robotics Basics",
      "Python for Kids",
      "Creative Projects",
      "Certificate of Achievement"
    ],
    curriculum: [
      {
        module: "Visual Programming (Ages 8-12)",
        topics: ["Scratch Basics", "Animation & Games", "Storytelling", "Problem Solving", "Logic & Loops", "Creative Projects"]
      },
      {
        module: "Text-based Programming (Ages 13-16)",
        topics: ["Python Fundamentals", "Game Development", "Web Basics", "Data & Variables", "Functions", "Project Showcase"]
      },
      {
        module: "Robotics & Hardware",
        topics: ["Basic Electronics", "Sensor Programming", "Robot Control", "IoT Projects", "3D Design", "Team Challenges"]
      }
    ],
    instructor: {
      name: "Emily Johnson",
      title: "Computer Science Education Specialist",
      experience: "5+ years teaching kids programming"
    },
    outcomes: [
      "Create their own games and animations",
      "Understand programming logic",
      "Develop problem-solving skills",
      "Build confidence in technology",
      "Prepare for advanced courses"
    ],
    prerequisites: ["No prior experience needed", "Age 8-16", "Basic computer skills"],
    tools: ["Scratch", "Python IDLE", "Minecraft Education", "Micro:bit", "Code.org"],
    certificate: "Young Programmer Certificate",
    jobSupport: ["STEM career guidance", "Advanced course pathways", "Coding competition prep"]
  },
  "mean": {
    id: "mean",
    title: "MEAN Stack Development",
    subtitle: "MongoDB, Express, Angular, Node.js",
    description: "Enterprise-grade web development with Angular framework. Build scalable applications using the complete JavaScript stack preferred by large corporations.",
    image: "/images/Faang_pictures/mean.jpg",
    duration: "20 weeks",
    capacity: "Max 15 students",
    level: "Intermediate to Advanced",
    badge: { text: "Angular", color: "bg-green-100 text-green-800" },
    price: { original: "$4,999", current: "$3,499" },
    features: [
      "Angular Framework Mastery",
      "TypeScript Development",
      "Enterprise Architecture",
      "MongoDB & Express.js",
      "Node.js Backend",
      "Enterprise Project"
    ],
    curriculum: [
      {
        module: "Angular Frontend",
        topics: ["Angular CLI", "Components & Services", "Routing", "Forms & Validation", "State Management", "Testing"]
      },
      {
        module: "Backend Development",
        topics: ["Express.js API", "MongoDB Integration", "Authentication", "File Handling", "Real-time Features", "Performance"]
      },
      {
        module: "Enterprise Features",
        topics: ["Microservices", "Security", "Deployment", "Monitoring", "CI/CD", "Documentation"]
      }
    ],
    instructor: {
      name: "Alex Thompson",
      title: "Senior Angular Developer at Microsoft",
      experience: "7+ years at Microsoft, IBM"
    },
    outcomes: [
      "Build enterprise Angular applications",
      "Implement complex business logic",
      "Deploy scalable architectures",
      "Master TypeScript development",
      "Work with large development teams"
    ],
    prerequisites: ["JavaScript knowledge", "Basic web development", "Object-oriented programming"],
    tools: ["Angular CLI", "TypeScript", "MongoDB Compass", "Postman", "Git"],
    certificate: "MEAN Stack Developer Certificate",
    jobSupport: ["Enterprise job placement", "Technical mentoring", "Code review", "Industry connections"]
  },
  "java": {
    id: "java",
    title: "Java Full Stack Development",
    subtitle: "Enterprise Java Development",
    description: "Master enterprise-level Java development with Spring Boot, microservices, and cloud deployment. Perfect for building scalable backend systems.",
    image: "/images/Faang_pictures/javafullstack.jpg",
    duration: "22 weeks",
    capacity: "Max 16 students",
    level: "Intermediate to Advanced",
    badge: { text: "Enterprise", color: "bg-orange-100 text-orange-800" },
    price: { original: "$5,499", current: "$3,999" },
    features: [
      "Spring Boot Framework",
      "Microservices Architecture",
      "JPA & Hibernate",
      "RESTful APIs",
      "Cloud Deployment",
      "Enterprise Project"
    ],
    curriculum: [
      {
        module: "Core Java & Spring",
        topics: ["Java 17+ Features", "Spring Framework", "Spring Boot", "Dependency Injection", "AOP", "Testing"]
      },
      {
        module: "Data & APIs",
        topics: ["JPA & Hibernate", "Database Design", "REST APIs", "GraphQL", "Security", "Caching"]
      },
      {
        module: "Microservices & Cloud",
        topics: ["Microservices", "Docker", "Kubernetes", "AWS/Azure", "Monitoring", "CI/CD"]
      }
    ],
    instructor: {
      name: "Priya Sharma",
      title: "Principal Java Engineer at Amazon",
      experience: "10+ years at Amazon, Oracle"
    },
    outcomes: [
      "Build enterprise Java applications",
      "Design microservices architectures",
      "Implement secure APIs",
      "Deploy to cloud platforms",
      "Lead Java development teams"
    ],
    prerequisites: ["Java basics", "Object-oriented programming", "Database knowledge"],
    tools: ["IntelliJ IDEA", "Maven/Gradle", "Docker", "Spring Tools", "Git"],
    certificate: "Java Full Stack Developer Certificate",
    jobSupport: ["Enterprise placement", "Architecture guidance", "Code mentoring", "Industry networking"]
  },
  "python": {
    id: "python",
    title: "Python Development",
    subtitle: "Versatile Python Programming",
    description: "From web development to AI/ML, master Python for diverse applications in modern tech companies. Build everything from web apps to data pipelines.",
    image: "/images/Faang_pictures/python.jpg",
    duration: "16 weeks",
    capacity: "Max 20 students",
    level: "Beginner to Advanced",
    badge: { text: "Versatile", color: "bg-purple-100 text-purple-800" },
    price: { original: "$4,299", current: "$2,999" },
    features: [
      "Django & Flask Frameworks",
      "Data Science Libraries",
      "API Development",
      "Database Integration",
      "Web Scraping",
      "AI/ML Basics"
    ],
    curriculum: [
      {
        module: "Python Fundamentals",
        topics: ["Python Syntax", "OOP Concepts", "Data Structures", "File Handling", "Error Handling", "Testing"]
      },
      {
        module: "Web Development",
        topics: ["Django Framework", "Flask", "REST APIs", "Database ORM", "Authentication", "Deployment"]
      },
      {
        module: "Data & Automation",
        topics: ["NumPy & Pandas", "Web Scraping", "Automation Scripts", "Data Visualization", "Basic ML", "Cloud Services"]
      }
    ],
    instructor: {
      name: "Dr. Robert Chen",
      title: "Senior Python Developer at Google",
      experience: "8+ years at Google, Tesla"
    },
    outcomes: [
      "Build web applications with Django/Flask",
      "Develop data analysis scripts",
      "Create automation tools",
      "Work with APIs and databases",
      "Transition to AI/ML development"
    ],
    prerequisites: ["Basic programming concepts", "Computer literacy"],
    tools: ["PyCharm", "Jupyter Notebook", "Git", "Docker", "PostgreSQL"],
    certificate: "Python Developer Certificate",
    jobSupport: ["Diverse job placement", "Portfolio development", "Technical interviews", "Career guidance"]
  },
  "datascience": {
    id: "datascience",
    title: "Data Science & Machine Learning",
    subtitle: "AI/ML for Tech Companies",
    description: "Master data science, machine learning, and AI techniques used by top tech companies. Build predictive models and data-driven solutions.",
    image: "/images/Faang_pictures/dataAnalytics.jpg",
    duration: "20 weeks",
    capacity: "Max 15 students",
    level: "Intermediate to Advanced",
    badge: { text: "High Demand", color: "bg-teal-100 text-teal-800" },
    price: { original: "$5,999", current: "$4,299" },
    features: [
      "Machine Learning Algorithms",
      "Deep Learning & Neural Networks",
      "Data Visualization",
      "Statistical Analysis",
      "Big Data Tools",
      "Real-world Projects"
    ],
    curriculum: [
      {
        module: "Data Analysis",
        topics: ["Python for Data Science", "Pandas & NumPy", "Data Cleaning", "Statistical Analysis", "Visualization", "SQL"]
      },
      {
        module: "Machine Learning",
        topics: ["Supervised Learning", "Unsupervised Learning", "Feature Engineering", "Model Selection", "Evaluation", "Deployment"]
      },
      {
        module: "Advanced Topics",
        topics: ["Deep Learning", "Neural Networks", "NLP", "Computer Vision", "Big Data", "MLOps"]
      }
    ],
    instructor: {
      name: "Dr. Lisa Wang",
      title: "Principal Data Scientist at Meta",
      experience: "12+ years at Facebook, Netflix"
    },
    outcomes: [
      "Build machine learning models",
      "Analyze large datasets",
      "Create data visualizations",
      "Deploy ML solutions",
      "Work with big data tools"
    ],
    prerequisites: ["Python knowledge", "Statistics basics", "Mathematics fundamentals"],
    tools: ["Jupyter Notebook", "TensorFlow", "PyTorch", "Tableau", "AWS SageMaker"],
    certificate: "Data Science & ML Certificate",
    jobSupport: ["Data science placement", "Portfolio projects", "Technical interviews", "Research guidance"]
  },
  "mobile": {
    id: "mobile",
    title: "Mobile App Development",
    subtitle: "Cross-Platform Mobile Apps",
    description: "Build native and cross-platform mobile apps using React Native, Flutter, and native technologies. Create apps for iOS and Android.",
    image: "/images/Faang_pictures/softwaredeveloper.jpg",
    duration: "18 weeks",
    capacity: "Max 15 students",
    level: "Intermediate",
    badge: { text: "Cross-Platform", color: "bg-pink-100 text-pink-800" },
    price: { original: "$4,799", current: "$3,399" },
    features: [
      "React Native Development",
      "Flutter Framework",
      "Native iOS & Android",
      "App Store Deployment",
      "Push Notifications",
      "Mobile Backend"
    ],
    curriculum: [
      {
        module: "Cross-Platform Development",
        topics: ["React Native", "Flutter", "Component Design", "Navigation", "State Management", "APIs"]
      },
      {
        module: "Native Development",
        topics: ["iOS Swift", "Android Kotlin", "Platform APIs", "Device Features", "Performance", "Testing"]
      },
      {
        module: "Deployment & Backend",
        topics: ["App Store Guidelines", "Publishing", "Backend Services", "Push Notifications", "Analytics", "Monetization"]
      }
    ],
    instructor: {
      name: "James Kim",
      title: "Senior Mobile Engineer at Uber",
      experience: "9+ years at Uber, Instagram"
    },
    outcomes: [
      "Build iOS and Android apps",
      "Master cross-platform development",
      "Publish to app stores",
      "Implement mobile backend",
      "Optimize app performance"
    ],
    prerequisites: ["JavaScript knowledge", "React basics", "Programming fundamentals"],
    tools: ["React Native", "Flutter", "Xcode", "Android Studio", "Firebase"],
    certificate: "Mobile App Developer Certificate",
    jobSupport: ["Mobile job placement", "App portfolio", "Store optimization", "Technical interviews"]
  },
  "devops": {
    id: "devops",
    title: "DevOps & Cloud Engineering",
    subtitle: "Infrastructure & Automation",
    description: "Master AWS, Docker, Kubernetes, CI/CD pipelines, and infrastructure automation. Build and maintain scalable cloud systems.",
    image: "/images/Faang_pictures/cybercourse.jpg",
    duration: "16 weeks",
    capacity: "Max 12 students",
    level: "Intermediate to Advanced",
    badge: { text: "Cloud-First", color: "bg-indigo-100 text-indigo-800" },
    price: { original: "$5,299", current: "$3,799" },
    features: [
      "AWS Cloud Services",
      "Docker & Kubernetes",
      "CI/CD Pipelines",
      "Infrastructure as Code",
      "Monitoring & Logging",
      "Security Best Practices"
    ],
    curriculum: [
      {
        module: "Cloud Foundations",
        topics: ["AWS Services", "Cloud Architecture", "Networking", "Security", "Cost Optimization", "Best Practices"]
      },
      {
        module: "Containerization & Orchestration",
        topics: ["Docker", "Kubernetes", "Container Security", "Helm Charts", "Service Mesh", "Monitoring"]
      },
      {
        module: "Automation & CI/CD",
        topics: ["Infrastructure as Code", "Terraform", "Jenkins", "GitLab CI", "Monitoring", "Incident Response"]
      }
    ],
    instructor: {
      name: "Mark Johnson",
      title: "Principal DevOps Engineer at Netflix",
      experience: "11+ years at Netflix, AWS"
    },
    outcomes: [
      "Design cloud architectures",
      "Automate infrastructure deployment",
      "Build CI/CD pipelines",
      "Manage containerized applications",
      "Implement monitoring solutions"
    ],
    prerequisites: ["Linux basics", "Programming knowledge", "Networking fundamentals"],
    tools: ["AWS Console", "Docker", "Kubernetes", "Terraform", "Jenkins"],
    certificate: "DevOps & Cloud Engineer Certificate",
    jobSupport: ["DevOps placement", "Cloud certifications", "Infrastructure projects", "Technical guidance"]
  },
  "design": {
    id: "design",
    title: "UI/UX Design",
    subtitle: "User-Centered Design",
    description: "Design beautiful, user-centered interfaces with modern tools and design thinking principles. Create engaging digital experiences.",
    image: "/images/Faang_pictures/upskillyourself.jpg",
    duration: "14 weeks",
    capacity: "Max 18 students",
    level: "Beginner to Intermediate",
    badge: { text: "Creative", color: "bg-rose-100 text-rose-800" },
    price: { original: "$3,999", current: "$2,799" },
    features: [
      "Design Thinking Process",
      "Figma & Adobe XD",
      "User Research Methods",
      "Prototyping & Testing",
      "Design Systems",
      "Portfolio Development"
    ],
    curriculum: [
      {
        module: "Design Fundamentals",
        topics: ["Design Principles", "Color Theory", "Typography", "Layout", "Visual Hierarchy", "Accessibility"]
      },
      {
        module: "UX Research & Strategy",
        topics: ["User Research", "Personas", "User Journeys", "Information Architecture", "Wireframing", "Usability Testing"]
      },
      {
        module: "UI Design & Prototyping",
        topics: ["Interface Design", "Design Systems", "Prototyping", "Micro-interactions", "Mobile Design", "Handoff"]
      }
    ],
    instructor: {
      name: "Sofia Rodriguez",
      title: "Senior UX Designer at Airbnb",
      experience: "7+ years at Airbnb, Spotify"
    },
    outcomes: [
      "Design user-centered interfaces",
      "Conduct user research",
      "Create interactive prototypes",
      "Build design systems",
      "Present design solutions"
    ],
    prerequisites: ["Creative mindset", "Basic computer skills", "Design interest"],
    tools: ["Figma", "Adobe XD", "Sketch", "InVision", "Miro"],
    certificate: "UI/UX Designer Certificate",
    jobSupport: ["Design job placement", "Portfolio review", "Design challenges", "Industry networking"]
  }
}

interface CourseDetailsModalProps {
  courseId: string
  trigger: React.ReactNode
  variant?: "detailed" | "quick"
}

export function CourseDetailsModal({ courseId, trigger, variant = "detailed" }: CourseDetailsModalProps) {
  const course = courseDatabase[courseId]
  
  if (!course) {
    return <div>Course not found</div>
  }

  if (variant === "quick") {
    return (
      <Dialog>
        <DialogTrigger asChild>
          {trigger}
        </DialogTrigger>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">{course.title}</DialogTitle>
            <DialogDescription className="text-lg">{course.subtitle}</DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6">
            <div className="relative w-full h-48 rounded-lg overflow-hidden bg-gray-50">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-contain"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-primary-600" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-primary-600" />
                <span>{course.capacity}</span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5 text-primary-600" />
                <span>{course.level}</span>
              </div>
              <div className="flex items-center space-x-2">
                <DollarSign className="h-5 w-5 text-primary-600" />
                <span className="line-through text-gray-500">{course.price.original}</span>
                <span className="font-bold text-green-600">{course.price.current}</span>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Key Features</h4>
              <div className="grid grid-cols-1 gap-2">
                {course.features.slice(0, 4).map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex space-x-3">
              <Button className="flex-1 bg-accent hover:bg-accent-600 text-accent-900">
                Enroll Now
              </Button>
              <Button variant="outline" className="flex-1">
                Download Syllabus
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <div>
              <DialogTitle className="text-3xl">{course.title}</DialogTitle>
              <DialogDescription className="text-xl">{course.subtitle}</DialogDescription>
            </div>
            <Badge className={course.badge.color}>{course.badge.text}</Badge>
          </div>
        </DialogHeader>
        
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
            <TabsTrigger value="instructor">Instructor</TabsTrigger>
            <TabsTrigger value="pricing">Pricing</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6">
            <div className="relative w-full h-64 rounded-lg overflow-hidden bg-gray-50">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-contain"
              />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <Clock className="h-6 w-6 mx-auto mb-2 text-primary-600" />
                  <div className="font-semibold">{course.duration}</div>
                  <div className="text-sm text-gray-600">Duration</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Users className="h-6 w-6 mx-auto mb-2 text-primary-600" />
                  <div className="font-semibold">{course.capacity}</div>
                  <div className="text-sm text-gray-600">Class Size</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <BookOpen className="h-6 w-6 mx-auto mb-2 text-primary-600" />
                  <div className="font-semibold">{course.level}</div>
                  <div className="text-sm text-gray-600">Level</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Award className="h-6 w-6 mx-auto mb-2 text-primary-600" />
                  <div className="font-semibold">Certificate</div>
                  <div className="text-sm text-gray-600">Included</div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3">What You'll Learn</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {course.outcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3">Prerequisites</h4>
              <div className="space-y-2">
                {course.prerequisites.map((prereq, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Target className="h-4 w-4 text-blue-600" />
                    <span>{prereq}</span>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="curriculum" className="space-y-6">
            <div className="space-y-4">
              {course.curriculum.map((module, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">Module {index + 1}: {module.module}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {module.topics.map((topic, topicIndex) => (
                        <div key={topicIndex} className="flex items-center space-x-2">
                          <Code className="h-4 w-4 text-primary-600" />
                          <span className="text-sm">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="instructor" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{course.instructor.name}</CardTitle>
                <CardDescription>{course.instructor.title}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Star className="h-5 w-5 text-yellow-500" />
                    <span>{course.instructor.experience}</span>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">Job Support Included</h5>
                    <div className="space-y-2">
                      {course.jobSupport.map((support, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm">{support}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="pricing" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Course Investment</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <div>
                  <div className="text-3xl font-bold text-gray-400 line-through">{course.price.original}</div>
                  <div className="text-5xl font-bold text-green-600">{course.price.current}</div>
                  <div className="text-lg text-gray-600">Limited Time Offer</div>
                </div>
                
                <div className="space-y-2">
                  <div className="text-lg font-semibold">What's Included:</div>
                  {course.features.map((feature, index) => (
                    <div key={index} className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4">
                  <Button size="lg" className="w-full bg-accent hover:bg-accent-600 text-accent-900">
                    Enroll Now - Save ${parseInt(course.price.original.replace('$', '').replace(',', '')) - parseInt(course.price.current.replace('$', '').replace(',', ''))}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
