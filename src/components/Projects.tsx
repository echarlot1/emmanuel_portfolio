import React from 'react'

// App screenshots: replace with your real files in src/assets/
const screenshots = [
  {
    id: 1,
    title: 'Home Feed',
    src: new URL('../assets/startup1.jpeg', import.meta.url).href,
    desc: 'Discover local events and community posts at a glance.',
  },
  {
    id: 2,
    title: 'Events & RSVP',
    src: new URL('../assets/startup2.jpeg', import.meta.url).href,
    desc: 'Create events, set capacity, and RSVP with reminders.',
  },
  {
    id: 3,
    title: 'Messages & Groups',
    src: new URL('../assets/startup3.jpeg', import.meta.url).href,
    desc: 'Stay connected with direct messages and group chats.',
  },
]

export default function Projects() {
  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget
    // Fallback to public placeholder if asset missing
    if (img.src.indexOf('/placeholder.svg') === -1) {
      img.src = '/placeholder.svg'
    }
  }
  return (
    <section id="projects" className="px-4 py-16">
      <div className="container">
        <h2 className="section-title">Upcoming: AllSeasonsConnect</h2>
        <p className="section-subtitle">
          A React Native app for fitness and community: create events, RSVP, post,
          comment, and message. Target release: Dec 2025.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {screenshots.map((shot) => (
            <figure key={shot.id} className="glass p-3 rounded-xl project-card">
              <img
                src={shot.src}
                alt={shot.title}
                className="thumb small"
                onError={handleError}
              />
              <figcaption className="mt-3 text-left">
                <div className="font-semibold text-base">{shot.title}</div>
                <div className="text-muted text-sm">{shot.desc}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
