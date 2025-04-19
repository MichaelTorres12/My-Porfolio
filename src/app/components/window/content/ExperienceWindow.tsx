'use client'

import { useState } from 'react'
import Window from '../window'
import { Badge } from '@/app/ui/Badge'

/* ─── Datos ─────────────────────────────────────────────────── */
type Entry = {
  id: string
  title: string
  icon: string
  content: {
    title: string
    description: string
    contributions: string[]
    stack: string[]
    images?: string[]
    link?: {
      url: string
      label: string
    }
  }
}

/* ========= EXPERIENCIAS LABORALES ========= */
const work: Entry[] = [
    {
      id: 'yaya',
      title: 'Yaya Facturas – Founding Engineer (2024‑25)',
      icon: '/icons/folder.webp',
      content: {
        title: 'Yaya Facturas',
        description:
          'SaaS + APIaaS de facturación electrónica desplegado en AWS. Diseñé y construí la plataforma end‑to‑end liderando a un equipo de 3 devs.',
        contributions: [
          'Arquitectura de microservicios (Node.js + TypeScript) con Docker',
          'Frontend React / Next.js y TailwindCSS (Vercel)',
          'CI/CD automático con GitHub Actions y CodePipeline',
          'Infraestructura en AWS ECS Fargate, RDS PostgreSQL, API Gateway, S3',
          'Caché distribuido con Redis para alto rendimiento'
        ],
        stack: ['TypeScript', 'Node.js', 'React', 'Next.js', 'AWS ECS', 'Docker', 'PostgreSQL'],
        images: ['/projects/yaya1.png', '/projects/yaya2.png', '/projects/yaya3.png', ],
        link: { url: 'https://yayafacturas.com', label: 'Visitar sitio' }
      }
    },
    {
      id: 'fguni',
      title: 'Francisco Gavidia University – Full Stack Dev (2024)',
      icon: '/icons/folder.webp',
      content: {
        title: 'Modernización Sistema Bibliotecario',
        description:
          'Migré un sistema PHP de 8 años a una arquitectura moderna REST + React, reduciendo la deuda técnica y acelerando la carga un 40 %.',
        contributions: [
          'Refactor de módulos críticos a Node.js + Express + TypeScript',
          'Migración de vistas a React/Next.js con SSR',
          'Chatbot GPT para búsqueda de libros en tiempo real',
          'Mitigación de scraping con Cloudflare CDN (‑42 % de carga)'
        ],
        stack: ['Node.js', 'TypeScript', 'React', 'Next.js', 'Cloudflare'],
        images: [],
        link: undefined
      }
    },
    {
      id: 'emprende',
      title: 'Emprende Hoy Foundation – Full Stack Dev (2022)',
      icon: '/icons/folder.webp',
      content: {
        title: 'ERP Contable MERN',
        description:
          'ERP escalable para ONGs y PYMEs; manejó un incremento x3 en transacciones.',
        contributions: [
          'Back‑end MongoDB + Express + React + Node (MERN)',
          'Procesos específicos en Python (Django)',
          'Mentor de 6 devs junior (‑25 % bugs)',
          'Optimización de consultas PostgreSQL con ORM'
        ],
        stack: ['React', 'Node.js', 'MongoDB', 'Python Django', 'PostgreSQL'],
        images: [],
        link: undefined
      }
    },
    {
      id: 'freelance',
      title: 'Freelance – Software Dev (2022‑presente)',
      icon: '/icons/folder.webp',
      content: {
        title: 'Proyectos Freelance (23+)',
        description:
          'Desarrollo de plataformas web/móvil para clientes en LATAM, USA y Europa.',
        contributions: [
          'Sistema de monitoreo de cámaras infrarrojas (SENSIA Solutions, ES)',
          'App oficial Juegos Deportivos Chilenos 2023 (Android + Jetpack Compose)',
          '15+ landing pages SEO para empresas como TransBank y MetaBix',
          'Uso de AWS EC2, S3, Docker y despliegue continuo'
        ],
        stack: [
          'React',
          'Next.js',
          'TypeScript',
          'AWS',
          'Kotlin',
          'Jetpack Compose',
          'Docker'
        ],
        images: ['/screenshots/sensia1.jpg'],
        link: undefined
      }
    }
  ] /* :contentReference[oaicite:0]{index=0}&#8203;:contentReference[oaicite:1]{index=1} */
  
  /* ========= PROYECTOS PERSONALES ========= */
  const projects: Entry[] = [
    {
      id: 'ordenapp',
      title: 'Ordena.app – Frontend Lead (2023‑24)',
      icon: '/icons/folder.webp',
      content: {
        title: 'Ordena.app',
        description:
          'E‑commerce vía WhatsApp para MIPYMEs; onboarding &lt; 5 min y generación de QR + facturas PDF.',
        contributions: [
          'Diseño de UI/UX y desarrollo frontend con Next.js + TailwindCSS',
          'Integración WhatsApp Business API',
          'Generación de PDFs con html2canvas & jsPDF',
          'Dashboard de métricas en tiempo real'
        ],
        stack: ['Next.js', 'TailwindCSS', 'MongoDB', 'WhatsApp API'],
        images: ['/screenshots/ordena1.jpg'],
        link: { url: 'https://ordena.app', label: 'Probar demo' }
      }
    },
    {
      id: 'vibets',
      title: 'ViBets – Co‑fundador (2024‑)',
      icon: '/icons/folder.webp',
      content: {
        title: 'ViBets',
        description:
          'App social de apuestas y retos con chat en tiempo real y monedas internas.',
        contributions: [
          'App móvil con React Native Expo',
          'Supabase para auth, SQL y almacenamiento de imágenes',
          'Funciones programadas en SQL y cron jobs para liquidar apuestas',
          'Publicación en Play Store (APK)'
        ],
        stack: ['React Native', 'Supabase', 'TypeScript'],
        images: ['/screenshots/vibets1.jpg'],
        link: {
          url: 'https://expo.dev/accounts/michael_torres/projects/ViBets-app',
          label: 'Descargar APK'
        }
      }
    },
    {
      id: 'pave',
      title: 'Pave Energy – Prototype (2023‑24)',
      icon: '/icons/folder.webp',
      content: {
        title: 'Pave Energy',
        description:
          'Speed‑bump piezoeléctrico que convierte energía vehicular en eléctrica (Top 3 ASU‑UFG).',
        contributions: [
          'Diseño del circuito piezoeléctrico y electrónica de potencia',
          'Programación de microcontroladores (Arduino C++)',
          'Dashboard Python para visualizar energía generada',
          'Presentación en competencias nacionales e internacionales'
        ],
        stack: ['Arduino', 'C++', 'Python', 'IoT'],
        images: ['/screenshots/pave1.jpg'],
        link: { url: 'https://github.com/michaeltorres/pave-energy', label: 'Ver repositorio' }
      }
    }
  ]
  

