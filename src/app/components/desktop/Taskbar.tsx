'use client'
import { useState, useEffect } from 'react'
import StartMenu from '@/app/components/start-menu/StartMenu'

export default function Taskbar() {
  const [open, setOpen] = useState(false)
  const [time, setTime] = useState('')
  const [date, setDate] = useState('')
  
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))
      setDate(now.toLocaleDateString())
    }
    
    updateDateTime()
    const interval = setInterval(updateDateTime, 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {open && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setOpen(false)}
        />
      )}
      <div className="xp-taskbar flex items-center justify-between">
        <div className="flex items-center h-full">
          <button
            onClick={() => setOpen(prev => !prev)}
            className="xp-start flex items-center justify-between"
          >
            <img 
              src="/icons/windowsLogo.png" 
              alt="Windows" 
              className="windows-logo"
              height={24}
              width={24}
            />
            <span className="font-bold ">inicio</span>
          </button>
          
          {/* Aquí puedes agregar botones de aplicaciones abiertas */}
          <div className="flex ml-2 h-full">
            {/* Puedes añadir iconos de aplicaciones aquí si es necesario */}
          </div>
        </div>
        
        <div className="bg-[#0b3e87] h-full px-6 w-60 flex flex-col justify-center items-end">
          <div className="text-white text-xs">{time}</div>
          <div className="text-white text-[10px] ">{date}</div>
        </div>
      </div>
      {open && <StartMenu onClose={() => setOpen(false)} />}
    </>
  )
}
