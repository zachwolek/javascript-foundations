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
} else 
return `No thanks, I am too full.`
};

function drink(vampName){
  if (vampName.ouncesDrank <=40){
    vampName.ouncesDrank += 10}
  if (vampName.ouncesDrank >= 50){
    vampName.thirsty = false;
  };
  return vampName
};

function inquirePlace(locations, expectedLocation){
 if (locations.includes(expectedLocation)){
    return `Yes, I have spent some time in ${expectedLocation}.`
 } else
 return `No, I have never been to ${expectedLocation}.`
};

function findBatLovers(vampire){
  batLovers = []
  for (i = 0; i < vampire.length; i++){
    if (vampire[i].pet === 'bat'){

        batLovers.push(vampire[i].name)
    }
}
console.log(batLovers)
return batLovers
}

module.exports = {
createVampire, 
encounterDeliciousVictim, 
drink, 
inquirePlace,
findBatLovers, 
}