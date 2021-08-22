<template>
    <div class="section-content">
        <div class="title">
        <h3>Sobre mí</h3>
        </div>
        <div id="contenido-sobremi" class="container d-flex mt-2">
            <img id="profile-img" src="../assets/espejo.jpg" alt="Imagen profile">
            <div id="texto-sobremi" class="m-4">
                <p>Mi nombre es <b>Javiera Fortunato</b>, nací en Santiago (Chile) el 3 de Octubre de 1989. Me titulé como Psicóloga el año 2014 y desde entonces he trabajo en áreas de Selección y Desarrollo Organizacional en distintas organizaciones nacionales. Finalicé recientemente la carrera de Desarrollo Front End Vue y actualmente me desempeño como Ayudante Docente en módulos de Vue JS en <b>Academia Desafío Latam</b>, donde cursé mis estudios.</p>
                <p>Desde hace dos años, estoy dedicando la mayor parte de mi tiempo libre a formarme en el mundo del Desarrollo Web. He estudiado por mi cuenta cursos de pseudocódigo, HTML, CSS, Javascript y metodologías ágiles.</p>
                <p>Además tengo varios hobbies, como la fotografía, armar puzles, leer novelas, y he incursionado en disciplinas como la acuarela, el lettering, entre otras.</p>
                <p>Te invito a revisar mi <b-link to="/portafolio"><b>portafolio</b></b-link> para que conozcas los proyectos que he desarrollado en el mundo del Front End.</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
#profile-img {
    width: 400px;
    height: 400px;
    border-radius: 100%;
}

#texto-sobremi {
    text-align: justify;
}

b {
  text-decoration: none;
  color:#17a2b8;
}

@media only screen and (max-width: 1000px) {
    #contenido-sobremi {
    flex-direction: column;
    align-items: center;
    }
    #profile-img {
    margin-top: 15px;
    width: 300px;
    height: 300px;
}
}

</style>