/**
 * Created by championswimmer on 26/06/17.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'
import userModule from './user'
import navModule from './navigation'
import {State} from 'src/store/types'

Vue.use(Vuex)

const store = new Vuex.Store<State>({
  modules: {
    user: userModule,
    navigation: navModule
  }//,
  // plugins: [
  //   createPersistedState({
  //     getState: (key) => Cookies.getJSON(key),
  //     setState: (key, state) => Cookies.set(key, state, {
  //       expires: 3
  //       // FIXME: In production use secure cookies
  //       // secure: true
  //     }),
  //     reducer (state) {
  //       return {
  //         user: state.user
  //       }
  //     }
  //   })
  // ]
})

export default store
