declare module "redux-devtools-chart-monitor" {
  import * as React from 'react'

  interface IChartMonitorProps {
    preserveScrollTop?: boolean,
    select?: (state: any) => any,
    theme?: any,
    invertTheme?: boolean
  }

  export default class ChartMonitor extends React.Component<IChartMonitorProps, any> {}
}
