<template>
  <q-page class="q-ma-lg">
  <h4>Список задач</h4>
    <q-list separator>
      <q-item v-for="(task, index) in tasklist" :key="index" clickable v-ripple>
        <q-item-section avatar>
          <q-icon name="list" />
        </q-item-section>
        <q-item-section>{{task}}</q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      tasklist: (state) => state.task.list,
    }),
  },
};
</script>
