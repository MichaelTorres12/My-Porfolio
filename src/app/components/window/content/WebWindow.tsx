'use client'
import Window from '@/app/components/window/window'

interface Props { 
  onClose: () => void 
  url: string
  title: string
}

export default function WebWindow({ onClose, url, title }: Props) {
  return (
    <Window title={title} onClose={onClose}>
      <iframe 
        src={url} 
        className="w-full h-[400px] border-0" 
        title={title}
      />
    </Window>
  )
} 