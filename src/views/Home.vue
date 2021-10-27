<template>
<div>
  <Banner />
  <div class="separation"></div>

  <div class="body container my-5 pb-1">
    <h5>¡Hola!</h5>
    <div id="texto-presentacion">
      <p class="texto-justificado">Gracias por visitar mi sitio, en el navegador superior encontrarás las rutas para revisar información acerca de mí, mis conocimientos y experiencias, y un <b-link to="/portafolio"><b>portafolio</b></b-link> con mis trabajos como Desarrolladora Front End.</p>
      <p class="texto-justificado">También encontrarás una sección de <b-link to="/contacto"><b>contacto</b></b-link> con mis redes sociales, correo y teléfono. Te invito a comunicarte conmigo, estaré feliz de ayudarte en lo que necesites!</p>
    </div>
  </div>
</div>
</template>

<script>
import Banner from '../components/Banner.vue';
export default {
  name: 'Home',
  components: {
    Banner
  }
}
</script>

<style scoped>
b {
  text-decoration: none !important;
  color:#0097D8 !important;
}

h5 {
  font-family: 'Oswald', sans-serif;
  font-weight: 900;
  padding-bottom: 15px;
}

.texto-justificado {
  text-align: justify;
}

.texto-derecha {
  text-align: right;
}

</style>
