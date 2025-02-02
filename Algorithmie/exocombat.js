class Character {
    constructor(name, hp, dpt, precision){
        this.name = name;
        this.hp = hp;
        this.dpt = dpt;
        this.precision = precision;
    }
    attack(target){
        if (this.isPrecise()){
            console.log(`${this.name} attacks ${target.name} for ${this.dpt} damage!`);
        target.hp -= this.dpt;
        } else{
            console.log(`${this.name} missed!`)
        }
        
    } 
    isPrecise(){
        let random = Math.random(); 
        return random < this.precision ;
    }
}

// defines a `Character` class with a constructor that initializes a character's `name`, `hp`, `dpt` (damage per turn), and `precision`, along with methods to attack and check if the attack is lands.

let lion = new Character("Leol", 150, 50, 0.4);
let human = new Character("George", 100, 30, 0.8);

//creates new characters with values

while(lion.hp> 0 && human.hp > 0 ){
    lion.attack(human);
    if (human.hp <= 0 ){
        console.log(`${lion.name} killed ${human.name}`);
        break;
    }

    human.attack(lion)
    if (lion.hp <= 0){
        console.log(`${human.name} killed ${lion.name}`);
        break;
    }
    console.log(`${lion.name} HP: ${lion.hp}, ${human.name} HP: ${human.hp}`);
}

//loop where they attack eachother until one of them is dead 