import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  menuButton:{
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:100,
    height:100,
    backgroundColor:'#fff',
    borderRadius:20
  },
  menuButtonInside:{
    height:10
  },

  navBar: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    height: 60,
    backgroundColor:'#02ea05',
    justifyContent: 'space-between',
  },

  navBarText: {
    fontSize: 25,
    color: '#13131a',
    alignItems: 'center',
    justifyContent: 'center',
  },

  navBarTouch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  bodyContainer:{
    paddingHorizontal:20,
    paddingTop: 20,
  },

  headerTextBold: {
    fontWeight: 'bold'
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#737380'
  },

  incidentList: {
    marginTop: 32,
  },

  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 16,
  },

  incidentProperty: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold'
  },

  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    color: '#737380'
  },

  menuButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10
  },

  menuButtonsInside:{
    justifyContent:'center',
    alignItems: 'center',
  },

  menuButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30
  },

  menuButtonsText: {
    color: '#13131a',
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 5,
  },
});