import React from 'react';
import { Dispatch } from 'redux';
import { changeCurrentTheme } from '../../redux/store/actionCreators';
import { useDispatch } from 'react-redux';
import { IconMoon, IconSun } from '../../assets/img';
import { currentTheme } from '../../utils';
import { Container, Icon, Text, Touch } from './style';

const HeaderTop: React.FC = () => {

  const isDarkMode = currentTheme() === 'dark';
  const dispatch: Dispatch<any> = useDispatch()

  function swithTheme() {
    dispatch(changeCurrentTheme())
  }

  return (
    <Container>
      <Text>
        Pokémon
      </Text>

      <Touch onPress={swithTheme}>
        <Icon source={isDarkMode ? IconMoon : IconSun} />
      </Touch>
    </Container> 
  );
};

export default HeaderTop;