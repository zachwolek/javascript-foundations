function createVampire(vampName, vampPet){
  vampire = {
    name: vampName,
    pet: vampPet,
    thirsty: true,
    ouncesDrank: 0
  };
  if (vampPet === undefined){
    vampire.pet = 'bat'
  };
  return vampire
};

function encounterDeliciousVictim(vampire){ if (vampire.thirsty === true){
  return 'I WANT TO SUCK YOUR BLOOD!'
}
};

function drink(vampName){
  vampName.ouncesDrank += 10
  if (vampName.ouncesDrank >= 50){
    vampName.ouncesDrank = 50;
    vampName.thirsty = false;
  };
  return vampName
}

module.exports = {
createVampire, 
encounterDeliciousVictim, 
drink, 
// findBatLovers, 
  // inquirePlace
}