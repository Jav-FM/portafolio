<template>
  <div id="app" class="d-flex flex-column">
  <Navbar />
  <b-img fluid id="collage-grande" class="banner-img mt-5" src="./assets/collage.jpg" alt="banner"></b-img>
  <b-img fluid id="collage-chico" class="banner-img mt-5" src="./assets/collagechico.jpg" alt="banner"></b-img>

  <router-view/>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  components: {
    Navbar,
    Footer
  },
}
</script>

<style lang="scss">
.banner-img {
  height: auto;
  min-width: 100%;
}

.title {
  background-color: #b3ecf0;
  width: 100%;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 5px;
}

.section-content {
  margin-bottom: 80px;
}

@media only screen and (max-width: 1200px) {
#collage-grande {
  display: none;
}
}

@media only screen and (min-width: 1201px) {
  #collage-chico {
  display: none;
}
}

</style>