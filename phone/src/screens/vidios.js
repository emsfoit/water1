import React, { Component } from 'react';
import { Text, View, Linking, Image, TouchableHighlight, ScrollView } from 'react-native';
import Button from '../components/button'


class Vidios extends Component {
    static navigationOptions = {
        title: 'Vidios',
        headerTitleStyle :{textAlign: 'center',alignSelf:'center'},
    };    
  
  render() {
    const { navigate } = this.props.navigation;
    
    return (
      <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
            <Image
            resizeMode = 'contain'
            style={{width: 350, height: 300}}
            source={require('../img/waterdrop.jpg')}
            />
            <View style={styles.desc}>
            <Text>Clean your water tank </Text>
            <TouchableHighlight   
            onPress={ ()=>{ Linking.openURL('https://www.youtube.com/watch?v=SRy5ex3JCHY')}}>
            <Text style={{fontWeight:'bold' , textDecorationLine: 'underline'}}>
            Play Vidio </Text>     
            </TouchableHighlight>
           </View>
            <Image
            resizeMode = 'contain'
            style={{width: 350, height: 300}}
            source={require('../img/clean.jpg')}
            />
            <View style={styles.desc}>
            <Text> how to check water purity at home</Text>
            <TouchableHighlight   
            onPress={ ()=>{ Linking.openURL('https://youtu.be/9ST6EbQP8qE')}}>
            <Text style={{fontWeight:'bold' , textDecorationLine: 'underline'}}>
            Play Vidio </Text>     
            </TouchableHighlight>
            </View>
            </ScrollView>
            
      </View>
    );
  }
}

const styles = {
  container: {
    flex:1,
    alignItems: 'center',
  },
  section:{
      flex:1,
      alignContent: 'stretch',
      paddingTop:10,
  },
  desc:{
      alignItems: 'center',
  }
};


export default Vidios;
