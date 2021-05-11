import React, { useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import LottieView from 'lottie-react-native';
import { getSearchPokemon } from '../../utils';
import { ContainerPage, TextInputSearch, CardPokemon } from '../../components';
import { AnimationPokemon } from '../../assets/animation';
import { Scroll, Text, Flex } from './style'

interface InterfaceData {
	id: number
	name: string
	image: string
	type: string
};

const Search: React.FC<InterfaceData> = (InterfaceData) => {

  const navigation = useNavigation();
  const textSearch = useRef('')
  const [data, setData] = useState<InterfaceData>(InterfaceData)

  async function request() {
    if(!textSearch.current) return null
    
    const response = await getSearchPokemon(textSearch.current)
    setData(response)
  }

  return (
    <ContainerPage
      paddingT={20}
    >
      <TextInputSearch
        onEndEditing={() => request()}
        onChangeText={(txt) => textSearch.current = txt}
      />
      <Scroll showsVerticalScrollIndicator={false}>
        {
          data.name && (
            <CardPokemon
              image={data.image}
              name={data.name}
              type={data.type}
              onPress={() => navigation.navigate('Details', {data: data})}
            />
          )
        }

        {
          !data.name && (
            <Flex>
              <LottieView
                autoPlay
                loop
                style={{
                  width: wp('50%'),
                  height: wp('50%')
                }}
                source={AnimationPokemon}
              />
              <Text>Nada por aqui...</Text>
            </Flex>
          )
        }
      </Scroll>
    </ContainerPage> 
  );
};

export default Search;