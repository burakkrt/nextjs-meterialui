import { useSelector } from 'react-redux';
import { RootState } from './ReduxProvider';

export type IGetStateNames = 'mode';

export const getReduxStates = (stateName: IGetStateNames) => {
  const state = useSelector((state: RootState) => state[stateName]);
  return state;
};
