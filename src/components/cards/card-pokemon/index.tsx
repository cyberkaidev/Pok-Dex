import React  from 'react';
import { pickerColor, capitalizeFirstLetter } from '../../../utils';
import { Background, Container, Image, Text } from './style';

interface Props {
	readonly name: string
	readonly image: string
	readonly type: string
  onPress: Function
};

const CardPokemon: React.FC<Props> = (props) => (
  <Container
    color={pickerColor(props.type)}
    onPress={() => props.onPress()}
  >
    <Background />
    <Image source={{uri: props.image}} />
    <Text>{capitalizeFirstLetter(props.name)}</Text>
  </Container>
);

export default CardPokemon;