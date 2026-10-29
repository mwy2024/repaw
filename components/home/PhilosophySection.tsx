import Image from 'next/image'
import recyclingProcess from '@/public/recycling-process-latest.png'

const stats = [
  { big: '3.6kg', label: 'CO₂ 减排量', sub: '每回收利用 1kg Nike 废旧纺织品，可减少 3.6kg CO₂ 排放' },
  { big: '6000L', label: '节约水资源', sub: '每 1kg 废料再利用，可节约 6,000 升清洁水资源' },
  { big: '90%', label: '生产端减废', sub: 'AI 设计数字化转型目标：实现生产端 90% 废料减量' },
]

export default function PhilosophySection() {
  return (
    <section id="philosophy" aria-label="品牌理念">
      <div className="philosophy-material">
        <header>
          <p className="eyebrow">品牌理念 · 废料再生</p>
          <h2 className="font-display">让废料<br /><span>重新出发</span></h2>
        </header>
        <div className="philosophy-images">
          <Image src={recyclingProcess} className="philosophy-process-image" alt="废料再生四步流程：回收废料、筛选材料决定用途、重新纺织成不同功能布匹材料、制作成新服装" sizes="(min-width: 1000px) 63vw, 100vw" />
        </div>
      </div>
      <div className="philosophy-impact" id="impact">
        <header>
          <h2 className="font-display">每次运动<br /><span>都在改变</span></h2>
        </header>
        <div className="philosophy-stats">
          {stats.map((stat) => <div key={stat.label}>
            <span className="font-display">{stat.big}</span>
            <h3>{stat.label}</h3>
            <p>{stat.sub}</p>
          </div>)}
        </div>
      </div>
    </section>
  )
}
