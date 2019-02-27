/* 
Return an object modeling a rectangle that has the following properties:
- length: value equal to a;
- width: value equal to b;
- perimeter: value equal to 2 * (a+b);
- area: value is equal to a * b;
*/

function Rectangle(a, b) {
  let rec = {};
  rec.length = a;
  rec.width = b;
  rec.perimeter = 2 * (a+b);
  rec.area = a * b;
  return rec;
}
