import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import Button from '../components/button'


class Home extends Component {
  static navigationOptions = {
    title: 'Best Tea ',
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
        onPress={() => this.props.navigation.navigate('Knowledge')}
        > Information </Button>
        <Button
        onPress={() => this.props.navigation.navigate('Toptrucks')}
        >Water Vendors</Button>
      </View>
    );
  }
}

const styles = {
  container: {
    flex:1,
    paddingTop:30,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  section:{
      flex:1,
      alignContent: 'stretch',
      paddingTop:10,
  }
};


export default Home;
