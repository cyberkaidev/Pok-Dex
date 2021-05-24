import React  from 'react';
import { IconPokeball } from '../../../assets/img';
import { pickerColor, capitalizeFirstLetter } from '../../../utils';
import { Background, Container, Image, Text } from './style';

interface Props {
	readonly id: number
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
    <Background source={IconPokeball} />
    <Image source={{uri: props.image}} />
    <Text>#{props.id} - {capitalizeFirstLetter(props.name)}</Text>
  </Container>
);

export default CardPokemon;