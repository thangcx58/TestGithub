/**
 * App - set all the things up
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
'use strict';

/* Setup ==================================================================== */
import React, { Component } from 'react'
import {
  Navigator,
  Text,
  TextInput, 
  View,
  TouchableHighlight,
  Image,
  StyleSheet,
} from 'react-native'

import Login from '../components/LoginView'            
import Dashboard from '../components/dashboardView'
import Screen from '../components/screen'

/* Component ==================================================================== */
let NavigatorBarRouterMapper ={
  LeftButton: function(route,navigator, index){
    if(route.name=='Login'){
      return null
    }
    return(
        <TouchableHighlight onPress={
          ()=>{
            if(index>0){
              navigator.pop();
            }
          }
        }>
          <Text style={{marginTop:10, marginLeft:20,color:'#007aFF'}}>Back</Text>
        </TouchableHighlight>
      );
  },
  RightButton: function(route,natigator,index){
    return null;
  },
  Title:function(route,navigator,index){
     if(route.name=='Login'){
      return null
    }
    return(
        <Text style={{marginTop:10,color:'#007AFF'}}>
          {route.name}
        </Text>
      );
  }
};
export default class App extends Component {
     renderScene(route,navigator){
        switch(route.name){
          case'Login':
            return(
                <Login navigator={navigator} route={route} />
              )
          case'Dashboard':
            return(
                <Dashboard navigator={navigator} route={route} />
              )
            case'Screen':
            return(
              <Screen navigator={navigator} route={route} />
              )
        }
     }

     render(){
      return(
          <Navigator style={{backgroundColor:'#fff'}}
            initialRoute={{name:'Login'}}
            renderScene={this.renderScene}
            configureScene={(route)=>{
                  if(route.sceneConfig){
                    return route.sceneConfig;
                  }
                  return Navigator.SceneConfigs.FloatFromRight
              }
            }
            navigationBar={
              <Navigator.NavigationBar
              routeMapper={ NavigatorBarRouterMapper }/>
            }
            />
        );
    }
}
