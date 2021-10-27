<template>
  <div id="banner">
    <div id="brand">
      <h1 id="brandName">JAVIERA FORTUNATO</h1>
      <h2 id="subtitle">Front End Developer</h2>
      <div id="banner-buttons" class="mt-4">
          <b-button onmousedown="event.preventDefault()" class="bannerButton mr-4" to="/portafolio">Portafolio</b-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
#banner {
  height: 400px;
  width: 100%;
  background-image: url("../assets/bannerjs2.jpg");
  background-position-x: center;
  background-repeat: no-repeat;
  background-size: cover;
}

#brand {
  height: 115%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

#brandName {
  color: #ffffff;
  font-size: 50px;
  text-shadow: 0px 0px 20px #072350, 2px 2px 10px #072350, -2px -2px 10px #072350; 
  font-weight: 900;
}

#subtitle {
  color: #ffffff;
  font-size: 40px;
  text-shadow: 0px 0px 20px #072350, 2px 2px 10px #072350, -2px -2px 10px #072350;
  font-weight: 900;
}

.bannerButton {
  border: #212121;
  background-color: #0097D8;
}

.bannerButton:hover {
  background-color: #9FE2FF;
}

.bannerButton:active {
  background-color: #0097D8;
}

</style>

