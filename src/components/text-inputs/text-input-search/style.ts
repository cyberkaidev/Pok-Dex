import styled from 'styled-components/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import InterfaceTheme from '../../../types';

export const Container = styled.View`
  width: 100%;
  margin-bottom: ${hp('3%')}px;
  border-radius: ${wp('2%')}px;
  flex-direction: row;
  align-items: center; 
  background-color: ${(props: InterfaceTheme) => props.theme.mode == 'dark' ? '#DADADA' : '#373737'}
`

export const Field = styled.TextInput`
  flex: 1;
  padding-vertical: ${hp('2%')}px;
  font-size: ${hp('2%')}px;
  padding-left: ${wp('10%')}px;
  color: ${(props: InterfaceTheme) => props.theme.mode == 'dark' ? '#373737' : 'white'}
`

export const IconAbsolute = styled.Image`
  position: absolute;
  width: ${wp('4%')}px;
  height: ${wp('4%')}px;
  left: 20px;
  resize-mode: contain
`

export const Icon = styled.Image`
  width: ${hp('2%')}px;
  height: ${hp('2%')}px;
  resize-mode: contain
`

export const Touch = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding-vertical: 10px;
  width: ${hp('10%')}px;
  margin-bottom: 10px
`

export const Text = styled.Text`
  font-size: ${hp('2%')}px;
  margin-left: 5px;
  color: ${(props: InterfaceTheme) => props.theme.textColor}
`