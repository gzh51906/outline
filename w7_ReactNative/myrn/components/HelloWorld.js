import React, { Component } from 'react';
import { Text, View } from 'react-native';

class HelloWorldApp extends Component {
   constructor(){
       this.state = {
           username:'laoxie'
       }
   }
  render() {
      let {data} = this.props;
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>Hello, world!</Text>
          <Text style={{fontWeight:'bold'}}>{this.state.username}</Text>
          <View>{data}</View>
        </View>
    );
  }
}

export default HelloWorldApp;