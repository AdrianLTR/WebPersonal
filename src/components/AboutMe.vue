<template>
  <section class="profile-section">
    <h2>Sobre Mí</h2>
    <p>{{ description }}</p>
  </section>
</template>

<script>
export default {
  name: 'AboutMe',
  data() {
    return {
      description: 'Soy un estudiante apasionado por la tecnología y el desarrollo web, constantemente buscando aprender y crecer en el campo de la ingeniería.'
    }
  }
}
</script>
