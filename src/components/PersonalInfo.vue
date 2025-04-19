<template>
  <div class="info-item">
    <h2>Información Personal</h2>
    <div class="info-content">
      <div v-for="(value, key) in personalInfo" :key="key" class="info-field">
        <div class="field-header">
          <strong>{{ key }}:</strong>
          <button @click="toggleEdit(key)" class="edit-btn">
            <i :class="editing === key ? 'fas fa-check' : 'fas fa-edit'"></i>
          </button>
        </div>
        <div v-if="editing === key" class="edit-field">
          <input v-model="editValue" @keyup.enter="saveEdit" type="text" :placeholder="value">
        </div>
        <div v-else class="info-value">{{ value }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonalInfo',
  data() {
    return {
      personalInfo: {
        'Edad': '20 años',
        'Ubicación': 'Santo Domingo, República Dominicana',
        'Email': 'adrianlorenzotorres@gmail.com'
      },
      editing: null,
      editValue: ''
    }
  },
  methods: {
    toggleEdit(key) {
      if (this.editing === key) {
        this.saveEdit();
      } else {
        this.editing = key;
        this.editValue = this.personalInfo[key];
      }
    },
    saveEdit() {
      if (this.editing && this.editValue.trim()) {
        this.personalInfo[this.editing] = this.editValue;
      }
      this.editing = null;
      this.editValue = '';
    }
  }
}
</script>

<style scoped>
.info-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.info-field {
  padding: 0.5rem;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.info-field:hover {
  background-color: rgba(0, 0, 0, 0.02);
}

.field-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.edit-btn {
  background: none;
  border: none;
  color: var(--secondary-color);
  cursor: pointer;
  padding: 0.2rem;
  font-size: 0.9rem;
  opacity: 0;
  transition: opacity 0.3s;
}

.info-field:hover .edit-btn {
  opacity: 1;
}

.edit-field input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid var(--secondary-color);
  border-radius: 4px;
  font-size: 0.9rem;
}

.info-value {
  color: var(--text-color);
  padding: 0.5rem 0;
}
</style>
