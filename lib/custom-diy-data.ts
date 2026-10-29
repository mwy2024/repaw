export const letterPatch = { name: '字母绣片贴', price: 39 } as const

export const patchColors = [
  { name: '柔和黄绿', value: '#D2CF68' },
  { name: '活力橙', value: '#ff714b' },
  { name: '电光蓝', value: '#5e8cff' },
  { name: '奶油白', value: '#f1e9d9' },
] as const

export const chainStyles = [
  { id: 'lime', name: '荧光绿', color: '#C8FF00', price: 69, note: '轻量耐磨，自在出发' },
  { id: 'orange', name: '日落橙', color: '#ff714b', price: 79, note: '暖调撞色，醒目有型' },
  { id: 'blue', name: '运动蓝', color: '#5e8cff', price: 79, note: '活力蓝调，日常百搭' },
] as const
