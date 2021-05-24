import React, { useEffect, useState } from 'react';
import { Dimensions, ActivityIndicator } from 'react-native';
import {
  RecyclerListView,
  DataProvider,
  LayoutProvider
} from "recyclerlistview";
import { useNavigation } from '@react-navigation/native';
import { currentTheme, getListPokemon } from '../../utils';
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
  
  const { width } = Dimensions.get("window");

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
  
  function createNewDataProvider() {
    return new DataProvider((r1, r2) => {
      return r1 !== r2;
    });
  };

  function renderComponenet(index: any, item: InterfaceData) {
    return (
      <CardPokemon
        id={item.id}
        name={item.name}
        type={item.type}
        image={item.image}
        onPress={() => navigation.navigate('Details', {data: item})}
      />
    );
  };

  const layoutMaker = new LayoutProvider(
    index => {
      return 0;
    },
    (type, dim) => {
      dim.width = width-40
      dim.height = width+20
    }
  );

  return (
    <ContainerPage
      paddingT={20}
    >
      <ButtonSearch onPress={() => navigation.navigate('Search')} />
      
      {
        data.length > 0 ? (
          <RecyclerListView
            dataProvider={createNewDataProvider().cloneWithRows(data)}
            rowRenderer={renderComponenet}
            showsVerticalScrollIndicator={false}
            layoutProvider={layoutMaker}
            onEndReached={request}
            contentContainerStyle={{paddingTop: 15}}
            ListFooterComponent={<ActivityIndicator color={isDarkMode ? 'white' : '#373737'} />}
          />
        ) : <CardLoading />
      }
    </ContainerPage> 
  );
};

export default Home;