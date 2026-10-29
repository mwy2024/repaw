'use client'

import Image from 'next/image'
import { useId, useRef } from 'react'

export default function CTASection() {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const dialogId = useId()

  return (
    <section id="join" className="cta-section" style={{ background: 'var(--color-acid)', color: 'var(--color-site-black)', textAlign: 'center', padding: '8rem 3rem', position: 'relative', overflow: 'hidden', '--eyebrow-line': 'rgba(10,10,10,0.25)', '--eyebrow-line-opacity': '1' } as React.CSSProperties}>
      {/* Ghost "GO" background text */}
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display pointer-events-none select-none leading-none whitespace-nowrap"
        style={{ fontSize: '40vw', color: 'rgba(10,10,10,0.04)' }}>
        GO
      </span>

      <div className="cta-content relative">
        <p className="eyebrow" style={{ justifyContent: 'center', color: 'rgba(10,10,10,0.4)', marginBottom: '1.5rem', letterSpacing: '0.3em' }}>立即行动</p>
        <h2 className="font-display" style={{ fontSize: 'clamp(60px,10vw,140px)', lineHeight: 0.93, color: 'var(--color-site-black)', marginBottom: '2rem' }}>
          一起<br />出发
        </h2>
        <p style={{ fontSize: '0.97rem', fontWeight: 300, lineHeight: 1.85, color: 'rgba(10,10,10,0.5)', maxWidth: 440, margin: '0 auto 2.5rem' }}>
          它穿着你的记忆，和你站在新的起跑线上。不是因为不得不——是因为你们的故事，还想要第二章。
        </p>
        <button type="button" className="join-button" onClick={() => dialogRef.current?.showModal()}>
          加入Nike by you 社群
        </button>
      </div>
      <dialog
        ref={dialogRef}
        className="community-qr-dialog"
        aria-labelledby={`${dialogId}-title`}
        aria-describedby={`${dialogId}-description`}
      >
        <h3 id={`${dialogId}-title`}>Nike by you 社群</h3>
        <p id={`${dialogId}-description`}>示例二维码</p>
        <Image
          src="/community-qr-demo.svg"
          alt="示例二维码，扫描结果为演示文本，不会加入社群"
          width={296}
          height={296}
          loading="eager"
          className="community-qr-image"
        />
        <button type="button" className="community-qr-close" aria-label="关闭二维码" onClick={() => dialogRef.current?.close()}>
          ×
        </button>
      </dialog>
    </section>
  )
}
