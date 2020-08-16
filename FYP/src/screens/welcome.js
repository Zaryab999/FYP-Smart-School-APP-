/*import React,{Component} from 'react'
import {Button,Text, View,StyleSheet,ImageBackground} from 'react-native'
import {Actions} from 'react-native-router-flux'

export default class welcome extends Component{
    render(){
        const { navigation } = this.props;
        return(
            <ImageBackground source={require('../components/image/welcome.png')}style={{width: '100%', height: '110%'}}>
                <View style={{marginLeft:120,marginTop:190,borderColor:'black'}}>
                    <Text style={{fontSize:25, color:'#ff0000'}}>Welcome </Text>
                    <Text style={{marginTop:50 ,fontSize:25,marginLeft:10,fontWeight:"bold"}}>
                        { JSON.stringify(navigation.getParam('itemId'))}
                    </Text>
               </View>
            </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({

input:{
    width: 500,
    height: 200,
    padding: 5,
   // borderWidth: 1,
    //borderColor: 'black',
    marginBottom: 7,
    marginTop: 250,
    marginLeft:60,
    //backgroundColor:'#ffff00',
    fontWeight:"bold",
}


});*/


import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Dashboard from 'react-native-dashboard';
 
const items = [
  { name: 'Attendence', background: '#3498db', icon: 'user' },
  { name: 'Results', background: '#ef0202', icon: 'book' },
  { name: 'Exams Shedule', background: '#efcf02', icon: 'calendar' },
  { name: 'Monthly Progress', background: '#02ef1d', icon: 'clipboard' },
  { name: 'Teacher Remarks', background: '#02cbef', icon: 'comment' },
  { name: 'PTM Alert', background: '#ef5802', icon: 'bell' },
];
 
export default class App extends Component {
  _card = el => {
    console.log('Card: ' + el.name)
  };
  render() {
    return (
      <View style={styles.container}>
        <Dashboard items={items} background={true} card={this._card} column={2} />
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
});