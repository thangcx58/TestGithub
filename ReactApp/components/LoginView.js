'use strict'

import React,{Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Alert,
  Image,
  Navigator,
} from 'react-native'

class Login extends Component{
  onLogin(){
    Alert.alert(
      'Xin chao ban muon dang nhap',
      null,
      [ 
        {text: 'Ok', onPress:(this.accept.bind(this))},
        {text: 'cancel', onPress:(this.cancel.bind(this))},
      ]
      )
  }
  accept(){
    this.props.navigator.push({
      title:'Dashboard',
      name:'Dashboard',
      passProps:{}
    });
  }
  cancel(){
    console.log('deny')
  }
  render(){
    return(
      <Image source={{uri:'https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1125&q=80&cs=tinysrgb'}} style={styles.container}>
        <View>
          <Text style={styles.title}>Kho anh cua ban</Text>
          <TouchableHighlight onPress={(this.onLogin.bind(this))} style={styles.button}>
            <Text style={styles.textbutton} >
                Login
            </Text>
          </TouchableHighlight>
        </View>
      </Image>
    );
  }
}
/* Styles*/
const styles=StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'stretch',
  },
  button:{
    width:300,
    height:30,
    backgroundColor:'green',
    alignItems:'center',
    justifyContent:'center',
    marginTop:60,
    marginBottom:10,
    marginLeft:50,
    borderRadius:8,
    borderWidth:1,
  },
  textbutton:{
    color:'white',
  },
  title:{
    fontSize:25,
    marginTop:50,
    textAlign:'center',
    backgroundColor:'rgba(0,0,0,0 )'
  }
})
export default Login
