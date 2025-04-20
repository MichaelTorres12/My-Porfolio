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
      title: 'Yaya Technologies – Founding Engineer (2024‑25)',
      icon: 'https://www.yayafacturas.com/yayafacturas-logo-min.png',
      content: {
        title: 'Yaya Technologies',
        description:
          'Empresa proovedora de soluciones de facturación electrónica y ERP para PYMEs en El Salvador. Ofrecen soluciones de facturación electrónica, ERP, CRM, inventario, etc en su SaaS (Software as a Service) y APIaaS (Software as a Service).',
        contributions: [
          'Como Full Stack Developer y Founding Engineer, lideré la creación y desarrollo completo de la plataforma desde cero, gestionando un equipo de desarrollo para implementar soluciones tanto en frontend como backend. Desarrollé la lógica de negocio principal, establecí pipelines automatizados CI/CD y diseñé una infraestructura escalable y segura en AWS.',
          'Arquitectura de microservicios (Node.js + TypeScript) con Docker en AWS.',
          'Frontend React / Next.js y TailwindCSS (Vercel).',
          'CI/CD automático.',
          'Infraestructura en AWS ECS Fargate, RDS PostgreSQL, API Gateway, S3.',
        ],
        stack: ['Frontend: TypeScript, React, Next.js, TailwindCSS, Framer Motion.', 'Backend: Node.js, TypeScript, Express, PostgreSQL.', 'Infraestructura: AWS, Docker, CI/CD.', 'API: REST, GraphQL.'],
        images: ['/projects/yaya1.png', '/projects/yaya2.png', '/projects/yaya3.png', ],
        link: { url: 'https://yayafacturas.com', label: 'Visitar sitio' }
      }
    },
    {
      id: 'fguni',
      title: 'Universidad Francisco Gavidia – Full Stack Dev (2024)',
      icon: 'https://onlineuniversity.ufg.edu.sv/img/logos/Logo_Institucional_UFG/Logo_Institucional.png',
      content: {
        title: 'Modernización Sistema Bibliotecario',
        description:
          'Universidad privada de El Salvador, a pesar de que estudio aqui, igualmente trabje tras ver una vacante en el área de desarrollo por LinkedIn.',
        contributions: [
          'Refactor de módulos críticos desde PHP a Node.js + Express + TypeScript',
          'Migración de vistas a React/Next.js con SSR',
          'Chatbot GPT para búsqueda de libros en tiempo real',
          'Mitigación de scraping con Cloudflare CDN (‑42 % de carga)'
        ],
        stack: ['Frontend: React, Next.js, CSS', 'TypeScript', 'Backend: Node.js, Express.js, TypeScript', 'Infraestructura y seguridad: Cloudflare CDN', 'Otros: Integración de IA con ChatGPT, APIs RESTful'],
        images: [],
        link: { url: 'https://ebiblioteca.ufg.edu.sv/opac-tmpl/bootstrap/bweb20/bibufg/index4.php?id=1', label: 'Visitar sitio' }    
      }
    },
    {
      id: 'emprende',
      title: 'Fundación Emprende Hoy – Full Stack Dev (2022)',
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0S3dRMMSGK8F3_D_Sb30ph9bi28nPDEywrQ&s',
      content: {
        title: 'Fundacion Emprende Hoy',
        description:
          'Organización sin fines de lucro dedicada a impulsar el desarrollo social y económico de jóvenes, estudiantes, emprendedores y startups en El Salvador, mediante programas de educación y transformación digital en tecnologías Web2 y Web3.',
        contributions: [
          'Como Full Stack Developer, lideré el desarrollo y mantenimiento de un sistema ERP escalable utilizando el stack MERN (MongoDB, Express, React, Node.js), integrando Python (Django) para procesos backend específicos. Implementé APIs RESTful eficientes que conectaban un frontend en React con una arquitectura orientada a microservicios.',
          'Además, mentoré a un equipo de 6 desarrolladores junior, mejorando significativamente la calidad del código y reduciendo errores en un 25%. Diseñé una arquitectura robusta capaz de manejar un aumento de 3 veces en el volumen de transacciones, integrando bases de datos PostgreSQL con soluciones ORM para optimizar el rendimiento y garantizar la consistencia de los datos.',
        ],
        stack: ['Frontend: React, ViteJS', 'Backend: Node.js, Express.js, Python (Django)', 'Bases de datos: MongoDB, PostgreSQL', 'Otros: APIs RESTful, Arquitectura de microservicios'],
        images: [],
        link: { url: 'https://www.linkedin.com/company/fundacionemprendehoy/posts/?feedView=all', label: 'Visitar sitio' }
      }
    },
    {
      id: 'freelance',
      title: 'Freelance – Software Dev (2022-2025)',
      icon: 'https://www.cdnlogo.com/logos/f/79/fiverr.svg',
      content: {
        title: 'Proyectos Freelance (23+)',
        description:
          'Proyectos independientes desarrollados para clientes diversos a nivel internacional (USA, EU, LATAM), enfocados principalmente en la creación de plataformas web, aplicaciones móviles y soluciones backend personalizadas, utilizando tecnologías modernas y buenas prácticas de desarrollo. He completado exitosamente más de 23 proyectos en Latinoamérica, Estados Unidos y Europa, creando soluciones tecnológicas adaptadas a las necesidades específicas de cada cliente. Algunos proyectos destacados incluyen:',
        contributions: [
          'Sistema de monitoreo de cámaras infrarrojas para SENSIA Solutions (España), incrementando en un 30% la visibilidad operacional de los equipos técnicos del cliente.',
          'Aplicación oficial Android para los Juegos Deportivos Nacionales de Chile 2023, utilizada por más de 200 administradores y staff, optimizando notablemente la coordinación y comunicación en tiempo real.',
          'Más de 15 sitios web y páginas de aterrizaje optimizadas para SEO para empresas como TransBank (Chile), MetaBix BioTech (Uruguay) y Leca Indumentaria (Argentina), mejorando significativamente la presencia digital de mis clientes.'
        ],
        stack: [
          'Frontend: React, Next.js, TailwindCSS, Jetpack Compose (Kotlin)',
          'Backend: Node.js, Express.js, TypeScript, Django, PHP, Ktor',
          'Infraestructura y nube: AWS (EC2, S3), Docker, Render, Vercel',
          'Bases de datos: PostgreSQL, MongoDB, MySQL, Firebase, Supabase',
          'Otros: APIs RESTful, SEO, Git, integración continua y despliegue continuo (CI/CD)',
        ],
        images: [],
        link: undefined
      }
    }
  ] /* :contentReference[oaicite:0]{index=0}&#8203;:contentReference[oaicite:1]{index=1} */
  
  /* ========= PROYECTOS PERSONALES ========= */
  const projects: Entry[] = [
    {
      id: 'ordenapp',
      title: 'Ordena.app (2024 - Present)',
      icon: 'https://www.ordena.app/assets/images/IndexPageImages/QuestionsAndAnswers/OrdenaAppLogoQ&AIcon.svg',
      content: {
        title: 'Ordena App',
        description:
          'Plataforma digital diseñada para pequeñas y medianas empresas, que facilita la creación rápida de tiendas en línea integradas con WhatsApp, permitiendo gestionar pedidos, pagos y facturación electrónica de manera sencilla e intuitiva directamente desde el WhatsApp del negocio (Shoptify para WhatsApp).',
        contributions: [
          'Desarrollador principal junto a mi hermano, lideré el diseño, desarrollo y despliegue integral del producto desde cero. Estuve a cargo del frontend con React y Next.js, implementé un backend robusto utilizando Node.js y Express, y gestioné el despliegue continuo en Vercel. Desarrollé integraciones clave como la generación automática de facturas, chatbots de WhatsApp, sistemas dinámicos de generación de códigos QR y reportes analíticos.'
        ],
        stack: ['Frontend: React, Next.js, TailwindCSS', 'Backend: Node.js, Express.js (TypeScript)', 'Infraestructura: Vercel, Docker, AWS, Render', 'Otros: WhatsApp API, generación dinámica de PDFs, QR dinámicos, sistemas CI/CD automatizados'],
        images: [],
        link: { url: 'https://ordena.app', label: 'Probar demo' }
      }
    },
    {
      id: 'vibets',
      title: 'ViBets (2024‑Present)',
      icon: '/icons/vibets-icon.png',
      content: {
        title: 'ViBets',
        description:
          'Red social orientada a grupos de amigos que permite realizar apuestas y desafíos divertidos entre sus miembros. A través de retos personalizados y apuestas amistosas con monedas virtuales, los usuarios compiten, interactúan y participan para ganas más monedas.',
        contributions: [
          'Creé desde cero tanto la aplicación móvil como el backend usando tecnologías modernas. Diseñé e implementé funcionalidades esenciales como creación y gestión de grupos, manejo dinámico de retos, lógica de apuestas, determinación automática de ganadores, notificaciones en tiempo real y una experiencia intuitiva y atractiva para el usuario. Además, desarrollé la identidad visual del proyecto, incluyendo la creación de la mascota oficial en estilo 3D.',
        ],
        stack: ['Frontend: React Native (Expo), TypeScript', 'Backend: Node.js, PostgreSQL (Supabase)', 'Infraestructura: Supabase Auth, Supabase Storage'],
        images: [],
        link: {
          url: 'https://expo.dev/accounts/michael_torres/projects/ViBets-app/builds/5dc26c62-a9f7-497d-a425-f6175f0e26c0',
          label: 'Descargar APK (Solo en Android)'
        }
      }
    },
    {
      id: 'pave',
      title: 'Pave Energy – Prototype (2023‑24)',
      icon: 'https://www.paveenergy.com/assets/logopng-DIguHWdG.png',
      content: {
        title: 'Pave Energy',
        description:
          'Proyecto enfocado en la generación de energía limpia a través de sistemas piezoeléctricos que capturan energía cinética vehicular mediante túmulos y placas especializadas instaladas en vías públicas, alineado con los objetivos de desarrollo sostenible (ODS) de la ONU. Llevado a cabo por mi, mi hermano y un compañero de la universidad.',
        contributions: [
          'Diseño del circuito piezoeléctrico y electrónica de potencia',
          'Programación de microcontroladores (Arduino C++)',
          'Dashboard Python para visualizar energía generada',
          'Primer lugar en competencia nacional de Soluciones Sostenibles (ASU‑UFG)',
          'Tercer lugar a nivel mundial en competencia llevada a cabo en la Universidad de Arizona State University en Tempe, Arizona, USA. donde competiamos contra otras 22 Universidades de todo el mundo.'
        ],
        stack: ['Electrónica: Sensores piezoeléctricos, Arduino, componentes electrónicos de conversión y almacenamiento', 'Software: C++, Python (monitoreo en tiempo real y análisis de datos)'],
        images: [],
        link: { url: 'https://www.paveenergy.com/', label: 'Ver sitio' }
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
        <h1 className="mb-2">Michael Fernando Torres Callejas</h1>
      <h2 className="mb-2">Bienvenido a mi sección de experiencia</h2>
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
        <div className="flex-1 bg-[#edf4fc] overflow-auto p-20">
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
          className={`flex items-center w-full gap-2 px-2 py-3 text-left text-xs hover:bg-xp-light/20 ${
            activeId === e.id ? 'bg-white' : ''
          }`}
        >
        <img
        src={e.icon}
        className="w-16 h-16 min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px] flex-shrink-0"
        alt=""
        />
          <span>{e.title}</span>
        </button>
      ))}
    </div>
  )
}
