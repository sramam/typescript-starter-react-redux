import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as styles from './style.css';

export interface HelloProps {
  show: boolean;
  toggle(): void;
}

export class Hello extends React.Component<HelloProps, {}> {
  render() {
    const show = this.props.show ? 'block' : 'none';
    return (
      <div>
        <p className={styles.title} style={{ display: show }}>Hello World</p>
        <button className='btn btn-default'
          onClick={this.props.toggle.bind(this)}>Click Me!</button>
      </div>
    );
  }
}
