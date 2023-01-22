let box1 = document.querySelector('#box1');
let box2 = document.querySelector('#box2');
let box3 = document.querySelector('#box3');
let box4 = document.querySelector('#box4');
let box5 = document.querySelector('#box5');
let box6 = document.querySelector('#box6');
let box7 = document.querySelector('#box7');
let box8 = document.querySelector('#box8');
let box9 = document.querySelector('#box9');

let b1 = document.querySelector('#b1');

let box1work = 0;
let box2work = 0;
let box3work = 0;
let box4work = 0;
let box5work = 0;
let box6work = 0;
let box7work = 0;
let box8work = 0;
let box9work = 0;

let field1 = 0;
let field2 = 0;
let field3 = 0;
let field4 = 0;
let field5 = 0;
let field6 = 0;
let field7 = 0;
let field8 = 0;
let field9 = 0;

let metascore = 1;
let obj = 'img/x.png';
let circle = 'img/circle.png';
let x = 'img/x.png';
let win = 0;
let scorex = 0;
let scoreo = 0;

box1.addEventListener('click', function() {
    if ((metascore == 1 || metascore == 3 || metascore == 5 || metascore == 7 || metascore == 9) && box1work == 0) {
        document.querySelector('#obj1').src = "img/x.png";
        box1work = 1;
        metascore++
        field1 = 'x';
        change();
        checkw();
    }
    if ((metascore == 2 || metascore == 4 || metascore == 6 || metascore == 8) && box1work == 0) {
        document.querySelector('#obj1').src = "img/circle.png";
        box1work = 1;
        metascore++
        field1 = 'o';
        change();
        checkw();
    }
});

box2.addEventListener('click', function() {
    if ((metascore == 1 || metascore == 3 || metascore == 5 || metascore == 7 || metascore == 9) && box2work == 0) {
        document.querySelector('#obj2').src = "img/x.png";
        box2work = 1;
        metascore++
        field2 = 'x';
        change();
        checkw();
    }
    if ((metascore == 2 || metascore == 4 || metascore == 6 || metascore == 8) && box2work == 0) {
        document.querySelector('#obj2').src = "img/circle.png";
        box2work = 1;
        metascore++
        field2 = 'o';
        change();
        checkw();
    }
});

box3.addEventListener('click', function() {
    if ((metascore == 1 || metascore == 3 || metascore == 5 || metascore == 7 || metascore == 9) && box3work == 0) {
        document.querySelector('#obj3').src = "img/x.png";
        box3work = 1;
        metascore++
        field3 = 'x';
        change();
        checkw();
    }
    if ((metascore == 2 || metascore == 4 || metascore == 6 || metascore == 8) && box3work == 0) {
        document.querySelector('#obj3').src = "img/circle.png";
        box3work = 1;
        metascore++
        field3 = 'o';
        change();
        checkw();
    }
});

box4.addEventListener('click', function() {
    if ((metascore == 1 || metascore == 3 || metascore == 5 || metascore == 7 || metascore == 9) && box4work == 0) {
        document.querySelector('#obj4').src = "img/x.png";
        box4work = 1;
        metascore++
        field4 = 'x';
        change();
        checkw();
    }
    if ((metascore == 2 || metascore == 4 || metascore == 6 || metascore == 8) && box4work == 0) {
        document.querySelector('#obj4').src = "img/circle.png";
        box4work = 1;
        metascore++
        field4 = 'o';
        change();
        checkw();
    }
});

box5.addEventListener('click', function() {
    if ((metascore == 1 || metascore == 3 || metascore == 5 || metascore == 7 || metascore == 9) && box5work == 0) {
        document.querySelector('#obj5').src = "img/x.png";
        box5work = 1;
        metascore++
        field5 = 'x';
        change();
        checkw();
    }
    if ((metascore == 2 || metascore == 4 || metascore == 6 || metascore == 8) && box5work == 0) {
        document.querySelector('#obj5').src = "img/circle.png";
        box5work = 1;
        metascore++
        field5 = 'o';
        change();
        checkw();
    }
});

box6.addEventListener('click', function() {
    if ((metascore == 1 || metascore == 3 || metascore == 5 || metascore == 7 || metascore == 9) && box6work == 0) {
        document.querySelector('#obj6').src = "img/x.png";
        box6work = 1;
        metascore++
        field6 = 'x';
        change();
        checkw();
    }
    if ((metascore == 2 || metascore == 4 || metascore == 6 || metascore == 8) && box6work == 0) {
        document.querySelector('#obj6').src = "img/circle.png";
        box6work = 1;
        metascore++
        field6 = 'o';
        change();
        checkw();
    }
});

box7.addEventListener('click', function() {
    if ((metascore == 1 || metascore == 3 || metascore == 5 || metascore == 7 || metascore == 9) && box7work == 0) {
        document.querySelector('#obj7').src = "img/x.png";
        box7work = 1;
        metascore++
        field7 = 'x';
        change();
        checkw();
    }
    if ((metascore == 2 || metascore == 4 || metascore == 6 || metascore == 8) && box7work == 0) {
        document.querySelector('#obj7').src = "img/circle.png";
        box7work = 1;
        metascore++
        field7 = 'o';
        change();
        checkw();
    }
});

