import { ApiPoke } from '../../services';

interface InterfaceRequest {
	id: number
	name: string
	image: string
	type: string
};

async function getSearchPokemon(name: string): Promise<InterfaceRequest> {
	try {
		const response = await ApiPoke.get(`pokemon/${name.toLowerCase()}`);
		const results = response.data;

    return {
			"id": results.id,
			"name": results.name,
			"image": results.sprites.other["official-artwork"]["front_default"],
			"type": results.types[0].type.name
		}
		
	} catch (error) {
    throw error
	}
};

export default getSearchPokemon;