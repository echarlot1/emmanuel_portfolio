import Hero from './components/Hero'
import Socials from './components/Socials'
import AIChat from './components/AIChat'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <main className="site-content">
          <Hero />
          <AIChat />
          <Socials />
          <Footer />
      </main>
    </>
  )
}