<template>
  <q-list :bordered="bordered" :padding="padding" separator>
    <q-item v-for="({url, name , icon}, index) in nav" :key="index" clickable v-ripple :to='url'>
      <q-item-section avatar>
        <q-icon :name="icon" />
      </q-item-section>
      <q-item-section>{{name}}</q-item-section>
    </q-item>
  </q-list>
</template>

<script>


export default {
  name: 'GlobalNav',
  props: {
    bordered: Boolean,
    padding: Boolean,
  },
  data() {
    return {
      nav: [
        { icon: 'home', url: '/', name: 'Главаная страница' },
        { icon: 'list', url: '/tasklist', name: 'Список задач' },
        { icon: 'map', url: '/map', name: 'Карта' },
      ],
    };
  },
};
</script>

<style scoped>

</style>
