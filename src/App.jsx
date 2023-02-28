import React from "react";
import SearchBar from "./SearchBar.jsx";
import PokemonDisplay from "./PokemonDisplay.jsx";

function App() {
	return (
		<>
			<div className="ml-6 mr-6 bg-base-100 lg:mr-24 lg:ml-24 lg:mt-12">
				<div>
					<div className="mt-12 mb-10">
						<h1 className="my-3 text-5xl font-bold lg:text-6xl ">Pokédex</h1>
						<h1 className="my-4 w-[90%] text-xl lg:mt-4 lg:mb-12 lg:text-3xl">
							Search for a Pokémon by name or using its National Pokédex number.
						</h1>
					</div>
				</div>
				<div>{SearchBar()}</div>
				<div>{PokemonDisplay()}</div>
			</div>
		</>
	);
}

export default App;
