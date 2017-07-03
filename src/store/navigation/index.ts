import {Module} from 'vuex'
/**
 * Created by championswimmer on 03/07/17.
 */

export interface NavigationState {
  topNavBarItems: Array<Object>
}

export default ((moduleOptions: Module<NavigationState, any>) => moduleOptions)({
  state: {
    topNavBarItems: [
      {value: 'Jobs'},
      {value: 'Companies'},
      {value: 'Students'}
    ]
  }
})
