import { ActionType } from 'store/actions';
import { RouteName } from 'navigation';

const func = (m) => {
  const setNavigationFlow = (data) => {
    m.dispatch({ type: ActionType.NavigationSetAppFlow, data });
  };
  return { setNavigationFlow };
}

export { func }
