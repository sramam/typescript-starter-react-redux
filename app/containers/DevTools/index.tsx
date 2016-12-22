/* tslint:disable */
import * as React from 'react';
import { createDevTools, IDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
// import * as SliderMonitor from 'redux-slider-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import ChartMonitor from 'redux-devtools-chart-monitor';
import * as ReactDOM from 'react-dom';

export default createDevTools(
  <DockMonitor toggleVisibilityKey='H'
    defaultIsVisible={true}
    changePositionKey='Q'
    changeMonitorKey='M '>
    <LogMonitor />
    <ChartMonitor select={state => state.app}/>
  </DockMonitor>
);
