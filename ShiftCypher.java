/* 
Instructions
Write a public static method called shiftCypher which accepts a string and an int (in that order). It will perform a shift cypher on that string by the number provided to the right.

A shift cypher is one where each character is "shifted" to the right a number of times. So a letter 'A' shifted once would be 'B' and 'Z' shifted twice would also be 'B'. Remember characters in Java are stored as unicode codes. These can be manipulated like integers. A table showing their values can be found here A few things that may trip you up: All the uppercase and lowercase letters are found in two separate groups. After incrementing your character, you need to make sure that it has not moved out of the range of those groups, otherwise, you'll get a lot of weird symbols in your decrypted text Only manipulate the charater if it falls into one of these ranges. Only shift letters. Here is an online tool to play with shift cyphers: http://rumkin.com/tools/cipher/caesar.php 

Expected Result
Input:  shiftCypher("A", 2);
Return:  "C" 

Input:  shiftCypher("Hello World!", 6);
Return:  "Nkrru Cuxrj!" 

Input:  shiftCypher("http://www.lambdaschool.com", 23);
Return:  "eqqm://ttt.ixjyaxpzelli.zlj" 

Required Test Cases
Be sure to test if your method can handle the following cases:
A null string (int can't be null)
An empty string
A valid string
A string with multiple cases
A string with spaces and symbols
The method signature must match the one described or the tests won't work. 
*/

class Main {
  public static void main(String[] args) {
    System.out.println(shiftCypher("California happy people", 15));
  }
  public static String shiftCypher(String plaintext, int shift)
  {
    if (plaintext == null || plaintext == "") return "";

    String result = "";
    for (int i = 0; i < plaintext.length(); i++) {
      if (Character.isLetter(plaintext.charAt(i)))
      {
        if (Character.isUpperCase(plaintext.charAt(i)))
        {
            result += (char)(((int)plaintext.charAt(i)+shift-65)%26 + 65);
        }
        else
        {
          result += (char)(((int)plaintext.charAt(i)+shift-97)%26 + 97);
        }
    }
     else
     {
       result += plaintext.charAt(i);
       
     }
    }
    return result;
  }
}
