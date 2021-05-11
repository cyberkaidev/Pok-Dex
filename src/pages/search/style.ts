import styled from 'styled-components/native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import InterfaceTheme from '../../types';

export const Scroll = styled.ScrollView``

export const Text = styled.Text`
  font-size: ${hp('3%')}px;
  margin-left: 5px;
  color: ${(props: InterfaceTheme) => props.theme.textColor}
`

export const Flex = styled.View`
  flex: 1;
  opacity: 0.8;
  align-items: center
`