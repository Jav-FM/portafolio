<template>
    <div class="navbar">
        <div>
  <b-navbar toggleable="lg" type="dark" style="background-color: #00567A;">

    <b-navbar-brand id="brandName" to="/">Javiera Fortunato</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- <b-navbar-nav>
        <b-nav-item to="/sobremi">Sobre mí</b-nav-item>
        <b-nav-item to="/tecnologias">Tecnologías</b-nav-item>
        <b-nav-item to="/portafolio">Portafolio</b-nav-item>
        <b-nav-item to="/otrasexp">Otras experiencias</b-nav-item>
        <b-nav-item to="/contacto">Contacto</b-nav-item>
      </b-navbar-nav> -->

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto" id="navigation-links">
        <b-nav-item class="linkToView" to="/sobremi">Sobre mí</b-nav-item>
        <b-nav-item class="linkToView" to="/tecnologias">Tecnologías</b-nav-item>
        <b-nav-item class="linkToView" to="/portafolio">Portafolio</b-nav-item>
        <b-nav-item class="linkToView" to="/otrasexp">Otras experiencias</b-nav-item>
        <b-button id="contactButton" onmousedown="event.preventDefault()" to="/contacto">Contacto</b-button>

        <!-- <b-nav-item class="icono-contacto" href="https://www.linkedin.com/in/jffrontenddeveloper/" target="_blank"><b-icon icon="linkedin"></b-icon></b-nav-item>
       <b-nav-item class="icono-contacto" href="https://github.com/Jav-FM" target="_blank"><b-icon icon="github"></b-icon></b-nav-item>
       <b-nav-item class="icono-contacto" href="https://www.instagram.com/jav.fm/" target="_blank"><b-icon icon="instagram"></b-icon></b-nav-item> -->
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

/* .nav-item.nav-item.nav-item a {
  padding-right: 10px;
  font-weight: 600;
  color: white;
}

.nav-item.nav-item.nav-item a:hover {
  color: #348aaf;
}

.nav-item.nav-item.nav-item a:active {
  color: #6fbee0;
} */

#brandName {
  font-weight: 900;
  font-family: 'Oswald', sans-serif;
  font-size: 25px;
  margin-left: 10px;
}

#brandName:hover {
  color: #9FE2FF;
}

#contactButton {
  background-color: white;
  color: #00567A;
  font-weight: 600;
  border: #00567A;
  height: 40px;
  width: 90px;
  margin-left: 15px;
  margin-right: 10px;
}

#contactButton:hover {
  background-color: #9FE2FF;
}


@media screen and (max-width: 991px) {
  /* #iconos-contacto {
    display: flex;
    flex-direction: row;
  }
  .icono-contacto {
    margin-left: 5px;
    margin-right: 5px;
  } */

  #navigation-links {
    display: flex;
    flex-direction: column;
  }

  #contactButton {
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 10px;
  }

  #contactButton:hover {
  background-color: #9FE2FF !important;
  }

}
</style>