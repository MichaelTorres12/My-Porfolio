export interface MenuItem {
    id: string
    label: string
    icon: string
    href?: string
    component?: string
    download?: boolean
  }
  
  const menu: MenuItem[] = [
    {
      id: 'experience',
      label: 'Mi Experiencia',
      icon: '/icons/folder.webp',
      component: 'ExperienceWindow',
    },
    {
      id: 'resume',
      label: 'Mi Resumé',
      icon: '/icons/pdf.png',
      href: '/icons/Michael_Torres_CV_04-2025.pdf',
      download: true
    },
    {
      id: 'linkedin',
      label: 'Mi LinkedIn',
      icon: '/icons/linkedin.png',
      href: 'https://linkedin.com/in/michael-torres-callejas',
    },
    {
      id: 'github',
      label: 'Mi GitHub',
      icon: '/icons/github.png',
      href: 'https://github.com/MichaelTorres12',
    },
    {
      id: 'contact',
      label: 'Contactarme',
      icon: '/icons/email.webp',
      href: 'mailto:michaeltorresgi18@gmail.com',
    },
  ]
  
  export default menu
  