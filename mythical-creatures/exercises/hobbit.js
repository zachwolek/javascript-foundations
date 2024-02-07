function createHobbit(hobbitName, hobbitAge){
  var hobbit = {
    name: hobbitName,
    age: hobbitAge,
    isAdult: false,
    isOld: false
  }
  if (hobbitAge === undefined){
    hobbit.age = 0
  if (hobbitName === undefined){
    hobbit.name = 'unknown'
  }
  };
console.log(hobbit)
  return hobbit
};

function celebrateBirthday(hobbitChar){
  hobbitChar.age += 1;
  if (hobbitChar.age >= 33){
    hobbitChar.isAdult = true}
  if (hobbitChar.age >= 101){
    hobbitChar.isOld = true
  }
  return hobbitChar
};


module.exports = {
 createHobbit, 
  celebrateBirthday, 
  // getRing, 
  // meetPeople, 
  // findFriends
}