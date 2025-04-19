<template>
  <section class="profile-section">
    <h2>Redes Sociales</h2>
    <div class="social-links">
      <a v-for="(link, network) in socialLinks" 
         :key="network" 
         :href="link.url" 
         :title="network">
        <i :class="link.icon"></i>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SocialLinks',
  data() {
    return {
      socialLinks: {
        GitHub: { url: '#', icon: 'fab fa-github' },
        LinkedIn: { url: '#', icon: 'fab fa-linkedin' },
        Twitter: { url: '#', icon: 'fab fa-twitter' }
      }
    }
  }
}
</script>
