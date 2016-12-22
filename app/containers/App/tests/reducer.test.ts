
import { expect } from 'chai';
import globalReducer from '../reducer';
import {
  toggle
} from '../actions';

describe('globalReducer', () => {
  let state;
  beforeEach(() => {
    state = { show: true };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    const emptyAction = { type: null };
    const actual = JSON.stringify(globalReducer(undefined, emptyAction));
    expect(actual).to.equal(JSON.stringify(expectedResult));
  });

  it('should handle the toggle action correctly', () => {
    const expectedResult = {show: false};
    const actual = JSON.stringify(globalReducer(state, toggle()));
    expect(actual).to.equal(JSON.stringify(expectedResult));
  });
});
