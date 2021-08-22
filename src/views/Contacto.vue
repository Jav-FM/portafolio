<template>
  <div class="section-content">
    <div class="title">
      <h3>Contacto</h3>
    </div>
    <div
      id="contenido-contacto"
      class="container d-flex align-items-center justify-content-center mt-2"
    >
      <div id="texto-contacto" class="m-4">
        <p>Contactame por cualquiera de estas vías:</p>
        <p><b>Correo:</b> javiera.fortunato@gmail.com</p>
        <p><b>Teléfono/whatsapp:</b> +56979665606</p>
        <div class="d-flex align-items-center">
          <b-link href="https://www.instagram.com/jav.fm/" target="_blank">
            <h1>
              <b-icon icon="instagram"></b-icon>
            </h1>
          </b-link>
          <b-link href="https://github.com/Jav-FM" target="_blank">
            <h1>
              <b-icon icon="github"></b-icon>
            </h1>
          </b-link>
        </div>
      </div>

    <img
        id="contact-img"
        src="../assets/contactoimagen.jpg"
        alt="Imagen profile"
      />
    </div>
  </div>
</template>

<style scoped>
h1 {
  color: black;
  margin-left: 5px;
  margin-right: 5px;
}

#contact-img {
  width: 500px;
  height: auto;
}

#texto-contacto {
  text-align: justify;
}

b {
  text-decoration: none;
  color: #17a2b8;
}

@media only screen and (max-width: 800px) {
  #contenido-contacto {
    flex-direction: column;
    align-items: center;
  }
  #contact-img {
    margin-top: 15px;
    width: 500px;
  }
}

@media only screen and (max-width: 550px) {
  #contact-img {
    width: 350px;
  }
}
</style>