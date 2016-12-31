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
import { Hello } from '../../../src';
import { toggle } from './actions';
import { connect } from 'react-redux';
import { createStructuredSelector }  from 'reselect';
import { getVisibility } from './selectors';

export interface AppProps {
  show: boolean;
  dispatch: any;
}

class App extends React.Component<AppProps, {}> {

  toggle(): void {
    this.props.dispatch(toggle());
  }

  render() {
    return (
      <div>
        <Hello show={this.props.show} toggle={this.toggle.bind(this)}/>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  show: getVisibility(),
});

export default connect(mapStateToProps)(App);
