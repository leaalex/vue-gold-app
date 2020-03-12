<template>
  <q-page class="q-ma-lg">
  <h4>Список задач</h4>
    <q-spinner
      v-if="tasklistIsLoading" color="red" :size="40" style="display:block;margin: 0 auto" />
    <q-list v-else separator>
      <q-item
        v-for="({taskid, name}, index) in tasklist"
        :key="index"
        clickable
        v-ripple
        :to="`tasklist/${taskid}`">
        <q-item-section avatar>
          <q-icon name="list" />
        </q-item-section>
        <q-item-section>{{name}}</q-item-section>
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
    this.getTaskList();
  },
};
</script>
