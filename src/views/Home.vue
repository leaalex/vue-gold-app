<template>
  <q-page class="q-ma-lg">
    <h4 v-color:color.delay="'red'">Главная страница</h4>
    <global-nav bordered padding />

    <hr />
    <input v-model="cuser" />
    <ul>
      <li v-for="user in filterUsers" :key="user">{{ user | upper | lower }}</li>
    </ul>
  </q-page>
</template>

<script>
import GlobalNav from '../components/GlobalNav.vue';
import listMixin from '../vueMixin/listMixin2';

export default {
  components: { GlobalNav },
  mixins: [listMixin],
};
</script>
