'use client'

import { useState } from 'react'
import Desktop from '@/app/components/desktop/Desktop'
import items from '@/app/data/menu'
import dynamic from 'next/dynamic'
import Window from '@/app/components/window/window'

export default function Home() {
  const [open, setOpen] = useState<string[]>([])

  /* ── abrir ventana ───────────────────────────── */
  const handleOpen = (id: string) => {
    if (!open.includes(id)) setOpen([...open, id])
  }

  const handleClose = (id: string) =>
    setOpen(open.filter((w) => w !== id))

  return (
    <>
      {/* ahora usamos onIconClick */}
      <Desktop onIconClick={handleOpen} />

      {open.map((id) => {
        const item = items.find((i) => i.id === id)
        if (!item) return null

        /* componente dinámico interno */
        if (item.component) {
          const Comp = dynamic(
            () => import(`@/app/components/window/content/${item.component}`),
            { ssr: false },
          )
          return <Comp key={id} onClose={() => handleClose(id)} />
        }

        /* PDFs incrustados           */
        if (item.href?.endsWith('.pdf')) {
          return (
            <Window key={id} title={item.label} onClose={() => handleClose(id)}>
              <iframe
                src={item.href}
                className="w-full h-[400px]"
                title={item.label}
              />
            </Window>
          )
        }

        /* links externos en ventana  */
        if (item.href) {
          return (
            <Window key={id} title={item.label} onClose={() => handleClose(id)}>
              <div className="flex flex-col items-center justify-center p-4">
                <p className="mb-4">
                  Haz clic en el botón para visitar {item.label}
                </p>
                <button
                  onClick={() => window.open(item.href, '_blank')}
                  className="xp-button px-4 py-2"
                >
                  Abrir {item.label}
                </button>
              </div>
            </Window>
          )
        }

        /* fallback */
        return (
          <Window key={id} title={item.label} onClose={() => handleClose(id)}>
            <div className="p-4">
              <p>No hay contenido disponible para este elemento.</p>
            </div>
          </Window>
        )
      })}
    </>
  )
}
