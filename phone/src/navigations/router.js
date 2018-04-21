import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StackNavigator, SwitchNavigator } from 'react-navigation';
import knowledge from '../screens/knowledge';
import home from '../screens/home';
import map from '../screens/map';
import toptrucks from '../screens/Toptrucks';
import vidios from '../screens/vidios';
import articles from '../screens/articles';
import signup from '../screens/signup';
import nearme from '../screens/nearme';
import alltrucks from '../screens/allTrucks'
export default StackNavigator({
  Home: { screen: home },
  MAP: { screen: map },
  Toptrucks: { screen: toptrucks },
  Knowledge: {screen:knowledge},
  Vidios: { screen: vidios },
  Articles: { screen: articles },
  Signup: {screen: signup},
  Nearme: {screen: nearme},
  Alltrucks: {screen: alltrucks}
}
,{
  initialRouteName: 'Home',
});

