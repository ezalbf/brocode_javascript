async function fetchData(){
    try{

        const pokemonName = document.getElementById("PokemonName").value.toLowerCase();
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

        if(!response.ok){
            throw new Error("Could not fetch resource.")
        }
        else{
            const data = await response.json();
            const PokemonSprite = data.sprites.front_default;
            const imgElement = document.getElementById("Pokemon Sprite");

            imgElement.src = PokemonSprite;
            imgElement.style.display = "block";
        }

    }
    catch(error){
        console.error(error);
    }
}