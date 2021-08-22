<template>
<div>
  <div class="title">
    <h2>Javiera Fortunato</h2>
    <h4>Front End Developer</h4>
  </div>
  <div class="body container my-5">
    <h5>¡Hola!</h5>
    <div id="texto-presentacion">
      <p>Gracias por visitar mi sitio, en el navegador superior encontrarás las rutas para revisar información acerca de mí, mis conocimientos y experiencias, y un <b-link to="/portafolio"><b>portafolio</b></b-link> con mis trabajos como Desarrolladora Front End.</p>
      <p>También encontrarás una sección de <b-link to="/contacto"><b>contacto</b></b-link> con mis redes sociales, correo y teléfono. Te invito a comunicarte conmigo, estaré feliz de ayudarte en lo que necesites!</p>
      <p>.</p>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'Home',

}
</script>

<style scoped>
b {
  text-decoration: none !important;
  color:#17a2b8 !important;
}

</style>
