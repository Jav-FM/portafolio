<template>
  <div id="banner">
    <div id="brand">
      <h1 id="brandName">{{sectionName}}</h1>
    </div>
  </div>
</template>

<script>
export default {
    name: 'SectionBanner',
    props: {
        sectionName: {
            type: String,
            required: true,
        }
    }
}
</script>

<style scoped>
#banner {
  height: 300px;
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

</style>

