<template>
  <div class="section-content">
      <SectionsBanner :sectionName="'Contacto'"/>
        <div class="separation"></div>

    <div
      id="contenido-contacto"
      class="container d-flex align-items-center justify-content-around mt-4"
    >
      <div id="formulario" style="width:300px;">
        <h4 class="mb-3">Formulario de contacto</h4>
        <b-form class="contact-form" @submit.prevent="sendEmail">
          <b-form-group
          id="input-group-1"
          label="Nombre y apellido:"
          label-for="input-1"
          >
            <b-form-input
            id="input-1"
            type="text" 
            name="user_name"
            placeholder="Ingresa tu nombre y apellido"
            v-model="formulario.nombreContacto"
            style="font-size: 14px;"
            required>
            </b-form-input>
          </b-form-group>

          <b-form-group
          id="input-group-2"
          label="E-mail:"
          label-for="input-2"
          >
            <b-form-input
            id="input-2"
            type="email" 
            name="user_email"
            placeholder="Ingresa tu e-mail"
            v-model="formulario.correoContacto"
            style="font-size: 14px;"
            required>
            </b-form-input>
          </b-form-group>

          <b-form-group
          id="input-group-3"
          label="Mensaje:"
          label-for="textarea"
          >
            <b-form-textarea
            id="textarea" 
            name="message"
            placeholder="Ingresa aquí tu mensaje"
            v-model="formulario.mensaje"
            style="height: 100px; font-size: 14px;"
            required>
            </b-form-textarea>
          </b-form-group>
          <div class="d-flex justify-content-center"><b-button class="formButton" type="submit" value="Send" variant="primary" onmousedown="event.preventDefault()">Enviar</b-button></div>
        </b-form>
        <b-alert class="mt-2" variant="success" :show="dismissCountDown"
      dismissible @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"><p>Correo enviado con exito, te responderé en cuanto pueda!</p>       <b-progress
        variant="success"
        :max="dismissSecs"
        :value="dismissCountDown"
        height="4px"
      ></b-progress></b-alert>
      </div>


      <div id="texto-contacto" class="m-4">
        <p>También puedes contactarme por estas vías:</p>
        <p><b>Correo:</b> javiera.fortunato@gmail.com</p>
        <p><b>Teléfono/whatsapp:</b> +56979665606</p>
        <div class="d-flex align-items-center justify-content-center">
          
          <b-link class="icono-contacto mx-2" href="https://www.linkedin.com/in/jffrontenddeveloper/" target="_blank">
            <h1>
              <b-icon icon="linkedin"></b-icon>
            </h1>
          </b-link>

          <b-link class="icono-contacto mx-2" href="https://www.instagram.com/jav.fm/" target="_blank">
            <h1>
              <b-icon icon="instagram"></b-icon>
            </h1>
          </b-link>
          <b-link class="icono-contacto mx-2" href="https://github.com/Jav-FM" target="_blank">
            <h1>
              <b-icon icon="github"></b-icon>
            </h1>
          </b-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_7O3JLiXHbAJqD0JAdBS1E");
import SectionsBanner from '../components/SectionsBanner.vue';

export default {
  name: "Contacto",
  components: {
        SectionsBanner,
    },
  data() {
    return {
      formulario: {
        nombreContacto: "",
        correoContacto: "",
        mensaje: ""
      },
      dismissSecs: 10,
      dismissCountDown: 0,
      showDismissibleAlert: false
    };
  },
  methods: {
    sendEmail(e)  {
      emailjs.sendForm('contacto_portafolio', 'template_portafolio', e.target, 'user_7O3JLiXHbAJqD0JAdBS1E')
      .then((result) => {
        console.log('Correo enviado', result.status, result.text);
        this.showAlert();
        this.resetForm();
      }, (error) => {
        console.log('Error en envío de correo', error);
      });
    },
    resetForm() {
      this.formulario = {
        nombreContacto: "",
        correoContacto: "",
        mensaje: ""
      }
    },
    countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },
      showAlert() {
        this.dismissCountDown = this.dismissSecs
      }
  }
}
</script>


<style scoped>
h4 {
font-family: 'Oswald', sans-serif;
  font-weight: 900;
  font-size: 28px;
  color: #212121;
  padding-bottom: 20px;
}

#texto-contacto {
  text-align: justify;
  color: #212121;
}

.icono-contacto {
  color: #0097D8;
}

.icono-contacto:hover {
  color: #9FE2FF;
}

.formButton {
  border: #212121;
  background-color: #0097D8;
}

.formButton:hover {
  background-color: #9FE2FF;
}

@media only screen and (max-width: 800px) {
  #contenido-contacto {
    flex-direction: column;
    align-items: center;
  }
}

</style>