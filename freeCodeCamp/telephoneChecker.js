function telephoneCheck(str) {
    let pattern = /^(1)?( )?((\(\d{3}\))|(\d{3}))[ -]?(\d{3})[- ]?(\d{4})$/
  
    if (str.match(pattern)) {
      return true;
    }
    return false;
  }
  telephoneCheck("1 555) 555-5555")
  
  console.log(telephoneCheck("1 555-555-5555"), 'expect true') // should return true.
  console.log(telephoneCheck("1 (555) 555-5555"), 'expect true') // should return true.
  console.log(telephoneCheck("5555555555"), 'expect true') // should return true.
  console.log(telephoneCheck("555-555-5555"), 'expect true') // should return true.
  console.log(telephoneCheck("(555)555-5555"), 'expect true')// should return true.
  console.log(telephoneCheck("1(555)555-5555"), 'expect true') // should return true.
  console.log(telephoneCheck("555-5555"), 'expect false') // should return false.
  console.log(telephoneCheck("5555555"), 'expect false')// should return false.
  console.log(telephoneCheck("1 555)555-5555"), 'expect false') // should return false.
  console.log(telephoneCheck("1 555 555 5555"), 'expect true') // should return true.
  console.log(telephoneCheck("1 456 789 4444"), 'expect true') // should return true.
  console.log(telephoneCheck("123**&!!asdf#"), 'expect false') // should return false.
  console.log(telephoneCheck("55555555"), 'expect false') // should return false.
  console.log(telephoneCheck("(6054756961)"), 'expect false')// should return false
  console.log(telephoneCheck("2 (757) 622-7382"), 'expect false') // should return false.
  console.log(telephoneCheck("0 (757) 622-7382"), 'expect false') // should return false.
  console.log(telephoneCheck("-1 (757) 622-7382"), 'expect false')// should return false
  console.log(telephoneCheck("2 757 622-7382"), 'expect false') // should return false.
  console.log(telephoneCheck("10 (757) 622-7382"), 'expect false') // should return false.
  console.log(telephoneCheck("27576227382"), 'expect false') //should return false.
  console.log(telephoneCheck("(275)76227382"), 'expect false') //should return false.
  console.log(telephoneCheck("2(757)6227382"), 'expect false') // should return false.
  console.log(telephoneCheck("2(757)622-7382"), 'expect false') // should return false.
  console.log(telephoneCheck("555)-555-5555"), 'expect false') // should return false.
  console.log(telephoneCheck("(555-555-5555"), 'expect false')// should return false.
  console.log(telephoneCheck("(555)5(55?)-5555"), 'expect false') // should return false.

/* Why does this work? 

Let's break the pattern down.
/^(1)?( )?((\(\d{3}\))|(\d{3}))[ -]?(\d{3})[- ]?(\d{4})$/

^ - start of string
(1)? - zero to 1 instance of the number 1
( )? - zero to 1 instance of a space
((\(\d{3}\))|(\d{3)) - this is actually two different possibilities
    separated by a logical OR - either you have 3 digits surrounded by parens
    or you have three digits without parens
[ -]? - zero to 1 of either a space or a hyphen
(\d{3}) - three digits
[- ]? - zero to 1 of either a space or a hyphen
(\d{4}) - four digits
$ - end of string


*/