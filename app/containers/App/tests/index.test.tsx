
import { expect } from 'chai';
import { render } from 'enzyme';
import * as React from 'react';

import App from '../../App';
import { Hello } from '../../../../src/components/Hello';

function toggle() {
};

describe('<App />', () => {
  it('should render the Hello Component', () => {
    const renderedComponent = render(
      <Hello show={true} toggle={toggle} />
    );
    expect(renderedComponent.find(Hello)).to.exist;
  });
});
