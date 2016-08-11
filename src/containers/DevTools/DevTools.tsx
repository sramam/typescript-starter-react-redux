/* tslint:disable */
import * as React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
// import * as SliderMonitor from 'redux-slider-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
// import * as ChartMonitor from 'redux-devtools-chart-monitor';
import * as ReactDOM from 'react-dom';

export default createDevTools(
  <DockMonitor toggleVisibilityKey='H'
    defaultIsVisible={true}
    changePositionKey='Q'>
    <LogMonitor />
  </DockMonitor>
);
