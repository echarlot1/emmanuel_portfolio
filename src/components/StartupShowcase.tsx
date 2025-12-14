import React from 'react'

// Update these to your actual files placed in src/assets
const startup1 = new URL('../assets/startup1.jpeg', import.meta.url).href
const startup2 = new URL('../assets/startup2.jpeg', import.meta.url).href
const startup3 = new URL('../assets/startup3.PNG', import.meta.url).href

const cards = [
  {
    id: 1,
    title: 'AllSeasonsConnect – Problem',
    image: startup1,
    bullets: [
      'Fragmented local fitness/community events; hard to discover',
      'No simple RSVP + reminders across mixed platforms',
      'Groups rely on scattered chats without event context',
    ],
  },
  {
    id: 2,
    title: 'AllSeasonsConnect – Solution',
    image: startup2,
    bullets: [
      'Unified mobile hub for events, posts, and messages',
      'Effortless RSVPs, waitlists, and attendance tracking',
      'Content + community built around local activities',
    ],
  },
  {
    id: 3,
    title: 'January Launch – Coming Features',
    image: startup3,
    bullets: [
      'Event creation with time, location, capacity',
      'RSVP + notifications, calendar sync',
      'Posts, comments, and DMs; profile basics',
    ],
  },
]

export default function StartupShowcase() {
  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget
    if (img.src.indexOf('/placeholder.svg') === -1) {
      img.src = '/placeholder.svg'
    }
  }
  return (
    <section id="startup" className="px-4 py-16">
      <div className="container">
        <h2 className="section-title">AllSeasonsConnect</h2>
        <p className="section-subtitle">
  AllSeasonsConnect is a mobile-first community and events platform designed to bring people together through fitness, discipline, and shared growth.
  <br /><br />

  The core idea behind AllSeasonsConnect is simple: create a reliable, intentional space where individuals can discover events, connect with others, and build consistency around health and lifestyle goals.
  <br /><br />

  Rather than focusing on endless scrolling or passive content, the platform prioritizes real-world interaction, accountability, and community engagement—encouraging people to show up, participate, and grow together.
  <br /><br />

  From a technical standpoint, AllSeasonsConnect is built as a modern, scalable system using industry-proven technologies.
  <br /><br />

  The mobile application is developed with <strong>React Native</strong> and <strong>TypeScript</strong>, enabling a single, maintainable codebase across both iOS and Android while ensuring strong type safety and predictable application behavior.
  <br /><br />

  The backend is implemented using <strong>Java</strong> and <strong>Spring Boot</strong>, providing a robust foundation for REST APIs, business logic, validation, and secure request handling. This architecture allows clear separation of concerns and supports long-term scalability as the platform grows.
  <br /><br />

  User-generated media such as images and videos are stored using <strong>AWS S3</strong>, ensuring secure, reliable, and scalable cloud storage.
  <br /><br />

  For asynchronous communication and system decoupling, AllSeasonsConnect leverages <strong>Kafka</strong> and <strong>RabbitMQ</strong> for messaging. These technologies support background processing, notifications, and future real-time features in a fault-tolerant, event-driven architecture.
  <br /><br />

  Overall, AllSeasonsConnect is built with long-term growth in mind—combining thoughtful product design with a strong backend architecture to support a real, engaged community beyond the screen.
</p>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 justify-items-center">
          {cards.map((c) => (
            <article key={c.id} className="glass rounded-xl p-4 flex flex-col items-center text-center max-w-xs w-full">
              <div className="rounded-lg overflow-hidden flex justify-center">
                <img
                  src={c.image}
                  alt={c.title}
                  className="thumb"
                  onError={handleError}
                />
              </div>
              <h3 className="mt-3 font-bold text-base">{c.title}</h3>
              <ul className="mt-2 space-y-1 text-sm text-muted text-center">
                {c.bullets.map((b, i) => (
                  <li key={i}>• {b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
