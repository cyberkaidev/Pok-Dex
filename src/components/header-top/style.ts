import styled from 'styled-components/native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import InterfaceTheme from '../../types';

export const Container = styled.View`
  width: 100%;
  padding-top: 10px;
  padding-horizontal: ${wp('4.5%')}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props: InterfaceTheme) => props.theme.backgroundColor}
`

export const Touch = styled.TouchableOpacity`
  width: ${hp('6%')}px;
  height: ${hp('6%')}px;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: ${(props: InterfaceTheme) => props.theme.mode === 'dark' ? 'white' : '#373737'};
  border-radius: 80px;
`

export const Icon = styled.Image`
  width: ${hp('3.5%')}px;
  height: ${hp('3.5%')}px;
  resize-mode: contain
`

export const Text = styled.Text`
  font-size: ${hp('3.5%')}px;
  font-weight: bold;
  color: ${(props: InterfaceTheme) => props.theme.textColor}
`