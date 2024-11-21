import { createStore } from 'vuex'; 
import axios from 'axios'; 

export default createStore({
  state: {
    users: [] // Correctly initialized state for users
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users; // Correctly sets the users in the state
    },
    ADD_USER(state, user) {
      state.users.push(user); // Fixed: Change `state.user` to `state.users`
    }
  },
  actions: {
    async fetchUsers({ commit }) {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        commit('SET_USERS', response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    },
    async addUser({ commit }, user) {
      try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/users', user);
        commit('ADD_USER', response.data);
      } catch (error) {
        console.error("Error adding user:", error);
      }
    }
  },
  getters: {
    users: (state) => state.users, 
  }
});
