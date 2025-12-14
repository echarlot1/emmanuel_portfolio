import Hero from './components/Hero'
import Socials from './components/Socials'
import AIChat from './components/AIChat'
import Footer from './components/Footer'
import Projects from './components/Projects'
import StartupShowcase from './components/StartupShowcase'
import QRCard from './components/QRCard'

export default function App() {
  return (
    <>
      <main className="site-content">
          <Hero />
          {/* <Projects /> */}
          <StartupShowcase />
          <QRCard />
          <AIChat />
          <Socials />
          <Footer />
      </main>
    </>
  )
}