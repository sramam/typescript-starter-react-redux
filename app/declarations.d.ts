declare module "redux-devtools-chart-monitor" {
  import * as React from 'react'

  export interface IChartMonitorProps {
    preserveScrollTop?: boolean,
    select?: (state: any) => any,
    theme?: any,
    invertTheme?: boolean
  }

  export default class ChartMonitor extends React.Component<IChartMonitorProps, any> { }
}

// declare module 'Window';
// declare module 'module';

declare module 'redux-devtools-extension/developmentOnly';