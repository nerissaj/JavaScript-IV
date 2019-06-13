// CODE here for your Lambda Classes
class Person {
    constructor(personAttributes) {
        this.name = personAttributes.name;
        this.age = personAttributes.age;
        this.location = personAttributes.location;

        speak()
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    };
}
class Instructor extends Person {
    constructor(instructorAttributes) {
        super(instructorAttributes)
            this.favLanguage = instructorAttributes.favLanguage;
            this.specialty = instructorAttributes.specialty;
            this.catchPhrase = instructorAttributes.catchPhrase;

        }
    }

const Fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});
const Sheila = new Instructor({
    name: 'Sheila',
    location: 'Sandtown',
    age: 39,
    favLanguage: 'HTML',
    specialty: 'Back-end',
    catchPhrase: `Don't forget the girlz`
});


demo(subject)
console.log(`Today we are learning about ${subject}.`)





class Student extends Person {
    constructor(studentAttributes) {
        super(studentAttributes)
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = ['Html', 'CSS', 'JavaScript'];
    }
    listsSubjects(student){
    console.log(`${this.favSubjects});
    }
    PRAssignment(student){
    console.log('student.name has submitted a PR for {subject}');}
    sprintChallenge(s)
    console.log('this.name has begun sprint challenge on { this.favSubjects });
}
    }
    const nerissa = new Student({
        name: 'Nerissa',
        age: 43,
        location: 'DC',
        previousBackground: 'Warehouse Sorter',
        className: 'Web21',
        favSubjects: ['Html', 'CSS', 'JavaScript'],
    });
    const isaiah = new Student({
        name: 'Isaiah',
        age: 18,
        location: 'Florida',
        previousBackground: 'High School last month',
        className: 'Web21',
        favSubjects: ['Html', 'CSS', 'JavaScript'],
    });
        const kevin = new Student({
        name: "Kevin",
        age: 28,
        location: "California",
        previousBackground: "Table Games Dealer",
        className: "WEB21",
        favSubjects: ['Html', 'CSS', 'JavaScript'],
    });
        const nisa = new Student({
        name: 'Nisa',
        age: 25,
        location: 'Ohio',
        previousBackground: 'Debt Collector',
        className: 'Web21',
        favSubjects: ['Html', 'CSS', 'JavaScript'],
    });
  
        const joscelyn = new Student({
        name: "Joscelyn",
        age: 29,
        location: "California",
        previousBackground: "English teacher",
        className: 'Web21',
        favSubjects: ["Computer Science", "Philosophy", "English"],
    });
  
   
Now we need some students!
Student uses the same attributes that have been set up by Person
Student has the following unique props:
previousBackground i.e.what the Student used to do before Lambda School
className i.e.CS132
favSubjects.i.e.an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
Student has the following methods:
listsSubjects a method that logs out all of the student's favoriteSubjects one by one.
PRAssignment a method that receives a subject as an argument and logs out that the student.name has submitted a PR for { subject }
sprintChallenge similar to PRAssignment but logs out student.name has begun sprint challenge on { subject }
}
class ProjectManager extends Instructor{
const Austin = new ProjectManager{
    name: 'Austin',
    age: '23',
    gradClassName: 'WEB18',
    favInstructor: 'Josh knell',
    location: 'Somewhere',
    specialty: 'Java',
    favLanguage: 'Java',
    catchPhrase: ":eggplant:",
});
class Fruit {
    constructor(attrs) {
        this.type = attrs.type;
        this.name = attrs.name;
        this.isRipe = attrs.isRipe;
        this.calories = attrs.calories;
        // this.tastiness = attrs.tastiness;
    }
    shipped(destination) {
        console.log(`Shipping ${this.name} to ${destination}`);
    }

    calculateCals() {
        console.log(`Calories in ${this.name} are ${this.calories * 200}`);
    }
}


class Banana extends Fruit {
    constructor(bananaAttrs) {
        // super(bananaAttrs)
        this.doMonkeysLikeIt = bananaAttrs.doMonkeysLikeIt;
    }
}

const newBanana = new Banana({
    isCat: false,
    type: 'Tree',
    name: 'Banana',
    isRipe: false,
    calories: 0.1,
    doMonkeysLikeIt: true
});
// const newBanana = new Banana(true, 'Tree', 'Banana', false, 0.1);

console.log('newBanana', newBanana)
