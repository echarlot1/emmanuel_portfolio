import React from 'react'

const meImage = new URL('../assets/me-modified.png', import.meta.url).href

export default function Animated3D() {
  return (
    <div className="scene mx-auto mt-2 mb-0 flex items-center justify-center" aria-hidden="true">
      <div className="cube">
        <div className="cube__face cube__face--front">
          <img src={meImage} alt="Emmanuel Charlot" />
        </div>

        <div className="cube__face cube__face--back">
          <img src={meImage} alt="Emmanuel Charlot" />
        </div>

        <div className="cube__face cube__face--right">
          <img src={meImage} alt="Emmanuel Charlot" />
        </div>

        <div className="cube__face cube__face--left">
          <img src={meImage} alt="Emmanuel Charlot" />
        </div>

        <div className="cube__face cube__face--top" />
        <div className="cube__face cube__face--bottom" />
      </div>
    </div>
  )
}