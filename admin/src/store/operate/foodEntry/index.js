import Fetch from '@/util/Fetch'
const SET_FOOD_LIST = 'SET_FOOD_LIST'
export default {
  namespaced: true,
  state: {
    food_entry_list: []
  },
  mutations: {
    [SET_FOOD_LIST] (state, options) {
      state.food_entry_list = options
    }
  },
  actions: {
    GetFoodEntry ({commit, state}) {
        Fetch.get('/api/food_entry/food_entry').then((data) => {
          commit(SET_FOOD_LIST, data.data)
        })
    },
    AddFoodEntry ({commit, state, dispatch}, options) {
      return new Promise((resolve, reject) => {
        Fetch.post('/api/food_entry/food_entry', options).then((data) => {
          dispatch('GetFoodEntry')
          resolve()
        }).catch(() => {
          reject()
        })
      })
    }
  }
}