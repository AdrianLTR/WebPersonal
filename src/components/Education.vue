<template>
  <div class="info-item">
    <h2>Educación</h2>
    <ul>
      <li v-for="(edu, index) in education" :key="index">{{ edu }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Education',
  data() {
    return {
      education: [
        'Desarrollador de Software',
        'Instituto Tecnológico de las Americas',
        '2022 - Presente'
      ]
    }
  }
}
</script>
