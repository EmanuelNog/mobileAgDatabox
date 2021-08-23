import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  bodyContainer:{
    paddingHorizontal:10,
    paddingTop: 20,
  },
  titleImage: {
    color: "#121212",
    marginTop: 100,
    alignSelf: "center"
  },
  insertionField: {
    height: 70,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(204,201,201,1)",
    borderRadius: 20,
    marginTop: 15,
  },
  insertEmailField: {
    color: "rgba(145,145,145,1)",
    fontSize: 18,
    marginTop: 27,
    marginLeft: 40
  },
  insertPasswordField: {
    
    color: "rgba(145,145,145,1)",
    fontSize: 16,
    marginTop: 27,
    marginLeft: 41
  },
  loginBtn: {
    height: 53,
    width: 144,
    alignSelf: 'center',
    backgroundColor: "rgba(2,234,5,1)",
    borderRadius: 20,
    shadowColor: "rgba(204,201,201,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginTop: 40,
    justifyContent: 'center',
  },
  loginBtntxt: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    alignSelf: 'center',
  },
  createAccountBtn: {
    height: 53,
    width: 218,
    alignSelf: 'center',
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 20,
    shadowColor: "rgba(204,201,201,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    borderWidth: 1,
    borderColor: "rgba(204,201,201,1)",
    marginTop: 20,
    justifyContent: 'center',
  },
  createAccounttxt: {
    alignSelf: 'center',
    color: "rgba(0,0,0,1)",
    fontSize: 20,
  },
  forgotPasswordBtn: {
    alignSelf: 'center',
    color: "#121212",
    fontSize: 18,
    marginTop: 30,
  },
  rowOrientation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10
  },
});