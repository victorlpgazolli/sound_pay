import React, {Component} from 'react';
import { ScrollView, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { Container, Header, Left, Body,Content, Right, Button, Icon, Title } from 'native-base';
import colorStyle from '../components/colorStyle'
export default class Home extends Component {
  constructor(props){
    super(props);
    this.home = this.home.bind(this)
  }
  home(){
    this.props.navigation.navigate("configCard")
  }
  render(){

    return(
      <ScrollView style={[styles.container]}>
        
        <Header androidStatusBarColor="#EF4951" style={[colorStyle.backcolor,colorStyle.headerStyle]}>
          <Left>
            <Button style={colorStyle.backcolor} onPress={() => this.props.navigation.navigate('DrawerOpen')}>
              <Icon name='menu'/>
            </Button>
          </Left>
          <Body>
            <Title>SoundPay</Title>
          </Body>
        </Header>
        <Text style={styles.disclaimer_text}>text
        </Text>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({

  disclaimer_text:{
    alignContent:"center",
    color: '#000000',
    fontSize: 15,
    margin: 30 ,
  },backTransparent:{backgroundColor:"transparent"}
})

