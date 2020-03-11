<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      elevated
      show-if-above
      v-model="left"
      side="left"
      overlay
      behavior="desktop">
      <global-nav />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import GlobalNav from './components/GlobalNav.vue';

export default {
  components: { GlobalNav },
  data() {
    return {
      left: false,
    };
  },
};
</script>
