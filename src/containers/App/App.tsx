/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

// Import the CSS reset, which HtmlWebpackPlugin transfers to the build folder
// import 'sanitize.css/sanitize.css';

// tslint:disable-next-line
import * as React from 'react';
import Hello from '../../components/Hello/Hello';

export default class App extends React.Component<{ children: any }, {}> {

  render() {
    return (
      <div>
        <Hello subject='World'/>
      </div>
    );
  }
}
