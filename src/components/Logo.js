import React, {Component} from 'react';
import { View, Button, Text , Image, StyleSheet} from 'react-native';

export default class Logo extends Component {
  render(){
    return(
    <View style={styles.container}>
        <Image style={{width:150, height:115}} source={require('../img/soundpay_logo.png')}/>
     </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})

