'use client'
import { useState, useCallback } from 'react'

export function useDrag(initial = { x: 120, y: 120 }) {
  const [pos, setPos] = useState(initial)

  const onMouseDown = useCallback(
    (e: React.MouseEvent) => {
      const startX = e.pageX - pos.x
      const startY = e.pageY - pos.y

      function onMove(ev: MouseEvent) {
        setPos({ x: ev.pageX - startX, y: ev.pageY - startY })
      }
      function onUp() {
        window.removeEventListener('mousemove', onMove)
        window.removeEventListener('mouseup', onUp)
      }
      window.addEventListener('mousemove', onMove)
      window.addEventListener('mouseup', onUp)
    },
    [pos],
  )

  return { pos, onMouseDown }
}
