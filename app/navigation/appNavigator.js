import React from 'react';
import { RouteName } from './routeNames';
import { MainScreen } from 'screens';

const appRoutes = {
  [RouteName.MainScreen]: { screen: MainScreen },
}

const AppNavigator = StackNavigator(appRoutes, {
  navigationOptions: {
    header: null,
  },
})

export { AppNavigator, appRoutes }
