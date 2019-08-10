import React, { Component } from 'react';
import { View, TouchableOpacity, TextInput, Text, Image, Button, StyleSheet, KeyboardAvoidingView } from 'react-native';
import colorStyle from '../components/colorStyle'
import Logo from '../components/Logo'

export default class configCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card: ''
    }
    this.configCard = this.configCard.bind(this)
  }
  configCard() {
    this.props.navigation.navigate("Home")
  }
  cardNumber(card) {
    this.setState({ card })
  }
  render() {
    return (
      <View style={[styles.container]}>
        <KeyboardAvoidingView>
          <Logo />
          <Text style={[styles.headerTitle, colorStyle.fontColorBold]}>Configurar cartão</Text>
          <TextInput
            style={[colorStyle.cardInput, colorStyle._borderBottomColor]} onChangeText={(card) => this.cardNumber(card)} value={this.state.card}
            placeholder='Número do cartão' placeholderTextColor="#ED1B23" />
          <Image style={styles.images} source={require('../img/credit-card.png')} />
          <View style={[styles.bottomView]}>
          <TouchableOpacity style={colorStyle.btnText} disabled={false} title="Sign in with Google" onPress={this.configCard} >
            <Text style={[colorStyle.footerTitle, colorStyle.fontColorBold]}>Configurar mais tarde</Text> 
          </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    )
  }
}
//onPress={()=> Actions.register }>

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: 'center',
    marginTop: 10,
  },
  headerTitle: {
    fontSize: 25,
    marginTop: 120,
  },
  images: {
    width: 300,
    height: 218,
    marginTop: 30,
  },

  bottomView: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },



})

