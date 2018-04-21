import { YellowBox } from 'react-native';
import Navigation from './src/navigations/router';
YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Warning: componentWillUpdate is deprecated',
]);
console.disableYellowBox = true;

import React from 'react';

export default class App extends React.Component {
 
  render() {
    return (
        <Navigation /> 

    );
  }
}
