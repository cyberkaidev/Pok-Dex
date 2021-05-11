import styled from 'styled-components/native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import InterfaceTheme from '../../types';

export const Container = styled.View`
  flex: 1;
  padding-horizontal: ${(props: InterfaceTheme) => props.paddingH || wp('4.5%')}px;
  padding-top: ${(props: InterfaceTheme) => props.paddingT || 0}px;
  background-color: ${(props: InterfaceTheme) => props.theme.backgroundColor}
`