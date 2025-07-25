import { useState, useMemo } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { InteractiveCard } from "@/components/ui/interactive-card"
import { CodingMarathon } from "@/components/coding-marathon"
import { Calendar, Clock, User, ArrowRight, Search, TrendingUp, Code, Target, Zap, BookOpen, Star } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "10 Essential Data Structures Every FAANG Engineer Should Master",
    excerpt:
      "Deep dive into the fundamental data structures that form the backbone of technical interviews at top tech companies.",
    author: "Dr. Sarah Kim",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Interview Prep",
    image: "/images/Faang_pictures/90days.jpg",
    tags: ["Data Structures", "Algorithms", "Interview"],
    featured: true,
  },
  {
    id: 2,
    title: "How to Negotiate Your Tech Salary Like a Pro",
    excerpt:
      "Learn the insider strategies that helped our graduates increase their starting salaries by an average of 40%.",
    author: "Marcus Thompson",
    date: "2024-01-12",
    readTime: "6 min read",
    category: "Career Tips",
    image: "/images/Faang_pictures/AIandcodinglessons.jpg",
    tags: ["Salary", "Negotiation", "Career"],
    featured: false,
  },
  {
    id: 3,
    title: "The Rise of AI in Software Development: What You Need to Know",
    excerpt:
      "Explore how artificial intelligence is reshaping the software development landscape and what skills you need to stay relevant.",
    author: "Dr. Maria Rodriguez",
    date: "2024-01-10",
    readTime: "10 min read",
    category: "Industry News",
    image: "/images/Faang_pictures/careercorner.jpg",
    tags: ["AI", "Machine Learning", "Future"],
    featured: false,
  },
  {
    id: 4,
    title: "Building Scalable Systems: Lessons from Netflix Architecture",
    excerpt:
      "A comprehensive look at how Netflix handles millions of concurrent users and what we can learn from their approach.",
    author: "Alex Chen",
    date: "2024-01-08",
    readTime: "12 min read",
    category: "System Design",
    image: "/images/Faang_pictures/conquer.jpg",
    tags: ["System Design", "Scalability", "Netflix"],
    featured: false,
  },
  {
    id: 5,
    title: "From Bootcamp to FAANG: A Complete Roadmap",
    excerpt: "Step-by-step guide on how to transition from a coding bootcamp graduate to landing your first FAANG job.",
    author: "Jennifer Park",
    date: "2024-01-05",
    readTime: "15 min read",
    category: "Success Stories",
    image: "/images/Faang_pictures/codemarathon.jpg",
    tags: ["Career Change", "Bootcamp", "Success"],
    featured: false,
  },
  {
    id: 6,
    title: "Mastering React Hooks: Advanced Patterns and Best Practices",
    excerpt:
      "Go beyond the basics with advanced React Hook patterns that will make you stand out in technical interviews.",
    author: "David Kim",
    date: "2024-01-03",
    readTime: "9 min read",
    category: "Coding Tips",
    image: "/images/Faang_pictures/differentfromothers.jpg",
    tags: ["React", "JavaScript", "Frontend"],
    featured: false,
  },
]

