'use client'
import { MenuItem } from '@/app/data/menu'

interface Props extends MenuItem {
  onSelect: (id: string) => void
}
export default function StartItem({ id, label, icon, href, component, onSelect }: Props) {
  const handle = () => {
    if (href) {
      window.open(href, '_blank')
    } else if (component) {
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
