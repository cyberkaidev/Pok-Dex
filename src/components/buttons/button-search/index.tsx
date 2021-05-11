import React from 'react';
import { currentTheme } from '../../../utils';
import { IconLoupeWhite,  IconLoupeBlack } from '../../../assets/img';
import { Container, Icon, Text } from './style';

interface Props {
  onPress: Function
}

const ButtonSearch: React.FC<Props> = (props) => {

  const isDarkMode = currentTheme() === 'dark';

  return (
    <Container onPress={() => props.onPress()}>
      <Icon
        source={isDarkMode ? IconLoupeBlack : IconLoupeWhite}
      />
      <Text>
        Procurar...
      </Text>
    </Container> 
  );
};

export default ButtonSearch;