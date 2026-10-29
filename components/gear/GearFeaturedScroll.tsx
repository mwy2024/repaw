import Image from 'next/image'

const looks = [
  { src: '/featured-01.png', title: '城市探索 · 活力粉', label: '01 / CITY WALK', description: '为每一次并肩出发，添上一点亮色。' },
  { src: '/featured-02.png', title: '周末漫游 · 大地色', label: '02 / WEEKEND', description: '轻盈包裹，自在穿梭城市与自然。' },
  { src: '/featured-03.png', title: '山野路线 · 撞色防护', label: '03 / TRAIL', description: '迎着山风，把冒险穿在身上。' },
  { src: '/featured-04.png', title: '户外日常 · 机能外套', label: '04 / OUTDOORS', description: '从街头到山间，让行动不设限。' },
  { src: '/featured-05.png', title: '版型细节 · 四面呈现', label: '05 / DETAILS', description: '从面料到结构，看见每一处用心。', wide: true },
]

export default function GearFeaturedScroll() {
  return (
    <section style={{ background: '#f4f0e7', padding: '2rem clamp(1.25rem,5vw,5rem) 6rem' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto 2rem' }}>
        <p className="font-ui" style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', color: '#777', marginBottom: '0.65rem' }}>THE COLLECTION / 2026</p>
        <h2 style={{ fontSize: 'clamp(1.7rem,3vw,2.7rem)', fontWeight: 700, color: '#111' }}>精选款式</h2>
      </div>
      <div className="featured-grid" style={{ maxWidth: 1400, margin: '0 auto' }}>
        {looks.map((look) => (
          <article key={look.src} style={{ background: '#fff', minWidth: 0 }}>
            <div style={{ position: 'relative', aspectRatio: look.wide ? '16 / 7.5' : '4 / 3', background: '#e9e5dd', overflow: 'hidden' }}>
              <Image src={look.src} alt={look.title} fill sizes={look.wide ? '(max-width: 480px) 100vw, 66vw' : '(max-width: 480px) 100vw, (max-width: 767px) 50vw, 33vw'}
                style={{ objectFit: look.wide ? 'contain' : 'cover' }} />
            </div>
            <div style={{ padding: '1.25rem 1.4rem 1.6rem' }}>
              <span className="font-ui" style={{ display: 'block', fontSize: '0.6rem', letterSpacing: '0.16em', fontWeight: 700, color: '#777', marginBottom: '0.5rem' }}>{look.label}</span>
              <h3 style={{ fontSize: '1.05rem', color: '#111', fontWeight: 700, marginBottom: '0.4rem' }}>{look.title}</h3>
              <p style={{ fontSize: '0.78rem', lineHeight: 1.6, color: '#666' }}>{look.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
