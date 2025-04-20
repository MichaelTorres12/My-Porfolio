'use client'
import items from '@/app/data/menu'
import StartItem from './StartItem'
import Image from 'next/image'

interface Props {
  onClose: () => void
}
export default function StartMenu({ onClose }: Props) {
  const handleSelect = () => onClose() // cierre automático

  return (
    <div
      className="start-menu"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Panel izquierdo con los elementos del menú */}
      <div className="start-menu-left">
        <div className="start-menu-header">
          <div className="start-menu-user">
            <span className="start-menu-username">Michael's PC</span>
            <div className="start-menu-user-photo">
              <img 
                src="https://avatars.githubusercontent.com/u/138163445?v=4" 
                alt="Michael Torres" 
                className="user-photo"
              />
            </div>
          </div>
        </div>
        <ul className="start-menu-items">
          {items.map((it) => (
            <StartItem key={it.id} {...it} onSelect={handleSelect} />
          ))}
        </ul>
        <div className="start-menu-footer">
          All Programs &rsaquo;
        </div>
      </div>
      
      {/* Panel derecho decorativo */}
      <div className="start-menu-right">
        {/* Podríamos añadir iconos de sistema o enlaces comunes aquí */}
      </div>
    </div>
  )
}
