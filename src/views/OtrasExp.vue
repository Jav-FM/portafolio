<template>
<div class="section-content">
    <div class="title">
        <h3>Otras experiencias</h3>
    </div>
    <div class="container">
        <b-list-group class="my-4">
            <b-list-group-item class="item-experiencia d-flex align-items-center justify-content-between" v-for="({años, cargo, empresa, logo}, i) in otrasexp" :key="i">
                <div class="d-flex"><p><b class="mx-4">{{años}}</b></p> <p>{{cargo}}</p></div> <div class="d-flex align-items-center"><p>{{empresa}}</p> <img class="mx-4" :src="logo" alt="logo" style="width: 100px; height: auto;"></div>
            </b-list-group-item>
        </b-list-group>
    </div>
</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: "OtrasExp",
    computed: {
        ...mapState(["otrasexp"]),
    }
}
</script>

<style scoped>
@media only screen and (max-width: 1000px) {
    .item-experiencia {
    flex-direction: column;
    align-items: center;
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