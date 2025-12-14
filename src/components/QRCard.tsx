import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import TikTokIcon from '@mui/icons-material/MusicNote' // TikTok icon not in MUI; using MusicNote as placeholder
import YouTubeIcon from '@mui/icons-material/YouTube'
import GitHubIcon from '@mui/icons-material/GitHub'

export default function QRCard() {
  const socials = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/emmanuel-charlotemmanuel-charlot-bb158b193', icon: LinkedInIcon, color: '#0a66c2' },
    { name: 'Instagram', url: 'https://www.instagram.com/manno.allseasons/?hl=en', icon: InstagramIcon, color: '#e1306c' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@manno.allseasons', icon: TikTokIcon, color: '#25F4EE' },
    { name: 'YouTube', url: 'https://www.youtube.com/channel/UC4fJm0-yLBmdMTNv4kCzDIA', icon: YouTubeIcon, color: '#ff0000' },
    { name: 'GitHub', url: 'https://github.com/echarlot1', icon: GitHubIcon, color: '#f1f5f9' },
  ]

  return (
    <section id="qr" className="px-4 py-12">
      <div className="container">
        <div className="glass rounded-2xl p-6 items-center text-center max-w-6xl mx-auto">
          <h2 className="section-title">Scan to Connect</h2>
          <p className="section-subtitle">Scan any QR below to open the platform</p>
          <div className="mt-6 flex flex-row justify-center gap-6 flex-nowrap overflow-x-auto px-2">
            {socials.map((s) => {
              const src = `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(s.url)}`
              const Icon = s.icon
              return (
                <div key={s.name} className="glass rounded-xl p-4 flex flex-col items-center w-[180px] min-w-[180px]">
                  <img src={src} alt={`${s.name} QR`} width={160} height={160} />
                  <div className="mt-2">
                    <Icon sx={{ fontSize: 22, color: s.color }} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
