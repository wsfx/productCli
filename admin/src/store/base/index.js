import Fetch from '@/util/Fetch'
const SET_USER_INFO = 'SET_USER_INFO'
export default {
  namespaced: true,
  state: {
    userInfor: {}
  },
  mutations: {
    [SET_USER_INFO] (state, options) {
      state.userInfor = options
    }
  },
  actions: {
    getUserInfo ({commit, state}) {
      return new Promise((resolve, reject) =>{
        if (Object.keys(state.userInfor).length <= 0) {
          Fetch.get('/api/user/getUserInfo', {
            name: 'aaaa'
          }).then((data) => {
            commit(SET_USER_INFO, data)
            resolve(state.userInfor)
          }, (error) => {
            reject({
              code: 0,
              msg: '未登录'
            })
          })
        } else {
          resolve(state.userInfor)
        }
      })
    }
  }
}