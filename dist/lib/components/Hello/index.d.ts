/// <reference types="react" />
import * as React from 'react';
export interface HelloProps {
    show: boolean;
    toggle(): void;
}
export default class Hello extends React.Component<HelloProps, {}> {
    render(): JSX.Element;
}
