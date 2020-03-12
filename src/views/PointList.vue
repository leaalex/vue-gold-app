<template>
  <q-page>
    <h4>Список точек учета</h4>
    <q-banner v-if="error">{{error}}</q-banner>
    <q-spinner
      v-if="pointlistIsLoading" color="red" :size="40" style="display:block;margin: 0 auto" />
    <q-list v-else separator>
      <q-item
        v-for="(point, index) in pointlist"
        :key="index"
        clickable
        v-ripple
       >
        <q-item-section avatar>
          <q-icon name="list" />
        </q-item-section>
        <q-item-section>{{point? point.name : 'нет точки'}}
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';

export default {
  props: ['taskid'],
  data() {
    return {
      error: null,
    };
  },
  computed: {
    ...mapState({
      pointlist: (state) => state.point.list,
      pointlistIsLoading: (state) => state.point.listIsLoading,
    }),
  },
  methods: {
    ...mapActions({
      getTaskList: 'task/getList',
      getPointList: 'point/getList',
    }),
    ...mapMutations({
      isLoading: 'point/SET_IS_LOADING',
    }),
  },
  created() {
    console.log(this.pointlistIsLoading);
    this.getTaskList([this.taskid])
      .then((data) => { console.log('из компонента', this.taskid, data[0]); return data[0].points; })
      .then((points) => { console.log(points); this.getPointList(points); })
      .catch((error) => {
        this.error = error;
      });
  },
  destroyed() {
    this.isLoading(true);
  },
};
</script>
