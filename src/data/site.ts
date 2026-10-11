export const routes = {
  inicio: '/',
  servicios: '/servicios',
  equipo: '/equipo',
  proyectos: '/proyectos',
  contacto: '/contacto',
} as const;

export const navigation = [
  { label: 'Servicio', to: routes.servicios },
  { label: 'Conócenos', to: routes.equipo },
  { label: 'Portafolio', to: routes.proyectos },
];

export const footerNavigation = [
  { label: 'Inicio', to: routes.inicio },
  { label: 'Servicios', to: routes.servicios },
  { label: 'Portafolio', to: routes.proyectos },
  { label: 'Contacto', to: routes.contacto },
  { label: 'Recursos', to: routes.equipo },
];

export const clients = ['Google', 'Slack', 'Airbnb', 'Shopify', 'Dropbox', 'Webflow'];

export const steps = [
  {
    number: '01',
    title: 'Estrategia',
    icon: 'stat-strategy.svg',
    tagline: 'Entendemos antes de crear.',
    description: 'Definimos qué quieres conseguir, para quién y por qué.',
  },
  {
    number: '02',
    title: 'Diseño',
    icon: 'stat-design.svg',
    tagline: 'Damos forma a la idea.',
    description: 'Convertimos esa dirección en una experiencia visual que comunica y conecta.',
  },
  {
    number: '03',
    title: 'Tecnología',
    icon: 'pixel-technology.svg',
    tagline: 'Hacemos que cobre vida.',
    description: 'Convertimos la idea en una experiencia, herramienta o solución funcional.',
  },
];

export const frictionPoints = [
  'Tu negocio tiene valor, pero visualmente no lo representa.',
  'Te buscan en Google y no encuentran nada sobre ti.',
  'Sabes muchísimo de lo que haces, pero no lo estás mostrando.',
  'Sigues perdiendo tiempo en cosas que podrían funcionar solas.',
  'Tienes una idea para tu negocio, pero no sabes cómo hacerla realidad.',
];

export const services = [
  {
    title: 'Branding y diseño de marca',
    icon: 'compass.svg',
    description: 'Construimos la identidad de tu marca desde la estrategia hasta lo visual: definimos cómo quieres ser percibido y lo convertimos en una identidad clara, coherente y reconocible.',
    featured: true,
  },
  {
    title: 'Diseño y desarrollo web',
    icon: 'layers.svg',
    description: 'Diseñamos y desarrollamos páginas web pensadas para representar el valor de tu negocio, comunicar lo que haces y convertir visitas en oportunidades.',
  },
  {
    title: 'Landing Page',
    icon: 'code.svg',
    description: 'Diseñamos landing pages enfocadas en un objetivo: presentar tu oferta, captar contactos, generar registros, vender o llevar a tu audiencia hacia una acción concreta.',
  },
  {
    title: 'Social Media y contenido en redes sociales',
    icon: 'compass.svg',
    description: 'Transformamos lo que sabes, haces y quieres comunicar en una estrategia de contenido que construye presencia, conecta con tu audiencia y muestra el valor de tu marca.',
  },
  {
    title: 'AUTOMATIZACIONES - SISTEMAS',
    icon: 'trending.svg',
    description: 'Diseñamos automatizaciones, sistemas y soluciones digitales que simplifican procesos, organizan información y hacen que tareas que hoy dependen de ti puedan funcionar de manera más eficiente y solas.',
  },
];

export const team = [
  { name: 'Karla', shortName: 'Ka', image: 'team-karla.png', className: 'person-karla', description: 'Convierte ideas en palabras que tienen algo que decir.' },
  { name: 'Nathalie', shortName: 'Na', image: 'team-nathalie.png', className: 'person-nathalie', description: 'Convierte ideas en experiencias que puedes ver y sentir.' },
  { name: 'Rodrigo', shortName: 'Ro', image: 'team-rodrigo.png', className: 'person-rodrigo', description: 'Convierte ideas en soluciones que funcionan.' },
];

export const projects = [
  { image: 'project-01.png', alt: 'Proyecto creativo de Kanaro Studio' },
  { image: 'project-02.png', alt: 'Proyecto de identidad visual de Kanaro Studio' },
  { image: 'project-03.png', alt: 'Proyecto digital de Kanaro Studio' },
  { image: 'project-04.png', alt: 'Diseño de marca realizado por Kanaro Studio' },
  { image: 'project-05.png', alt: 'Proyecto visual de Kanaro Studio' },
  { image: 'project-06.png', alt: 'Proyecto de diseño realizado por Kanaro Studio' },
];

export const socialLinks = [
  { label: 'Facebook', icon: 'facebook.svg' },
  { label: 'Instagram', icon: 'instagram.svg' },
  { label: 'X', icon: 'x.svg' },
  { label: 'LinkedIn', icon: 'linkedin.svg' },
  { label: 'YouTube', icon: 'youtube.svg' },
];
