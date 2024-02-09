function createHobbit(hobbitName, hobbitAge){
  var hobbit = {
    name: hobbitName,
    age: hobbitAge,
    isAdult: false,
    isOld: false,
    acquaintances: [],
  }
  if (hobbitAge === undefined){
    hobbit.age = 0
  if (hobbitName === undefined){
    hobbit.name = 'unknown'
  }
  };
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

function getRing(hobbit){
  if (hobbit.name === 'Frodo'){
    return 'Here is the ring!'
  } else {
    return 'You can\'t have it!'
  }
}

function meetPeople(hobbit, people){
  for (i = 0; i < people.length; i++){
    hobbit.acquaintances.push(people[i])
  }
  return hobbit
};

function findFriends(hobbit){
  var friends = []
  for (i = 0; i < hobbit.acquaintances.length; i++){
    if (hobbit.acquaintances[i].relationship === 'friend'){
      friends.push(hobbit.acquaintances[i].name)
    }
    console.log(friends)
  }  
  return friends
};

module.exports = {
  createHobbit, 
  celebrateBirthday, 
  getRing, 
  meetPeople, 
  findFriends
}