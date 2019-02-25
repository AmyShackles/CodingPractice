/*
 Write a single generic function named printArray
 This function must take an array of generic elements
 as a parameter.

 Due to generics not being a thing in JS, resorted to Java */

void printArray(T[] arrayOfUnknown) {
  for (T e : arrayOfUnknown) {
    System.out.println(e);
  }
}
