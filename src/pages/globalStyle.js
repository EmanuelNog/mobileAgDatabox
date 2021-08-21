import styled from 'styled-components/native';
import {StatusBar} from 'react-native';
export const Body = styled.View`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
  background: #fff;
`;
export const configSurface = styled.View`
padding:10;
`;
/*
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  configSurface :{paddingHorizontal:10,
    paddingTop: 20,}
});
*/