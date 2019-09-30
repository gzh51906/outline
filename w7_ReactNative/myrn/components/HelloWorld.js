import React, { Component } from 'react';
import { Text, View,TextInput,Button,Alert,Image } from 'react-native';

let myStyle = {
  color:'#f00'
}

class HelloWorldApp extends Component {
   constructor(){
     super()
       this.state = {
           username:'laoxie'
       }

       this.changeUsername = this.changeUsername.bind(this)
   }
   changeUsername(text){
     this.setState({
       username:text
     })
   }
  render() {
      let {data} = this.props;
      let {username} = this.state;
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Image source={require("../assets/img/g3.jpg")}/>
          <Text style={myStyle}>Hello, {data}</Text>
          <Text style={{fontWeight:'bold'}}>{this.state.username}</Text>
          <Button title={data} onPress={()=>{Alert.pro}}/>
          <TextInput value={username} onChangeText={this.changeUsername}/>
        </View>
    );
  }
}

export default HelloWorldApp;