/* eslint-disable @typescript-eslint/no-explicit-any */
import { applyMiddleware, combineReducers, compose, createStore, Reducer } from 'redux';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import reducers from './reducers';
import { AppState } from './AppState';

export default (history: any, initialState: any) => {
  const middleware = [thunk, routerMiddleware(history)];

  const enhancers = [];

  if (typeof window !== undefined && (window as any).__REDUX_DEVTOOLS_EXTENSION__) {
    enhancers.push((window as any).__REDUX_DEVTOOLS_EXTENSION__());
  }

  const rootReducer: Reducer<AppState> = combineReducers({
    ...reducers,
    router: connectRouter(history),
  } as any);

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      ...enhancers,
    ),
  );

  return store;
};
