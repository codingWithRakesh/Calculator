let num1 = document.getElementById('id1');
let num2 = document.getElementById('id2');
let num3 = document.getElementById('id3');
let num4 = document.getElementById('id4');
let num5 = document.getElementById('id5');
let num6 = document.getElementById('id6');
let num7 = document.getElementById('id7');
let num8 = document.getElementById('id8');
let num9 = document.getElementById('id9');
let num0 = document.getElementById('id0');
let plus = document.getElementById('idP');
let minus = document.getElementById('idM');
let division = document.getElementById('idD');
let multiplication = document.getElementById('idm');
let equals = document.getElementById('idE');
let inputBox = document.getElementById('inputBox');
let can = document.getElementById('can');
let can1 = document.getElementById('can1');
let parentheses = document.getElementById('parentheses');
let parentheses2 = document.getElementById('parentheses2');
let dot = document.getElementById('dot');
let percent = document.getElementById('pers');
let show = document.getElementById('show');
let tan = document.querySelector('.tan');

let check = true;

num1.addEventListener('click',() => {
	allbutton(1);
})
num2.addEventListener('click',() => {
	allbutton(2);
})
num3.addEventListener('click',() => {
	allbutton(3);
})
num4.addEventListener('click',() => {
	allbutton(4);
})
num5.addEventListener('click',() => {
	allbutton(5);
})
num6.addEventListener('click',() => {
	allbutton(6);
})
num7.addEventListener('click',() => {
	allbutton(7);
})
num8.addEventListener('click',() => {
	allbutton(8);
})
num9.addEventListener('click',() => {
	allbutton(9);
})
num0.addEventListener('click',() => {
	allbutton(0);
})


plus.addEventListener('click',() => {
	inputBox.value = inputBox.value + '+';
	check = true;
})
minus.addEventListener('click',() => {
	inputBox.value = inputBox.value + '-';
	check = true;
})
division.addEventListener('click',() => {
	inputBox.value = inputBox.value + '/';
	check = true;
})
multiplication.addEventListener('click',() => {
	inputBox.value = inputBox.value + '*';
	check = true;
})


parentheses.addEventListener('click',() => {
	if (inputBox.value == 0) {
		inputBox.value = '(';
	}
	else {
		inputBox.value = inputBox.value + '(';
	}
})
parentheses2.addEventListener('click',() => {
	if (inputBox.value == 0) {
		inputBox.value = ')';
	}
	else {
		inputBox.value = inputBox.value + ')';
	}
})
dot.addEventListener('click',() => {
	inputBox.value = inputBox.value + '.';
	check = true;
})
percent.addEventListener('click',() => {
	inputBox.value = inputBox.value + '%';
	check = true;
})


equals.addEventListener('click',equalsCal);

let storeValue = "";
let storeValue2 = "";

function equalsCal() {
	check = false;
	let fir = inputBox.value;
	let total = eval(inputBox.value);
	inputBox.value = total;
	storeValue = `${fir} = ${total} <br>`;
	storeValue2 = storeValue + storeValue2;
	show.innerHTML = `${fir} = ${total}`;
}


can.addEventListener('click',deleteCha);

function deleteCha() {
	let final = Array.from(inputBox.value);
	final.pop();
	let joind = final.join('');
	inputBox.value = joind;

	if (inputBox.value == "") {
		inputBox.value = 0;
	}
}

can1.addEventListener('click',() => {
	inputBox.value = 0;
})


window.addEventListener('keydown',(e) => {
	if (e.key == 'Enter') {
		equalsCal();
	}
	else if (e.key == '=') {
		equalsCal();
	}
	else if (e.key == "Backspace") {
		deleteCha();
	}
	else if (e.key == "Delete") {
		inputBox.value = 0;
	}
	else if (e.key >= '0' && e.key <= '9') {
		allbutton(e.key);
	}
	else if (e.key == '+') {
		inputBox.value = inputBox.value + '+';
		check = true;
	}
	else if (e.key == '-') {
		inputBox.value = inputBox.value + '-';
		check = true;
	}
	else if (e.key == '*') {
		inputBox.value = inputBox.value + '*';
		check = true;
	}
	else if (e.key == '/') {
		inputBox.value = inputBox.value + '/';
		check = true;
	}
	else if (e.key == '%') {
		inputBox.value = inputBox.value + '%';
		check = true;
	}
	else if (e.key == '.') {
		inputBox.value = inputBox.value + '.';
		check = true
	}
	else if (e.key == ')') {
		if (inputBox.value == 0) {
			inputBox.value = ')';
		}
		else {
			inputBox.value = inputBox.value + ')';
		}
	}
	else if (e.key == '(') {
		if (inputBox.value == 0) {
			inputBox.value = '(';
		}
		else {
			inputBox.value = inputBox.value + '(';
		}
	}
})

let keys = document.querySelector('.keys');
let showBox = document.querySelector('.showBox');
let mainBox = document.querySelector('.mainBox');

function checkWidth() {
	if (mainBox.clientWidth <= 600) {
		keys.classList.add('width95');	
		showBox.classList.add('width95');
		showBox.classList.add('height10');
	}
	else {
		keys.classList.remove('width95');
		showBox.classList.remove('width95');
		showBox.classList.remove('height10');
	}
}

mainBox.addEventListener('mouseover',() => {
	checkWidth();
})

mainBox.addEventListener('mousedown',() => {
	checkWidth();
})

mainBox.addEventListener('mousemove',() => {
	checkWidth();
})

mainBox.addEventListener('mouseup',() => {
	checkWidth();
})

let clear = document.querySelector('.clear');

clear.addEventListener('click',() => {
	show.innerHTML = "";
	storeValue2 = "";
})

let icon = document.querySelector('.icon')

icon.addEventListener('click',() => {
	if (check) {
		show.innerHTML = storeValue2;
		check = false;
	}
	else{
		show.innerHTML = storeValue;
		check = true;
	}
})

window.addEventListener('load',() => {
	mainBox.classList.add('scale1');
})

let dark = true;
let lightDark = document.getElementById('lightDark');
lightDark.addEventListener('click', () => {
	if (dark) {
		document.body.classList.add('darkMode');
		lightDark.innerHTML = '<i class="fa-solid fa-sun"></i>';
		dark = false;
	}
	else {
		document.body.classList.remove('darkMode');
		lightDark.innerHTML = '<i class="fa-solid fa-moon "></i>';
		dark = true;
	}
})

function allbutton(value) {
	if (!check) {
		inputBox.value = value;
		check = true;
	}
	else if (inputBox.value == 0) {
		inputBox.value = value;
	}
	else {
		inputBox.value = inputBox.value + value;
	}
}