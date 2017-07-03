/**
 * Created by championswimmer on 03/07/17.
 */
import {UserState} from 'src/store/user'
import {NavigationState} from 'src/store/navigation'


export interface State {
  user: UserState,
  navigation: NavigationState
}
