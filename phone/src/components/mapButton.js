import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';


class MapButton extends Component {
 
  render() {
    const { children } = this.props.children;
    return (
        <TouchableOpacity 
        onPress={() => this.props.navigation.navigate('Signup')}
        >
          {children}
      </TouchableOpacity>
    );
  }
}


const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginRight:20,
    marginLeft:20,
    marginTop:15,
  }
};

export default MapButton ;
