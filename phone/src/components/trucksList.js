import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../components/button'
const List = (b) => {
    var rows = [];
    rows.push(
        <View style={styles.rowContainer}>
        <View style={styles.contetnt}>
          <Text style={styles.title}>Name</Text>
        </View>
        <View style={styles.contetnt}>
          <Text style={styles.title}>Location</Text>
        </View>
        <View style={styles.contetnt}>
          <Text style={styles.title}>Features</Text>
        </View>
      </View>
    )
    for (var i=0;i<b;i++){
        rows.push(
          <View style={i%2 == 0 ? styles.rowContainer : styles.rowContainer1}>
          <View style={styles.contetnt}>
            <Text style={styles.title}>Name {i}</Text>
          </View>
          <View style={styles.contetnt}>
            <Text style={styles.title}>Location {i}</Text>
          </View>
          <View style={styles.contetnt}>
          <View style={{flex: 1, flexDirection: 'row'}}>
          <Image
          resizeMode = 'contain'
          style={{width: 15, height: 15, margin:5}}
          source={require('../img/danger.png')}
          />
          <Image
          resizeMode = 'contain'
          style={{width: 15, height: 15,margin:5}}
          source={require('../img/euro.png')}
          />
          <Image
          resizeMode = 'contain'
          style={{width: 15, height: 15,margin:5}}
          source={require('../img/check.png')}
          />
          <Image
          resizeMode = 'contain'
          style={{width: 15, height: 15, margin:5}}
          source={require('../img/next.png')}
          />
          </View>
          </View>
          
          </View>
        )
    }
    return rows;
  }
  export default List ;


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
  