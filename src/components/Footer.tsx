import { useState } from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import TextsmsIcon from '@mui/icons-material/Textsms'

const PHONE = '+1-555-123-4567' // <-- Replace with your real number
const EMAIL = 'emmanuel.charlot@email.com' // <-- Replace with your real email

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => setAnchorEl(null)

  return (
    <footer className="bg-bg/50 border-t border-white/10 py-8 px-4 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-muted text-sm mb-4 md:mb-0">
          © {currentYear} Emmanuel. All rights reserved.
        </p>
      </div>
    </footer>
  )
}