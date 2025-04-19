<template>
  <div class="info-item">
    <h2>Habilidades</h2>
    <div class="skills-list">
      <div v-for="skill in skills" :key="skill.name" class="skill-item">
        <div class="skill-header">
          <span>{{ skill.name }}</span>
          <span>{{ skill.level }}%</span>
        </div>
        <div class="skill-bar">
          <div class="skill-progress" :style="{ width: skill.level + '%' }"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      skills: [
        { name: 'HTML5 & CSS3', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'Vue.js', level: 75 },
        { name: 'Python', level: 80 },
        { name: 'Git', level: 85 }
      ]
    }
  }
}
</script>

<style scoped>
.skills-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.skill-item {
  width: 100%;
}

.skill-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.skill-bar {
  width: 100%;
  height: 8px;
  background-color: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background-color: var(--secondary-color);
  transition: width 1s ease-in-out;
}
</style>
