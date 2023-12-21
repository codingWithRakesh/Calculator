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

num1.addEventListener('click',() => {
	if (inputBox.value == 0) {
		inputBox.value = 1;
	}
	else {
		inputBox.value = inputBox.value + 1;
	}
})
num2.addEventListener('click',() => {
	if (inputBox.value == 0) {
		inputBox.value = 2;
	}
	else {
		inputBox.value = inputBox.value + 2;
	}
})
num3.addEventListener('click',() => {
	if (inputBox.value == 0) {
		inputBox.value = 3;
	}
	else {
		inputBox.value = inputBox.value + 3;
	}
})
num4.addEventListener('click',() => {
	if (inputBox.value == 0) {
		inputBox.value = 4;
	}
	else {
		inputBox.value = inputBox.value + 4;
	}
})
num5.addEventListener('click',() => {
	if (inputBox.value == 0) {
		inputBox.value = 5;
	}
	else {
		inputBox.value = inputBox.value + 5;
	}
})
num6.addEventListener('click',() => {
	if (inputBox.value == 0) {
		inputBox.value = 6;
	}
	else {
		inputBox.value = inputBox.value + 6;
	}	
})
num7.addEventListener('click',() => {
	if (inputBox.value == 0) {
		inputBox.value = 7;
	}
	else {
		inputBox.value = inputBox.value + 7;
	}
})
num8.addEventListener('click',() => {
	if (inputBox.value == 0) {
		inputBox.value = 8;
	}
	else {
		inputBox.value = inputBox.value + 8;
	}
})
num9.addEventListener('click',() => {
	if (inputBox.value == 0) {
		inputBox.value = 9;
	}
	else {
		inputBox.value = inputBox.value + 9;
	}
})
num0.addEventListener('click',() => {
	if (inputBox.value == 0) {
		inputBox.value = 0;
	}
	else {
		inputBox.value = inputBox.value + 0;
	}
})



plus.addEventListener('click',() => {
	inputBox.value = inputBox.value + '+';
})
minus.addEventListener('click',() => {
	inputBox.value = inputBox.value + '-';
})
division.addEventListener('click',() => {
	inputBox.value = inputBox.value + '/';
})
multiplication.addEventListener('click',() => {
	inputBox.value = inputBox.value + '*';
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
})
percent.addEventListener('click',() => {
	inputBox.value = inputBox.value + '%';
})


equals.addEventListener('click',equalsCal);

let storeValue = "";
let storeValue2 = "";

function equalsCal() {
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
		deleteCha()
	}
	else if (e.key == "Delete") {
		inputBox.value = 0;
	}
	else if (e.key == '1') {
		if (inputBox.value == 0) {
			inputBox.value = 1;
		}
		else {
			inputBox.value = inputBox.value + 1;
		}
	}
	else if (e.key == '2') {
		if (inputBox.value == 0) {
			inputBox.value = 2;
		}
		else {
			inputBox.value = inputBox.value + 2;
		}
	}
	else if (e.key == '3') {
		if (inputBox.value == 0) {
			inputBox.value = 3;
		}
		else {
			inputBox.value = inputBox.value + 3;
		}
	}
	else if (e.key == '4') {
		if (inputBox.value == 0) {
			inputBox.value = 4;
		}
		else {
			inputBox.value = inputBox.value + 4;
		}
	}
	else if (e.key == '5') {
		if (inputBox.value == 0) {
			inputBox.value = 5;
		}
		else {
			inputBox.value = inputBox.value + 5;
		}
	}
	else if (e.key == '6') {
		if (inputBox.value == 0) {
			inputBox.value = 6;
		}
		else {
			inputBox.value = inputBox.value + 6;
		}
	}
	else if (e.key == '7') {
		if (inputBox.value == 0) {
			inputBox.value = 7;
		}
		else {
			inputBox.value = inputBox.value + 7;
		}
	}
	else if (e.key == '8') {
		if (inputBox.value == 0) {
			inputBox.value = 8;
		}
		else {
			inputBox.value = inputBox.value + 8;
		}
	}
	else if (e.key == '9') {
		if (inputBox.value == 0) {
			inputBox.value = 9;
		}
		else {
			inputBox.value = inputBox.value + 9;
		}
	}
	else if (e.key == '0') {
		if (inputBox.value == 0) {
			inputBox.value = 0;
		}
		else {
			inputBox.value = inputBox.value + 0;
		}
	}
	else if (e.key == '+') {
		inputBox.value = inputBox.value + '+';
	}
	else if (e.key == '-') {
		inputBox.value = inputBox.value + '-';
	}
	else if (e.key == '*') {
		inputBox.value = inputBox.value + '*';
	}
	else if (e.key == '/') {
		inputBox.value = inputBox.value + '/';
	}
	else if (e.key == '%') {
		inputBox.value = inputBox.value + '%';
	}
	else if (e.key == '.') {
		inputBox.value = inputBox.value + '.';
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
})

let icon = document.querySelector('.icon')

icon.addEventListener('click',() => {
	show.innerHTML = storeValue2;
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