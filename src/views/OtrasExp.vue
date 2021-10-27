<template>
<div class="section-content">
      <SectionsBanner :sectionName="'Otras experiencias'"/>
        <div class="separation"></div>

<div id="experienceCards">
    <div class="experienceCard" v-for="({años, cargo, empresa, logo}, i) in otrasexp" :key="i">
        <img class="experienceLogo" :src="logo" />
        <p>{{empresa}}</p>
        <h4 class="textoCargo">{{cargo}}</h4>
        <p>{{años}}</p>
    </div>
</div>

</div>
</template>

<script>
import { mapState } from 'vuex'
import SectionsBanner from '../components/SectionsBanner.vue'

export default {
    name: "OtrasExp",
           components: {
        SectionsBanner,
    },
    computed: {
        ...mapState(["otrasexp"]),
    }
}
</script>

<style scoped>

#experienceCards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 70px;
}


.experienceCard {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    width: 250px;
    height: 250px;
    border: tomato;
    box-shadow: 3px 3px 10px #bbbbbb;
    margin-left: 25px;
    margin-right: 25px;
    margin-bottom: 50px;
}

.experienceLogo {
    width: 80px;
    padding-top: 30px;
    margin-bottom: 10px;
}

.textoCargo {
    font-family: 'Oswald', sans-serif;
  font-weight: 900;
  font-size: 20px;
}

@media only screen and (max-width: 1000px) {
    .item-experiencia {
    flex-direction: column;
    align-items: center;
    margin-left: 0px;
    }
}

@media only screen and (min-width: 1001px) {
    .item-experiencia {
    padding-left: 30px;
    padding-right: 30px;
    margin-left: 50px;
    margin-right: 50px;
    }
}
</style>