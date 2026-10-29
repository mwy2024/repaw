import Image from 'next/image'

const shares = [
  { handle: '山里有只栗子', initial: '栗', image: '/徒步小狗.png', alt: '户外徒步场景中的小狗', category: 'TRAIL DIARY', title: '今天的山野搭子，也穿了同色系', review: '我的旧户外外套变成它的小装备，岩棕配色和我的衣服刚好呼应。一起走进山里，连背影都有了默契。', tags: '#人宠同款 #周末徒步' },
  { handle: '拿铁和它的帐篷', initial: '拿', image: '/露营小狗.png', alt: '露营场景中的小狗', category: 'CAMPING DAYS', title: '露营清单里，多了一件有故事的衣服', review: '把穿过很多次的外套重新做给拿铁，熟悉的颜色又出现在营地。人宠穿搭不必一模一样，彼此呼应就很好。', tags: '#带狗露营 #旧衣新生' },
  { handle: '豆包的散步手账', initial: '豆', image: '/v2-104004dg326oknind5805a812s0.png', alt: '穿岩棕蓝色拼接外套的雪纳瑞', category: 'OUTDOOR PAIR', title: '给豆包的小外套，留一个名字的位置', review: '喜欢岩棕和蓝色的拼接，想再加一块写着 DOUBAO 的字母贴。平常的散步装备，也能有自己的小小签名。', tags: '#宠物户外服 #定制字母贴' },
]

export default function FeedbackSection() {
  return (
    <section id="feedback" className="demo-feedback" aria-labelledby="demo-feedback-heading">
      <header className="demo-feedback-heading">
        <h2 id="demo-feedback-heading">用户分享</h2>
      </header>
      <div className="demo-feedback-grid">
        {shares.map((share, index) => (
          <article key={share.handle} className="demo-feedback-card">
            <div className="demo-feedback-image">
              <Image src={share.image} alt={share.alt} fill sizes="(max-width: 600px) 46vw, (max-width: 1000px) 45vw, 30vw" />
              <span className="demo-feedback-image-label">{share.category}</span>
              <span className="demo-feedback-image-index" aria-hidden="true">0{index + 1}</span>
            </div>
            <div className="demo-feedback-content">
              <h3>{share.title}</h3>
              <p className="demo-feedback-review">{share.review}</p>
              <p className="demo-feedback-tags">{share.tags}</p>
              <footer className="demo-feedback-author">
                <span className="demo-feedback-avatar" aria-hidden="true">{share.initial}</span>
                <div><span>{share.handle}</span><small>示例用户</small></div>
                <span className="demo-feedback-heart" aria-hidden="true">♡</span>
              </footer>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
