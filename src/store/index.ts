/**
 * Created by championswimmer on 26/06/17.
 */
import Vue from 'vue'
import Vuex, {Payload, Store} from 'vuex'
import VuexPersistence from 'vuex-persist'
import Cookies from 'js-cookie'
import {module as userModule, UserState} from './user'
import navModule, {NavigationState} from './navigation'

export interface State {
  user: UserState,
  navigation: NavigationState
}


Vue.use(Vuex)

const vuexCookie = new VuexPersistence<State, Payload>({
  restoreState: (key, storage) => Cookies.getJSON(key),
  saveState: (key, state, storage) => Cookies.set(key, state, {
    expires: 3
  }),
  reducer: (state) => ({user: state.user}),
  filter: (mutation) => (mutation.type == 'logIn' || mutation.type == 'logOut')
})

const store = new Vuex.Store<State>({
  modules: {
    user: userModule,
    navigation: navModule
  },
  plugins: [vuexCookie.plugin]
})

export default store
