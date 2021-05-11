import { ApiPoke } from '../../services';

interface InterfaceResults {
	id: number
	name: string
	image: string
	type: string
};

interface InterfaceRequest {
	readonly results: InterfaceResults[]
	readonly next: number
};

async function getListPokemon(offset: number): Promise<InterfaceRequest> {
	try {
		const responseList = await ApiPoke.get(`pokemon?offset=${offset}&limit=20`);
		const resultsList = responseList.data.results;
		const data: InterfaceResults[] = [];

		for(let index = 0; index < resultsList.length; index++) {
			const responseSingle = await ApiPoke.get(`${resultsList[index].url.slice(26)}`);
			const resultseSingle = responseSingle.data;

			data.push({
				"id": resultseSingle.id,
				"name": resultsList[index].name,
				"image": resultseSingle.sprites.other["official-artwork"]["front_default"],
				"type": resultseSingle.types[0].type.name
			})
		}

		return {
			"results": data,
			"next": responseList.data.next.slice(41, -9)
		}
		
	} catch (error) {
    throw error
	}
};

export default getListPokemon;