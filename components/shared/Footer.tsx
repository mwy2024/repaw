'use client'
import Link from 'next/link'

const cols = [
  { title: '探索伙伴', links: [{ label: '品牌理念', href: '/#philosophy' }, { label: '可持续运动', href: '/#impact' }, { label: '探索运动场景', href: '/#scenarios' }] },
  { title: '专属装备', links: [{ label: '跑步 · 户外 · 网球', href: '/#sports' }, { label: 'PET 户外系列', href: '/#shop' }, { label: 'nike by you', href: '/#custom' }] },
  { title: 'Nike 社区', links: [{ label: '一起运动', href: '/#community' }, { label: '线下工坊', href: '/#workshop' }, { label: '用户分享', href: '/#feedback' }] },
]

export default function Footer() {
  return (
    <footer className="site-footer" style={{ background: 'var(--color-site-black)', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '5rem 3rem 2rem' }}>
      {/* 2fr 1fr 1fr 1fr grid — matches demo */}
      <div className="site-footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '4rem', marginBottom: '4rem' }}>
        {/* Brand column */}
        <div>
          <div className="font-display" style={{ fontSize: '2.5rem', letterSpacing: '0.06em', marginBottom: '0.75rem' }}>
            RE<span style={{ color: 'var(--color-acid)' }}>PAW</span>
          </div>
          <p style={{ fontSize: '0.82rem', color: 'rgba(245,242,236,0.35)', lineHeight: 1.7, maxWidth: 260, marginBottom: '2rem' }}>
            让废料重新出发，与探索伙伴一起运动。从户外服饰到专属定制，把你们的故事带进 Nike by you 社群。
          </p>
          <p style={{ fontSize: '0.68rem', color: 'rgba(245,242,236,0.45)', lineHeight: 1.7 }}>概念汇报 Demo · 商品价格及用户分享为示例，未接入交易或报名服务。</p>
        </div>

        {/* Link columns */}
        {cols.map((col) => (
          <div key={col.title}>
            <h5 className="font-ui" style={{ fontSize: '0.67rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(245,242,236,0.28)', marginBottom: '1.5rem' }}>
              {col.title}
            </h5>
            <ul className="flex flex-col list-none" style={{ gap: '0.75rem' }}>
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} style={{ fontSize: '0.83rem', color: 'rgba(245,242,236,0.5)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-site-white)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(245,242,236,0.5)')}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-between items-center" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '2rem', fontSize: '0.73rem', color: 'rgba(245,242,236,0.22)', gap: '1rem' }}>
        <span>© 2026 REPAW · Nike 运动基因 × 探索伙伴</span>
        <span className="font-ui inline-flex items-center gap-2" style={{ fontSize: '0.68rem', letterSpacing: '0.1em', color: 'var(--color-acid)' }}>废料再生 · 专属定制 · 一起运动</span>
        <span>滕玥 · 陆睿 · 刘馨阳 · 吴柔影 · 毛文越 · 张昆鹏</span>
      </div>
    </footer>
  )
}
