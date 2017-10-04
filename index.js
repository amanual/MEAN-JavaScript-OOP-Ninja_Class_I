function Ninja(name,health) {
    var speed = 3;
    var strength = 3;    
    this.health = 100;
    this.name = name;



    this.sayName = function(){
        console.log("My ninja name is " + name + "!");
    }
    this.showStats = function(){
        console.log("Strength: " + strength + "\n" + "Speed: " + speed +"\n" + "Health: " + health);
    }
    this.drinkSake = function(){
        health += 10;
        // console.log(health);
    }
    
}
    Ninja.prototype.desc = function(){
    console.log("My ninja name is" + this.name + "!");
}

    var ninja1 = new Ninja("Sam");    
    ninja1.sayName();
    ninja1.showStats();
    ninja1.drinkSake();
    

