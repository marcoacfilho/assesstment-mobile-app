import { NavigationActions } from 'react-navigation';

import Navigation from '../routes/Navigation';

const initialAction = { type: NavigationActions.Init }
const initialState = Navigation.router.getStateForAction(initialAction)

export default (state = initialState, action) => {
    return { ...state }
}