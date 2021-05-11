import { Dimensions } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import styled from 'styled-components/native';

const { width } = Dimensions.get('window');

type TypeContainerPage = {
  color: string
};

type TypeText = {
  size: string
  marginT?: number
  marginR?: number
  marginL?: number
  weight?: 'bold' | 'normal'
  alignS?: 'flex-start' | 'center' | 'flex-end'
};

export const ContainerPage = styled.View`
  flex: 1;
  background-color: ${(props: TypeContainerPage) => props.color || 'white'};
  padding-horizontal: 20px
`

export const IndicatorGesture = styled.View`
  width: 50%;
  height: 3px;
  margin-vertical: 10px;
  align-self: center;
  border-radius: 6px;
  background-color: rgba(000, 000, 000, 0.4)
`

export const Scroll = styled.ScrollView``

export const Image = styled.Image`
  width: ${width/1.5}px;
  height: ${width/1.5}px;
  align-self: center;
  resize-mode: contain
`

export const Text = styled.Text`
  font-size: ${(props: TypeText) => hp(props.size)}px;
  font-weight: ${(props: TypeText) => props.weight || 'normal'};
  align-self: ${(props: TypeText) => props.alignS || 'flex-start'};
  margin-top: ${(props: TypeText) => props.marginT || 0}px;
  margin-left: ${(props: TypeText) => props.marginL || 0}px;
  margin-right: ${(props: TypeText) => props.marginR || 0}px
`

export const Flex = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap
`

export const Background = styled.View`
  width: ${width/2}px;
  height: ${width/2}px;
  position: absolute;
  align-self: center
  background-color: white;
  border-radius: ${width}px
`