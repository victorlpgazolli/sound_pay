import { StyleSheet } from 'react-native';
const colors = StyleSheet.create({
  backcolor: {
    backgroundColor: "#F77D83",
  }, textColor: {
    color: "#000"
  }, centralizeItem: {
    justifyContent: "center",
    alignItems: "center"
  }, btnText: {
    paddingHorizontal: 50,
    paddingVertical: 20,
    opacity: 1,
  },
  fontColorBold: {
    color: '#ED1B23'
  }, highlight: {
    color: '#4A90E2',
  }, headerStyle: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  _borderBottomColor: {
    borderBottomColor: '#ED1B23',
  }, cardInput: {
    height: 40,
    width: 300,
    borderTopColor: '#ffffff00',
    borderRightColor: '#ffffff00',
    borderLeftColor: '#ffffff00',
    borderWidth: 2,
  }, footerTitle: {
    fontSize: 17,
    textAlignVertical: "bottom",
  },

})
export default colors