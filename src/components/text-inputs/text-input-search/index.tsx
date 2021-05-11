import React, { Fragment } from 'react';
import { TextInputProps } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { currentTheme } from '../../../utils';
import { IconLoupeWhite, IconLoupeBlack, IconBackWhite, IconBackBlack } from '../../../assets/img';
import { Container, Field, IconAbsolute, Icon, Touch, Text } from './style';

const TextInputSearch: React.FC<TextInputProps> = ({...rest}) => {

  const isDarkMode = currentTheme() === 'dark';
  const navigation = useNavigation();

  return (
    <Fragment>
      <Touch onPress={() => navigation.goBack()}>
        <Icon
          source={isDarkMode ? IconBackWhite : IconBackBlack}
        />
        <Text>Voltar</Text>
      </Touch>

      <Container>
        <IconAbsolute
          source={isDarkMode ? IconLoupeBlack : IconLoupeWhite}
        />
        <Field
          placeholder={'Procurar...'}
          placeholderTextColor={isDarkMode ? '#373737' : 'white'}
          returnKeyType={'search'}
          {...rest}
        />
      </Container> 
    </Fragment>
  );
};

export default TextInputSearch;