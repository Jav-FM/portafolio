<template>
  <div class="footer">
    <div>
      <b-navbar id="navbar-content" type="dark" variant="dark">
        <b-navbar-nav id="contact-content">
          <b-nav-item style="list-style: none;">Javiera Fortunato</b-nav-item>
          <b-nav-item style="list-style: none;" href="mailto:javiera.fortunato@gmail.com"
            ><h5>
              <b-badge variant="light">javiera.fortunato@gmail.com</b-badge>
            </h5></b-nav-item
          >
        </b-navbar-nav>

        <b-navbar-nav id="texto-inferior" class="ml-auto">
          <b-nav-item style="list-style: none;">Todos los derechos reservados</b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    </div>
  </div>
</template>

<style scoped>
.footer {
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
}

@media only screen and (max-width: 750px) {
  #navbar-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #texto-inferior {
    display: none;
  }
  #contact-content {
    display: flex;
    align-items: center;
  }
}
</style>