<template>
    <div class="section-content">
        <SectionsBanner :sectionName="'Tecnologías'"/>
        <div class="separation"></div>

        <div id="galeria-tecnologias" class="d-flex flex-wrap justify-content-center py-2 px-5 mx-5">
        <b-card border-variant="info" header-bg-variant="info" header-text-variant="white" body-text-variant="info" :header="nombre" style="min-width: 200px; max-width: 200px; position: static;" class="tecnoCard m-3 text-center" v-for="({nombre, imagen}, i) in tecnologias" :key="i">
            <b-card-text>
                <div class="logo" v-html="imagen"></div>
            </b-card-text>
        </b-card>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import SectionsBanner from '../components/SectionsBanner.vue'

export default {
    name: "Tecnologias",
    components: {
        SectionsBanner,
    },
    computed: {
        ...mapState(["tecnologias"]),
    }
}
</script>


