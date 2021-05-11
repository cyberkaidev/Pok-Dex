import { Dimensions } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

const { width } = Dimensions.get('window');

interface InterfaceColor {
  color: string
};

export const Container = styled(RectButton)`
  width: 100%;
  height: ${width}px;
  margin-bottom: ${hp('3%')}px;
  border-radius: ${hp('2%')}px;
  align-items: center;
  justify-content: center;
  background-color: ${(props: InterfaceColor) => props.color}
`

export const Image = styled.Image`
  width: ${width/1.5}px;
  height: ${width/1.5}px;
  resize-mode: contain
`

export const Background = styled.View`
  width: ${width/2}px;
  height: ${width/2}px;
  position: absolute;
  background-color: white;
  border-radius: ${width}px
`

export const Text = styled.Text`
  font-size: ${hp('3.5%')}px;
  text-align: center;
  font-weight: bold
`