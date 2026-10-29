'use client'

import { useState } from 'react'
import { letterPatch, patchColors, chainStyles } from '@/lib/custom-diy-data'
import NikeByYouBar from '@/components/shared/NikeByYouBar'

export default function CustomSection() {
  const [patchText, setPatchText] = useState('PAW')
  const [patchColor, setPatchColor] = useState<string>(patchColors[0].value)
  const [chainText, setChainText] = useState('BUDDY')
  const [chainId, setChainId] = useState<string>(chainStyles[0].id)
  const [showOrder, setShowOrder] = useState(false)

  const patch = letterPatch
  const chain = chainStyles.find((item) => item.id === chainId) ?? chainStyles[0]
  const total = patch.price + chain.price

  return (
    <section id="custom" className="custom-page custom-section" aria-label="nike by you">
      <NikeByYouBar />
      <header className="custom-intro">
        <p className="custom-kicker">REPAW BY YOU / MAKE IT YOURS</p>
        <h2><span className="custom-title-highlight">两步 DIY</span>，拼出专属搭子装备</h2>
        <p>选择专属字母链、字母绣片贴，定制独一无二的宠物服饰</p>
      </header>

      <section className="custom-workspace" aria-label="nike by you 定制选项">
        <div className="custom-panel">
          <div className="custom-panel-heading">
            <span>01 / PATCH</span>
            <h2>字母绣片贴</h2>
            <p>把名字或纪念数字，绣进你们下一段户外故事。</p>
          </div>
          <label className="custom-label" htmlFor="patch-text">你的专属字母 <small>最多 4 个字母或数字</small></label>
          <input id="patch-text" className="custom-input" maxLength={4} value={patchText} placeholder="例如 PAW"
            onChange={(event) => setPatchText(event.target.value.replace(/[^a-zA-Z0-9]/g, '').toUpperCase())} />

          <p className="custom-label">选择字母颜色</p>
          <div className="custom-swatches">
            {patchColors.map((item) => <button type="button" key={item.value} title={item.name} aria-label={`字母颜色：${item.name}`}
              aria-pressed={patchColor === item.value} className={patchColor === item.value ? 'is-selected' : ''}
              style={{ backgroundColor: item.value }} onClick={() => setPatchColor(item.value)} />)}
          </div>
        </div>

        <div className="custom-panel">
          <div className="custom-panel-heading">
            <span>02 / LETTER CHAIN</span>
            <h2>字母链</h2>
            <p>每个字母都有意义，串起只属于它的名字。</p>
          </div>
          <label className="custom-label" htmlFor="chain-text">字母链内容 <small>最多 8 个字母</small></label>
          <input id="chain-text" className="custom-input" maxLength={8} value={chainText} placeholder="例如 BUDDY"
            onChange={(event) => setChainText(event.target.value.replace(/[^a-zA-Z]/g, '').toUpperCase())} />

          <p className="custom-label">选择配色</p>
          <div className="custom-options">
            {chainStyles.map((item) => <button type="button" key={item.id} aria-pressed={chainId === item.id}
              className={`custom-option ${chainId === item.id ? 'is-selected' : ''}`} onClick={() => setChainId(item.id)}>
              <span className="custom-option-dot" style={{ backgroundColor: item.color }} />
              <span><strong>{item.name}</strong><small>{item.note}</small></span>
              <b>¥ {item.price}</b>
            </button>)}
          </div>
          <div className="custom-info">使用再生材料制作。字母链可搭配衣服、项圈或随身包袋。</div>
        </div>

        <div className="custom-panel custom-preview-panel">
          <div className="custom-panel-heading">
            <span>03 / YOUR DESIGN</span>
            <h2>效果预览</h2>
            <p>每一次选择，都让它更像你的搭子。</p>
          </div>
          <div className="custom-preview-stage">
            <div className="custom-fabric">
              <div className="custom-patch" style={{ color: patchColor }} aria-label={`字母绣片贴：${patchText}`}>
                {(patchText || '···').split('').map((letter, i) => <span key={i}>{letter}</span>)}
              </div>
              <div className="custom-chain" style={{ '--chain-color': chain.color } as React.CSSProperties} aria-label={`字母挂链：${chainText}`}>
                <span className="custom-chain-clip" aria-hidden="true" />
                <div className="custom-chain-letters">
                  {(chainText || '···').split('').map((letter, i) => <span key={i}>{letter}</span>)}
                </div>
                <span className="custom-chain-knot" aria-hidden="true" />
              </div>
            </div>
          </div>
          <div className="custom-summary">
            <div><span>{patch.name} · {patchText || '未输入字母'}</span><strong>¥ {patch.price}</strong></div>
            <div><span>{chain.name} · {chainText || '未输入字母'}</span><strong>¥ {chain.price}</strong></div>
            <div className="custom-total"><span>定制配件总价</span><strong>¥ {total}</strong></div>
          </div>
          <button className="custom-order" type="button" onClick={() => setShowOrder(true)}
            disabled={!patchText || !chainText}>一键下单 <span>↗</span></button>
          <p className="custom-order-hint">页面为搭配演示，尚未接入真实订单与支付。</p>
        </div>
      </section>

      {showOrder && <div className="custom-dialog-backdrop" onClick={() => setShowOrder(false)}>
        <div role="dialog" aria-modal="true" aria-labelledby="custom-dialog-title" className="custom-dialog" onClick={(event) => event.stopPropagation()}>
          <p className="custom-kicker">YOUR DESIGN IS READY</p>
          <h2 id="custom-dialog-title">专属搭配已选好</h2>
          <p>字母绣片贴「{patchText}」+ 字母链「{chainText}」，定制配件总价 ¥ {total}。</p>
          <p>当前为页面演示，尚未接入真实下单及支付服务。</p>
          <button type="button" onClick={() => setShowOrder(false)}>继续修改搭配</button>
        </div>
      </div>}
    </section>
  )
}
