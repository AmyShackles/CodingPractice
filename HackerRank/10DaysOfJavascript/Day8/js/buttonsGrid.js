var btns = document.createElement('div');
btns.id = 'btns';
document.body.appendChild(btns);

var btn1 = document.createElement('button');
btn1.id = 'btn1';
btn1.innerHTML = '1';

var btn2 = document.createElement('button');
btn2.id = 'btn2';
btn2.innerHTML = '2';

var btn3 = document.createElement('button');
btn3.id = 'btn3';
btn3.innerHTML = '3';

var btn4 = document.createElement('button');
btn4.id = 'btn4';
btn4.innerHTML = '4';

var btn5 = document.createElement('button');
btn5.id = 'btn5';
btn5.innerHTML = '5';
btn5.addEventListener("click", function() {
    let temp = btn1.innerHTML;
    btn1.innerHTML = btn4.innerHTML;
    btn4.innerHTML = btn7.innerHTML;
    btn7.innerHTML = btn8.innerHTML;
    btn8.innerHTML = btn9.innerHTML;
    btn9.innerHTML = btn6.innerHTML;
    btn6.innerHTML = btn3.innerHTML;
    btn3.innerHTML = btn2.innerHTML;
    btn2.innerHTML = temp;
});

var btn6 = document.createElement('button');
btn6.id = 'btn6';
btn6.innerHTML = '6';

var btn7 = document.createElement('button');
btn7.id = 'btn7';
btn7.innerHTML = '7';

var btn8 = document.createElement('button');
btn8.id = 'btn8';
btn8.innerHTML = '8';

var btn9 = document.createElement('button');
btn9.id = 'btn9';
btn9.innerHTML = '9';

btns.appendChild(btn1);
btns.appendChild(btn2);
btns.appendChild(btn3);
btns.appendChild(btn4);
btns.appendChild(btn5);
btns.appendChild(btn6);
btns.appendChild(btn7);
btns.appendChild(btn8);
btns.appendChild(btn9);
