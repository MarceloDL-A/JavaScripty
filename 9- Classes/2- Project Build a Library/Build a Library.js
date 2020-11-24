class Media{
  constructor(title, isCheckedOut, ratings){
    this._title = title,
    this._isCheckedOut = false,
    this._ratings = []
  }
  get title(){
    return this._title
  }
  get isCheckedOut(){
    return this._isCheckedOut
  }
  get ratings(){
    return this._ratings
  }
  toggleCheckOutStatus (){
    return !this._isCheckedOut
  }
  getAverageRating(){
    let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);
    const lengthOfArray = this.ratings.length;
    return ratingsSum/lengthOfArray
  }
  set isCheckedOut(check){
    this._isCheckedOut = check
  }
  addRating(rating){
    this._ratings.push(rating)
  }
}

class Book extends Media{
  constructor(title, author, pages){
    super(title);
    this._author = author;
    this._pages = pages
  }
  get author(){
    return this._author
  }
  get pages(){
    return this._pages
  }
}


class Movie extends Media{
  constructor(title, director, runTime){
    super(title);
    this._director = director;
    this._runTime = runTime
  }
  get director(){
    return this._director
  }
  get runTime(){
    return this._runTime
  }
}

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544)


historyOfEverything.toggleCheckOutStatus()
console.log(historyOfEverything.isCheckedOut)

historyOfEverything.addRating(4)
historyOfEverything.addRating(5)
historyOfEverything.addRating(5)

console.log(historyOfEverything.getAverageRating())


const speed = new Movie('Jan de Bont', 'Speed', 116)
speed.toggleCheckOutStatus()
console.log(speed.isCheckedOut) 
speed.addRating(1)
speed.addRating(1)
speed.addRating(5)
speed.getAverageRating()




// title, isCheckedOut, ratings


// Movie
// Properties: director (string), title (string), runTime (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty)

// CD
// Properties: artist (string), title (string), isCheckedOut (boolean, initially false), and ratings (array, initially empty), songs (array of strings)

// Book
// Properties: author (string), title (string), pages (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty).
