<template>
  <q-page>
    <app-header />
    <card v-for="title in titles" :key="title" :title="title" />
  </q-page>
</template>

<script>
import Card from '../components/Card';
import AppHeader from '../components/Header';

export default {
  name: 'Map',
  components: {
    Card,
    AppHeader,
  },
  data() {
    return {
      titles: ['Card 1', 'Card 2', 'Card 3'],
    };
  },
  methods: {
    setTitle(value) {
      this.title = value;
    },
  },
  provide: {
    foo() {
      console.log(this.title);
    },
  },
};
</script>
