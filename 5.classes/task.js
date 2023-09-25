//Задача 1. Печатное издание

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;  
}
  
  fix() {
    this.state *= 1.5;
  }

  set state(newStateNumber) {
    if (newStateNumber < 0) {
        this._state = 0;
    } else if (newStateNumber > 100) {
        this._state = 100;
    } else {
        this._state = newStateNumber;
    }
  }

  get state() {
    return this._state;
  }
} 

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
      }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount,) {
      super(author, name, releaseDate, pagesCount);
      this.type = "detective";
  }
}

//примеры

const sherlock = new PrintEditionItem(
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
);
   
console.log(sherlock.releaseDate); //2019
console.log(sherlock.state); //100
sherlock.fix();
console.log(sherlock.state); //100

const picknick = new FantasticBook(
    "Аркадий и Борис Стругацкие",
    "Пикник на обочине",
    1972,
    168
);
  
console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state); //15

//Задача 2. Библиотека

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    for (let book of this.books) {
      if (book[type] === value) {
        return book;
        }
      }
      return null;
  }

//вариант от преподавателя:

//findBookBy(type, value) {
//  const findResult = this.books.find((item) => item[type] === value);
//  return findResult || null;
//}

  giveBookByName(bookName) {
    for (let i = 0; i < this.books.length; i++) {
        if (this.books[i].name === bookName) {
          let book = this.books[i];
          this.books.splice(i, 1);
          return book;
        }
      }
      return null
  }
}

//вариант от преподавателя:

//giveBookByName(bookName) {
//  const book = this.findBookBy("name", bookName);
//  if (!book) return null;
//  this.books = this.books.filter((item) => item.name !== bookName);
//  return book;
//}

//примеры

const library = new Library("Библиотека имени Ленина");

library.addBook(
 new DetectiveBook(
   "Артур Конан Дойл",
   "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
   2019,
   1008
 )
);
library.addBook(
 new FantasticBook(
   "Аркадий и Борис Стругацкие",
   "Пикник на обочине",
   1972,
   168
 )
);
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3

library.addBook(new NovelBook("Уильям Сомерсет Моэм", "Луна и грош", 1919, 288));

console.log(library.findBookBy("releaseDate", 1919).name); //"Луна и грош"
library.giveBookByName("Луна и грош");


//Задача 3. Журнал успеваемости *

class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }

  addMark(mark, subject) {
    if (mark < 2 || mark > 5) {
      return;
    }

    if (!this.marks[subject]) {
      this.marks[subject] = [];
    }

    this.marks[subject].push(mark);
  }

  getAverageBySubject(subject) {
    if (!this.marks[subject]) {
        return 0;
      }
  
      return this.marks[subject].reduce((sum, mark) => sum + mark, 0) / this.marks[subject].length;
  }

  getAverage() {
    let subjects = Object.keys(this.marks);
      if (subjects.length === 0) {
        return 0;
      }

    let average = subjects.reduce((sum, subject) => sum + this.getAverageBySubject(subject), 0) / subjects.length;
    return average;
  }

}

//примеры

const student = new Student("Олег Никифоров");
student.addMark(5, "химия");
student.addMark(5, "химия");
student.addMark(5, "физика");
student.addMark(4, "физика");
student.addMark(6, "физика"); // Оценка не добавится, так как больше 5
console.log(student.getAverageBySubject("физика")); // Средний балл по предмету физика 4.5
console.log(student.getAverageBySubject("биология")); // Вернёт 0, так как по такому предмету нет никаких оценок.
console.log(student.getAverage()); // Средний балл по всем предметам 4.75