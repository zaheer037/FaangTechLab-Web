import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { AIChatbot } from '@/components/ai-chatbot'
import Preloader from '@/components/Preloader'
import HomePage from '@/pages/HomePage'
import AboutPage from '@/pages/AboutPage'
import BlogPage from '@/pages/BlogPage'
import BlogPostPage from '@/pages/BlogPostPage'
import ContactPage from '@/pages/ContactPage'
import CoursesPage from '@/pages/CoursesPage'
import PortalPage from '@/pages/PortalPage'
import CareerGuidePage from '@/pages/CareerGuidePage'
import ChallengesPage from '@/pages/ChallengesPage'
import InterviewQuestionsPage from '@/pages/InterviewQuestionsPage'
import SalaryGuidePage from '@/pages/SalaryGuidePage'

function App() {
   const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  if (isLoading) {
    return <Preloader onLoadingComplete={handleLoadingComplete} />
  }

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogPostPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/portal" element={<PortalPage />} />
            <Route path="/resources/career-guide" element={<CareerGuidePage />} />
            <Route path="/resources/challenges" element={<ChallengesPage />} />
            <Route path="/resources/interview-questions" element={<InterviewQuestionsPage />} />
            <Route path="/resources/salary-guide" element={<SalaryGuidePage />} />
          </Routes>
        </main>
        <Footer />
        <AIChatbot />
      </div>
    </Router>
  )
}

export default App

