function createDragon(dragonName, dragonRider, dragonTemp){
  var dragon = {
      name: dragonName,
      rider: dragonRider,
      temperment: dragonTemp,
      timesEaten: 0,
      hungry: true, 
};
return dragon
}

function greetRider(dragonName){
return `Hi, ${dragonName["rider"]}!`
}

function eat(dragon){
 dragon["timesEaten"] += 1;
 if (dragon.timesEaten >= 3)
 {dragon.hungry = false}; 
 return dragon
  }

  function findFireBreathers(allDragons){
    fireBreathers = []
    for (var i = 0; i < allDragons.length; i++){
      var dragon = allDragons[i];
      if(dragon.temperment === 'aggressive'){
        fireBreathers.push(dragon)
      }
    }
    return fireBreathers
  }

  createDragon('Lady Vox', 'Emily', 'gentle')


module.exports = {
  createDragon, 
  greetRider, 
  eat, 
  findFireBreathers
}