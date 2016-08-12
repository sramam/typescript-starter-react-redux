/// <reference path="../../../../node_modules/@types/mocha/index.d.ts"/>

import { expect } from 'chai';

import {
  getVisibility
} from '../selectors';

describe('getVisibility', () => {
  const visible = getVisibility();
  it('should select the show state', () => {
    const mockedState = {
      global: {
        show: false
      }
    };
    expect(visible(mockedState)).to.equal(mockedState.global.show);
  });
});
