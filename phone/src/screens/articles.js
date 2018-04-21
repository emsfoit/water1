import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import Button from '../components/button'


class Articles extends Component {
    static navigationOptions = {
        title: 'Articles',
        headerTitleStyle :{textAlign: 'center',alignSelf:'center'},
    };
    
 
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      <ScrollView>
      <Text style = {{fontSize:16, alignItems:'center', fontWeight:'bold', marginBottom: 20}}> How to clean water at home </Text>
            <Text>
            Clean water is essential for life, but most people in the developed world don't think much about the water they use for drinking, food preparation, and sanitation. In developing nations, however, the search for safe drinking water can be a daily crisis. Millions of people die each year, most of them children, from largely preventable diseases caused by a lack of access to clean water and proper sanitation.

Sandra Postel, director of the Global Water Policy Project and the National Geographic Society's freshwater fellow, said freshwater scarcity presents a growing problem to be addressed during the United Nations Conference on Sustainable Development (Rio+20) in Brazil from June 20 to 22. "It manifests itself in the depletion of groundwater, and the drying up of rivers and lakes upon which people depend for irrigation to grow their food," she said. "The intersection of water scarcity, food security, and a changing climate on top of it all raises a suite of water concerns that urgently need to be addressed."

Much progress is possible. In fact, due to the dedicated efforts of governments and NGOs since the 1992 Earth Summit, safe drinking water has been made available to some 1.7 billion people around the world, with projects ranging from modern piped plumbing to rainwater collection and storage.

But an estimated 880 million people still don't have regular access to clean water. "And we haven't made nearly as much progress on sanitation," Postel said. "Something like 2.7 billion people are without adequate sanitation, so that challenge still looms very large." Policymakers will struggle to lower both numbers even as the planet's population rises by an expected three billion over the next 50 to 75 years.
            </Text>
            </ScrollView>
      </View>
    );
  }
}

const styles = {
  container: {
    flex:1,
    paddingTop:10,
    margin:10,
    alignItems: 'center',
  },
  section:{
      flex:1,
      alignContent: 'stretch',
      paddingTop:10,
  }
};


export default Articles;
