document.getElementById('year').textContent = new Date().getFullYear();

/* Barre de progression de lecture */
const doc = document.documentElement;
addEventListener('scroll', () => {
  const p = doc.scrollTop / (doc.scrollHeight - doc.clientHeight || 1);
  doc.style.setProperty('--progress', Math.min(1, Math.max(0, p)));
}, { passive: true });

/* Lien de navigation actif */
const links = [...document.querySelectorAll('.site-header nav a[href^="#"]')];
const sections = links.map(a => document.querySelector(a.getAttribute('href')));
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
  });
}, { rootMargin: '-40% 0px -55% 0px' });
sections.forEach(s => s && io.observe(s));

/* ---------- Traductions (le français est le texte du HTML) ---------- */
const T = {
en: {
title:"Raphaël Beduneau – Portfolio",
n_qui:"Profile",n_exp:"Experience",n_form:"Education",n_proj:"Projects",n_synth:"Skills",n_eng:"Involvement",n_contact:"Contact",
role:"Cybersecurity engineering student, ESAIP",
p_pres:"I am a 4th-year engineering student at ESAIP. After two years of a preparatory cycle in digital engineering, I specialised in cybersecurity. An Erasmus semester in Finland and an internship in Spain taught me to adapt quickly to a new environment, in English as well as in Spanish.",
dl_cv:"Download my CV (PDF)",
f_en:"English",f_int:"International",f_int_v:"Erasmus (Finland), internship (Spain)",f_dom:"Fields",f_dom_v:"Networks, systems, security",
t_qui:"Profile",
h_forces:"Strengths and areas for improvement",h_pf:"Strengths",
pf1:"Fluent English (C1, TOEIC 975/990)",pf2:"Adaptability: Erasmus in Finland, internship in Spain",pf3:"Rigour and analytical mind",
h_pa:"Areas of attention",pa1:"Spanish to consolidate (B1)",pa3:"Projects to document better online",
h_mot:"Motivation and values",
m1t:"Why this path?",m1p:"Networks and systems security fascinate me. I already practise them through a homelab project and within the Innov’Lab association.",
m2t:"What drives me",m2p:"Understanding how a system works, then making it more reliable and secure, as a team and following specifications.",
m4t:"What makes me different",m4p:"A networks and cybersecurity profile, enriched by industrial automation (PLC, IoT) and international experience.",
t_form:"Education",l_form:"My academic path, from the baccalauréat to the engineering cycle.",
esc1_t:"Engineering cycle – cybersecurity specialisation",esc1_date:"Since 2025",
esc1_d:"Engineering school. Erasmus semester in Finland and workshop internship in Spain as part of the programme.",
esc1_m:"Networks, systems, offensive and defensive security, Windows / Linux administration.",
esc2_t:"Preparatory cycle in digital engineering",esc2_date:"2023 – 2025",
esc2_d:"Two years of core curriculum: mathematics, computer science, networks...",
bac_t:"Baccalauréat général – graduated with honours (Bien)",bac_d:"Specialities: Mathematics and Physics-Chemistry",
bac_date:"2023",bac_m:"Obtained with honours (Bien).",
t_exp:"Professional experience",l_exp:"Internships and jobs, most recent first.",
stage:"Workshop internship",
fc_date:"June – July 2026",
fc_d:"Industrial company based in Manresa, near Barcelona.",
fc_m1:"Helped migrate the ERP to a new system.",fc_m2:"Identified repetitive tasks and automated them with AI.",fc_m3:"Observed workshop flows and suggested production improvements.",
fc_c:"Analysis, automation, rigour, communication in Spanish and English.",
fc_b:"I learned to work in a foreign environment and to propose solutions based on concrete observations.",
pm_date:"February 2024",
pm_d:"Industrial company based in Avrillé, near Angers.",
pm_m1:"Support for production management, document creation.",pm_m2:"Help with scheduling.",pm_m3:"Stock inventory for the technical maintenance department.",
pm_c:"Organisation, rigour, following procedures.",pm_b:"First insight into how an industrial company works.",
lc_job:"Cashier and rental agent",lc_d:"Large retail chain: hypermarket in Angers, with a rental service.",
lc_date:"Summer 2024, then September 2024 – September 2025",
lc_m1:"Managing rentals at the rental desk.",lc_m2:"Checkout work: customer reception and service, handling.",
lc_c:"Customer relations, versatility, teamwork.",lc_b:"A year of work alongside my studies, which gave me regularity and a sense of service.",
lbl_m:"Duties",lbl_c:"Skills used",lbl_b:"Takeaway",lbl_cd:"Skills developed",lbl_m2:"Content",lbl_c2:"Skills",lbl_m4:"About the milling machine project",
t_proj:"Projects",l_proj:"What I build and experiment with outside the classroom.",
pr1_t:"Homelab",
pr1_d:"Personal server used to learn networking and system administration in real-world conditions.",
pr1_m:"Proxmox, network services (DHCP), firewall and backups (NAS).",
pr1_c:"Windows / Linux administration, TCP/IP networking and system security.",
pr2_t:"Websites (Innov’Lab)",
pr2_d:"Development of a WordPress website to manage dedicated group spaces for blogs created by students participating in the Erasmus programme.",
pr2_m:"Design, WordPress integration, deployment and maintenance.",
pr2_c:"Project management and teamwork.",
pr3_t:"Automation with AI agents",
pr3_d:"Internship at Fuste Carreras: automating repetitive tasks during an ERP migration.",
pr3_m:"Analysis of repetitive tasks, development of scripts and use of AI tools to automate them, documentation of procedures.",
pr3_c:"Analysis, AI tools and communication in Spanish and English.",
pr4_t:"Industrial milling machine simulation and control project, and other PLC / IoT projects",
pr4_d:"Industrial automation projects carried out during my Erasmus semester in Finland.",
pr4_p1:"Team project carried out in Seinäjoki, Finland, as part of my Erasmus semester.",
pr4_p2:"The goal was to configure, simulate and control an industrial milling machine using Beckhoff's TwinCAT software.",
pr4_p3:"The work involved graphically modelling the machine's axes and coordinate system, setting up and controlling the speed and position of each axis in real time, and developing an automatic tool-changing system. I was mainly responsible for programming the axis and motor control logic, managing their speeds and positions, as well as designing and building the human-machine interface (HMI).",
pr4_m:"PLC programming, sensors and connected devices, small automated systems.",
pr4_c:"Industrial automation, electronics and international teamwork.",
t_synth:"Skills",l_synth:"What I can do and where I developed it.",
th_skill:"Skill",th_type:"Type",th_exp:"Experience(s)",ty_t:"Technical",ty_c:"Behavioural",ty_tr:"Transversal",
s1:"Python, C++, HTML / CSS, JavaScript",s2:"Networks (Wireshark, Cisco, TCP/IP, DNS, DHCP)",s3:"Windows / Linux administration, VMware",
s4:"PLC, AI, IoT",s5:"Adaptability, initiative, curiosity",s6:"Teamwork, autonomy",s7:"English (C1), Spanish (B1)",
e1:"ESAIP curriculum, personal projects",e2:"ESAIP curriculum, homelab",e3:"Erasmus, Fuste Carreras",e4:"Leclerc, Innov’Lab, SNU",
h_333:"My 3 + 3 + 3",c1t:"Technical",c1p:"Python, networks, Windows / Linux administration",c2t:"Behavioural",c2p:"Adaptability, initiative, curiosity",c3t:"Transversal",c3p:"Teamwork, rigour, English",
t_eng:"Involvement and hobbies",l_eng:"Associations, citizenship and interests.",
treasurer:"Treasurer",innov_d:"Student association dedicated to digital and environmental projects",innov_date:"October 2026 – October 2027",
innov_des:"I have been part of this association since joining ESAIP in 2023. I joined as an active member, then served as vice-treasurer in 2025–2026.",
innov_m1:"Budget management, drafting administrative documents, managing the association's bank account.",innov_m2:"Taking over and restoring the association's projects: arcade machines (reconfiguration, painting and reassembly) to make them available to students.",innov_m3:"Homelab, website, low-tech and student projects.",
innov_c:"Project management and follow-through, rigour, teamwork.",
innov_c2:"Web development and user support (FAQ, assisting students and teachers).",
lk_link_innov:"View InnovLab on LinkedIn →",
snu_t:"National Universal Service",snu_org:"Civic engagement",snu_d:"Civic engagement programme for young people in France.",snu_date:"June – July 2020",
snu_m:"Group cohesion, civic engagement.",snu_c:"Autonomy, teamwork.",
h_loisirs:"Hobbies",lo1:"Piano",lo2:"Choir",lo3:"Reading",lo4:"Table tennis",
lo1d:"4 years of music theory and instrumental practice",lo2d:"1 year at Vox Campus",lo3d:"novels, comic books, etc.",lo4d:"6 years of practice",
t_cv:"CV and contact",l_cv:"Get in touch or download my CV.",permis:"Driving licence (B)"
},
es: {
title:"Raphaël Beduneau – Portafolio",
n_qui:"Perfil",n_exp:"Experiencia",n_form:"Formación",n_proj:"Proyectos",n_synth:"Competencias",n_eng:"Compromisos",n_contact:"Contacto",
role:"Estudiante de ingeniería en ciberseguridad, ESAIP",
p_pres:"Soy estudiante de 4º curso de ingeniería en ESAIP. Tras dos años de ciclo preparatorio en ingeniería digital, me especialicé en ciberseguridad. Un semestre Erasmus en Finlandia y unas prácticas en España me enseñaron a adaptarme rápido a un nuevo entorno, tanto en inglés como en español.",
dl_cv:"Descargar mi CV (PDF)",
f_en:"Inglés",f_int:"Internacional",f_int_v:"Erasmus (Finlandia), prácticas (España)",f_dom:"Ámbitos",f_dom_v:"Redes, sistemas, seguridad",
t_qui:"Perfil",
h_forces:"Puntos fuertes y áreas de mejora",h_pf:"Puntos fuertes",
pf1:"Inglés fluido (C1, TOEIC 975/990)",pf2:"Adaptabilidad: Erasmus en Finlandia, prácticas en España",pf3:"Rigor y capacidad de análisis",
h_pa:"Puntos de atención",pa1:"Español por consolidar (B1)",pa3:"Proyectos por documentar mejor en línea",
h_mot:"Motivaciones y valores",
m1t:"¿Por qué esta orientación?",m1p:"Las redes y la seguridad de los sistemas me apasionan. Ya las practico con un proyecto de homelab y en la asociación Innov’Lab.",
m2t:"Lo que me motiva",m2p:"Entender cómo funciona un sistema y después hacerlo más fiable y seguro, en equipo y siguiendo un pliego de condiciones.",
m4t:"Mi diferencia",m4p:"Un perfil de redes y ciberseguridad, enriquecido con automatización industrial (PLC, IoT) y experiencias internacionales.",
t_form:"Formación",l_form:"Mi recorrido académico, del bachillerato al ciclo de ingeniería.",
esc1_t:"Ciclo de ingeniería – especialización en ciberseguridad",esc1_date:"Desde 2025",
esc1_d:"Escuela de ingenieros. Semestre Erasmus en Finlandia y prácticas de operario en España dentro del programa.",
esc1_m:"Redes, sistemas, seguridad ofensiva y defensiva, administración Windows / Linux.",
esc2_t:"Ciclo preparatorio en ingeniería digital",esc2_date:"2023 – 2025",
esc2_d:"Dos años de tronco común: matemáticas, informática, redes...",
bac_t:"Baccalauréat général – mención Bien",bac_d:"Especialidades: Matemáticas y Física-Química",
bac_date:"2023",bac_m:"Obtenido con mención Bien.",
t_exp:"Experiencia profesional",l_exp:"Prácticas y empleos, del más reciente al más antiguo.",
stage:"Prácticas de operario",
fc_date:"Junio – julio de 2026",
fc_d:"Empresa industrial con sede en Manresa, cerca de Barcelona.",
fc_m1:"Ayuda en la migración del ERP a un nuevo sistema.",fc_m2:"Identificación de tareas repetitivas y automatización con IA.",fc_m3:"Observación de los flujos del taller y propuestas de mejora de la producción.",
fc_c:"Análisis, automatización, rigor, comunicación en español e inglés.",
fc_b:"Aprendí a trabajar en un entorno extranjero y a proponer soluciones a partir de hechos concretos.",
pm_date:"Febrero de 2024",
pm_d:"Empresa industrial con sede en Avrillé, cerca de Angers.",
pm_m1:"Apoyo a la gestión de producción, creación de documentos.",pm_m2:"Ayuda con la planificación.",pm_m3:"Inventario de existencias en el servicio de mantenimiento técnico.",
pm_c:"Organización, rigor, seguimiento de procedimientos.",pm_b:"Primer contacto con el funcionamiento de una empresa industrial.",
lc_job:"Cajero y agente de alquiler",lc_d:"Cadena de gran distribución: hipermercado en Angers, con servicio de alquiler.",
lc_date:"Verano de 2024, luego septiembre de 2024 – septiembre de 2025",
lc_m1:"Gestión de alquileres en el servicio de alquiler.",lc_m2:"Puesto de caja: atención y servicio al cliente, manipulación de mercancías.",
lc_c:"Atención al cliente, polivalencia, trabajo en equipo.",lc_b:"Un año de empleo junto a los estudios, que me dio constancia y sentido del servicio.",
lbl_m:"Funciones",lbl_c:"Competencias aplicadas",lbl_b:"Balance",lbl_cd:"Competencias desarrolladas",lbl_m2:"Contenido",lbl_c2:"Competencias",lbl_m4:"Presentación del proyecto de fresadora industrial",
t_proj:"Proyectos",l_proj:"Lo que construyo y experimento fuera de las clases.",
pr1_t:"Homelab",
pr1_d:"Servidor personal para aprender redes y administración de sistemas en condiciones reales.",
pr1_m:"Proxmox, servicios de red (DHCP), cortafuegos y copias de seguridad (NAS).",
pr1_c:"Administración de Windows / Linux, redes TCP/IP y seguridad informática.",
pr2_t:"Sitios web (Innov’Lab)",
pr2_d:"Creación de un sitio web en WordPress para gestionar espacios de grupo dedicados a los blogs de los estudiantes que participan en el programa Erasmus.",
pr2_m:"Diseño, integración en WordPress, publicación y mantenimiento.",
pr2_c:"Gestión de proyectos y trabajo en equipo.",
pr3_t:"Automatización con agentes de IA",
pr3_d:"Prácticas en Fuste Carreras: automatización de tareas repetitivas durante la migración del ERP.",
pr3_m:"Análisis de tareas repetitivas, desarrollo de scripts y uso de herramientas de IA para automatizarlas, documentación de procedimientos.",
pr3_c:"Análisis, uso de la IA y comunicación en español e inglés.",
pr4_t:"Proyecto de simulación y control de una fresadora industrial y otros proyectos PLC / IoT",
pr4_d:"Proyectos de automatización industrial realizados durante mi semestre Erasmus en Finlandia.",
pr4_p1:"Proyecto realizado en equipo en Seinäjoki, Finlandia, en el marco de mi semestre Erasmus.",
pr4_p2:"El objetivo era configurar, simular y controlar una fresadora industrial mediante el software TwinCAT de Beckhoff.",
pr4_p3:"El trabajo consistió en modelar gráficamente los ejes y el sistema de coordenadas de la máquina, parametrizar y controlar en tiempo real la velocidad y la posición de los distintos ejes, y desarrollar un sistema de cambio automático de herramienta. Por mi parte, fui principalmente responsable de la programación de la lógica de mando de los ejes y motores, de la gestión de sus velocidades y posiciones, así como del diseño y desarrollo de la interfaz hombre-máquina (IHM).",
pr4_m:"Programación de autómatas, sensores y dispositivos conectados, pequeños sistemas automatizados.",
pr4_c:"Automatización industrial, electrónica y trabajo en equipo internacional.",
t_synth:"Competencias",l_synth:"Lo que sé hacer y dónde lo he desarrollado.",
th_skill:"Competencia",th_type:"Tipo",th_exp:"Experiencia(s)",ty_t:"Técnica",ty_c:"Conductual",ty_tr:"Transversal",
s1:"Python, C++, HTML / CSS, JavaScript",s2:"Redes (Wireshark, Cisco, TCP/IP, DNS, DHCP)",s3:"Administración Windows / Linux, VMware",
s4:"Autómatas (PLC), IA, IoT",s5:"Adaptabilidad, iniciativa, curiosidad",s6:"Trabajo en equipo, autonomía",s7:"Inglés (C1), español (B1)",
e1:"Currículo ESAIP, proyectos personales",e2:"Currículo ESAIP, homelab",e3:"Erasmus, Fuste Carreras",e4:"Leclerc, Innov’Lab, SNU",
h_333:"Mis 3 + 3 + 3",c1t:"Técnicas",c1p:"Python, redes, administración Windows / Linux",c2t:"Conductuales",c2p:"Adaptabilidad, iniciativa, curiosidad",c3t:"Transversales",c3p:"Trabajo en equipo, rigor, inglés",
t_eng:"Compromisos y aficiones",l_eng:"Vida asociativa, ciudadanía y centros de interés.",
treasurer:"Tesorero",innov_d:"Asociación estudiantil dedicada a proyectos digitales y medioambientales",innov_date:"Octubre de 2026 – octubre de 2027",
innov_des:"Formo parte de esta asociación desde mi entrada en la ESAIP en 2023. Entré como miembro activo y luego fui vice-tesorero en 2025-2026.",
innov_m1:"Gestión del presupuesto, redacción de documentos administrativos, gestión de la cuenta bancaria de la asociación.",innov_m2:"Recuperación y restauración de los proyectos de la asociación: máquinas arcade (reconfiguración, pintura y montaje) para ponerlas a disposición de los estudiantes.",innov_m3:"Proyectos de homelab, sitios web, low-tech y proyectos estudiantiles.",
innov_c:"Seguimiento y gestión de proyectos, rigor, trabajo en equipo.",
innov_c2:"Desarrollo web y soporte al usuario (FAQ, acompañamiento a estudiantes y profesores).",
lk_link_innov:"Ver InnovLab en LinkedIn →",
snu_t:"Servicio Nacional Universal",snu_org:"Compromiso ciudadano",snu_d:"Programa de compromiso cívico para jóvenes en Francia.",snu_date:"Junio – julio de 2020",
snu_m:"Cohesión de grupo, compromiso cívico.",snu_c:"Autonomía, trabajo en equipo.",
h_loisirs:"Aficiones",lo1:"Piano",lo2:"Coro",lo3:"Lectura",lo4:"Tenis de mesa",
lo1d:"4 años de solfeo y práctica instrumental",lo2d:"1 año en Vox Campus",lo3d:"novelas, cómics, etc.",lo4d:"6 años de práctica",
t_cv:"CV y contacto",l_cv:"Contáctame o descarga mi CV.",permis:"Carné de conducir (B)"
}};

