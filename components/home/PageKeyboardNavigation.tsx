'use client'

import { useEffect } from 'react'

export default function PageKeyboardNavigation() {
  useEffect(() => {
    let destination: HTMLElement | null = null
    let lastPress = 0

    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== 'ArrowRight' || event.repeat || event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return
      if (document.querySelector('dialog[open], [role="dialog"][aria-modal="true"]') || (event.target instanceof Element && event.target.closest('input, textarea, select, video, [contenteditable]:not([contenteditable="false"]), [role="slider"], [role="tab"]'))) return

      const sections = Array.from(document.querySelectorAll<HTMLElement>('.presentation-page > section[id]'))
      const navHeight = document.querySelector('nav')?.getBoundingClientRect().height ?? 80
      const now = Date.now()
      // Continue from the pending destination while smooth scrolling is in flight.
      const current = destination && now - lastPress < 1500
        ? sections.indexOf(destination)
        : sections.findLastIndex((section) => section.getBoundingClientRect().top <= navHeight + 24)
      const next = sections[current + 1]
      if (!next) return

      event.preventDefault()
      destination = next
      lastPress = now
      next.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' })
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return null
}
