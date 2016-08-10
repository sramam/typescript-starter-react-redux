import * as React from 'react';
import * as ReactDOM from 'react-dom';

export interface HelloProps { subject: string; }

class Hello extends React.Component<HelloProps, {}> {
    render() {
        return <h1>Hello {this.props.subject}</h1>;
    }
}

export default Hello;
