import { useSelector } from 'react-redux';
import { RootState } from './ReduxProvider';

export type IGetStateNames = 'mode';

const GetReduxStates = (stateName: IGetStateNames) => {
  const state = useSelector((state: RootState) => state[stateName]);
  return state;
};

export default GetReduxStates;
