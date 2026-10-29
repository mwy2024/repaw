'use client'

import Image from 'next/image'
import { useId, useRef, useState } from 'react'

const products = [
  { name: '山野拼色外套', description: '岩棕与蓝，陪小伙伴一起走进山野。', price: 399, image: '/v2-104004dg326oknind5805a812s0.png', color: '岩棕 / 山蓝' },
  { name: '莓果轻行马甲', description: '把一抹明亮，穿进周末的户外日常。', price: 299, image: '/v2-104004dg326oknioal80fah1vjc.png', color: '莓粉 / 珊瑚' },
  { name: '沙丘连帽马甲', description: '奶油与沙色，是你们的自然默契。', price: 329, image: '/v2-104004dg326oknimg4675ktttvc.png', color: '沙棕 / 奶油' },
  { name: '深海拼色连体衣', description: '深蓝与橙，把运动感穿进日常。', price: null, image: '/v3-104004dg326thjmqeka0fds9s9o.png', color: '深蓝 / 橙白' },
  { name: '跃动拼色连体衣', description: '鲜明撞色，陪小伙伴一起动起来。', price: null, image: '/v3-104004dg326thjms3m6e2i6r0i4.png', color: '亮蓝 / 活力橙' },
  { name: '薄荷轻行连体衣', description: '清爽配色，让每次出发都轻盈。', price: null, image: '/v3-104004dg326thjmt64c0cpfstm4.png', color: '薄荷绿 / 浅蓝' },
  { name: '林间拼色连体衣', description: '自然绿与暖橙，探索更多户外日常。', price: null, image: '/v3-104004dg326thjmu9460f1d6sd4.png', color: '森林绿 / 浅蓝橙' },
  { name: '桑巴运动连体衣', description: '黄绿蓝的运动热情，一起奔向下一场冒险。', price: null, image: '/v3-104004dg326thjmvg5802suri70.png', color: '明黄 / 绿蓝' },
]

const detailImage = '/v2-104004dg326okqn1o4609oocojg.png'
const gallery = [
  { type: 'image', src: detailImage, label: '款式细节 01', thumbnail: detailImage },
  { type: 'image', src: '/product-detail-02.png', label: '款式细节 02', thumbnail: '/product-detail-02.png' },
  { type: 'video', src: '/product-motion-01.mp4', label: '动态展示 01', thumbnail: products[0].image },
  { type: 'video', src: '/product-motion-02.mp4', label: '动态展示 02', thumbnail: products[0].image },
] as const

