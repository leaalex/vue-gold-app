<template>
  <q-page class="q-ma-lg">
  <h4>Список задач</h4>
    <q-spinner
      v-if="tasklistIsLoading" color="red" :size="40" style="display:block;margin: 0 auto" />
    <q-list v-else separator>
      <q-item
        v-for="({id, name, points}, index) in tasklist"
        :key="index"
        clickable
        v-ripple
        :to="`tasklist/${id}`">
        <q-item-section avatar>
          <q-icon name="list" />
        </q-item-section>
        <q-item-section>{{name}}</q-item-section>
        <q-item-section side top>
          <q-item-label caption>{{points.length}}</q-item-label>
          <q-icon name="point" color="yellow" />
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState({
      tasklist: (state) => state.task.list,
      tasklistIsLoading: (state) => state.task.listIsLoading,
    }),
  },
  methods: {
    ...mapActions({
      getTaskList: 'task/getList',
      getPointList: 'point/getList',
    }),
  },
  created() {
    this.getTaskList().then((data) => { console.log('из компонента', data); });
  },
};
</script>
