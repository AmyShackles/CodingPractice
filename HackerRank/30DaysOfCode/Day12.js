/* 
You are given two classes, Person and Student, where Person is the base class and Student is the derived class. Completed code for Person and a declaration for Student are provided for you in the editor. Observe that Student inherits all the properties of Person.

Complete the Student class by writing the following:
- A Student class constructor, which has 4 parameters:
    - A string firstName
    - A string lastName
    - An integer id
    - An integer array (or vector) of test scores (scores)
- A char calculate() method that calculates a Student object's
average and returns the grade character representative of their
calculated average:
    Grading Scale:
    Letter  Average(a)
    O       90 <= a <= 100
    E       80 <= a < 90
    A       70 <= a < 80
    P       55 <= a < 70
    D       40 <= a < 55
    T       a < 40
*/

/* Code provided */
class Person {
  constructor(firstName, lastName, identification) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.idNumber = identification;
  }
  printPerson() {
    console.log(
      "Name: " + this.lastName + "," + this.firstName + "\nID: " + this.idNumber
    );
  }
}

/* Code I wrote */
class Student extends Person {
  constructor(firstName, lastName, id, scores) {
    super(firstName, lastName, id);
    this.scores = scores;
  }
  calculate() {
    let total = 0;
    for (let i = 0; i < this.scores.length; i++) {
      total += this.scores[i];
    }
    let average = Math.floor(total / this.scores.length);

    if (average >= 90 && average <= 100) {
      return "O";
    } else if (average >= 80 && average < 90) {
      return "E";
    } else if (average >= 70 && average < 80) {
      return "A";
    } else if (average >= 55 && average < 70) {
      return "P";
    } else if (average >= 40 && average < 55) {
      return "D";
    } else {
      return "T";
    }
  }
}
