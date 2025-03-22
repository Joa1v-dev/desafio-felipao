class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
}

const hero1 = new Hero("Joao", "22", "Guerreiro");
const hero2 = new Hero("Layla", "25", "Mago");
const hero3 = new Hero("pituco", "1", "Ninja");
const hero4 = new Hero("Sanji", "5", "Monge");

const heroes = [hero1, hero2, hero3, hero4];

heroes.forEach(hero => {
    if (hero.tipo === "Guerreiro") {
        console.log("O " + hero.tipo + " atacou usando espada");
    } else if (hero.tipo === "Mago") {
        console.log("O " + hero.tipo + " atacou usando magia");
    } else if (hero.tipo === "Ninja") {
        console.log("O " + hero.tipo + " atacou usando shuriken");
    } else if (hero.tipo === "Monge") {
        console.log("O " + hero.tipo + " atacou usando artes marciais");
    }
});

