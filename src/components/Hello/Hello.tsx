import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as styles from './style.css';

export interface HelloProps { subject: string; }

class Hello extends React.Component<HelloProps, {}> {
    render() {
        return <h1 className={styles.title}>Hello {this.props.subject}</h1>;
    }
}

export default Hello;
