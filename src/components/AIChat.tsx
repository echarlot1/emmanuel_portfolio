import { useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import SendIcon from '@mui/icons-material/Send'

interface Message {
  id: number
  role: 'user' | 'ai'
  text: string
  timestamp: Date
}

export default function AIChat() {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<Message[]>([
    {
      id: 1,
      role: 'ai',
      text: "👋 Hey! I'm an AI assistant trained on Emmanuel Charlot's portfolio. Ask me anything about his experience, skills, projects, or background!",
      timestamp: new Date(),
    },
  ])
  const [isLoading, setIsLoading] = useState(false)

  const KNOWLEDGE = [
    {
      keywords: [
        'about you',
        'about emmanuel',
        'summary',
        'tell me about yourself',
        'who are you',
        'profile',
        'intro',
      ],
      answer:
        "Emmanuel Charlot is a Software Engineer based in the NJ/NY area. He works at JPMorgan Chase, building backend services in Java/Spring Boot and frontend features in React, and he loves creating fitness and community-focused apps like AllSeasonsFit.",
    },
    {
      keywords: [
        'experience',
        'years',
        'background',
        'jpmorgan',
        'jpm',
        'work history',
        'current role',
        'job',
        'position',
      ],
      answer:
        'Emmanuel has been a Software Engineer at JPMorgan Chase since 2023. He works on high-volume payment systems, building backend features with Java/Spring Boot, integrating messaging (Qpid), contributing to production deployments, and supporting production issues. He also builds UI components in React.',
    },
    {
      keywords: [
        'skills',
        'technologies',
        'tech stack',
        'stack',
        'languages',
        'tools',
        'frameworks',
        'what do you use',
      ],
      answer:
        'Core skills: Java, Spring Boot, React, React Native, TypeScript, JavaScript (ES6+), Node.js, Express, MongoDB, MySQL, HTML/CSS/SCSS, testing with JUnit and Cypress, Git, and AWS S3 for storage.',
    },
    {
      keywords: ['frontend', 'front end', 'ui', 'react', 'react js', 'react native'],
      answer:
        'On the frontend, Emmanuel works with React and React Native. He builds responsive UIs, reusable components, and mobile experiences with React, TypeScript, and Expo, focusing on clean design and good UX.',
    },
    {
      keywords: ['backend', 'server', 'api', 'spring', 'spring boot', 'microservices'],
      answer:
        'On the backend, Emmanuel builds REST APIs and services using Java and Spring Boot. He works with databases like MongoDB and MySQL, handles messaging integration, and designs APIs to support event-driven and payment systems.',
    },
    {
      keywords: ['projects', 'portfolio', 'side projects', 'personal projects'],
      answer:
        "Emmanuel's main projects include AllSeasonsFit (a fitness community mobile app) and allseasonstech (a full-stack social web app). He also contributed a full-stack project during a global JPMorgan hackathon using React and Spring Boot.",
    },
    {
      keywords: ['allseasonstech', 'all seasons tech', 'social app'],
      answer:
        "allseasonstech is a full-stack web app Emmanuel built and deployed as a final project at Brookdale. It supports user registration, post creation, and engagement using React, Node.js, Express, and MongoDB.",
    },
    {
      keywords: ['allseasonsfit', 'all seasons fit', 'fitness app', 'mobile app', 'events app'],
      answer:
        'AllSeasonsFit is a fitness and community mobile app Emmanuel is building with React Native, TypeScript, Spring Boot, and MongoDB. It lets users create and join events, RSVP, share posts, comment, and message each other. The goal is to release it on the App Store and Google Play by December 2025.',
    },
    {
      keywords: ['education', 'rutgers', 'degree', 'bs', 'school', 'college', 'university'],
      answer:
        'Emmanuel holds a B.S. in Computer Science with a minor in Mathematics from Rutgers University–Newark (May 2024). He also earned an Associate in Science from Brookdale Community College.',
    },
    {
      keywords: ['honors', 'honor society', 'nsls', 'leadership', 'braven', 'accelerator'],
      answer:
        'He was a member of the National Society of Leadership and Success at Brookdale and a Fellow in the Braven Accelerator, where he completed a 14-week leadership and career readiness program and presented a Gen Z & Millennial financial engagement project to Synchrony Bank.',
    },
    {
      keywords: [
        'strengths',
        'soft skills',
        'communication',
        'teamwork',
        'collaboration',
        'work style',
        'how do you work',
      ],
      answer:
        'Emmanuel is collaborative, detail-oriented, and curious. He enjoys breaking down complex systems, communicating clearly with teammates, and owning features end-to-end. He values reliability, humility, and continuous learning.',
    },
    {
      keywords: ['interests', 'hobbies', 'outside of work', 'free time', 'gym', 'fitness', 'content'],
      answer:
        'Outside of work, Emmanuel enjoys going to the gym, playing soccer, and creating content around fitness, discipline, and personal growth for platforms like TikTok, Instagram, and YouTube.',
    },
    {
      keywords: [
        'languages spoken',
        'spoken languages',
        'creole',
        'haitian',
        'french',
        'bilingual',
        'trilingual',
      ],
      answer:
        'Emmanuel is trilingual: he speaks English (proficient), French (fluent), and Haitian Creole (fluent).',
    },
    {
      keywords: [
        'location',
        'where are you based',
        'relocate',
        'relocation',
        'remote',
        'hybrid',
        'onsite',
        'nyc',
        'new york',
        'new jersey',
      ],
      answer:
        'Emmanuel is based in the NJ/NYC area and is open to hybrid or remote roles, especially around New York, New Jersey, or US-based remote opportunities.',
    },
    {
      keywords: ['hire', 'contact', 'available', 'open to work', 'opportunities', 'recruiter', 'job'],
      answer:
        "Emmanuel is open to new opportunities in software engineering, especially backend, full-stack, or mobile roles. You can contact him via email or LinkedIn, and his resume is available for download on this portfolio.",
    },
    {
      keywords: ['career goals', 'future', 'plans', 'where do you see yourself'],
      answer:
        'Emmanuel aims to grow into a strong backend/full-stack engineer, build scalable systems that impact real users, and continue launching his own products like AllSeasonsFit while contributing to high-impact teams.',
    },
    {
      keywords: ['hello', 'hi', 'hey', 'yo', 'sup'],
      answer:
        "Hey! 👋 I'm the AI assistant for Emmanuel's portfolio. You can ask about his experience, skills, projects, education, or interests.",
    },
  ]

  function findBestAnswer(userInput: string): string {
    const input = userInput.toLowerCase()
    let bestMatch = {
      score: 0,
      answer: "I don't have that info yet — try asking about Emmanuel's experience, skills, projects, education, or interests.",
    }

    for (const item of KNOWLEDGE) {
      let score = 0
      for (const keyword of item.keywords) {
        if (input.includes(keyword)) score++
      }
      if (score > bestMatch.score) {
        bestMatch = { score, answer: item.answer }
      }
    }
    return bestMatch.answer
  }

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage: Message = {
      id: history.length + 1,
      role: 'user',
      text: input,
      timestamp: new Date(),
    }

    setHistory((prev) => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    await new Promise((r) => setTimeout(r, 500))

    const aiResponse = findBestAnswer(input)
    const aiMessage: Message = {
      id: history.length + 2,
      role: 'ai',
      text: aiResponse,
      timestamp: new Date(),
    }
    setHistory((prev) => [...prev, aiMessage])
    setIsLoading(false)
  }

  return (
    <section id="chat" className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          💬 Ask me <span className="text-accent">Anything</span>
        </h2>
        <div className="glass rounded-lg p-6 flex flex-col h-96">
          <div className="flex-1 overflow-y-auto mb-4 space-y-4">
            {history.map((msg) => (
                <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                <div
                    className={`max-w-xs px-5 py-3 rounded-2xl shadow-md border text-base mb-2 ${
                    msg.role === 'user'
                        ? 'bg-accent text-white border-accent/40 self-end'
                        : 'bg-white/90 text-bg border-white/30 self-start'
                    }`}
                    style={{ wordBreak: 'break-word' }}
                >
                    {msg.text}
                </div>
                </div>
            ))}
            {isLoading && <div className="text-muted text-sm">AI is thinking...</div>}
          </div>

          <form onSubmit={handleSendMessage} className="flex gap-2 mt-2 pt-2 border-t border-white/10">
            <TextField
              fullWidth
              placeholder="Ask me about Emmanuel's experience, skills, or projects..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isLoading}
              variant="outlined"
              size="small"
              sx={{
                '& .MuiOutlinedInput-root': {
                  color: '#f1f5f9',
                  '& fieldset': { borderColor: 'rgba(255,255,255,0.2)' },
                  '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.4)' },
                },
              }}
            />
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              type="submit"
              disabled={isLoading}
              sx={{
                backgroundColor: '#10b981',
                color: '#0f172a',
                fontWeight: 'bold',
                '&:hover': { backgroundColor: '#22c55e' },
              }}
            >
              Send
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
