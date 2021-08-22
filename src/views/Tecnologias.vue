<template>
    <div class="section-content">
        <div class="title">
            <h3>Tecnologías</h3>
        </div>

        <div id="galeria-tecnologias" class="d-flex flex-wrap justify-content-center py-0">
        <b-card border-variant="info" header-bg-variant="info" header-text-variant="white" body-text-variant="info" :header="nombre" style="min-width: 200px; max-width: 200px; position: static;" class="m-3 text-center" v-for="({nombre, imagen}, i) in tecnologias" :key="i">
            <b-card-text>
            <div v-html="imagen"></div>
            </b-card-text>
        </b-card>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: "Tecnologias",
    computed: {
        ...mapState(["tecnologias"]),
    }
}
</script>

