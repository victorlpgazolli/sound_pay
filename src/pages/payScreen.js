import React, { Component } from 'react';
import { TouchableOpacity, View, Text, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native';

import colorStyle from '../components/colorStyle'



export default class payScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      payvalue: '',
    }

  }
 
  payScreen(payvalue) {
    alpha = /[a-zA-Z]/g
    if (!alpha.test(payvalue) || payvalue == "") {
      this.setState({ payvalue })
      paymentValue = payvalue

    }
    else {
      console.warn("Only numbers");
    }
  }

  render() {
    return (
      <View style={[colorStyle.centralizeItem]}>
        <KeyboardAvoidingView behaviour="padding">
          <TextInput
            style={[colorStyle.cardInput, colorStyle._borderBottomColor]} onChangeText={(payvalue) => this.payScreen(payvalue)} value={this.state.payvalue}
            placeholder='Valor' placeholderTextColor="#ED1B23" />
        </KeyboardAvoidingView>
        <TouchableOpacity style={colorStyle.btnText} disabled={false} title="Sign in with Google" onPress={this.makePayment}>
          <Text style={[colorStyle.footerTitle, colorStyle.fontColorBold]}>Pagar</Text>
        </TouchableOpacity>
      </View>
    )
  }
}