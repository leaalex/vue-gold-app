<template>
  <div>
    <h5>{{ title }}</h5>
    <button @click="changeName">Передать Title</button>
  </div>
</template>

<script>
import { eventEmitter } from '../main';

export default {
  name: 'Card',
  props: {
    title: String,
  },
  methods: {
    changeName() {
      eventEmitter.$emit('nameChanged', this.title);
    },
  },
};
</script>

<style scoped>
div {
  display: inline-block;
  border: 1px solid gray;
}
</style>
