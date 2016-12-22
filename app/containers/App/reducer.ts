import { GlobalState } from './model';
import {
  TOGGLE
} from './constants';

const initialState = { show: true };

export interface Action { type: string; };

function globalReducer(state = initialState, action: Action): GlobalState {
  switch (action.type) {
    case TOGGLE:
      return Object.assign({}, state, {
        show: !state.show,
      });
    default:
      return state;
  }
}

export default globalReducer;
