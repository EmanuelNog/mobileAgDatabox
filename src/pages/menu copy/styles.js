import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
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

  menuButtonsText: {
    color: '#13131a',
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 5,
  },
});