/// <reference path="../../../../node_modules/@types/mocha/index.d.ts"/>

import { expect } from 'chai';
import { shallow } from 'enzyme';
import * as React from 'react';

import Hello from '../Hello';

describe('<Hello />', () => {
	describe('temp1', () => {
    it('should render hello world', () => {
      const text = 'Hello World';
      const renderedComponent = shallow(
        <Hello subject="World"/>
      );
			expect(renderedComponent.text()).to.equal('Hello World');
    });
	});
});
