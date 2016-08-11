/// <reference path="../../../../node_modules/@types/mocha/index.d.ts"/>

import { expect } from 'chai';
import { shallow } from 'enzyme';
import * as React from 'react';

import Hello from '../Hello';

function toggle() {};

describe('<Hello />', () => {
	describe('temp1', () => {
    it('should render hello world', () => {
      const text = 'Hello World';
      const renderedComponent = shallow(
        <Hello show={true} toggle={toggle}/>
      );
			expect(renderedComponent.find('p').text()).to.equal('Hello World');
    });
	});
});
