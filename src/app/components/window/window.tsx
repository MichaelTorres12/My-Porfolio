'use client'
import { useDrag } from '@/app/utils/drag'
import { motion } from 'framer-motion'

interface Props {
  title: string
  children: React.ReactNode
  onClose: () => void
  width?: string
  icon?: string
}

export default function Window({ title, children, onClose, width = "600px", icon = "/icons/folder.png" }: Props) {
  const { pos, onMouseDown } = useDrag()

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      className="xp-window fixed bg-white"
      style={{ top: pos.y, left: pos.x, width }}
    >
      <div
        className="window-header h-8 text-white flex items-center justify-between px-2 cursor-move"
        onMouseDown={onMouseDown}
      >
        <div className="flex items-center">
          <img src={icon} className="h-4 mr-2" />
          <span className="font-bold">{title}</span>
        </div>
        <div className="flex items-center">
          <button onClick={() => {}} className="xp-button px-1 mx-1 text-xs">_</button>
          <button onClick={() => {}} className="xp-button px-1 mx-1 text-xs">□</button>
          <button onClick={onClose} className="xp-button px-1 mx-1 text-xs hover:bg-red-500 hover:text-white">×</button>
        </div>
      </div>
      <div className="p-4 py-20 max-h-[500px] overflow-auto">{children}</div>
    </motion.div>
  )
}
