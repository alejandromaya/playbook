export default class Pokemon {
    constructor (name_pokemon) {
      this.name_pokemon = name_pokemon
    }

    sayHello(){
    console.log(`Mi pokemon ${this.name_pokemon} te saluda!!!`)
    }

    sayMessage(message){
    console.log(`Mi pokemon ${this.name_pokemon} dice: ${message}`)
    }
}