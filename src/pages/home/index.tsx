import React, { useEffect, useState } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { currentTheme, getListPokemon, generateUniqueKey } from '../../utils';
import {
  ContainerPage,
  ButtonSearch,
  CardPokemon,
  CardLoading
} from '../../components';

interface InterfaceData {
  readonly id: number
  readonly name: string
  readonly image: string
  readonly type: string
};

const Home: React.FC = () => {

  useEffect(() => {
    request()
  }, [])

  const navigation = useNavigation();
  const isDarkMode = currentTheme() === 'dark';

  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState<InterfaceData[]>([]);

  async function request() {
    if(loading) return null
    setLoading(true)

    try {
      const response = await getListPokemon(offset)
      setData([...data, ...response.results])
      setOffset(response.next)
      setLoading(false)
    } catch (error) { console.log(error) }
  };

  return (
    <ContainerPage
      paddingT={20}
    >
      <ButtonSearch onPress={() => navigation.navigate('Search')} />
      <FlatList
        data={data}
        keyExtractor={item => generateUniqueKey(item.id)}
        renderItem={(({item}) => (
          <CardPokemon
            name={item.name}
            type={item.type}
            image={item.image}
            onPress={() => navigation.navigate('Details', {data: item})}
          />
        ))}
        ListEmptyComponent={<CardLoading />}
        ListFooterComponent={<ActivityIndicator color={isDarkMode ? 'white' : '#373737'} />}
        onEndReached={request}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingTop: 15}}
      />
    </ContainerPage> 
  );
};

export default Home;