<template>
  <div id="app" class="d-flex flex-column">
  <Navbar />

  <transition name="transicion">
    <div id="content">
      <router-view/>
    </div>
  </transition>

  <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Banner from '@/components/Banner'

export default {
  components: {
    Navbar,
    Footer,
    Banner,
  },
}
</script>

<style lang="scss">

body {
  height: 100vh;
  background-color: #00567a;
}

#content {
  min-height: 88.7vh;
}

.separation {
  background-color: #9FE2FF;
  width: 100%;
  text-align: center;
  padding-top: 12px;
  padding-bottom: 12px;
}

.section-content {
  margin-bottom: 80px;
}

h1 {
  font-family: 'Oswald', sans-serif;
  font-weight: 900;
  font-size: 30px;
}
h2 {
  font-family: 'Oswald', sans-serif;
  font-weight: 700;
  font-size: 30px;
  color: #212121;
}
h3 {
  font-family: 'Oswald', sans-serif;
  font-weight: 400;
  font-size: 25px;
  color: #212121;
}
h4 {
  font-family: 'Oswald', sans-serif;
  font-weight: 400;
  font-size: 20px;
  color: #212121;
}

h5 {
  font-family: 'Oswald', sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #212121;
}

.botonCeleste {
  border: #212121 !important;
  background-color: #0097D8 !important;
}

.botonCeleste:hover {
  background-color: #9FE2FF !important;
}

.botonCeleste:active {
  background-color: #0097D8 !important;

}


.transicion-enter-active, .transicion-leave-active {
  transition: opacity .2s, padding .2s;
}

.transicion-enter, .transicion-leave-to {
  opacity: 0;
  padding-left: 25px;
}

</style>