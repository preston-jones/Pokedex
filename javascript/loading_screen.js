function loadMorePokemons() {
    loadMorePokemonThumbnail();
}


function loadingAnimation() {
    emptyLoadingContainer();
    showLoadingContainer();
    document.getElementById(`loading_container`).innerHTML += loadingAnimationTemplateHTML();
}


function showLoadingContainer() {
    document.getElementById(`loading_container`).classList.remove('display_none');
}


function hideLoadingContainer() {
    document.getElementById(`loading_container`).classList.add('display_none');
}


function emptyLoadingContainer() {
    document.getElementById(`loading_container`).innerHTML = '';
}


function generateLoadedPokemonCounter(i) {
    document.getElementById('loaded_pokemon_counter').innerHTML = pokemonCounterTemplateHTML(i);
}