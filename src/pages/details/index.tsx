import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { useRoute, useIsFocused } from '@react-navigation/native';
import {
  pickerColor,
  getSinglePokemon,
  capitalizeFirstLetter,
  currentTheme
} from '../../utils';
import {
  ContainerPage,
  Background,
  IndicatorGesture,
  Scroll,
  Image,
  Text,
  Flex
} from './style';

interface InterFaceData {
	readonly types: [{ "type": { "name": string} }]
	readonly abilities: [{ "ability": { "name": string} }]
	readonly moves: [{ "move": { "name": string} }]
};

const Details: React.FC<InterFaceData> = (InterFaceData) => {

  useEffect(() => {
    request()
  }, [])

  const isDarkMode = currentTheme() === 'dark';
  const params: any = useRoute().params;
  const isFocused = useIsFocused();
  const [data, setData] = useState<InterFaceData>(InterFaceData)

  if(isFocused) {
    StatusBar.setBarStyle('light-content')
    StatusBar.setBackgroundColor('#373737')
  }else{
    StatusBar.setBarStyle(isDarkMode ? 'light-content' : 'dark-content')
    StatusBar.setBackgroundColor(isDarkMode ? '#373737' : 'white')
  }

  async function request() {
    try {
      const response = await getSinglePokemon(params.data.id)
      setData(response)
    } catch (error) { }
  };

  return (
    <ContainerPage color={pickerColor(params.data.type)}>
      <IndicatorGesture />

      <Scroll showsVerticalScrollIndicator={false}>
        <Flex>
          <Background />
          <Image source={{uri: params.data.image}} />
        </Flex>
        <Text size={'4%'} weight={'bold'} alignS={'center'}>
          {capitalizeFirstLetter(params.data.name)}
        </Text>

        <Flex>
          {
            data.types && (
              data.types.map((item, index) => (
                <Text
                  size={'2%'}
                  alignS={'center'}
                  marginR={1.5}
                  marginL={1.5}
                  key={index}
                >
                  {
                    capitalizeFirstLetter(item.type.name)} {data.types.length != index+1 && '|'
                  }
                </Text>
              ))
            )
          }
        </Flex>

        <Text size={'3%'} weight={'bold'} marginT={30}>
          Habilidades:
        </Text>
        {
          data.abilities && (
            data.abilities.map((item, index) => (
              <Text size={'2%'} key={index}>
                - {capitalizeFirstLetter(item.ability.name)}
              </Text>
            ))
          )
        }

        <Text size={'3%'} weight={'bold'} marginT={20}>
          Movimentos:
        </Text>
        {
          data.moves && (
            data.moves.map((item, index) => (
              <Text size={'2%'} key={index}>
                - {capitalizeFirstLetter(item.move.name)}
              </Text>
            ))
          )
        }
      </Scroll>
    </ContainerPage> 
  );
};

export default Details;