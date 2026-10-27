export const routes = {
  inicio: '/',
  servicios: '/#servicios',
  equipo: '/#equipo',
  proyectos: '/#proyectos',
  preguntasFrecuentes: '/#preguntas-frecuentes',
  contacto: '/#contacto',
} as const;

export const navigation = [
  { label: 'Servicio', to: routes.servicios },
  { label: 'Conócenos', to: routes.equipo },
  { label: 'Portafolio', to: routes.proyectos },
];

export const footerNavigation: { label: string; to: string }[] = [
  { label: 'Inicio', to: routes.inicio },
  { label: 'Servicios', to: routes.servicios },
  { label: 'Nosotros', to: routes.equipo },
  { label: 'Proyectos', to: routes.proyectos },
  { label: 'Preguntas Frecuentes', to: routes.preguntasFrecuentes },
  { label: 'Contacto', to: routes.contacto },
];

export const clients: { name: string; image: string; compact?: boolean; extraCompact?: boolean }[] = [
  { name: 'Agencia Startgo', image: new URL('../../img/agenciastartgo_kanarostudio.webp', import.meta.url).href },
  { name: 'Club Deportivo El Golazo', image: new URL('../../img/clubdepotivoelgolazo_kanarostudio.png', import.meta.url).href, compact: true },
  { name: 'Keit Estética Spa', image: new URL('../../img/keitsteticaspa_kanarostudio.webp', import.meta.url).href, compact: true, extraCompact: true },
  { name: 'Leyder Núñez', image: new URL('../../img/leydernuñez_kanarostudio.webp', import.meta.url).href, compact: true },
  { name: 'Luisa Abanto Coach', image: new URL('../../img/luisabantocoach_kanarostudio.webp', import.meta.url).href, compact: true },
  { name: 'Mariluz Ingbrigtson', image: new URL('../../img/mariluzbrigtson_kanarostudio.webp', import.meta.url).href, compact: true },
  { name: 'Sommedics Gram', image: new URL('../../img/sommedicsgram_kanarostudio.webp', import.meta.url).href },
];

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
  {
    problem: 'Tu negocio tiene valor, pero visualmente no lo representa.',
    recommendation: 'Entonces lo que necesitas es un Branding.',
  },
  {
    problem: 'Te buscan en Google y no encuentran nada sobre ti.',
    recommendation: 'Entonces lo que necesitas es una web que te haga visible.',
  },
  {
    problem: 'Sabes muchísimo de lo que haces, pero no lo estás mostrando.',
    recommendation: 'Entonces lo que necesitas es contenido que muestre lo que sabes.',
  },
  {
    problem: 'Sigues perdiendo tiempo en cosas que podrían funcionar solas.',
    recommendation: 'Entonces lo que necesitas es automatizar esos procesos.',
  },
  {
    problem: 'Tienes una idea para tu negocio, pero no sabes cómo hacerla realidad.',
    recommendation: 'Entonces lo que necesitas es una estrategia para hacerla realidad.',
  },
];

export const services = [
  {
    title: 'Branding y diseño de marca',
    cta: 'Quiero construir mi marca',
    icon: 'compass.svg',
    description: 'Construimos la identidad de tu marca desde la estrategia hasta lo visual: definimos cómo quieres ser percibido y lo convertimos en una identidad clara, coherente y reconocible.',
  },
  {
    title: 'Diseño y desarrollo web',
    cta: 'Quiero crear mi web',
    icon: 'layers.svg',
    description: 'Diseñamos y desarrollamos páginas web pensadas para representar el valor de tu negocio, comunicar lo que haces y convertir visitas en oportunidades.',
  },
  {
    title: 'Landing Page',
    cta: 'Quiero crear mi landing',
    icon: 'code.svg',
    description: 'Diseñamos landing pages enfocadas en un objetivo: presentar tu oferta, captar contactos, generar registros, vender o llevar a tu audiencia hacia una acción concreta.',
  },
  {
    title: 'Social Media y contenido en redes sociales',
    cta: 'Quiero crear contenido',
    icon: 'social-media.svg',
    description: 'Transformamos lo que sabes, haces y quieres comunicar en una estrategia de contenido que construye presencia, conecta con tu audiencia y muestra el valor de tu marca.',
  },
  {
    title: 'AUTOMATIZACIONES - SISTEMAS',
    cta: 'Quiero optimizar un proceso',
    icon: 'trending.svg',
    description: 'Diseñamos automatizaciones, sistemas y soluciones digitales que simplifican procesos, organizan información y hacen que tareas que hoy dependen de ti puedan funcionar de manera más eficiente y solas.',
  },
];

export const projects = [
  { id: 1, image: new URL('../../img/luisabantocoach_web_kanarostudio.webp', import.meta.url).href, alt: 'Luis Abanto Coach confió en nosotros' },
  { id: 2, image: new URL('../../img/keitsteticaspa_web_kanarostudio.webp', import.meta.url).href, alt: 'Keit Stética Spa confió en nosotros' },
  { id: 3, image: new URL('../../img/mariluzbrigstone_web_kanarostudio.webp', import.meta.url).href, alt: 'Mariluz Brigstone confió en nosotros' },
  { id: 4, image: new URL('../../img/mariacristina_brand_kanarostudio.webp', import.meta.url).href, alt: 'María Cristina confió en nosotros' },
  { id: 5, image: new URL('../../img/anybekinpower_brand_kanarostudio.webp', import.meta.url).href, alt: 'Anybe Kinpower confió en nosotros' },
  { id: 6, image: new URL('../../img/keitsteticaspa_brand_kanarostudio.webp', import.meta.url).href, alt: 'Keit Stética Spa confió en nosotros' },
];

export const socialLinks = [
  { label: 'Facebook', icon: 'facebook.svg', href: 'https://www.facebook.com/profile.php?id=61595896134505' },
  { label: 'Instagram', icon: 'instagram.svg', href: 'https://www.instagram.com/studio.kanaro/' },
  { label: 'TikTok', icon: 'tiktok.svg', href: 'https://www.tiktok.com/@kanaro941?lang=es' },
  { label: 'Gmail', icon: 'mail.svg', href: 'mailto:contacto@kanarostudio.com' },
];
