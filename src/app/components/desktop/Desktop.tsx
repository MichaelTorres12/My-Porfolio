'use client'

import Icon from './Icon'
import Taskbar from './Taskbar'
import items from '@/app/data/menu'

interface Props {
  onIconClick: (id: string) => void
}
export default function Desktop({ onIconClick }: Props) {
  return (
    <div className="absolute inset-0 flex flex-col">
      <div className="flex-grow grid grid-cols-[repeat(auto-fill,minmax(80px,1fr))] auto-rows-max gap-y-1 p-2 content-start">
        {items.map((item) => (
          <Icon key={item.id} {...item} onClick={onIconClick} />
        ))}
      </div>

      <Taskbar />
    </div>
  )
}
