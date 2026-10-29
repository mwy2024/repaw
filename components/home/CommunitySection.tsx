'use client'
import { motion } from 'framer-motion'

const events = [
  { date: '每月第一个周末', title: '城市夜跑\n搭子集结', desc: '召集城市里的宠物夜跑搭子，共同完成 5km 城市夜跑路线。REPAW 反光装备统一亮相，用速度与光影书写「Do It Together」的城市故事。', meta: [{ label: '时间', value: '每月首周六 20:00' }, { label: '地点', value: '城市中央公园' }, { label: '参与', value: '开放报名' }] },
  { date: '季度徒步', title: '山野搭子\n联合行动', desc: '每季度组织一次郊野徒步，宠物与主人共同挑战 10km 山野路线，专业向导全程陪同，REPAW 山野系列装备全套体验。', meta: [{ label: '难度', value: '初级友好' }, { label: '距离', value: '8–12 km' }] },
  { date: '双周飞盘', title: '飞盘搭子\n草坪派对', desc: '每两周一次的草坪飞盘聚会，专业教练教授飞盘技巧，宠物参与趣味飞盘接盘挑战，享受最纯粹的运动快乐。', meta: [{ label: '地点', value: '指定草坪' }, { label: '装备', value: '免费体验' }] },
]

export default function CommunitySection() {
  return (
    <section id="community" className="community-section" style={{ background: '#0D0D0F', padding: '8rem 3rem' }}>
      <motion.div initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.75 }}>
        <p className="eyebrow" style={{ marginBottom: '1.5rem' }}>Nike by you 社群</p>
        <h2 className="font-display" style={{ fontSize: 'clamp(45px,7vw,95px)', lineHeight: 1, marginBottom: '1.5rem' }}>
          一起出发<br />不止装备
        </h2>
        <p style={{ fontSize: '0.97rem', fontWeight: 300, lineHeight: 1.85, color: 'rgba(245,242,236,0.55)', maxWidth: 520, marginBottom: '4rem' }}>
          REPAW 社群定期组织线下运动活动，连接每一对「主人 + 宠物」的运动团队，让 Do It Together 成为真实的生活场景。
        </p>
      </motion.div>

      <div className="community-events-grid">
        {events.map((ev, i) => (
          <motion.div key={i}
            style={{ minWidth: 0, border: '1px solid rgba(255,255,255,0.06)', padding: '2.5rem', background: 'transparent', transition: 'all 0.3s', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(210,207,104,0.25)'; e.currentTarget.style.background = 'rgba(210,207,104,0.03)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.background = 'transparent'; }}>
            <div>
              <div className="font-display flex items-center gap-3" style={{ fontSize: '0.95rem', letterSpacing: '0.15em', color: 'var(--color-acid)', marginBottom: '1rem' }}>
                <span style={{ width: 20, height: 1, background: 'rgba(210,207,104,0.5)', display: 'block' }} />{ev.date}
              </div>
              <h3 className="font-display" style={{ fontSize: '2.2rem', lineHeight: 1, marginBottom: '1rem', whiteSpace: 'pre-line' }}>{ev.title}</h3>
              <p style={{ fontSize: '0.82rem', color: 'rgba(245,242,236,0.45)', lineHeight: 1.7, marginBottom: '1.5rem' }}>{ev.desc}</p>
            </div>
            <div className="flex gap-6 flex-wrap">
              {ev.meta.map((m) => (
                <div key={m.label} className="font-ui" style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(245,242,236,0.4)' }}>
                  {m.label} <span style={{ color: 'var(--color-acid)' }}>{m.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  )
}
