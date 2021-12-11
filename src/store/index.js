import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drinks: []
  },
  mutations: {
    update_drinks(state, payload) {
      state.drinks = payload
    }
  },
  actions: {
    get_drinks(store) {
      // API call that gets a joke to display on the page, or errors
      axios.request({
        url: "https://api.openbrewerydb.org/breweries",
      })
        .then((response) => {
          store.commit("update_drinks", response.data);
        })
        .catch((error) => {
          error;
          this.$emit(
            "button_clicked",
            "Sorry, there was an error with the API"
          );
        });
    },
  },
  modules: {
  }
})
