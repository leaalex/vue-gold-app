<template>
  <div>
    <h4>Компонент Header</h4>
    <p>{{ nameCard }}</p>
  </div>
</template>

<script>
import { eventEmitter } from '../main';

export default {
  name: 'Header',
  data() {
    return {
      nameCard: '',
    };
  },
  created() {
    eventEmitter.$on('nameChanged', (value) => {
      this.nameCard = value;
    });
  },
};
</script>

<style scoped></style>
