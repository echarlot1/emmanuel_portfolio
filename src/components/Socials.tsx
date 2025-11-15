import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'
import InstragramIcon from '@mui/icons-material/Instagram'

export default function Socials() {
  const socials = [
    {
  id: 1,
  name: 'GitHub',
  icon: GitHubIcon,
  url: 'https://github.com/echarlot1', 
  color: '#f1f5f9',
},
    {
      id: 2,
      name: 'LinkedIn',
      icon: LinkedInIcon,
      url: 'https://www.linkedin.com/in/emmanuel-charlotemmanuel-charlot-bb158b193',
      color: '#0a66c2',
    },
    {
      id: 3,
      name: 'Twitter',
      icon: TwitterIcon,
      url: 'https://www.linkedin.com/in/emmanuel-charlotemmanuel-charlot-bb158b193',
      color: '#1da1f2',
    },
    {
      id: 4,
      name: 'YouTube',
      icon: YouTubeIcon,
      url: 'https://www.youtube.com/channel/UC4fJm0-yLBmdMTNv4kCzDIA',
      color: '#ff0000',
    },
    {
      id: 4,
      name: 'Instagram',
      icon: InstragramIcon,
      url: 'https://www.instagram.com/manno.allseasons/?hl=en',
      color: '#ff0000',
    },
  ]

  return (
    <section id="socials" className="py-12">
        <div className="flex gap-4 justify-center py-12">
      {socials.map((social) => {
        const IconComponent = social.icon
        return (
          <a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="glass p-3 rounded-full hover:scale-110 transition-transform"
            title={social.name}
          >
            <IconComponent sx={{ fontSize: 24, color: social.color }} />
          </a>
        )
      })}
    </div>
    </section>
  )
}