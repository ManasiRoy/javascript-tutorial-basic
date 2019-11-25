var firstname = "Manasi";
console.log(firstname);

var lastname = "Roy";
var age = 33;

var fullAge = 'true';
console.log(fullAge);

var job;
console.log(job)

job = 'teacher';
console.log(job);


console.log(firstname + ' ' + lastname + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstname + ' ' + lastname + ' ' + age + ' ' + job + '.' + "Is she Married? " + ' ' + isMarried);



// =============================================================================================

var year, yearManasi, yearBhai;
now = 2019;
ageManasi = 33;
ageBhai = 27;

yearManasi = now - ageManasi;
yearBhai = now - ageBhai;

console.log(yearManasi);
console.log(yearBhai);


var teamJohn = (89 + 120 + 103) / 3;
var teamMike = (116 + 94 + 123) / 3;

console.log(teamJohn, teamMike);

if (teamJohn > teamMike) {
    console.log("Win Team John" + teamJohn)
} else if (teamMike > teamJohn) {
    console.log("Win Team Mike" + ' ' + teamMike)
} else { 'There is Draw' }

//=====================================================================================

var whatyoudo = (job, firstname) => {
    switch (job) {
        case 'teacher': 
            return firstname + 'My job'
        case 'Web Developer': 
            return firstname + 'My Job is Developed'
        default: 
            return firstname + 'else'
    }
}

console.log(whatyoudo('teacher', 'Web Developer'))


//=====================================================================================

var names = ['Manasi', 'Mark', 'Jane'];
var years = [1986, 1969, 1948]

console.log(names[0]);
console.log(names.length)

names[1] = 'Pitter';
console.log(names)

var names = ['Manasi', 'Mark', 'Jane'];

// Last element add
names.push('Kitty');
console.log(names);

// first element add
names.unshift('Pubj');
console.log(names);

//remove last element
names.pop();
console.log(names);

// first element remove
names.shift('Pubj');
console.log(names);


function tipCalculator(bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill < 200) {
        percentage = .15;
    } else {
        percentage = 1;
    }
    return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
tipCalculator(bills[1]),
tipCalculator(bills[2])]

console.log(tips);

//=====================================================================================
//object under define function with this method
var Person = {
    birthYear: '1986',
    calAge: function PersonYear() {
        return 2019 - this.birthYear;
    }
}

Person.calAge();
console.log(Person);


//======================================Spread Oparator===============================================

const People = ['Manasi', 'Mark', 'Jane'];
const Animal = ['Lion', 'Tiger', ...People]

console.log(Animal);

//========================================= Remove Duplicate ============================================
const namesArray = ['ruy', 'chuli', 'ruy', 'manasi']
console.log(namesArray);

const uniqueName = [...new Set(namesArray)];
console.log(uniqueName);

const Ninja = new Set(
    [
        {
            name: 'Manasi', age: '50'
        },
        {
            name: 'Herry', age: '20'
        },
        {
            name: 'Bholanath', age: '500'
        }
    ]
)
Ninja.forEach(ninja => {
    console.log(ninja.name, ninja.age);
})

// Filter ========================================================= 

const scores = [10,20,30,40,50,]
scores.filter(() => {
    return scores;
})
console.log(scores);

const ninjas = [
    {
        name: 'Manasi', age: '50'
    },
    {
        name: 'Herry', age: '20'
    },
    {
        name: 'Bholanath', age: '500'
    }
]
const NinjaList = ninjas.filter((nlist) => {
    console.log(nlist.name, nlist.age);
    return nlist;
  })

const xyz = [
    {
        Name: "Mark",
        Age: 33
    },
    {
        Name: "Markk",
        Age: 55
    },
    {
        Name: "Markkk",
        Age: 66
    }
]
const mnop = xyz.filter((v) => {
    return v
})

console.log(mnop);

// const NinjaList = ninjas.filter(nlist => nlist)



// Switch Case =================================================

const Payment = 'Check';

switch(Payment){
    case 'Check':
        console.log(`You are using ${Payment}`);
    break;
    default:
        console.log(`Please select a valid state`);
        break;
}

const PersonSelect = ['Manasi', 'Diya']
const selected = 0;
let person;
switch(selected){
    case 0:
        person = PersonSelect[0]
        break;
    case 1:
        person = PersonSelect[1]
        break;    
}
console.log(`You are Selected ${person}`)


// Normal function to Arrow Function =====================================

const Normal = function() {
    return ('this is a normal function')
}

console.log(Normal())

const NormalArrow = () => {
    return ('this is a arrow function')
}
console.log(NormalArrow())

// function constructor ==============================
    // Example 1

    function details( name, age){
        this.name = name;
        this.age = age;
    }
    const newDetails = new details('Manasi' , 33)
    console.log(newDetails.age); 
    console.log(newDetails.name); 

    // Example 2
    
    const Details = new Function('name', 'age', `this.name = name; this.age = age;`)
    const Mark = new Details('Mark', 35)
    console.log(Mark.name);











