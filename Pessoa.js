export default class Pessoa{

    #nome;

    constructor(nome){
        this.#nome = nome;
        console.log(`Foi cirado uma pessoa com o nome ${this.#nome}`);
    }
        
        dizOi(){
            console.log(`Olá! Me chamo ${this.#nome}`);
        }
}



const p1 = new Pessoa("fulano");
const p2 = new Pessoa("beltrano");

p2.dizOi();