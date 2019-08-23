/* eslint-disable @typescript-eslint/no-explicit-any */
import { ThunkDispatch } from 'redux-thunk';
import { AppState } from './AppState';
import { Action } from '@martin_hotell/rex-tils/types/redux/types';

const createThunkAction = <T extends string>(
  innerAction: (dispatch: ThunkDispatch<AppState, any, Action<T>>, getState?: () => AppState) => Promise<any>,
): ((dispatch: ThunkDispatch<AppState, any, Action<T>>, getState?: () => AppState) => Promise<any>) => {
  return innerAction;
};

export default createThunkAction;
