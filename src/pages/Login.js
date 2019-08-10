import React, {Component} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import colorStyle from '../components/colorStyle'
import Logo from '../components/Logo'

export default class Login extends Component {
  constructor(props){
    super(props);
    this.login = this.login.bind(this)
  }
  login(){
    this.props.navigation.navigate("configCard")
  }
  render(){

    return(
      <View style={[styles.container, this.props.style]}  >
        <Logo/>
        <Text style={[styles.headerTitle,colorStyle.fontColorBold]}>A nova maneira de pagar</Text>
        <Image style={styles.images} source={require('../img/debit-card.png')}/>
        <Text style={styles.disclaimer_text}>text
        </Text>
        <TouchableOpacity style={styles.signInBtn} title="Sign in with Google" onPress={this.login} >
          <Text style={styles.signInBtnText} >Conectar com o Google</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    justifyContent:"center",
    alignItems: 'center',
    marginTop: 10,
  },
  headerTitle:{
    fontSize: 25,
    marginTop: 120,
  },
  images:{
    width:260, 
    height:200,
    marginTop:30,
    },
    signInBtn:{
      backgroundColor:"#fff",
      paddingHorizontal:50,
      paddingVertical:20,
      borderColor:"#ccc",
      borderWidth:1,
      borderRadius:25,
      opacity: 1,
    },
    signInBtnText:{
      color: "#000"
    },
    disclaimer_text:{
      alignContent:"center",
      color: '#000000',
      fontSize: 15,
      margin: 30 ,
    },

})

