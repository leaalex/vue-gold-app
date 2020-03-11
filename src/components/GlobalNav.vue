<template>
  <q-list>
    {{ bordered }}
    <q-item to='/'>
      <q-item-section avatar>
        <q-icon name="home" />
      </q-item-section>
      <q-item-section>Главная страница</q-item-section>
    </q-item>
    <q-item to='/task'>
      <q-item-section avatar>
        <q-icon name="map" />
      </q-item-section>
      <q-item-section>Список задач</q-item-section>
    </q-item>
    <q-item to='/map'>
    <q-item-section avatar>
      <q-icon name="map" />
    </q-item-section>
    <q-item-section>Карта</q-item-section>
  </q-item>


  </q-list>
</template>

<script>
export default {
  name: 'GlobalNav',
  props: ['bordered', 'padding'],
};
</script>

<style scoped>

</style>
