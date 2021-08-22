import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tecnologias: [
      {
        nombre: "HTML5",
        imagen: "<i class='fab fa-html5 fa-5x'></i>"
      },
      {
        nombre: "CSS3",
        imagen: "<i class='fab fa-css3-alt fa-5x'></i>"
      },
      {
        nombre: "Javascript ES5 y ES6",
        imagen: "<i class='fab fa-js fa-5x'></i>"
      },
      {
        nombre: "Bootstrap | B.Vue",
        imagen: "<i class='fab fa-bootstrap fa-5x'></i>"
      },
      {
        nombre: "Vue JS",
        imagen: "<i class='fab fa-vuejs fa-5x'></i>"
      },
      {
        nombre: "Git",
        imagen: "<i class='fab fa-git-alt fa-5x'></i>"
      },
      {
        nombre: "Github",
        imagen: "<i class='fab fa-github fa-5x'></i>"
      },
      {
        nombre: "API Rest",
        imagen: "<i class='fas fa-cloud-download-alt fa-5x'></i>"
      },
      {
        nombre: "Jest unit testing",
        imagen: "<i class='fas fa-vial fa-5x'></i>"
      },
      {
        nombre: "Cypress e2e testing",
        imagen: "<i class='fas fa-circle-notch fa-5x'></i>"
      },
      {
        nombre: "Firebase Firestore",
        imagen: "<i class='fas fa-cloud-upload-alt fa-5x'></i>"
      },
    ],
    otrasexp: [
      {
        años: "2021- hoy",
        cargo: "Ayudante de Docencia",
        empresa: "Academia Desafío Latam",
        logo: 'https://i.ibb.co/Cw3PxXx/logodesafiolatam.png',
      },
      {
        años: "2017- hoy",
        cargo: "Analista de Desarrollo Organizacional",
        empresa: "CCAF Los Héroes",
        logo: 'https://i.ibb.co/KjdMqrQ/logolh.jpg',
      },
      {
        años: "2015-2017",
        cargo: "Analista de Recursos Humanos",
        empresa: "COCHA",
        logo: 'https://i.ibb.co/rFCcPSy/logococha.jpg',
      },
      {
        años: "2014-2015",
        cargo: "Consultora de Selección",
        empresa: "Consultoras Nacionales",
        logo: 'https://i.ibb.co/30Y8SXR/asesorialogo.png',
      },
      {
        años: "2013-2014",
        cargo: "Práctica Selección",
        empresa: "Banco BCI",
        logo: 'https://i.ibb.co/XtrYFYd/bcilogo.png',
      },
    ],
    proyectos: [
      {
        nombre: "Alfa Web",
        foto: "https://i.ibb.co/HKN6f47/capturalfaweb.jpg",
        descripcion: "Aplicación creada con VueJS y Firebase, permite crear un usuario, ingresar y administrar cursos a través de un CRUD.",
        link: "https://alfaweb.netlify.app/"
      },
      {
        nombre: "Hyrule Store",
        foto: "https://i.ibb.co/DkS16Tr/capturahyrulestore.jpg",
        descripcion: "Vitrina de productos con buscador en base a distintos criterios, desarrollada con VueJS.",
        link: "https://hyrulestore.netlify.app/"
      },
      {
        nombre: "Random Gif Cat",
        foto: "https://i.ibb.co/vcvfZyF/capturarandomgif.jpg",
        descripcion: "Sitio creado con Vuex, consulta a API para traer un gif random con características entregadas por el usuario.",
        link: "https://randomcatgif.netlify.app/"
      },
      {
        nombre: "Poke Guía",
        foto: "https://i.ibb.co/d4sxLSN/capturapokeguia.jpg",
        descripcion: "Sitio creado con Vuex, consulta a API para traer información de Pokemon en base a ID o al nombre.",
        link: "https://pokeguia.netlify.app/"
      },
      {
        nombre: "Pajareando Chile",
        foto: "https://i.ibb.co/GsvK4P5/capturapajareandochile.jpg",
        descripcion: "Sitio en desarrollo (aún sin diseño), enciclopedia de aves de Chile creada con VueJS. Consulta a API para traer información de Aves, también se aplicó transiciones entre rutas.",
        link: "https://pajareandochile.netlify.app/"
      },
      {
        nombre: "Calculadora básica",
        foto: "https://i.ibb.co/Lh9wd14/capturacalculadora.jpg",
        descripcion: "Calculadora básica creada con Javascript durante curso de fundamentos.",
        link: "https://jav-fm.github.io/calculadora/"
      },
      {
        nombre: "Kill the fly",
        foto: "https://i.ibb.co/6bKjKk3/capturakillthefly.jpg",
        descripcion: "Juego creado en curso de Fundamentos de Javascript, con contador de puntos.",
        link: "https://jav-fm.github.io/killthefly/"
      },
      {
        nombre: "Cursos 2020",
        foto: "https://i.ibb.co/nqGHhNB/capturacursos2020.jpg",
        descripcion: "Sitio sobre cursos de programación, sitio desarrollado con HTML, CSS y SASS, incluye un ícono animado con CSS cerca del Footer.",
        link: "https://jav-fm.github.io/cursos2020/"
      },
      {
        nombre: "Gigeo Art",
        foto: "https://i.ibb.co/QfPsmsR/capturagigeo.jpg",
        descripcion: "Blog sobre viajes, sitio desarrollado con HTML, CSS y SASS, con algunos componentes de Bootstrap.",
        link: "https://jav-fm.github.io/gigeoapp/"
      },
      {
        nombre: "Revista online",
        foto: "https://i.ibb.co/HCWmkmg/capturarevistaonline.jpg",
        descripcion: "Revista online desarrollada con HTML, CSS y SASS, con algunos componentes de Bootstrap.",
        link: "https://jav-fm.github.io/revistaonline/"
      },
      {
        nombre: "Barbershop",
        foto: "https://i.ibb.co/N2Ssp7x/capturabarbershop.jpg",
        descripcion: "Blog sobre barbería, sitio desarrollado con CSS utilizando el preprocesador SASS.",
        link: "https://jav-fm.github.io/barbershop/"
      },
      {
        nombre: "Olivia Ros",
        foto: "https://i.ibb.co/c82HLRS/capturaoliviaros.jpg",
        descripcion: "Sitio sobre viajes, fotografía y comida, desarrollada con componentes dinámicos de Bootstrap (carousel, modales y otros).",
        link: "https://jav-fm.github.io/olivia-ros/"
      },
      {
        nombre: "Ricomida",
        foto: "https://i.ibb.co/J5xdLp9/capturaricomida.jpg",
        descripcion: "Proyecto de e-commerce de pizzas, que utiliza componentes dinámicos de Bootstrap como popovers y carousel.",
        link: "https://jav-fm.github.io/ricomida/"
      },
      {
        nombre: "Suricata",
        foto: "https://i.ibb.co/1K4r9cP/capturasuricata.jpg",
        descripcion: "Proyecto que simula galería de e-commerce de comida. Realizado con HTML, CSS y Bootstrap.",
        link: "https://jav-fm.github.io/suricata/"
      },
      {
        nombre: "Cuppon",
        foto: "https://i.ibb.co/93ntCtG/capturacuppon.jpg",
        descripcion: "Proyecto que simula una galería de un e-commerce de cuponeras, realizado con HTML, CSS y Bootstrap.",
        link: "https://jav-fm.github.io/cuppon/"
      },
      {
        nombre: "Meet & Cofee",
        foto: "https://i.ibb.co/KGg5WHm/capturameetcoffee.jpg",
        descripcion: "Primer desafío de ADL, plataforma de charlas, eventos y simposios sobre tecnología. Realizado con HTML y CSS.",
        link: "https://jav-fm.github.io/meet-coffee/"
      },
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
