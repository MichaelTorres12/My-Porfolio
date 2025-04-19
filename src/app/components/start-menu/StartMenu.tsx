'use client'
import items from '@/app/data/menu'
import StartItem from './StartItem'

interface Props {
  onClose: () => void
}
export default function StartMenu({ onClose }: Props) {
  const handleSelect = () => onClose() // cierre automático

  return (
    <div
      className="start-menu fixed left-0 bottom-9 w-80 h-[420px] flex shadow-xp"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Panel izquierdo */}
      <div className="w-2/3 bg-white">
        <div className="start-menu-header h-14 flex items-center pl-4 text-white font-bold">
          Michael's PC
        </div>
        <ul className="px-2 pt-3">
          {items.map((it) => (
            <StartItem key={it.id} {...it} onSelect={handleSelect} />
          ))}
        </ul>
        <div className="absolute bottom-1 left-2 text-xs text-blue-800">
          All Programs &rsaquo;
        </div>
      </div>
      {/* Panel derecho (decorativo) */}
      <div className="w-1/3 bg-gray-100 border-l border-gray-300" />
    </div>
  )
}
