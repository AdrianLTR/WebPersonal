<template>
  <header>
    <div class="container">
      <img src="/image/perfil.jpg" :alt="name" class="profile-image">
      <h1>{{ name }}</h1>
      <p class="title">{{ title }}</p>
      <div class="typing-container">
        <span class="typing-text">{{ typedText }}</span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      name: 'Adrian Lorenzo Torres',
      title: 'Desarrollador Web & Estudiante de Ingeniería',
      phrases: [
        'Desarrollador Frontend',
        'Estudiante de Ingeniería',
        'Apasionado por la Tecnología',
        'Siempre Aprendiendo'
      ],
      currentPhraseIndex: 0,
      typedText: '',
      isDeleting: false
    }
  },
  mounted() {
    this.typeText()
  },
  methods: {
    typeText() {
      const currentPhrase = this.phrases[this.currentPhraseIndex]
      const speed = this.isDeleting ? 50 : 100

      if (!this.isDeleting && this.typedText === currentPhrase) {
        setTimeout(() => {
          this.isDeleting = true
          this.typeText()
        }, 2000)
        return
      }

      if (this.isDeleting && this.typedText === '') {
        this.isDeleting = false
        this.currentPhraseIndex = (this.currentPhraseIndex + 1) % this.phrases.length
        setTimeout(this.typeText, 500)
        return
      }

      const nextText = this.isDeleting
        ? currentPhrase.substring(0, this.typedText.length - 1)
        : currentPhrase.substring(0, this.typedText.length + 1)

      this.typedText = nextText
      setTimeout(this.typeText, speed)
    }
  }
}
</script>

<style scoped>
.typing-container {
  height: 1.5em;
  margin-top: 1rem;
}

.typing-text {
  border-right: 2px solid white;
  padding-right: 5px;
  animation: blink 0.7s infinite;
}

.title {
  margin-bottom: 0.5rem;
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}
</style>
