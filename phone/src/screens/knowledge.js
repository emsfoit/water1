import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import Button from '../components/button'


class knowledge extends Component {
  static navigationOptions = {
    title: 'Get Information',
    headerTitleStyle :{textAlign: 'center',alignSelf:'center'},
};
 
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
            <Image
            resizeMode = 'contain'
            style={{width: 150, height: 150}}
            source={require('../img/logo.png')}
            />
            <Button 
            onPress={() => this.props.navigation.navigate('Vidios')}
            > Vidios </Button>
            <Button
            onPress={() => this.props.navigation.navigate('Articles')}
            >Articles</Button>
      </View>
    );
  }
}

const styles = {
  container: {
    flex:1,
    paddingTop:100,
    alignItems: 'center',
  },
  section:{
      flex:1,
      alignContent: 'stretch',
      paddingTop:10,
  }
};


export default knowledge;
