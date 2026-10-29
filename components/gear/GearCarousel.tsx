'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const slides = ['/露营logo.png', '/飞盘logo.png', '/骑车logo.png', '/徒步logo.png']

export default function GearCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4500)
    return () => clearInterval(timer)
  }, [])

  return (
    <div style={{ position: 'relative', width: '100%', aspectRatio: '1672 / 941', overflow: 'hidden', background: `#e8e4dc url(${slides[0]}) center / cover no-repeat` }}>
      {slides.map((src, i) => (
        // Keep each slide mounted so the container never exposes a blank background during transitions.
        <Image key={src} src={src} alt={`户外人宠服装场景 ${i + 1}`} fill unoptimized loading="eager" sizes="100vw"
          style={{ objectFit: 'cover', opacity: i === index ? 1 : 0, transition: 'opacity 0.8s ease', pointerEvents: 'none' }} />
      ))}
      <div style={{ position: 'absolute', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '0.5rem', zIndex: 2 }}>
        {slides.map((_, i) => (
          <button key={i} type="button" aria-label={`查看第 ${i + 1} 张场景图`} aria-current={i === index ? 'true' : undefined} onClick={() => setIndex(i)}
            style={{ width: i === index ? 24 : 8, height: 8, border: 'none', cursor: 'pointer', background: i === index ? 'var(--color-acid)' : 'rgba(0,0,0,0.2)', transition: 'all 0.3s', padding: 0 }} />
        ))}
      </div>
    </div>
  )
}
