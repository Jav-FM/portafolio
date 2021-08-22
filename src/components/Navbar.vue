<template>
    <div class="navbar">
        <div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand to="/">Jav.FM</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/sobremi">Sobre mí</b-nav-item>
        <b-nav-item to="/tecnologias">Tecnologías</b-nav-item>
        <b-nav-item to="/portafolio">Portafolio</b-nav-item>
        <b-nav-item to="/otrasexp">Otras experiencias</b-nav-item>
        <b-nav-item to="/contacto">Contacto</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
       <b-nav-item href="https://github.com/Jav-FM" target="_blank"><b-icon icon="github"></b-icon></b-nav-item>
       <b-nav-item href="https://www.instagram.com/jav.fm/" target="_blank"><b-icon icon="instagram"></b-icon></b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
    </div>
</template>

<style scoped>
.navbar {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    z-index: 10;
}
</style>