const stacks = [
  'React',
  'Next.js',
  'Node.js',
  'TypeScript',
  'TailwindCSS',
  'PostgreSQL',
  'AWS',
  'Supabase',
  'Docker',
  'Kotlin',
  'Python',
]

/* ─── Componente ─────────────────────────────────────────────── */
interface Props {
  onClose: () => void
}
export default function ExperienceWindow({ onClose }: Props) {
  const [selected, setSelected] = useState<Entry | null>(null)

  const renderWelcome = () => (
    <div className="prose max-w-none p-4">
      <h1 className="mb-2">Bienvenido a mi sección de experiencia</h1>
      <p>Haz clic en un elemento del panel izquierdo para ver detalles.</p>
      <h2 className="mt-4 font-bold">Tech Stacks</h2>
        <ul className="list-disc pl-5 text-sm space-y-[2px]">
        {stacks.map((t) => (
            <li key={t}>{t}</li>
        ))}
        </ul>

    </div>
  )

  const renderContent = (entry: Entry) => (
    <div className="px-20 mb-20">
      <h1 className="text-xl font-bold mb-2">{entry.content.title}</h1>
      <p className="mb-4 text-sm">{entry.content.description}</p>
      
      <h2 className="text-lg font-bold mt-4 mb-2">Mi aporte</h2>
      <ul className="list-disc pl-5 mb-4">
        {entry.content.contributions.map((contribution, idx) => (
          <li key={idx} className="text-sm mb-1">{contribution}</li>
        ))}
      </ul>
      
    <h2 className="text-lg font-bold mt-4 mb-1">Tecnologías</h2>
    <ul className="list-disc pl-5 text-sm space-y-[2px] mb-4">
    {entry.content.stack.map((tech) => (
        <li key={tech}>{tech}</li>
    ))}
    </ul>
      
      {entry.content.images && entry.content.images.length > 0 && (
        <>
            <Carousel images={entry.content.images} />
        </>
      )}
      
      {entry.content.link && (
        <div className="mt-6 mb-20">
          <a 
            href={entry.content.link.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="xp-button py-1 mb-20 px-4 inline-block hover:bg-blue-100 transition-colors"
          >
            {entry.content.link.label} →
          </a>
        </div>
      )}
    </div>
  )

/* ─── Carrusel reutilizable ───────────────────────── */
function Carousel({ images }: { images: string[] }) {
    const [idx, setIdx] = useState(0)
    const prev = () => setIdx((idx - 1 + images.length) % images.length)
    const next = () => setIdx((idx + 1) % images.length)
  
    return (
      <div className="relative w-full">
        {/* imagen */}
        <img src={images[idx]} className="w-[80%] h-auto rounded" />
  
        {/* flechas */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-yellow-500 hover:bg-black/70 text-white rounded-full p-2"
        >
          ‹
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-yellow-500 hover:bg-black/70 text-white rounded-full p-2"
        >
          ›
        </button>
  
        {/* indicadores */}
        <div className="flex justify-center gap-1 mt-2">
          {images.map((_, i) => (
            <span
              key={i}
              onClick={() => setIdx(i)}
              className={`h-2 w-2 rounded-full cursor-pointer ${
                i === idx ? 'bg-yellow-500' : 'bg-yellow-400'
              }`}
            />
          ))}
        </div>
      </div>
    )
  }
  

  return (
    <Window title="Mi Experiencia" onClose={onClose} width="1100px">
      <div className="flex h-[600px]">
        {/* Panel izquierdo */}
        <div className="w-56 bg-[#e7f1ff] border-r border-xp-gray overflow-auto">
          <Section
            title="Experiencia Laboral"
            entries={work}
            onSelect={setSelected}
            activeId={selected?.id}
          />
          <Section
            title="Proyectos Personales"
            entries={projects}
            onSelect={setSelected}
            activeId={selected?.id}
          />
        </div>

        {/* Panel derecho */}
        <div className="flex-1 bg-[#edf4fc] overflow-auto">
          <div className="p-6 max-w-3xl mx-auto">
            {selected ? renderContent(selected) : renderWelcome()}
          </div>
        </div>
      </div>
    </Window>
  )
}

/* Panel izquierdo reutilizable */
function Section({
  title,
  entries,
  onSelect,
  activeId,
}: {
  title: string
  entries: Entry[]
  onSelect: (e: Entry) => void
  activeId?: string
}) {
  return (
    <div className="mb-4">
      <div className="bg-xp-blue text-white text-sm font-bold px-2 py-[2px]">
        {title}
      </div>
      {entries.map((e) => (
        <button
          key={e.id}
          onClick={() => onSelect(e)}
          className={`flex items-center w-full gap-2 px-2 py-1 text-left text-xs hover:bg-xp-light/20 ${
            activeId === e.id ? 'bg-white' : ''
          }`}
        >
        <img
        src={e.icon}
        className="w-4 h-4 min-w-[16px] min-h-[16px] max-w-[16px] max-h-[16px] flex-shrink-0"
        alt=""
        />
          <span>{e.title}</span>
        </button>
      ))}
    </div>
  )
}
