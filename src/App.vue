<template>
  <Header />
  <main class="container">
    <AboutMe />
    <div class="info-grid">
      <PersonalInfo />
      <Skills />
      <Education />
    </div>
    <SocialLinks />
  </main>
</template>

<script>
import Header from './components/Header.vue'
import AboutMe from './components/AboutMe.vue'
import PersonalInfo from './components/PersonalInfo.vue'
import Skills from './components/Skills.vue'
import Education from './components/Education.vue'
import SocialLinks from './components/SocialLinks.vue'

export default {
  name: 'App',
  components: {
    Header,
    AboutMe,
    PersonalInfo,
    Skills,
    Education,
    SocialLinks
  }
}
</script>

<style>
@import './assets/styles.css';
</style>
