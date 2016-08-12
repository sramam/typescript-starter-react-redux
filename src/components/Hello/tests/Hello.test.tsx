/// <reference path="../../../../node_modules/@types/mocha/index.d.ts"/>

import { expect } from 'chai';
import { shallow } from 'enzyme';
import * as React from 'react';
import * as sinon from 'sinon';
import Hello from '../Hello';

function toggle() {};

describe('<Hello />', () => {
  it('should render hello world', () => {
    const text = 'Hello World';
    const renderedComponent = shallow(
      <Hello show={true} toggle={toggle}/>
    );
		expect(renderedComponent.find('p').text()).to.equal('Hello World');
  });

  it('should call toggle() on button click', () => {
    const toggleSpy = sinon.spy();
    const renderedComponent = shallow(
      <Hello show={false} toggle={toggleSpy}/>
    );
    renderedComponent.find('button').simulate('click');
    expect(toggleSpy).to.have.property('callCount', 1);
  });
});
