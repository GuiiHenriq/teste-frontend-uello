import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    nameCompany: 'Dafiti',
    address: 'Avenida Doutor Gastão Vidigal, 1132 Vila Leopoldina - São Paulo - SP Apto - 1234'
  }
});

export { store };
