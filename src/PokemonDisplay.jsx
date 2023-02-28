import React, { useEffect, useState } from "react";
import axios from "axios";

function PokemonDisplay() {
	const [pokemon, setPokemon] = useState([]);

	const pokeApi = async () => {
		console.log("pokeApi called");
		await axios
			.get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")
			.then((response) => {
				console.log("Response API:", response.data.results);
				setPokemon(response.data.results);
			})
			.catch((error) => console.log(error));
	};
	useEffect(() => {
		pokeApi();
	}, []);

	const imageNumber = (i) => {
		if (i < 10) {
			return `00${i}`;
		} else if (i < 100) {
			return `0${i}`;
		} else {
			return i;
		}
	};

	function upperCaseFirstChar(str) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

	return (
		<div className="mt-12 mb-10 lg:mt-12">
			<div className="mt-4 grid w-[100%] grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
				{pokemon.map((pokemon, i) => (
					<div
						className="lace-items-center h-36 rounded-3xl bg-base-200 sm:h-72 lg:h-96"
						onClick={(e) =>
							window.open(
								`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${imageNumber(i + 1)}.png`
							)
						}>
						<img
							src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${imageNumber(
								i + 1
							)}.png`}
							width="50%"
							className="m-auto pt-3 lg:pt-12"
						/>
						<p className="pt-3 text-center font-bold lg:pt-12 lg:text-4xl">{upperCaseFirstChar(pokemon.name)}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default PokemonDisplay;
