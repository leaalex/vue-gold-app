import color from '../directives/color';

export default {
  data() {
    return {
      cuser: '',
      users: ['Андрей', 'Семен', 'Вика', 'Саша'],
    };
  },
  computed: {
    filterUsers() {
      return this.users.filter((el) => el.toUpperCase().indexOf(this.cuser.toUpperCase()) !== -1);
    },
  },
  directives: {
    color,
  },
  filters: {
    lower(value) {
      return value.toLowerCase();
    },
  },
};
