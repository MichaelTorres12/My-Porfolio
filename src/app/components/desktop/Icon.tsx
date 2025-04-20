'use client'

import { MenuItem } from '@/app/data/menu'
import { useState } from 'react'

interface Props extends MenuItem {
  onClick: (id: string) => void
}

export default function Icon({
  id,
  label,
  icon,
  href,
  component,
  download,
  onClick,
}: Props) {
  const [isSelected, setIsSelected] = useState(false)

  /* manejo de selección visual  */
  const handleSelect = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsSelected(true)
    const deselect = () => {
      setIsSelected(false)
      document.removeEventListener('click', deselect)
    }
    document.addEventListener('click', deselect)
  }

  /* clic único para abrir ventana o enlace */
  const handleOpen = () => {
    if (href) {
      if (download) {
        // Crear un elemento a y simular clic para descargar
        const link = document.createElement('a')
        link.href = href
        link.download = href.split('/').pop() || 'download'
        link.target = '_blank'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      } else {
        // Abrir enlace normal en nueva pestaña
        window.open(href, '_blank')
      }
    } else if (component) {
      onClick(id)
    }
  }

  return (
    <div
      onClick={(e) => {
        handleSelect(e)
        handleOpen()
      }}
      className={`desktop-icon ${isSelected ? 'bg-blue-500/30' : ''}`}
    >
      <img src={icon} draggable={false} alt={label} />
      <span>{label}</span>
    </div>
  )
}
