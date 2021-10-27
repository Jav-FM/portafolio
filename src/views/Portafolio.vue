<template>
  <div class="section-content">
      <SectionsBanner :sectionName="'Portafolio'"/>
        <div class="separation"></div>

    <!--Proyecto final-->
    <h2>Proyecto de título carrera Desarrollo Front End Vue</h2>
    <div id="proyecto-final" class="d-flex justify-content-center align-items-center m-3 p-0">
      <b-card no-body class="overflow-hidden d-flex justify-content-center" style="max-width: 850px; min-height: 260px;">
        <b-row no-gutters>
          <b-col md="6" class="d-flex align-items-center">
            <b-card-img
              src="https://i.ibb.co/X3shFf9/capturakffw.jpg"
              alt="Image"
              class="rounded-0"
            ></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body title="Kung Fu Fashion Wear">

              <div class="d-flex flex-column align-items-center">
                <b-card-text class="descripcion-proyecto">
                Este fue el <b>proyecto final</b> de la carrera Desarrollo Front
                End Vue en Academia Desafío Latam. ¡Te invito a conocerlo!
              </b-card-text>
                  <b-button class="botonCeleste" id="botonProyecto" onmousedown="event.preventDefault()" v-b-modal.modal-proyectofinal
                >Ver más</b-button
              >
              </div>
        
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>

      <b-modal
        id="modal-proyectofinal"
        title="Kung Fu Fashion Wear"
        header-bg-variant="info"
        header-text-variant="light"
        hide-footer
      >
        <div
          id="descripcion-proyecto-final"
          class="d-flex flex-column align-items-center"
        >
          <img
            src="../assets/logokffw.png"
            alt="logo kffw"
            style="width: 150px"
          />
          <p class="my-4">
            Este proyecto se realizó utilizando <b>Javascript</b> como lenguaje
            principal, a través del framework <b>VueJS</b>. Incluye uso de
            <b>Vue Router</b> para manejo de rutas y <b>Vuex</b> para
            almacenamiento de state. Se utilizó <b>Firebase</b> para administrar
            las sesiones de usuario y <b>Firestore</b> para almacenamiento del
            productos, registro de ventas y carga de imagenes. Para los estilos
            se utilizó la librería <b>Bootstrap Vue</b>.
          </p>
          <p>
            Este proyecto incluye una integración con <b>Webpay</b> que ya se
            encuentra en su modo de prueba, puedes probarla generando una compra
            ficticia a través del sistema de carro de compras.
          </p>
          <b-link href="https://kffw-6edfe.web.app/" target="_blank"
            ><b-button variant="info">Ir al sitio</b-button></b-link
          >
        </div>
      </b-modal>
    </div>

    <!--Galeria de otros proyectos-->
    <h3>Otros proyectos</h3>
    <div id="galeria-proyectos" class="container d-flex flex-wrap justify-content-around">
<b-card v-for="({nombre, foto, descripcion, link}, i) in proyectos" :key="i"
    :title="nombre"
    title-tag="h5"
    :img-src="foto"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 320px;"
    class=" m-3"
  >
      <b-card-text class="descripcion-proyecto mb-5">
      {{descripcion}}
    </b-card-text>

    <b-button :href="link" target="_blank" onmousedown="event.preventDefault()" style="position: absolute; bottom: 0; left: 34%;" class="botonCeleste my-3" >Ir al sitio</b-button>
    
  </b-card>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SectionsBanner from '../components/SectionsBanner.vue'

export default {
    name: "Portafolio",
       components: {
        SectionsBanner,
    },
    computed: {
        ...mapState(["proyectos"]),
    }
}
</script>

<style scoped>
#descripcion-proyecto-final {
  text-align: justify;
}

h2, h3 {
      font-family: 'Oswald', sans-serif;
  font-weight: 900;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 20px;
}

.descripcion-proyecto {
    text-align: justify;
}

#botonProyecto {
  width: 150px;
  height: 50px;
  font-size: 18px;
  font-weight: bold;
}



</style>