export default function ShopSection() {
  const id = useId()
  const dialogRef = useRef<HTMLDialogElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [media, setMedia] = useState(0)
  const selectedMedia = gallery[media]
  const [size, setSize] = useState('M')

  function resetVideo() {
    const video = videoRef.current
    if (video) {
      video.pause()
      video.currentTime = 0
    }
  }

  function closeProduct() {
    resetVideo()
    dialogRef.current?.close()
  }

  return (
    <section id="shop" className="demo-shop" aria-labelledby={`${id}-heading`}>
      <header className="demo-shop-heading">
        <div>
          <h2 id={`${id}-heading`}>立即选购 <span>户外系列</span></h2>
        </div>
      </header>

      <div className="demo-shop-layout">
        <aside className="demo-shop-filters" aria-label="商品分类">
          <p className="demo-shop-menu-title">选购分类</p>
          <div className="demo-shop-audience" role="group" aria-label="穿着对象">
            <p className="demo-shop-group-label">穿着对象</p>
            {['MAN', 'WOMAN', 'PET'].map((label) => (
              <button key={label} type="button" disabled={label !== 'PET'} aria-pressed={label === 'PET'}>
                <span>{label}</span><small>{label === 'PET' ? '宠物' : label === 'MAN' ? '男士' : '女士'}</small>
              </button>
            ))}
          </div>
          <div className="demo-shop-categories" role="group" aria-label="运动场景">
            <p className="demo-shop-group-label">运动场景 / PET</p>
            {['跑步', '户外', '网球'].map((label) => (
              <button key={label} type="button" disabled={label !== '户外'} aria-pressed={label === '户外'}>{label}</button>
            ))}
          </div>
        </aside>

        <div className="demo-shop-products">
          {products.map((product, index) => {
            const content = (
              <>
                <span className="demo-shop-card-image">
                  <Image src={product.image} alt={`宠物穿着${product.name}`} fill sizes="(max-width: 600px) 100vw, (max-width: 1000px) 45vw, 22vw" style={index > 2 ? { objectFit: 'contain' } : undefined} />
                  <span className="demo-shop-card-tag">PET / OUTDOOR</span>
                  {index === 0 && <span className="demo-shop-card-arrow" aria-hidden="true">↗</span>}
                </span>
                <span className="demo-shop-card-meta">{product.color}</span>
                <span className="demo-shop-card-title">{product.name}</span>
                <span className="demo-shop-card-description">{product.description}</span>
                {product.price !== null && <span className="demo-shop-card-price">¥{product.price}</span>}
              </>
            )
            return (
              <article key={product.name} className="demo-shop-card">
                {index === 0 ? (
                  <button type="button" className="demo-shop-card-content demo-shop-card-trigger" aria-haspopup="dialog" aria-controls={`${id}-dialog`} aria-label={`查看${product.name}详情，人民币${product.price}元`} onClick={() => {
                    setMedia(0)
                    setSize('M')
                    dialogRef.current?.showModal()
                  }}>{content}</button>
                ) : <div className="demo-shop-card-content">{content}</div>}
              </article>
            )
          })}
        </div>
      </div>

      <dialog ref={dialogRef} id={`${id}-dialog`} className="demo-product" aria-labelledby={`${id}-title`} onClose={() => {
        resetVideo()
        setMedia(0)
      }} onCancel={resetVideo}>
        <button type="button" className="demo-product-close" aria-label="关闭商品详情" autoFocus onClick={closeProduct}><span aria-hidden="true">×</span></button>
        <div className="demo-product-layout">
          <div className="demo-product-gallery">
            <div className="demo-product-stage">
              {selectedMedia.type === 'image' ? <div className="demo-product-image">
                <Image src={selectedMedia.src} alt={`山野拼色外套${selectedMedia.label}`} fill sizes="(max-width: 767px) 92vw, 60vw" />
              </div> : <video key={selectedMedia.src} ref={videoRef} controls playsInline preload="metadata" aria-label={`山野拼色外套${selectedMedia.label}`}>
                <source src={selectedMedia.src} type="video/mp4" />
                您的浏览器不支持视频播放。
              </video>}
            </div>
            <div className="demo-product-thumbnails" role="group" aria-label="选择商品展示媒体">
              {gallery.map((item, index) => <button key={item.src} type="button" aria-pressed={media === index} aria-label={`查看${item.label}`} onClick={() => { resetVideo(); setMedia(index) }}>
                <span className="demo-product-thumbnail-image"><Image src={item.thumbnail} alt="" fill sizes="80px" />{item.type === 'video' && <span className="demo-product-play" aria-hidden="true">▷</span>}</span><span>{item.label}</span>
              </button>)}
            </div>
          </div>

          <div className="demo-product-info">
            <h3 id={`${id}-title`}>{products[0].name}</h3>
            <p className="demo-product-description">岩棕拼山蓝，把山野的颜色穿在身上。连帽轮廓与拼色细节，给四足伙伴一份独有的出发仪式感。</p>
            <p className="demo-product-price">¥{products[0].price}</p>
            <fieldset className="demo-product-sizes">
              <legend>选择尺码</legend>
              <div>{['S', 'M', 'L'].map((option) => (
                <label key={option}>
                  <input type="radio" name={`${id}-size`} value={option} checked={size === option} onChange={() => setSize(option)} />
                  <span>{option}</span>
                </label>
              ))}</div>
            </fieldset>
            <div className="demo-product-actions">
              <a href="#custom" onClick={closeProduct}>专属定制 <span aria-hidden="true">↗</span></a>
              <div className="demo-product-purchase">购买</div>
            </div>
          </div>
        </div>
      </dialog>
    </section>
  )
}
