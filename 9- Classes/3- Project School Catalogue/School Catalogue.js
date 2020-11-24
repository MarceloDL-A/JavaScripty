class School{
  constructor(name, level, numberOfStudents){
    this._name = name,
    this._level = level, 
    this._numberOfStudents = numberOfStudents
  }
  get name(){
    return this._name
  }
  get level(){
    return this._level
  }
  get numberOfStudents(){
    return this._numberOfStudents
  }
  quickFacts (){
    console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`)
  }
  set numberOfStudents(num){
    this._numberOfStudents = num
  }
  static pickSubstituteTeacher(substituteTeachers){
    return substituteTeachers[Math.floor(Math.random()*(substituteTeachers.length - 1))]
  }
  
}

class PrimarySchool extends School{
  constructor(name, numberOfStudents, pickupPolicy){
  super(name),
  this._name = 'Primary',
  this._numberOfStudents = numberOfStudents,
  this._pickupPolicy = pickupPolicy
  }
  get pickupPolicy(){
    return this._pickupPolicy
  }
}

class Middle extends School{
  constructor(name){
  super(name)
  }
}

class HighSchool extends School{
  constructor(name, numberOfStudents, sportsTeams){
  super(name = 'high', numberOfStudents),
  this._sportsTeams = sportsTeams
  }
  get sportsTeams(){
    console.log(this._sportsTeams)
    return this._sportsTeams
  }
}

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, "Students must be picked up by a parent, guardian, or a family member over the age of 13.")
lorraineHansbury.quickFacts()



const sub = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'])
console.log(sub)



const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'])
alSmith.sportsTeams













