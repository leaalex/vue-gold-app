<template>
  <q-page class="q-ma-lg">
    <h4>
      Список задач
    </h4>
    <q-spinner
      v-if="tasklistIsLoading"
      color="red"
      :size="40"
      style="display:block;margin: 0 auto"
    />
    <q-list v-else separator>
      <q-item v-for="({ id, name, points }, index) in tasklist" :key="index" clickable v-ripple>
        <q-item-section avatar @click.native="$router.push(`tasklist/${id}`)">
          <q-icon name="list" />
        </q-item-section>
        <template v-if="isEdit(id)">
          <q-item-section>
            <q-input :value="name" @change="chengeInput(tasklist[index], $event.target.value)" />
          </q-item-section>
          <q-btn icon="save" @click="save(id)"></q-btn>
          <q-btn icon="cancel" @click="switchEdit(id)"></q-btn>
        </template>
        <template v-else>
          <q-item-section @click.native="$router.push(`tasklist/${id}`)">
            {{ name }}
          </q-item-section>
          <q-btn icon="edit" @click="switchEdit(id)"></q-btn>
        </template>

        <q-item-section side top>
          <q-item-label caption>{{ points.length }}</q-item-label>
          <q-icon name="point" color="yellow" />
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';

export default {
  data() {
    return {
      edit: [],
      buffer: {},
    };
  },
  computed: {
    ...mapState({
      tasklist: (state) => state.task.list,
      tasklistIsLoading: (state) => state.task.listIsLoading,
    }),
  },
  methods: {
    ...mapActions({
      getTaskList: 'task/getList',
    }),
    ...mapMutations({
      setItem: 'task/SET_ITEM',
    }),
    chengeInput(obj, value) {
      let o = {};
      o = obj;
      console.log(value);
      o.name = value;
      this.setItem(o);
    },
    isEdit(id) {
      const bool = this.edit.find((el) => el.id === id) === undefined
        ? false
        : this.edit.find((el) => el.id === id).isEdit;
      return bool;
    },
    switchEdit(id) {
      const obj = this.edit.find((el) => el.id === id);
      obj.isEdit = !obj.isEdit;
    },
  },
  created() {
    this.getTaskList().then((data) => {
      data.forEach((el) => {
        this.edit.push({
          id: el.id,
          isEdit: false,
        });
      });
      console.log('2', this.edit);
      console.log('из компонента', data);
    });
  },
};
</script>
