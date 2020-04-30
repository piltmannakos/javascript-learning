// Third part:
console.log('Script file is loaded');

$('h1').html('This is done by <em>JavaScript</em>');
$('h2').toggleClass('blue');

function myLittleFunction() {
    $('main').append('<p>A p is appended in the main.<p>');
    $('p').css('border', '1px solid red');
    $('p').css('padding', '10px');
}

$('#add').click(myLittleFunction);
$('#remove').click(function () {
    $('p:last-child').remove();
});




// Single line comment

/*
Multiple
lines
of comments
 */

1*1
1
13*27
351
17*9862
167654
let age;
undefined
age = 34
34
age +5
39
age+9
43
age=55
55
let numberOfLegs = 100
undefined
numberOfLegs*2
200
numberOfLegs=5
5
numberOfLegs*2
10

let name = "Akos"
undefined
name
"Akos"
name="StayAtHome"
"StayAtHome"
let sentence = "He Said Ok"
undefined
let backtick = "backtick"
undefined
let oldEnoughToDrive = false
undefined
oldEnoughToDrive = true
true
'Hello, ' + name
"Hello, StayAtHome"
name="Levi"
"Levi"
'Hello, ' + name
"Hello, Levi"
true & true
1
true&&true
true
true && false
false
false && false
false
"true && (false II (true && false))"
"true && (false II (true && false))"
"true && (false || (true && false))"
"true && (false || (true && false))"
true && (false || (true && false))
false
let color1 = "orange"
undefined
let color2 = "blue"
undefined
let colors = ["orange", "blue", "green", "purple"]
undefined
colors
(4) ["orange", "blue", "green", "purple"]
colors [0]
"orange"
colors [1]
"blue"
let pickedColor = 2
undefined
colors[pickedColor]
"green"
colors[1] = "yellow"
"yellow"
colors
(4) ["orange", "yellow", "green", "purple"]
colors.length
4
name
"Levi"
name.length
4
name = "Idontknowhowmuchlettersitwillbe"
"Idontknowhowmuchlettersitwillbe"
name.length
31
colors[4]
undefined
colors.push["black", "red"]
undefined
colors
(4) ["orange", "yellow", "green", "purple"]
colors.push("black", "red")
6
colors[colors.length] = "cyan"
"cyan"
colors
(7) ["orange", "yellow", "green", "purple", "black", "red", "cyan"]
let person = {
    name: 'Akos',
    age: 35,
    oldEnoughToDrive: true
}