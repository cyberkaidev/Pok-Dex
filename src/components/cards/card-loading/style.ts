import { Dimensions } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import styled from 'styled-components/native';

const { width } = Dimensions.get('window');

export const Loading = styled(ShimmerPlaceHolder)`
  width: 100%;
  height: ${width}px;
  margin-bottom: ${hp('3%')}px;
  border-radius: ${hp('2%')}px;
`