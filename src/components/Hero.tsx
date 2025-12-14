import { useState } from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import VisibilityIcon from '@mui/icons-material/Visibility'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import TextsmsIcon from '@mui/icons-material/Textsms'
import Animated3D from './Animated3D'

const meImage = new URL('../assets/me-modified.png', import.meta.url).href
const resumePdf = new URL('../assets/Emmanuel_Charlot_Resume.pdf', import.meta.url).href

const PHONE = '8484690748'
const EMAIL = 'charlotemm7694@gmail.com'

export default function Hero() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const menuOpen = Boolean(anchorEl)

  const openContactMenu = (e: React.MouseEvent<HTMLElement>) => setAnchorEl(e.currentTarget)
  const closeContactMenu = () => setAnchorEl(null)

  const viewResume = () => {
    window.open(resumePdf, '_blank', 'noopener,noreferrer')
  }

 

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 items-center justify-items-center md:translate-x-1 lg:translate-x-2">
          <div className="text-center max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 hero-title">
              {/* <span>H</span><span>e</span><span>l</span><span>l</span><span>o</span><span>,</span>{' '}
              <span>I</span><span>'</span><span>m</span> <span className="text-accent">E</span>
              <span className="text-accent">m</span><span className="text-accent">m</span>
              <span className="text-accent">a</span><span className="text-accent">n</span>
              <span className="text-accent">u</span><span className="text-accent">e</span>
              <span className="text-accent">l</span>{' '}<span className="text-accent">C</span>
              <span className="text-accent">h</span><span className="text-accent">a</span>
              <span className="text-accent">r</span><span className="text-accent">l</span>
              <span className="text-accent">o</span><span className="text-accent">t</span> */}
            </h1>

            <p className="section-subtitle">
  Hello, I’m Emmanuel Charlot.
  <br /><br />

  a Software Engineer based in the NJ/NY area, currently working at <strong>JPMorgan Chase</strong>, where he contributes to high-volume payment systems and builds both backend services and frontend features.
  <br /><br />

  He is proficient in <strong>Java</strong> and <strong>Spring Boot</strong> for backend development and uses <strong>React</strong> and <strong>TypeScript</strong> to create modern, responsive front-end experiences.
  <br /><br />

  Emmanuel also works with <strong>Node.js</strong>, <strong>Express</strong>, <strong>MongoDB</strong>, and <strong>MySQL</strong>, and applies testing practices using <strong>JUnit</strong> and <strong>Cypress</strong> while leveraging cloud storage solutions such as <strong>AWS S3</strong>.
  <br /><br />

  In addition to web development, he builds mobile applications using <strong>React Native</strong> and has led projects such as <strong>AllSeasonsFit</strong>, a fitness and community-focused mobile app, as well as <strong>allseasonstech</strong>, a full-stack social web application.
  <br /><br />

  Passionate about fitness and community, Emmanuel spends time at the gym and creates content centered around health, discipline, and personal growth. He aims to continue growing as a backend and full-stack engineer while launching impactful, real-world products.
</p>


            <p className="text-muted text-sm mb-6 text-center">
              Languages: Creole <span role="img" aria-label="haitian">🇭🇹</span>, English, French
            </p>

            <div className="flex flex-wrap gap-4 items-center justify-center mt-6">
              <Button
                onClick={viewResume}
                variant="contained"
                startIcon={<VisibilityIcon />}
                sx={{
                  backgroundColor: '#10b981',
                  color: '#0f172a',
                  textTransform: 'none',
                  fontWeight: 'bold',
                  '&:hover': { backgroundColor: '#059669' },
                }}
              >
                View Resume
              </Button>

              <Button
                onClick={openContactMenu}
                aria-controls={menuOpen ? 'contact-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={menuOpen ? 'true' : undefined}
                variant="contained"
                sx={{
                  backgroundColor: 'transparent',
                  color: '#f1f5f9',
                  border: '1px solid rgba(255,255,255,0.06)',
                  textTransform: 'none',
                  '&:hover': { backgroundColor: 'rgba(255,255,255,0.02)' },
                }}
              >
                Contact
              </Button>
              <Menu
                id="contact-menu"
                anchorEl={anchorEl}
                open={menuOpen}
                onClose={closeContactMenu}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              >
                <MenuItem component="a" href={`tel:${PHONE}`} onClick={closeContactMenu}>
                  <PhoneIcon sx={{ mr: 1 }} /> Call
                </MenuItem>
                <MenuItem component="a" href={`sms:${PHONE}`} onClick={closeContactMenu}>
                  <TextsmsIcon sx={{ mr: 1 }} /> Text
                </MenuItem>
                <MenuItem component="a" href={`mailto:${EMAIL}`} onClick={closeContactMenu}>
                  <EmailIcon sx={{ mr: 1 }} /> Email
                </MenuItem>
              </Menu>
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <Animated3D />
          </div>
        </div>
      </div>
    </section>
  )
}
