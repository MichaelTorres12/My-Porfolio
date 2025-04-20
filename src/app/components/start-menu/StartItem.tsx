'use client'
import { MenuItem } from '@/app/data/menu'

interface Props extends MenuItem {
  onSelect: (id: string) => void
}
export default function StartItem({ id, label, icon, href, component, download, onSelect }: Props) {
  const handle = () => {
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
    } else {
      // Si no hay href, pero hay component o no, llamar a onSelect
      // Esto asegura que Mi Experiencia funcione aunque no tenga href
      onSelect(id)
    }
  }

  return (
    <li
      onClick={handle}
      className="start-menu-item"
    >
      <img src={icon} alt={label} />
      <span>{label}</span>
    </li>
  )
}
