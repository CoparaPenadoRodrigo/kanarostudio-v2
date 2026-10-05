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
    title: 'Branding',
    icon: 'compass.svg',
    description: 'Construimos la identidad de tu marca desde la estrategia hasta lo visual: definimos cómo quieres ser percibido y lo convertimos en una identidad que te represente.',
    featured: true,
  },
  {
    title: 'Página Web',
    icon: 'layers.svg',
    description: 'Diseñamos y desarrollamos el espacio digital de tu negocio para que puedas contar quién eres, mostrar lo que haces y conectar con tus clientes.',
  },
  {
    title: 'Landing Page',
    icon: 'code.svg',
    description: 'Creamos una página enfocada en un solo objetivo: presentar una oferta, captar contactos, vender o llevar a tu audiencia a tomar una acción.',
  },
  {
    title: 'Social Media',
    icon: 'compass.svg',
    description: 'Convertimos lo que sabes, haces y tienes para contar en contenido que conecta con tu audiencia y muestra el valor de tu marca.',
  },
  {
    title: 'Automatizaciones / Sistemas',
    icon: 'trending.svg',
    description: 'Convertimos procesos repetitivos o complicados en sistemas que hacen el trabajo por ti, desde automatizaciones hasta herramientas personalizadas e integraciones.',
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
