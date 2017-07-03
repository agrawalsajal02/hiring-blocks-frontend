/**
 * Created by championswimmer on 03/07/17.
 */
import {Module} from 'vuex'
import authApi from 'src/request/instances/auth'

export interface UserState {
  token: String,
  loggedIn: Boolean
}

export  default ((userModule: Module<UserState, any>) => userModule)({
  state: {
    loggedIn: false,
    token: null
  },
  mutations: {
    logIn (state, token) {
      state.loggedIn = true
      state.token = token
    },
    logOut (state) {
      state.loggedIn = false
      state.token = undefined
    }
  },
  actions: {
    handleLoginLogout (context, value) {
      if (value) {
        // try to login user,
        context.commit('logIn', value.token)
      } else {
        // try to log out user
        authApi.unauthorize().then((res1) => {
          console.info(res1)
          context.commit('logOut')
        })
      }
    }
  }
})
