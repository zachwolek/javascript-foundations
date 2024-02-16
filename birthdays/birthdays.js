function createBirthday(name, month, day) {
    var birthday = {
        name,
        month,
        day
    }
    return birthday
}

function celebrateBirthday(birthday) {
    return `Today is ${birthday.month}/${birthday.day}! Happy birthday, ${birthday.name}!`
}


function countBirthdays(birthday, month){
    var count = 0
    for (var i = 0; i < birthday.length; i++)
    if(birthday[i].month === month){
        count += 1
    }
    return count
}
var count = 0


module.exports = { 
    createBirthday, 
    celebrateBirthday, 
    countBirthdays  
};