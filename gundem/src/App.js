import React, { useState, useEffect } from "react"
import "./App.css"
import Header from "./components/common/header/Header"
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"

function App() {
  const [currentRoute, setCurrentRoute] = useState('/')
  
  useEffect(() => {
    // URL'den route'u al
    const getRouteFromHash = () => {
      const hash = window.location.hash.replace('#', '') || '/'
      setCurrentRoute(hash)
    }
    
    // Sayfa yüklendiğinde route'u belirle
    getRouteFromHash()
    
    // Hash değişikliklerini dinle
    const handleHashChange = () => {
      getRouteFromHash()
      window.scrollTo(0, 0)
    }
    
    window.addEventListener('hashchange', handleHashChange)
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])
  
  // Route'a göre component render et
  const renderComponent = () => {
    switch(currentRoute) {
      case '/':
        return <Home />
      case '/about':
        return <About />
      case '/courses':
        return <CourseHome />
      case '/team':
        return <Team />
      case '/pricing':
        return <Pricing />
      case '/journal':
        return <Blog />
      case '/contact':
        return <Contact />
      default:
        return <Home />
    }
  }
  
  return (
    <div key={currentRoute}>
      <Header />
      {renderComponent()}
      <Footer />
    </div>
  )
}

export default App
