// Exercicio 3 (a)
const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};

const pokemon2 = {...pokemon1, nome: "squirtle", tipo:"Água"}

console.log(pokemon1)
console.log(pokemon2)


// Exercicio 3 (b)
pokemon1.ataques = []

// Array
console.log(pokemon1.ataques)

const ataque1 = {
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100
}

pokemon1.ataques.push(ataque1)

console.log(pokemon1.ataques) // [ataque1, ataque2]


// Exercicio 3 (c)
console.log(pokemon2) //Squirtle

pokemon2.ataques = []
console.log(pokemon2) //Squirtle

// []    = [...]
pokemon2.ataques = [...pokemon1.ataques]


// Exercicio 3 (d)


