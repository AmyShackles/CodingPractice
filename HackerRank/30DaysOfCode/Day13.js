/*
Given a Book class and a Solution class,
write a MyBook class that does the following:
- Inherits from Book
- Has a parameterized constructor taking these 3 parameters:
    - string Title
    - string Author
    - int price
- Implements the Book class' abstract display() method so it prints:
    - Title: $title
    - Author: $author
    - Price: $price
*/

class MyBook extends Book {
  // Declare your class here.
  /**
   *   Class Constructor
   *
   *   @param title The book's title.
   *   @param author The book's author.
   *   @param price The book's price.
   **/
  // Write your constructor here
  constructor(title, author, price) {
    super(title, author);
    this.price = price;
  }
  /**
   *   Method Name: display
   *
   *   Print the title, author, and price in the specified format.
   **/
  // Write your method here
  display() {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
    console.log(`Price: ${this.price}`);
  }
  // End class
}
