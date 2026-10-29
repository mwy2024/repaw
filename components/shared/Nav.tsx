'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const links = [
  { href: '/#philosophy', id: 'philosophy', label: '理念' },
  { href: '/#scenarios', id: 'scenarios', label: '探索运动场景' },
  { href: '/#custom', id: 'custom', label: 'nike by you' },
  { href: '/#community', id: 'community', label: 'Nike 社区' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 80)
      const current = links.findLast((link) => {
        const section = document.getElementById(link.id)
        return section && section.getBoundingClientRect().top <= 160
      })
      setActive(current?.id ?? '')
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const dark = scrolled || menuOpen

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: dark ? 'rgba(10,10,10,0.95)' : 'transparent',
        backdropFilter: dark ? 'blur(12px)' : 'none',
        borderBottom: dark ? '1px solid rgba(255,255,255,0.06)' : 'none',
        transition: 'background 0.3s, backdrop-filter 0.3s',
      }}
    >
      <div className="site-nav-inner">
        <Link href="/#top" onClick={() => setMenuOpen(false)} className="font-display no-underline" style={{ fontSize: '2rem', letterSpacing: '0.1em', color: 'var(--color-site-white)' }}>
          RE<span style={{ color: 'var(--color-acid)' }}>PAW</span>
        </Link>

        <ul className="site-nav-links list-none">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} onClick={() => setMenuOpen(false)} aria-current={active === l.id ? 'location' : undefined}
                className="font-ui no-underline"
                style={{ fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.15em', color: 'var(--color-site-white)', opacity: active === l.id ? 1 : 0.65, display: 'block' }}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <button className="site-nav-toggle" type="button" aria-label={menuOpen ? '关闭菜单' : '打开菜单'}
          aria-expanded={menuOpen} aria-controls="site-mobile-nav" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
      {menuOpen && <div id="site-mobile-nav" className="site-mobile-nav">
        {links.map((l) => <Link key={l.href} href={l.href} aria-current={active === l.id ? 'location' : undefined} onClick={() => setMenuOpen(false)}>{l.label}</Link>)}
      </div>}
    </nav>
  )
}
