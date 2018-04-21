import React, { Component } from 'react';
import { Text, View, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SignUp from './signup';
import renderElements from '../components/trucksList'
import Button from '../components/button'
class NearMe extends Component {
  static navigationOptions = {
    title: 'Trucks Near me',
    headerTitleStyle :{textAlign: 'center',alignSelf:'center'},
};

  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        {renderElements(8)}
        <View style={{flexDirection:'column',margin:8,}}>
      
        <Text>want to be in the best list?</Text>
        <TouchableHighlight
       
        onPress={() => this.props.navigation.navigate('Signup')}>
        <Text style={{fontWeight:'bold' , textDecorationLine: 'underline'}}>
          register here </Text>     
        </TouchableHighlight>
         
        </View>
        <Button
        onPress={() => this.props.navigation.navigate('MAP')}
        >Show on Map</Button>
      </View>
    );
  }
}

const styles = {
  container: {
    flex:1,
    backgroundColor: 'white'
  },
  title: {
    fontWeight: 'bold',
    margin: 5,
    fontSize: 15,
  },
  rowContainer:{
    alignSelf: 'stretch',
    flexDirection: 'row',
    borderWidth:0.5
  },
  rowContainer1:{
    alignSelf: 'stretch',
    flexDirection: 'row',
    borderWidth:0.5,
    backgroundColor:'#dddddd'
  },
  contetnt: {
    flex: 1,
    alignSelf: 'stretch',
    borderRightWidth:0.5
  }
};


export default NearMe;
