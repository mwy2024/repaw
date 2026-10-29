import type { Metadata } from 'next'
import './globals.css'
import './demo-sections.css'
import './presentation.css'
import Nav    from '@/components/shared/Nav'
import Footer from '@/components/shared/Footer'
import Cursor from '@/components/shared/Cursor'

export const metadata: Metadata = {
  title: 'REPAW — Do It Together',
  description: '与探索伙伴一起出发：废料再生、运动场景、nike by you 定制与 Nike by you 社群。',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <Cursor />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