const nodes = [...document.querySelectorAll('[data-i18n]')];
nodes.forEach(n => n.dataset.fr = n.textContent);
const frTitle = document.title;

function setLang(l) {
  nodes.forEach(n => { n.textContent = (l !== 'fr' && T[l][n.dataset.i18n]) || n.dataset.fr; });
  document.title = l === 'fr' ? frTitle : T[l].title;
  document.documentElement.lang = l;
  document.querySelectorAll('.lang button').forEach(b => b.setAttribute('aria-pressed', b.dataset.lang === l));
  try { localStorage.setItem('lang', l); } catch (e) {}
}
document.querySelectorAll('.lang button').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));

let start = 'fr';
try { start = localStorage.getItem('lang') || ''; } catch (e) {}
if (!T[start] && start !== 'fr') start = (navigator.language || 'fr').slice(0, 2);
setLang(T[start] || start === 'fr' ? start : 'fr');

/* ---------- CV : langue du PDF ---------- */
const cvLink = document.getElementById('cv-link');
document.querySelectorAll('.cv-lang button').forEach(b => b.addEventListener('click', () => {
  document.querySelectorAll('.cv-lang button').forEach(x => x.setAttribute('aria-pressed', x === b));
  cvLink.href = 'CV_Raphael_Beduneau_(' + b.dataset.cv + ').pdf';
}));

/* ---------- Apparition douce ---------- */
const revealEls = document.querySelectorAll('.hero > *, main > section > *');
revealEls.forEach(el => el.classList.add('reveal'));
const rio = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); rio.unobserve(e.target); }
  });
}, { threshold: 0.06 });
revealEls.forEach(el => rio.observe(el));