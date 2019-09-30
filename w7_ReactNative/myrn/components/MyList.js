import React, { Component } from 'react';
import { Text, View,TextInput,Button,Alert,Image,ScrollView,StatusBar,Picker } from 'react-native';

let imgSize= {
    width:100,
    height:100
}
class HelloWorldApp extends Component {
   constructor(){
     super()
    this.state = {
        imgs:['./assets/img/g3.jpg','./assets/img/g1.jpg','./assets/img/g2.jpg','./assets/img/g4.jpg','./assets/img/g5.jpg'],
        language:'test'
    }
   }

  render() {
    return (
        <>
        <StatusBar backgroundColor="#58bc58" barStyle="light-content" />
        <ScrollView style={{width:150,height:200}}>
            {/* {
                this.state.imgs.map((item,idx)=>{
                    return <Image key={idx} source={{uri:item}}/>
                })
            } */}
            <Image style={imgSize} source={require('../assets/img/g1.jpg')}/>
            <Image style={imgSize} source={require('../assets/img/g2.jpg')}/>
            <Image style={imgSize} source={require('../assets/img/g3.jpg')}/>
            <Image style={imgSize} source={require('../assets/img/g4.jpg')}/>
            <Image style={imgSize} source={require('../assets/img/g5.jpg')}/>
        </ScrollView>
        <Picker
  selectedValue={this.state.language}
  style={{ height: 50, width: 100 }}
  onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
  <Picker.Item label="Java" value="java" />
  <Picker.Item label="JavaScript" value="js" />
  <Picker.Item label="HTML" value="html" />
</Picker>
<Text>{this.state.language}</Text>
        </>
    );
  }
}

export default HelloWorldApp;