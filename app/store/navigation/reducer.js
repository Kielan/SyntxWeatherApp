import { combineReducers } from 'redux';
import { RouteName, AuthNavigator, AppNavigator, BrowserAppNav, BrowserAuthNav, authNavInitState, appNavInitState } from 'navigation';
import { ActionType } from 'store/actions';

const initialState = {
  auth: authNavInitState,
  app: appNavInitState,
  flow: [],
};

const appReducer = (state = initialState.app, action) => {
  switch (action.type) {
    case ActionType.NavigationSetAppNavigation: {
      const { data } = action;
      return data;
    }
    default: {
      return state;
    }
};

export { appReducer }