const categories = [
  { name: "All Posts", count: 24, icon: BookOpen },
  { name: "Interview Prep", count: 8, icon: Target },
  { name: "Coding Tips", count: 6, icon: Code },
  { name: "Career Tips", count: 5, icon: TrendingUp },
  { name: "Industry News", count: 3, icon: Zap },
  { name: "Success Stories", count: 2, icon: Star },
]

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Posts")

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      
      const matchesCategory = selectedCategory === "All Posts" || post.category === selectedCategory
      
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  const featuredPost = blogPosts.find(post => post.featured)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="bg-secondary text-secondary-900 hover:bg-secondary-400">Tech Insights & Career Tips</Badge>
            <h1 className="text-4xl font-bold tracking-tight text-primary-900 sm:text-5xl lg:text-6xl">
              FAANG Tech Lab <span className="text-accent-700">Blog</span>
            </h1>
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
              Expert insights, career advice, and the latest trends in tech from our team of FAANG engineers and
              industry experts.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center space-y-4 mb-16">
              <Badge className="bg-accent-100 text-accent-800 hover:bg-accent-200">Featured Article</Badge>
              <h2 className="text-3xl font-bold text-primary-900 sm:text-4xl">Must Read</h2>
            </div>

            <Card className="max-w-6xl mx-auto overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-80 lg:h-auto">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-accent-100 text-accent-800">Featured</Badge>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 text-sm text-neutral-500">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    
                    <Badge className="bg-primary-100 text-primary-800 w-fit">{featuredPost.category}</Badge>
                    
                    <h3 className="text-2xl font-bold text-primary-900 lg:text-3xl">
                      {featuredPost.title}
                    </h3>
                    
                    <p className="text-neutral-600 text-lg">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {featuredPost.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button asChild className="bg-accent hover:bg-accent-600 text-accent-900 w-fit">
                      <Link to={`/blog/${featuredPost.id}`}>
                        Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Search and Categories */}
      <section className="py-20 bg-gradient-to-br from-accent-50 to-primary-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-12">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400 transition-colors duration-200" />
              <input
                type="text"
                placeholder="Search articles by title, content, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 py-6 text-lg rounded-lg border border-neutral-200 bg-white/80 backdrop-blur-sm
                         placeholder:text-neutral-400 text-neutral-700
                         hover:border-primary-300 hover:bg-white/90
                         focus:outline-none focus:border-primary-400 focus:bg-white 
                         focus:shadow-lg focus:shadow-primary-100/50
                         transition-all duration-300 ease-in-out"
              />
            </div>

            {/* Categories */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category) => {
                const IconComponent = category.icon
                return (
                  <Button
                    key={category.name}
                    variant={selectedCategory === category.name ? "default" : "outline"}
                    className={`p-4 h-auto flex flex-col items-center space-y-2 ${
                      selectedCategory === category.name
                        ? "bg-accent text-accent-900 hover:bg-accent-600"
                        : "border-primary-200 text-primary-700 hover:bg-primary-50"
                    }`}
                    onClick={() => setSelectedCategory(category.name)}
                  >
                    <IconComponent className="h-5 w-5" />
                    <div className="text-center">
                      <div className="font-medium text-sm">{category.name}</div>
                      <div className="text-xs opacity-70">{category.count} posts</div>
                    </div>
                  </Button>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold text-primary-900 sm:text-4xl">
              {selectedCategory === "All Posts" ? "Latest Articles" : selectedCategory}
            </h2>
            <p className="text-xl text-neutral-600">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
            </p>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.filter(post => !post.featured).map((post) => (
                <InteractiveCard key={post.id} className="bg-white border-primary-100 h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <Badge className="absolute top-3 left-3 bg-primary-100 text-primary-800 text-xs">
                      {post.category}
                    </Badge>
                  </div>
                  
                  <div className="flex flex-col flex-grow">
                    <CardHeader className="pb-4 flex-shrink-0">
                      <div className="flex items-center justify-between text-xs text-neutral-500 mb-3">
                        <div className="flex items-center space-x-1">
                          <User className="h-3 w-3" />
                          <span className="truncate">{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-1 text-xs text-neutral-500 mb-3">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      
                      <CardTitle className="text-lg text-primary-800 leading-tight line-clamp-2 min-h-[3.5rem] flex items-start">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="pt-0 flex flex-col flex-grow justify-between">
                      <div className="flex-grow">
                        <p className="text-neutral-600 text-sm mb-4 line-clamp-3 leading-relaxed min-h-[4.5rem]">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex flex-wrap gap-1 mb-6 min-h-[2rem]">
                          {post.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <Button asChild variant="outline" className="w-full border-accent-300 text-accent-700 hover:bg-accent-50 mt-auto">
                        <Link to={`/blog/${post.id}`}>
                          Read More <ArrowRight className="ml-2 h-3 w-3" />
                        </Link>
                      </Button>
                    </CardContent>
                  </div>
                </InteractiveCard>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-neutral-400" />
              </div>
              <h3 className="text-xl font-semibold text-primary-800 mb-2">No articles found</h3>
              <p className="text-neutral-600 mb-6">
                Try adjusting your search terms or browse different categories.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("All Posts")
                }}
                className="border-primary-300 text-primary-700 hover:bg-primary-50"
              >
                Clear Filters
              </Button>
            </div>
          )}

          {/* Load More Button */}
          {filteredPosts.length > 6 && (
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" className="border-primary-300 text-primary-700 hover:bg-primary-50">
                Load More Articles
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-primary-800">
        <div className="container">
          <NewsletterSignup />
        </div>
      </section>

      {/* Coding Marathon */}
      <section className="py-20 bg-gradient-to-br from-accent-50 to-secondary-50">
        <div className="container">
          <CodingMarathon />
        </div>
      </section>
    </div>
  )
}
