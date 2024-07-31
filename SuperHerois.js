import Pessoa from "./Pessoa.js";

export default class Heroi extends Pessoa{
    #poder;

    constructor(nome,poder){
        super(nome);
        this.#poder = poder;
    }

    dizOi(){
        super.dizOi();
        console.log(`e tenho o poder de ${this.#poder}`);
    }
}







const sh1 = new SuperHeroi("Robbin");
sh1.dizOi();