box8.addEventListener('click', function() {
    if ((metascore == 1 || metascore == 3 || metascore == 5 || metascore == 7 || metascore == 9) && box8work == 0) {
        document.querySelector('#obj8').src = "img/x.png";
        box8work = 1;
        metascore++
        field8 = 'x';
        change();
        checkw();
    }
    if ((metascore == 2 || metascore == 4 || metascore == 6 || metascore == 8) && box8work == 0) {
        document.querySelector('#obj8').src = "img/circle.png";
        box8work = 1;
        metascore++
        field8 = 'o';
        change();
        checkw();
    }
});

box9.addEventListener('click', function() {
    if ((metascore == 1 || metascore == 3 || metascore == 5 || metascore == 7 || metascore == 9) && box9work == 0) {
        document.querySelector('#obj9').src = "img/x.png";
        box9work = 1;
        metascore++
        field9 = 'x';
        change();
        checkw();
    }
    if ((metascore == 2 || metascore == 4 || metascore == 6 || metascore == 8) && box9work == 0) {
        document.querySelector('#obj9').src = "img/circle.png";
        box9work = 1;
        metascore++
        field9 = 'o';
        change();
        checkw();
    }
});

function change() {
    if (metascore == 1 || metascore == 3 || metascore == 5 || metascore == 7 || metascore == 9) {
        document.querySelector('#image').src = "img/x.png";
    }
    if (metascore == 2 || metascore == 4 || metascore == 6 || metascore == 8) {
        document.querySelector('#image').src = "img/circle.png";
    }
}

function checkw() {
    if ((field1 == 'x' && field2 == 'x' && field3 == 'x')
    || (field4 == 'x' && field5 == 'x' && field6 == 'x')
    || (field7 == 'x' && field8 == 'x' && field9 == 'x')

    || (field1 == 'x' && field4 == 'x' && field7 == 'x')
    || (field2 == 'x' && field5 == 'x' && field8 == 'x')
    || (field3 == 'x' && field6 == 'x' && field9 == 'x')

    || (field1 == 'x' && field5 == 'x' && field9 == 'x')
    || (field3 == 'x' && field5 == 'x' && field7 == 'x')
    ) {
        win = 'x';
        scorexadd();
        document.querySelector('#textwhowon').textContent = "X won!";
        document.querySelector('#imgwhowon').src = 'img/x.png';
        show();
        resetall();
    }

    if ((field1 == 'o' && field2 == 'o' && field3 == 'o')
    || (field4 == 'o' && field5 == 'o' && field6 == 'o')
    || (field7 == 'o' && field8 == 'o' && field9 == 'o')

    || (field1 == 'o' && field4 == 'o' && field7 == 'o')
    || (field2 == 'o' && field5 == 'o' && field8 == 'o')
    || (field3 == 'o' && field6 == 'o' && field9 == 'o')

    || (field1 == 'o' && field5 == 'o' && field9 == 'o')
    || (field3 == 'o' && field5 == 'o' && field7 == 'o')
    ) {
        win = 'o';
        scoreoadd();
        document.querySelector('#textwhowon').textContent = "O won!";
        document.querySelector('#imgwhowon').src = 'img/circle.png';
        show();
        resetall();
    }
}

function show() {
    document.querySelector('.communicatw').style.display = 'block';
    document.querySelector('.communicatw').classList.add('anim1-event');
}

function resetall() {
    box1work = 0;
    box2work = 0;
    box3work = 0;
    box4work = 0;
    box5work = 0;
    box6work = 0;
    box7work = 0;
    box8work = 0;
    box9work = 0;

    field1 = 0;
    field2 = 0;
    field3 = 0;
    field4 = 0;
    field5 = 0;
    field6 = 0;
    field7 = 0;
    field8 = 0;
    field9 = 0;

    metascore = 1;
    win = 0;
    document.querySelector('#obj1').src = 'img/air.png';
    document.querySelector('#obj2').src = 'img/air.png';
    document.querySelector('#obj3').src = 'img/air.png';
    document.querySelector('#obj4').src = 'img/air.png';
    document.querySelector('#obj5').src = 'img/air.png';
    document.querySelector('#obj6').src = 'img/air.png';
    document.querySelector('#obj7').src = 'img/air.png';
    document.querySelector('#obj8').src = 'img/air.png';
    document.querySelector('#obj9').src = 'img/air.png';
}

b1.addEventListener('click', function() {
    document.querySelector('.communicatw').style.display = 'none';
    document.querySelector('.communicatw').classList.remove('anim1-event');
});

function scorexadd() {
    scorex++;
    document.querySelector('#scorex').textContent = scorex;
}

function scoreoadd() {
    scoreo++;
    document.querySelector('#scoreo').textContent = scoreo;
}