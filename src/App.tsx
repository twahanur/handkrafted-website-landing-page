import type React from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import ExploreMakers from "./components/ExploreMakers"
import ExploreProducts from "./components/ExploreProducts"
import FeaturedStory from "./components/FeaturedStory"
import ClientFeedback from "./components/ClientFeedback"
import Blog from "./components/Blog"
import InTheMedia from "./components/InTheMedia"
import Footer from "./components/Footer"

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ExploreMakers />
      <ExploreProducts />
      <FeaturedStory />
      <ClientFeedback />
      <Blog />
      <InTheMedia />
      <Footer />
    </div>
  )
}

export default App
