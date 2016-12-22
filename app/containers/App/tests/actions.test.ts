import { expect } from 'chai';

import {
  TOGGLE
} from '../constants';

import {
  toggle
} from '../actions';

describe('App Actions', () => {
  describe('toggle', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: TOGGLE,
      };
      expect(JSON.stringify(toggle())).to.equal(JSON.stringify(expectedResult));
    });
  });
});
