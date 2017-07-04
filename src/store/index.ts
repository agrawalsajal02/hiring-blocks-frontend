/**
 * Created by championswimmer on 26/06/17.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'
import {module as userModule, UserState} from './user'
import navModule, {NavigationState} from './navigation'

export interface State {
  user: UserState,
  navigation: NavigationState
}


Vue.use(Vuex)

const store = new Vuex.Store<State>({
  modules: {
    user: userModule,
    navigation: navModule
  },
  plugins: [
    createPersistedState({
      getState: (key) => Cookies.getJSON(key),
      setState: (key, state) => Cookies.set(key, state, {
        expires: 3
        // FIXME: In production use secure cookies
        // secure: true
      }),
      reducer (state) {
        return {
          user: state.user
        }
      },
      filter (mutation) {
        switch (mutation.type) {
          case 'logIn': case 'logOut':
            return true;
          default:
            return false;
        }
      }
    })
  ]
})

export default store
