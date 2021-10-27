<template>
  <div class="footer">
    <div>
      <b-navbar
        id="navbar-content"
        type="dark"
        style="background-color: #00567a"
      >
        <div id="redes">
          <p>Sígueme en</p>
          <div id="iconosRedes">
                      <b-nav-item
            href="https://www.linkedin.com/in/jffrontenddeveloper/"
            target="_blank"
            ><b-icon icon="linkedin"></b-icon
          ></b-nav-item>
          <b-nav-item href="https://github.com/Jav-FM" target="_blank"
            ><b-icon icon="github"></b-icon
          ></b-nav-item>
          <b-nav-item href="https://www.instagram.com/jav.fm/" target="_blank"
            ><b-icon icon="instagram"></b-icon
          ></b-nav-item>
          </div>
        </div>
        <!-- <b-navbar-nav id="contact-content">
          <b-nav-item style="list-style: none;" href="mailto:javiera.fortunato@gmail.com"
            ><h5>
              <b-badge variant="light">javiera.fortunato@gmail.com</b-badge>
            </h5></b-nav-item
          >
        </b-navbar-nav> -->

        <b-navbar-nav id="texto-inferior">
          <p
            >© Todos los derechos reservados</p
          >
        </b-navbar-nav>
      </b-navbar>
    </div>
  </div>
</template>

<style scoped>
.footer {
  position: relative;
  bottom: 0px;
  left: 0px;
  width: 100%;
}

p, .nav-item.nav-item.nav-item a {
  padding-right: 10px;
  font-weight: 600;
  color: white;
}

p {
  margin-top: 10px;
  margin-bottom: 10px;
  padding-right: 0px;
}

#redes {
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  margin-left: 40px;
}

#iconosRedes {
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  font-size: 20px;
}

.nav-item.nav-item.nav-item a:hover {
  color: #348aaf;
}

#texto-inferior {
  position: absolute;
  right: 0;
  margin-right: 40px;
}

@media only screen and (max-width: 750px) {
  #navbar-content, texto-inferior {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #contact-content {
    align-items: center;
  }

  #redes {
  margin-left: 0px;
  align-items: center;
}

#texto-inferior {
  position: relative;
  bottom: 0;
  margin-right: 0px;
  margin-top: 10px;
}


}
</style>