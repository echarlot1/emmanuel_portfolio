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

const PHONE = '+1-555-123-4567'
const EMAIL = 'emmanuel.charlot@email.com'

export default function Hero() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const menuOpen = Boolean(anchorEl)

  const openContactMenu = (e: React.MouseEvent<HTMLElement>) => setAnchorEl(e.currentTarget)
  const closeContactMenu = () => setAnchorEl(null)

  const viewResume = () => {
    window.open(resumePdf, '_blank', 'noopener,noreferrer')
  }

  const summary = `Emmanuel Charlot is a Software Engineer based in the NJ/NY area currently working at JPMorgan Chase, where he contributes to high-volume payment systems and builds both backend services and frontend features. He is proficient in Java and Spring Boot for backend development and uses React and TypeScript to create modern, responsive front-end experiences. Emmanuel also works with Node.js, Express, MongoDB, and MySQL, and applies testing practices using JUnit and Cypress while leveraging cloud storage like AWS S3. He builds mobile apps with React Native and has led projects such as AllSeasonsFit (a fitness/community app) and allseasonstech (a full-stack social web app). Passionate about fitness and community, he spends time at the gym and creates content around health and discipline. He aims to continue growing as a backend/full-stack engineer while launching impactful products.`

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 hero-title">
              <span>H</span><span>e</span><span>l</span><span>l</span><span>o</span><span>,</span>{' '}
              <span>I</span><span>'</span><span>m</span> <span className="text-accent">E</span>
              <span className="text-accent">m</span><span className="text-accent">m</span>
              <span className="text-accent">a</span><span className="text-accent">n</span>
              <span className="text-accent">u</span><span className="text-accent">e</span>
              <span className="text-accent">l</span>{' '}<span className="text-accent">C</span>
              <span className="text-accent">h</span><span className="text-accent">a</span>
              <span className="text-accent">r</span><span className="text-accent">l</span>
              <span className="text-accent">o</span><span className="text-accent">t</span>
            </h1>

            <p className="text-muted text-lg leading-relaxed mb-4">{summary}</p>

            <p className="text-muted text-sm mb-6">
              Languages: Creole <span role="img" aria-label="haitian">🇭🇹</span>, English, French
            </p>

            <div className="flex flex-wrap gap-6 items-center justify-center md:justify-start">
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

          <div className="flex justify-center md:justify-end">
            <Animated3D />
          </div>
        </div>
      </div>
    </section>
  )
}
