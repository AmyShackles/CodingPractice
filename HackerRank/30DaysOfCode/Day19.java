/*
The AdvancedArithmetic interface and the method declaration
for the abstract divisorSum(n) method are provided for you in the
editor below.

Complete the implementation of Calculator class, which
implements the AdvancedArithmetic interface.  The implementation
for the divisorSum(n) method must return the sums of all
divisors of n.
*/

/* There was no JS option, so Java! */
/* Code provided */
import java.io.*;
import java.util.*;

interface AdvancedArithmetic {
  int divisorSum(int n);
}

class Calculator implements AdvancedArithmetic
{
  /* Function I wrote

  - Took me way too long to realize that
  I accidentally had n++ instead of i++
  */
  public int divisorSum(int n) {
    int sum = 0;

    for (int i = 1; i <= n; i++) {
      if ((n % i) == 0) {
        sum = sum + i;
      }
    }
    return sum;
  }
}
/* Code provided */
class Solution
{

  public static void main(String[] args) {
    Scanner scan = new Scanner(System.in);
    int n = scan.nextInt();
    scan.close();

    AdvancedArithmetic myCalculator = new Calculator();
    int sum = myCalculator.divisorSum(n);
    System.out.println("I implemented: " +
                       myCalculator.getClass().getInterfaces()[0].getName());
    System.out.println(sum);
  }
}