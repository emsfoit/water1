import React, { Component } from 'react';
import { Text, View, Image, TextInput } from 'react-native';
import Button from '../components/button'


class SignUp extends Component {
    static navigationOptions = {
        title: 'Register Now',
        headerTitleStyle :{textAlign: 'center',alignSelf:'center'},
    };
    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
        }
    }
 
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image
        resizeMode = 'contain'
        style={{width: 150, height: 150}}
        source={require('../img/logo.png')}
        />
            <TextInput
            style={styles.textinput}
            onChangeText={(text) => this.setState({email: text.replace(/\s/g, '')})}
            keyboardType={"email-address"}
            placeholder={"E-Mail Adresse"}
            onSubmitEditing={() => this.password.focus()}
            returnKeyType="next"
            placeholderTextColor="white"
            underlineColorAndroid="transparent"
            value={this.state.email}
            />
        <TextInput
            maxLength = {18}
            ref={(ref) => this.password = ref}
            style={styles.textinput}
            onChangeText={(text) => this.setState({password: text})} 
            secureTextEntry={true}
            placeholder={"Passwort"}
            returnKeyType="done"
            placeholderTextColor="white"
            underlineColorAndroid="transparent"
            />
        <Button
        onPress={() => console.log('MAP')}
        >Register</Button>
      </View>
    );
  }
}

const styles = {
  container: {
    flex:1,
    paddingTop:30,
    alignItems: 'center',
    backgroundColor: '#709ae0'
  },
  section:{
      flex:1,
      alignContent: 'stretch',
      paddingTop:10,
  },
  textinputcontainer: {  
    alignSelf: 'stretch',
    padding:0,
    marginLeft:10,
    marginRight:10,
    marginTop:20,
    marginBottom:5,
    borderColor: '#F5FCFF',
    borderRadius: 5,  
    borderBottomColor: "rgba(255,255,255,0.75)",  
    borderWidth: 0.5,    
  },
  textinput: {
    alignSelf: 'stretch',
    alignContent: 'stretch',
    color: 'black',
    fontSize: 15,
    textAlign: 'left',
    margin:20,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },

};


export default SignUp;
