'use client'
import { motion } from 'framer-motion'

export default function NikeByYouBar() {
  return (
      <div aria-label="Nike By You" style={{ background: 'var(--color-acid)', overflow: 'hidden', height: 38, minHeight: 38, flexShrink: 0, display: 'flex', alignItems: 'center' }}>
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
          style={{ display: 'flex', gap: '3rem', whiteSpace: 'nowrap', flexShrink: 0 }}>
          {Array(20).fill(null).map((_, i) => (
            <span key={i} style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#000' }}>
              Nike By You
            </span>
          ))}
        </motion.div>
      </div>
  )
}
