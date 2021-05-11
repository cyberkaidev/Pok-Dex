import { ApiPoke } from '../../services';

interface InterfaceRequest {
	readonly types: [
		{ "type": { "name": string} }
	]
	readonly abilities: [
		{ "ability": { "name": string} }
	]
	readonly moves: [
		{ "move": { "name": string} }
	]
};

async function getSinglePokemon(id: string): Promise<InterfaceRequest> {
	try {
		const response = await ApiPoke.get(`pokemon/${id}`);
		const results = response.data;

    return {
			"types": results.types,
			"abilities": results.abilities,
			"moves": results.moves
		}
		
	} catch (error) {
    throw error
	}
};

export default getSinglePokemon;