import styled from 'styled-components/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import InterfaceTheme from '../../../types';

export const Container = styled.TouchableOpacity`
  width: 100%;
  padding-vertical: ${hp('2%')}px;
  margin-bottom: ${hp('1%')}px;
  border-radius: ${wp('2%')}px;
  font-size: ${hp('2%')}px;
  padding-left: ${wp('10%')}px;
  flex-direction: row;
  align-items: center;
  background-color: ${(props: InterfaceTheme) => props.theme.mode == 'dark' ? '#DADADA' : '#373737'}
`

export const Icon = styled.Image`
  position: absolute;
  width: ${wp('4%')}px;
  height: ${wp('4%')}px;
  left: 20px;
  resize-mode: contain
`

export const Text = styled.Text`
  font-size: ${hp('2%')}px;
  color: ${(props: InterfaceTheme) => props.theme.mode == 'dark' ? '#373737' : 'white'}
`