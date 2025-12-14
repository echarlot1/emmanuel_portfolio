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
    ,
{
  keywords: [
    'who is emmanuel charlot',
    'tell me more about emmanuel',
    'long bio',
    'detailed background',
    'full background',
  ],
  answer:
    "Emmanuel Charlot is a software engineer, builder, and entrepreneur based in the NJ/NY area. He works full-time at JPMorgan Chase on high-volume payment systems, where reliability, correctness, and performance matter at scale. Beyond his corporate role, Emmanuel is deeply driven by building products that impact real people. He is the founder of AllSeasonsFit, a fitness and community platform designed to bring people together through events, discipline, and shared goals. Emmanuel combines strong backend engineering skills with frontend and mobile development, allowing him to own products end-to-end—from architecture and APIs to UI and user experience.",
},
{
  keywords: [
    'how do you think',
    'mindset',
    'engineering mindset',
    'problem solving',
    'how do you approach problems',
  ],
  answer:
    "Emmanuel approaches problems by first understanding the system as a whole before jumping into code. He believes most bugs and failures are not isolated issues, but symptoms of deeper system or design gaps. His mindset emphasizes clarity, breaking complex problems into smaller components, validating assumptions early, and building solutions that are maintainable rather than clever. He values correctness, observability, and long-term scalability over shortcuts.",
},
{
  keywords: [
    'what makes you different',
    'what sets you apart',
    'why hire emmanuel',
    'why should we hire you',
  ],
  answer:
    "What sets Emmanuel apart is his ability to combine deep technical execution with product thinking. He does not just implement tickets—he seeks to understand why a feature exists, who it serves, and how it fits into the broader system. He has experience working in regulated, high-stakes financial environments while also building consumer-facing apps on his own. This balance allows him to think both like an engineer and like a product owner.",
},
{
  keywords: [
    'architecture',
    'system design',
    'design systems',
    'scalable systems',
  ],
  answer:
    "Emmanuel is particularly interested in system design and architecture. At JPMorgan, he works on distributed payment systems that require careful handling of data consistency, idempotency, messaging, and failure recovery. In his personal projects, he applies similar principles—clean API contracts, separation of concerns, and scalability—while keeping the developer experience simple and maintainable.",
},
{
  keywords: [
    'leadership',
    'ownership',
    'initiative',
    'responsibility',
  ],
  answer:
    "Emmanuel believes leadership starts with ownership. Even when not officially in a leadership role, he takes responsibility for understanding systems deeply, documenting knowledge, and helping teammates unblock issues. He values clear communication, humility, and reliability. He is comfortable taking initiative while also knowing when to ask questions or seek feedback.",
},
{
  keywords: [
    'work ethic',
    'discipline',
    'how do you work under pressure',
    'stress',
  ],
  answer:
    "Emmanuel has developed strong discipline through both his professional work and his commitment to fitness. Working in payments means dealing with production incidents, deadlines, and high expectations. He stays calm under pressure by focusing on facts, logs, and reproducible steps rather than assumptions. He believes consistency and preparation reduce stress more than last-minute effort.",
},
{
  keywords: [
    'fitness',
    'gym',
    'why fitness',
    'how fitness connects to work',
  ],
  answer:
    "Fitness plays a major role in Emmanuel’s life. He sees training as a parallel to engineering: progress comes from discipline, patience, and showing up consistently. The gym helps him build mental resilience, structure his routine, and maintain balance. This philosophy directly influences his work ethic and long-term thinking as an engineer and founder.",
},
{
  keywords: [
    'content creation',
    'social media',
    'why create content',
    'tiktok',
    'instagram',
    'youtube',
  ],
  answer:
    "Emmanuel creates content around fitness, discipline, and personal growth because he believes transparency and shared experiences help others stay motivated. Content creation is also a way for him to improve communication skills, storytelling, and clarity of thought—skills that translate directly into better technical communication and leadership.",
},
{
  keywords: [
    'entrepreneurship',
    'founder',
    'startup',
    'business mindset',
  ],
  answer:
    "Entrepreneurship is central to Emmanuel’s long-term vision. He enjoys building things from zero—designing systems, validating ideas, and iterating based on feedback. Through AllSeasonsFit and other projects, he is learning how technology, community, and business intersect. He approaches entrepreneurship with patience, understanding that meaningful products take time to mature.",
},
{
  keywords: [
    'allseasonsconnect',
    'future of allseasonsfit',
    'roadmap',
    'what is coming',
  ],
  answer:
    "AllSeasonsFit (also referred to as AllSeasonsConnect) is evolving into a full community platform centered around fitness events, accountability, and shared growth. Planned features include richer event discovery, RSVP flows, messaging, media sharing, and monetization for organizers. Emmanuel’s goal is to launch a polished, scalable product on both iOS and Android that feels intentional, reliable, and community-driven.",
},
{
  keywords: [
    'values',
    'principles',
    'what do you value',
  ],
  answer:
    "Emmanuel values integrity, consistency, humility, and growth. He believes trust is built through actions, not words. In both work and personal projects, he prioritizes long-term thinking over short-term wins and seeks environments where learning, accountability, and mutual respect are encouraged.",
},
{
  keywords: [
    'communication style',
    'how do you communicate',
    'working with others',
  ],
  answer:
    "Emmanuel prefers clear, direct, and respectful communication. He believes ambiguity creates risk, especially in technical systems. Whether writing documentation, discussing designs, or resolving issues, he aims to communicate in a way that reduces confusion and aligns teams around shared understanding.",
},
{
  keywords: [
    'career trajectory',
    'where are you going',
    'long term career',
  ],
  answer:
    "Long-term, Emmanuel aims to grow into a senior backend or full-stack engineer with strong system design expertise, while continuing to build and scale his own products. He is motivated by roles that allow him to work on impactful systems, mentor others, and contribute to both technical and product decisions.",
},
{
  keywords: [
    'learning',
    'how do you learn',
    'continuous learning',
  ],
  answer:
    "Emmanuel is a continuous learner. He learns best by building, breaking things, and revisiting fundamentals. He studies system diagrams, reads documentation carefully, and reinforces learning through real-world implementation. He believes depth matters more than chasing trends.",
},
{
  keywords: [
    'team environment',
    'what kind of team',
    'culture fit',
  ],
  answer:
    "Emmanuel thrives in environments that value ownership, clarity, and collaboration. He prefers teams where engineers are encouraged to understand the full system, ask thoughtful questions, and take responsibility for the quality of their work. Psychological safety and accountability are both important to him.",
},
{
  keywords: [
    'personal motivation',
    'what drives you',
    'why do you do this',
  ],
  answer:
    "Emmanuel is driven by the desire to build meaningful systems and leave things better than he found them. His motivation comes from discipline, responsibility to himself and his family, and the belief that consistent effort compounds over time—both in technology and in life.",
},
,
{
  keywords: ['java'],
  answer:
    "Java is Emmanuel’s strongest backend language. He uses Java daily at JPMorgan Chase to build and maintain high-volume, production-grade systems. He is comfortable with object-oriented design, service-layer architecture, REST APIs, exception handling, and writing clean, testable code.",
},
{
  keywords: ['spring'],
  answer:
    "Emmanuel uses Spring and Spring Boot to build backend services, REST APIs, and integrations. He is familiar with controller-service-repository patterns, dependency injection, configuration management, and writing maintainable backend applications.",
},
{
  keywords: ['react'],
  answer:
    "React is one of Emmanuel’s core frontend skills. He uses React to build modern, responsive UIs with clean component structure, reusable logic, and good user experience. He focuses on clarity and maintainability rather than over-engineering.",
},
{
  keywords: ['typescript'],
  answer:
    "Emmanuel prefers TypeScript over plain JavaScript because it improves reliability, readability, and long-term maintainability. He uses TypeScript across frontend and mobile projects to reduce runtime errors and improve developer confidence.",
},
{
  keywords: ['mobile'],
  answer:
    "Emmanuel builds mobile applications using React Native and TypeScript. His mobile work focuses on real-world usability, performance, and clean UI rather than experimental features.",
},
{
  keywords: ['payments'],
  answer:
    "At JPMorgan Chase, Emmanuel works on payment systems where accuracy, reliability, and correctness are critical. He understands the importance of validation, idempotency, logging, and safe deployment in financial systems.",
},
{
  keywords: ['production'],
  answer:
    "Emmanuel has experience supporting production systems. He understands how to investigate issues using logs, metrics, and reproducible steps, and he values calm, structured problem-solving during incidents.",
},
{
  keywords: ['testing'],
  answer:
    "Emmanuel values testing as part of engineering discipline. He uses JUnit and Cypress to validate functionality, prevent regressions, and ensure confidence when making changes.",
},
{
  keywords: ['aws'],
  answer:
    "Emmanuel has experience using AWS services such as S3 for storage. He understands cloud fundamentals and how to integrate cloud services into applications responsibly.",
},
{
  keywords: ['mongodb'],
  answer:
    "MongoDB is one of the databases Emmanuel uses in his personal and backend projects. He understands document modeling, querying, and how to design data structures that support application needs.",
},
{
  keywords: ['mysql'],
  answer:
    "Emmanuel has experience working with relational databases like MySQL. He understands structured data, queries, and how relational databases fit into backend systems.",
},
{
  keywords: ['frontend'],
  answer:
    "On the frontend, Emmanuel focuses on usability, clarity, and responsiveness. He believes good UI should feel intuitive and not get in the user’s way.",
},
{
  keywords: ['backend'],
  answer:
    "Backend engineering is Emmanuel’s strongest area. He enjoys designing APIs, handling business logic, and ensuring systems behave correctly under real-world conditions.",
},
{
  keywords: ['fullstack'],
  answer:
    "Emmanuel is a full-stack engineer who can comfortably work across frontend, backend, and mobile. This allows him to understand products end-to-end rather than in isolation.",
},
{
  keywords: ['leader'],
  answer:
    "Emmanuel leads through ownership and example. He believes leadership is about responsibility, clarity, and helping others succeed—not titles.",
},
{
  keywords: ['discipline'],
  answer:
    "Discipline is a core value for Emmanuel. Whether in fitness, engineering, or personal growth, he believes consistency over time produces meaningful results.",
},
{
  keywords: ['focus'],
  answer:
    "Emmanuel values focus and depth. He prefers mastering fundamentals and systems rather than chasing shortcuts or trends.",
},
{
  keywords: ['growth'],
  answer:
    "Emmanuel is committed to long-term growth. He views learning as a continuous process that compounds through patience and repetition.",
},
{
  keywords: ['goals'],
  answer:
    "Emmanuel’s goals include becoming a strong senior engineer, building scalable systems, and launching successful products that positively impact real users.",
},
{
  keywords: ['vision'],
  answer:
    "Emmanuel’s vision is to combine engineering excellence with meaningful product creation. He aims to build systems that are reliable, useful, and thoughtfully designed.",
},
{
  keywords: ['entrepreneur'],
  answer:
    "Emmanuel has an entrepreneurial mindset. He enjoys building products from scratch, validating ideas, and learning how technology and business intersect.",
},
{
  keywords: ['founder'],
  answer:
    "As the founder of AllSeasonsFit, Emmanuel is responsible for both technical execution and product direction. He approaches building with patience and long-term thinking.",
},
{
  keywords: ['fitness'],
  answer:
    "Fitness is central to Emmanuel’s life. He believes physical training reinforces discipline, mental strength, and consistency—qualities that carry over into engineering.",
},
{
  keywords: ['gym'],
  answer:
    "The gym is where Emmanuel practices discipline and resilience. It is a key part of how he maintains balance and focus outside of work.",
},
{
  keywords: ['content'],
  answer:
    "Emmanuel creates content to share experiences, motivate others, and improve communication skills. He values authenticity over perfection.",
},
{
  keywords: ['communication'],
  answer:
    "Clear communication is important to Emmanuel. He believes good engineers reduce ambiguity through thoughtful explanations and documentation.",
},
{
  keywords: ['team'],
  answer:
    "Emmanuel works best in collaborative teams that value accountability, clarity, and mutual respect.",
},
{
  keywords: ['culture'],
  answer:
    "Emmanuel values cultures that reward ownership, learning, and integrity. He believes healthy culture directly impacts system quality.",
},
{
  keywords: ['values'],
  answer:
    "Emmanuel’s values include integrity, discipline, humility, and continuous improvement.",
},
{
  keywords: ['ethics'],
  answer:
    "Emmanuel believes ethical engineering means building systems responsibly, thinking about impact, and prioritizing correctness over speed.",
},
{
  keywords: ['money'],
  answer:
    "Emmanuel views money as a tool, not a goal. He believes long-term value comes from skill-building, discipline, and ownership rather than shortcuts.",
},
{
  keywords: ['life'],
  answer:
    "Emmanuel approaches life with structure and intention. He believes small daily actions compound into meaningful long-term outcomes.",
},
{
  keywords: ['pressure'],
  answer:
    "Emmanuel stays composed under pressure by focusing on facts, systems, and step-by-step reasoning rather than emotion.",
},
{
  keywords: ['failure'],
  answer:
    "Emmanuel sees failure as feedback. He believes mistakes are opportunities to strengthen systems and understanding.",
},
{
  keywords: ['learning'],
  answer:
    "Emmanuel learns best by building, breaking, and reflecting. He values depth of understanding over surface-level knowledge.",
},
{
  keywords: ['future'],
  answer:
    "Looking ahead, Emmanuel plans to continue growing as an engineer while scaling products that combine technology, community, and discipline.",
},
{
  keywords: ['why'],
  answer:
    "Emmanuel is driven by the belief that consistent effort, discipline, and thoughtful design can create meaningful impact over time.",
},
{
  keywords: ['default'],
  answer:
    "Emmanuel is a disciplined software engineer, builder, and founder focused on creating reliable systems and meaningful products through consistency and long-term thinking.",
},
,
{
  keywords: ['who'],
  answer:
    "Emmanuel Charlot is a disciplined software engineer, builder, and founder focused on backend systems, full-stack development, and community-driven products.",
},
{
  keywords: ['what'],
  answer:
    "Emmanuel builds software systems, mobile apps, and full-stack products with a focus on reliability, clarity, and real-world usability.",
},
{
  keywords: ['where'],
  answer:
    "Emmanuel is based in the NJ/NYC area and works professionally at JPMorgan Chase while building independent products outside of work.",
},
{
  keywords: ['when'],
  answer:
    "Emmanuel has been working professionally as a software engineer since 2023 and has been building personal projects throughout his academic and professional journey.",
},
{
  keywords: ['how'],
  answer:
    "Emmanuel approaches problems methodically—by understanding the system, breaking problems down, testing assumptions, and iterating with discipline.",
},
{
  keywords: ['engineer'],
  answer:
    "Emmanuel is a software engineer specializing in backend and full-stack development with strong experience in Java, Spring Boot, and React-based systems.",
},
{
  keywords: ['software'],
  answer:
    "Software engineering for Emmanuel is about building dependable systems that behave correctly under real-world conditions, not just writing code.",
},
{
  keywords: ['developer'],
  answer:
    "Emmanuel is a developer who values clean architecture, readability, and long-term maintainability over shortcuts.",
},
{
  keywords: ['coding'],
  answer:
    "Emmanuel codes with an emphasis on correctness, clarity, and intent. He believes good code should be understandable months later.",
},
{
  keywords: ['problem'],
  answer:
    "Emmanuel enjoys solving complex problems by breaking them into smaller, logical steps and addressing root causes rather than symptoms.",
},
{
  keywords: ['debug'],
  answer:
    "When debugging, Emmanuel focuses on logs, system behavior, and reproducibility rather than guessing. He values calm, systematic analysis.",
},
{
  keywords: ['pressure'],
  answer:
    "Emmanuel performs best under pressure by staying structured, focusing on facts, and avoiding emotional reactions.",
},
{
  keywords: ['stress'],
  answer:
    "Emmanuel manages stress through discipline, fitness, preparation, and keeping a long-term perspective.",
},
{
  keywords: ['discipline'],
  answer:
    "Discipline is central to Emmanuel’s life. He applies it consistently across fitness, work, learning, and personal development.",
},
{
  keywords: ['routine'],
  answer:
    "Emmanuel believes strong routines create freedom. Consistency in daily habits allows long-term progress.",
},
{
  keywords: ['habits'],
  answer:
    "Emmanuel focuses on building habits that compound—training, learning, reflection, and consistency.",
},
{
  keywords: ['immigrant'],
  answer:
    "Emmanuel’s background as an immigrant shaped his discipline, resilience, and appreciation for opportunity and responsibility.",
},
{
  keywords: ['haiti'],
  answer:
    "Emmanuel is originally from Haiti. His background influences his work ethic, humility, and commitment to growth.",
},
{
  keywords: ['background'],
  answer:
    "Emmanuel’s background combines academic training, professional experience, personal discipline, and independent product building.",
},
{
  keywords: ['education'],
  answer:
    "Emmanuel earned a B.S. in Computer Science with a minor in Mathematics from Rutgers University–Newark and an Associate degree from Brookdale.",
},
{
  keywords: ['math'],
  answer:
    "Emmanuel studied mathematics alongside computer science, which strengthened his logical reasoning and problem-solving skills.",
},
{
  keywords: ['learning style'],
  answer:
    "Emmanuel learns best through hands-on building, repetition, and deep understanding rather than surface-level exposure.",
},
{
  keywords: ['mentor'],
  answer:
    "Emmanuel values mentors who lead by example and believes mentorship is earned through consistency and integrity.",
},
{
  keywords: ['junior'],
  answer:
    "Emmanuel supports junior engineers by explaining concepts clearly and encouraging disciplined thinking rather than shortcuts.",
},
{
  keywords: ['senior'],
  answer:
    "Emmanuel is actively developing senior-level thinking by focusing on system design, ownership, and long-term impact.",
},
{
  keywords: ['architecture'],
  answer:
    "Emmanuel values simple, clear architecture that scales logically and remains understandable over time.",
},
{
  keywords: ['design'],
  answer:
    "Emmanuel approaches design with intention—prioritizing clarity, usability, and correctness over complexity.",
},
{
  keywords: ['clean code'],
  answer:
    "Clean code, to Emmanuel, means readable, intentional, and maintainable—not overly clever or dense.",
},
{
  keywords: ['principles'],
  answer:
    "Emmanuel believes strong principles lead to strong systems: clarity, discipline, accountability, and consistency.",
},
{
  keywords: ['ownership'],
  answer:
    "Emmanuel takes ownership seriously. He believes responsibility doesn’t stop at writing code—it includes outcomes.",
},
{
  keywords: ['accountability'],
  answer:
    "Accountability is a core value for Emmanuel. He believes trust is built by doing what you say you’ll do.",
},
{
  keywords: ['integrity'],
  answer:
    "Emmanuel values integrity in work and life—doing the right thing even when it’s not convenient.",
},
{
  keywords: ['ethic'],
  answer:
    "Emmanuel believes strong work ethic is built through consistency, not motivation.",
},
{
  keywords: ['faith'],
  answer:
    "Faith plays a grounding role in Emmanuel’s life, reinforcing discipline, humility, and long-term thinking.",
},
{
  keywords: ['purpose'],
  answer:
    "Emmanuel is driven by purpose rather than titles—building systems and products that matter.",
},
{
  keywords: ['success'],
  answer:
    "To Emmanuel, success means growth, discipline, and impact—not shortcuts or appearances.",
},
{
  keywords: ['failure'],
  answer:
    "Emmanuel treats failure as feedback and an opportunity to improve systems and understanding.",
},
{
  keywords: ['confidence'],
  answer:
    "Emmanuel’s confidence comes from preparation, repetition, and experience—not ego.",
},
{
  keywords: ['ego'],
  answer:
    "Emmanuel keeps ego in check. He believes ego interferes with learning and teamwork.",
},
{
  keywords: ['communication'],
  answer:
    "Emmanuel values clear, thoughtful communication and believes it is essential to strong engineering teams.",
},
{
  keywords: ['speaking'],
  answer:
    "Emmanuel continuously works on improving his speaking and communication to match his technical ability.",
},
{
  keywords: ['english'],
  answer:
    "English is Emmanuel’s professional working language, and he continuously improves clarity and fluency.",
},
{
  keywords: ['languages'],
  answer:
    "Emmanuel speaks English, French, and Haitian Creole fluently.",
},
{
  keywords: ['balance'],
  answer:
    "Emmanuel believes balance comes from structure, not randomness—work, fitness, and reflection all matter.",
},
{
  keywords: ['life philosophy'],
  answer:
    "Emmanuel believes consistent effort, discipline, and humility compound into meaningful outcomes over time.",
},
{
  keywords: ['default'],
  answer:
    "Emmanuel Charlot is a disciplined software engineer and builder focused on long-term growth, clean systems, and meaningful impact.",
},
,
{
  keywords: ['personal life', 'personal'],
  answer:
    "Emmanuel lives a structured and intentional personal life. He values discipline, routine, and self-respect. Outside of work, he focuses on fitness, learning, reflection, and building meaningful relationships rather than chasing distractions.",
},
{
  keywords: ['family'],
  answer:
    "Family is very important to Emmanuel. His upbringing shaped his sense of responsibility, humility, and long-term thinking. He takes family obligations seriously and believes success should uplift more than just oneself.",
},
{
  keywords: ['upbringing'],
  answer:
    "Emmanuel’s upbringing taught him discipline, respect, and resilience. Growing up with limited resources helped him develop appreciation for structure, consistency, and responsibility.",
},
{
  keywords: ['childhood'],
  answer:
    "Emmanuel’s childhood shaped his work ethic and mindset. He learned early the value of patience, effort, and not taking opportunities for granted.",
},
{
  keywords: ['immigrant story'],
  answer:
    "As an immigrant, Emmanuel learned to adapt quickly, work harder than average, and remain humble. This experience continues to influence how he approaches work, relationships, and growth.",
},
{
  keywords: ['values'],
  answer:
    "Emmanuel’s personal values include integrity, discipline, loyalty, humility, and growth. He believes values should be practiced daily, not spoken occasionally.",
},
{
  keywords: ['discipline'],
  answer:
    "Discipline is the foundation of Emmanuel’s personal life. He believes motivation fades, but discipline creates consistency and long-term progress.",
},
{
  keywords: ['routine'],
  answer:
    "Emmanuel maintains a daily routine centered around work, training, learning, and reflection. Structure helps him stay focused and balanced.",
},
{
  keywords: ['boundaries'],
  answer:
    "Emmanuel values strong personal boundaries. He believes boundaries protect focus, peace, and long-term goals, both in personal relationships and professional life.",
},
{
  keywords: ['relationships'],
  answer:
    "Emmanuel values healthy, respectful relationships built on honesty, consistency, and mutual effort. He avoids environments or connections that disrupt growth or peace.",
},
{
  keywords: ['dating'],
  answer:
    "Emmanuel approaches dating intentionally. He values emotional maturity, communication, and alignment in values over surface-level attraction.",
},
{
  keywords: ['marriage'],
  answer:
    "Emmanuel strongly believes in marriage and long-term commitment. He values loyalty, stability, and building a future with purpose rather than temporary connections.",
},
{
  keywords: ['love'],
  answer:
    "To Emmanuel, love is expressed through consistency, effort, and respect rather than words alone.",
},
{
  keywords: ['loyalty'],
  answer:
    "Loyalty matters deeply to Emmanuel. He believes trust is built over time and should never be taken lightly.",
},
{
  keywords: ['friends'],
  answer:
    "Emmanuel keeps a small circle of friends. He values honesty, growth, and mutual respect over popularity or social validation.",
},
{
  keywords: ['social life'],
  answer:
    "Emmanuel prefers meaningful interactions over constant social activity. He chooses quality connections over quantity.",
},
{
  keywords: ['privacy'],
  answer:
    "Emmanuel values privacy in his personal life. He believes not everything needs to be shared publicly to be meaningful.",
},
{
  keywords: ['emotional intelligence'],
  answer:
    "Emmanuel is emotionally self-aware and values emotional intelligence. He believes understanding oneself is key to understanding others.",
},
{
  keywords: ['mental health'],
  answer:
    "Emmanuel takes mental health seriously. He manages stress through discipline, fitness, structure, and reflection rather than avoidance.",
},
{
  keywords: ['stress'],
  answer:
    "When stressed, Emmanuel focuses on what he can control—routine, effort, and clarity—rather than external noise.",
},
{
  keywords: ['balance'],
  answer:
    "Balance, for Emmanuel, comes from structure and priorities, not randomness. He balances ambition with self-care and discipline.",
},
{
  keywords: ['identity'],
  answer:
    "Emmanuel identifies as a builder, learner, and disciplined individual. He values growth over labels and consistency over image.",
},
{
  keywords: ['confidence'],
  answer:
    "Emmanuel’s confidence comes from preparation, discipline, and experience—not ego or comparison.",
},
{
  keywords: ['ego'],
  answer:
    "Emmanuel believes ego interferes with growth. He actively works to remain humble and open to learning.",
},
{
  keywords: ['faith'],
  answer:
    "Faith plays a grounding role in Emmanuel’s life. It reinforces humility, gratitude, discipline, and long-term perspective.",
},
{
  keywords: ['gratitude'],
  answer:
    "Emmanuel practices gratitude daily. He believes appreciation keeps ambition healthy and grounded.",
},
{
  keywords: ['lifestyle'],
  answer:
    "Emmanuel lives a disciplined lifestyle focused on health, growth, and purpose rather than excess or distraction.",
},
{
  keywords: ['peace'],
  answer:
    "Peace is a priority for Emmanuel. He believes protecting peace is essential for clarity, focus, and long-term success.",
},
{
  keywords: ['time'],
  answer:
    "Emmanuel values time deeply. He is intentional with how he spends it and avoids activities that do not align with his goals.",
},
{
  keywords: ['self-respect'],
  answer:
    "Self-respect guides Emmanuel’s decisions. He believes respecting oneself sets the standard for how others treat you.",
},
{
  keywords: ['motivation'],
  answer:
    "Emmanuel does not rely on motivation. He relies on discipline, habits, and long-term vision.",
},
{
  keywords: ['life philosophy'],
  answer:
    "Emmanuel believes life rewards consistency, patience, and integrity. Small daily actions compound into meaningful outcomes.",
},
{
  keywords: ['default'],
  answer:
    "Emmanuel Charlot lives a disciplined, intentional life guided by values, structure, and long-term purpose.",
}



  ]

  // Guard against malformed entries in KNOWLEDGE (due to stray commas or missing fields)
  type QAItem = { keywords: string[]; answer: string }
  const KNOWLEDGE_SAFE: QAItem[] = (KNOWLEDGE as any[]).filter(
    (item): item is QAItem => !!item && Array.isArray(item.keywords) && typeof item.answer === 'string'
  )

  function findBestAnswer(userInput: string): string {
    const input = userInput.toLowerCase()
    let bestMatch = {
      score: 0,
      answer: "I don't have that info yet — try asking about Emmanuel's experience, skills, projects, education, or interests.",
    }

    for (const item of KNOWLEDGE_SAFE) {
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
