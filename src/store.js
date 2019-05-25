import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var UserTypeEnum = Object.freeze({
  "administration":1,
  "citizen":2,
  "tourist":3,
});

class User {
  constructor(id, type) {
    this.id = id;
    this.type = type;
  }
}

export default new Vuex.Store({
  state: {
    auth: localStorage.getItem('auth') || null,
    // userId: localStorage.getItem('userId') || '',
  },
  mutations: {
    SET_AUTH: (state, payload) => {
      state.auth = payload;
    },
  },
  actions: {

  },
  getters: {
    AUTH: state => {
      return state.auth;
    },
  }
})
