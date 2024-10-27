
const url = "https://hp-api.onrender.com/api/characters";

async function getCharacters() {
    const response = await fetch(url);
    const data = await response.json();
    const element = document.querySelector('.container');
    
    for (const character of data.slice(0, 30)) {
        element.innerHTML +=  
        `<div class="character">
            <img src="${character.image}" alt="Character image">
            <div>
                <h1>${character.name}</h1>
                <p>Year of Birth: ${character.yearOfBirth}</p>
                <p>House: ${character.house}</p>
                <p>Actor: ${character.actor}</p>
            </div>
        </div>`;
    }
}

getCharacters();
