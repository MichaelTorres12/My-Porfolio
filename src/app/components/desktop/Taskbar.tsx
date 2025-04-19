'use client'
import { useState } from 'react'
import StartMenu from '@/app/components/start-menu/StartMenu'

export default function Taskbar() {
  const [open, setOpen] = useState(false)
  const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <>
      <div className="fixed bottom-0 left-0 xp-taskbar w-full h-9 flex items-center justify-between shadow-xp z-50">
        <div className="flex items-center">
          <button
            onClick={() => setOpen((p) => !p)}
            className="flex items-center h-7 px-3 mx-1 xp-start hover:brightness-110"
          >
            <span className="text-white font-bold capitalize h-20">start</span>
          </button>
          
          {/* Aquí puedes agregar botones de aplicaciones abiertas */}
        </div>
        
        <div className="bg-[#0b3e87] h-full px-2 flex items-center text-white text-xs">
          {currentTime}
        </div>
      </div>
      {open && <StartMenu onClose={() => setOpen(false)} />}
    </>
  )
}
