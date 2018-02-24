import Vue from 'vue'
import Vuex from 'vuex'

import base from './base'

import foodEntry from './operate/foodEntry'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    base,
    foodEntry
  }
})