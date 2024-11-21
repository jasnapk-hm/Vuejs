<template>
  <div>Tab Bcontent</div>

  <div>
    <button @click="loadUsers">Load Users</button>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
       <button @click="editUser(index)">Edit</button>
    </ul>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "TabB",
  setup() {
    const store = useStore();
    const loadUsers = () => {
      store.dispatch('fetchUsers');
    };
    const users = computed(() => store.getters.users);


    return {
      loadUsers,
      users
    };
  },
};
</script>

<style lang="scss" scoped></style>
