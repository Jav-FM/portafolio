<template>
  <div class="section-content">
    <div class="title">
      <h3>Portafolio</h3>
    </div>

    <!--Proyecto final-->
    <h4>Proyecto de título carrera Desarrollo Front End Vue</h4>
    <div id="proyecto-final" class="d-flex justify-content-center align-items-center m-3 p-0">
      <b-card no-body class="overflow-hidden" style="max-width: 700px;">
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
                  <b-button variant="info" v-b-modal.modal-proyectofinal
                >Ver detalles</b-button
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
    <h4>Otros proyectos</h4>
    <p id="en-construccion">En construcción. Pronto habrá más proyectos en esta sección!</p>
    <div id="galeria-proyectos" class="container d-flex flex-wrap justify-content-around">
<b-card v-for="({nombre, foto, descripcion, link}, i) in proyectos" :key="i"
    :title="nombre"
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

    <b-button :href="link" target="_blank" variant="info" style="position: absolute; bottom: 0; left: 34%;" class="my-3" >Ir al sitio</b-button>
    
  </b-card>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: "Portafolio",
    computed: {
        ...mapState(["proyectos"]),
    }
}
</script>

<style scoped>
#descripcion-proyecto-final {
  text-align: justify;
}

h4 {
    text-align: center;
    margin-top: 30px;
    margin-bottom: 20px;
}

#en-construccion {
    text-align: center;
}

.descripcion-proyecto {
    text-align: justify;
}



</style>