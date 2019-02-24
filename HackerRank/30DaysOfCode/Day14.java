/*
Complete the Difference class by writing the following:
- A class constructor that takes an array of integers as a parameter
and saves it to the elements variable
- A computeDifference method that finds the maximum absolute difference
between any 2 numbers and stores it in the maximumDifference instance variable
*/

/*
They didn't have an option for completing the code in JS,
so I resorted to writing a solution in Java */

import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

/* Code provided */
class Difference
{
  private int[] elements;
  public int maximumDifference;

  /* Start of my code */
  Difference(int[] elements) { this.elements = elements; }
  public int computeDifference() {
    int max = 0;
    for (int i = 0; i < this.elements.length - 1; i++) {
      int currentMax = 0;
      for (int j = 1; j < this.elements.length; j++) {
        if ((this.elements[i] - this.elements[j]) > currentMax) {
          currentMax = (this.elements[i] - this.elements[j]);
        }
        if ((this.elements[j] - this.elements[i]) > currentMax) {
          currentMax = (this.elements[j] - this.elements[i]);
        }
      }
      if (currentMax > max) {
        max = currentMax;
      }
    }
    this.maximumDifference = max;
    return this.maximumDifference;
  }
} // End of Difference class

/* Code provided */
public class Solution
{

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int n = sc.nextInt();
    int[] a = new int[n];
    for (int i = 0; i < n; i++) {
      a[i] = sc.nextInt();
    }
    sc.close();

    Difference difference = new Difference(a);

    difference.computeDifference();

    System.out.print(difference.maximumDifference);
  }
}