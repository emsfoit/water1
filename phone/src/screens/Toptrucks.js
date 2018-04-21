import React, { Component } from 'react';
import { Text, View, TouchableHighlight, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SignUp from './signup';
import renderElements from '../components/trucksList'
import Button from '../components/button'
class Toptrucks extends Component {
  static navigationOptions = {
    title: 'Top Trucks ',
    headerTitleStyle :{textAlign: 'center',alignSelf:'center'},
};

  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        {renderElements(5)}
        <View style= {{flexDirection:'row',alignItems:'center', margin:15}}>
        <View style={{flex:1,margin:8,}}>
      
          <Text>want to be in the list?</Text>
          <TouchableHighlight
          onPress={() => this.props.navigation.navigate('Signup')}>
          <Text style={{fontWeight:'bold' , textDecorationLine: 'underline'}}>
            register here </Text>     
          </TouchableHighlight>
         
        <View>
        <TouchableHighlight   
        onPress={() => this.props.navigation.navigate('Alltrucks')}>
        <Text style={{fontWeight:'bold' , textDecorationLine: 'underline'}}>
          show all the tracks </Text>     
        </TouchableHighlight>
        <TouchableHighlight   
        onPress={() => this.props.navigation.navigate('Nearme')}>
        <Text style={{fontWeight:'bold' , textDecorationLine: 'underline'}}>
        find trucks near me </Text>     
        </TouchableHighlight>
        <View style={{flex: 1, flexDirection: 'row'}}>
         
        </View>
      </View>
        </View>

        <View>
        <View style={{flex: 1, flexDirection: 'row'}}>
        <Image
        resizeMode = 'contain'
        style={{width: 15, height: 15, margin:5}}
        source={require('../img/check.png')}
      />
      <Text>Licensed</Text>
    </View>

    <View style={{flex: 1, flexDirection: 'row'}}>
        <Image
        resizeMode = 'contain'
        style={{width: 15, height: 15,margin:5}}
        source={require('../img/danger.png')}
        />
        <Text>works in emergency</Text>           
    </View>

    <View style={{flex: 1, flexDirection: 'row'}}>
        <Image
        resizeMode = 'contain'
        style={{width: 15, height: 15,margin:5}}
        source={require('../img/euro.png')}
        />
        <Text>Great Price</Text>
    </View>
    <View style={{flex: 1, flexDirection: 'row'}}>
        <Image
        resizeMode = 'contain'
        style={{width: 15, height: 15, margin:5}}
        source={require('../img/next.png')}
        />
        <Text>Great Price</Text>
    </View>
        </View>
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
    backgroundColor: 'white',
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


export default Toptrucks;
