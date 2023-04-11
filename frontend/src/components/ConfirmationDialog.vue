<template>
  <div class="confirmation-dialog">
    <div class="confirmation-dialog-overlay" v-if="visible" @click="$emit('cancel')"></div>
    <div class="confirmation-dialog-box" v-if="visible">
      <h2 class="confirmation-dialog-title">{{ title }}</h2>
      <p class="confirmation-dialog-message">{{ message }}</p>
      <div class="confirmation-dialog-buttons">
        <button class="confirmation-dialog-button confirmation-dialog-confirm" @click="$emit('confirm')">{{ confirmText }}</button>
        <button class="confirmation-dialog-button confirmation-dialog-cancel" @click="$emit('cancel')">{{ cancelText }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConfirmationDialog',
  props: {
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    confirmText: {
      type: String,
      default: 'OK',
    },
    cancelText: {
      type: String,
      default: 'Cancel',
    },
    visible: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style scoped>
.confirmation-dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
}

.confirmation-dialog-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.confirmation-dialog-box {
  width: 400px;
  background-color: white;
  border-radius: 4px;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.confirmation-dialog-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 8px;
}

.confirmation-dialog-message {
  margin-bottom: 16px;
}

.confirmation-dialog-buttons {
  display: flex;
  justify-content: space-between;
}

.confirmation-dialog-button {
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.confirmation-dialog-button:hover {
  background-color: #f1f1f1;
}

.confirmation-dialog-confirm {
  background-color: #1abc9c;
  color: white;
}

.confirmation-dialog-cancel {
  background-color: #ddd;
  color: black;
}
</style>
