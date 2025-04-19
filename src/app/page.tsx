'use client'

import { useState, useCallback } from 'react'
import Desktop from '@/app/components/desktop/Desktop'
import items from '@/app/data/menu'
import dynamic from 'next/dynamic'
import Window from '@/app/components/window/window'

// Definimos una interfaz para las props comunes de todas las ventanas dinámicas
interface DynamicWindowProps {
  onClose: () => void;
}

export default function Home() {
  const [open, setOpen] = useState<string[]>([])

  const handleOpen = useCallback((id: string) => {
    console.log(`Opening item with id: ${id}`)
    const item = items.find(i => i.id === id)
    if (!item) return

    if (!open.includes(id)) {
      setOpen(prev => [...prev, id])
    }
  }, [open])
  
  const handleClose = useCallback((id: string) => {
    setOpen(prev => prev.filter(w => w !== id))
  }, [])

  return (
    <>
      <Desktop onIconClick={handleOpen} />
      
      {open.map(id => {
        const item = items.find(i => i.id === id)
        if (!item) return null
        
        if (item.component) {
          // Especificamos el tipo para el componente dinámico
          const Comp = dynamic<DynamicWindowProps>(
            () => import(`@/app/components/window/content/${item.component}`),
            { ssr: false }
          )
          return <Comp key={id} onClose={() => handleClose(id)} />
        }
        
        // Para otros elementos que no tienen componente específico
        return (
          <Window key={id} title={item.label} onClose={() => handleClose(id)}>
            <div className="p-4">
              <p>No hay contenido disponible para {item.label}.</p>
            </div>
          </Window>
        )
      })}
    </>
  )
}
