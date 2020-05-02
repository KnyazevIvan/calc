btn = document.querySelectorAll('.button')
input = document.querySelector('.input')
result = document.querySelector('.result')
afterEqual = false;

let leftValue = 0;
let sign = '';


for (const el of btn) {
  el.addEventListener('click', calc);
}

function calc() {

  if (afterEqual) {
    console.log('нахуй ты здесь')
    input.style.display = 'block'
    result.classList.remove('show');
    afterEqual = false;
    result.innerHTML = '';
    if (this.value != '+' && this.value != '-' && this.value != '*' && this.value != '/' && this.value != '=') {
      input.innerHTML = '';
    }
  }

  if (this.value === '+') {
    sign = '+';
    leftValue = input.innerHTML
  }

  if (this.value === '-') {
    sign = '-';
    leftValue = input.innerHTML
  }


  if (this.value === '*') {
    sign = '*';
    leftValue = input.innerHTML;
  }


  if (this.value === '/') {
    sign = '/';
    leftValue = input.innerHTML;
  }

  if (this.value === '=') {
    console.log('right value',input.innerHTML.slice(leftValue.length + 1))
    if (input.innerHTML.slice(leftValue.length + 1).length!==0)
    {
      equal();
    }
    
    return;
  }

  input.innerHTML += this.value



  if (this.value === 'C') {
    input.innerHTML = '';
    result.innerHTML = '';
    sign = '';
  }

  if (sign != '' && input.innerHTML.slice(leftValue.length + 1).length !== 0) {
    prevCalc(input.innerHTML.slice(leftValue.length + 1))
  }

}

function prevCalc(rightValue) {
  console.log(leftValue, rightValue.length)


  if (sign === '+' && (!leftValue.includes('+')) && (!leftValue.includes('-')) && (!leftValue.includes('*')) && (!leftValue.includes('/'))) {
    result.innerHTML = Number(leftValue) + Number(rightValue)
  }
  else if (sign === '+') {
    result.innerHTML = Number(result.innerHTML) + Number(rightValue)
  }

  if (sign === '-' && (!leftValue.includes('+')) && (!leftValue.includes('-')) && (!leftValue.includes('*')) && (!leftValue.includes('/'))) {
    result.innerHTML = Number(leftValue) - Number(rightValue)
  }
  else if (sign === '-') {
    result.innerHTML = Number(result.innerHTML) - Number(rightValue)
  }

  if (sign === '/' && (!leftValue.includes('+')) && (!leftValue.includes('-')) && (!leftValue.includes('*')) && (!leftValue.includes('/'))) {
    result.innerHTML = Number(leftValue) / Number(rightValue)
  }
  else if (sign === '/') {
    result.innerHTML = Number(result.innerHTML) / Number(rightValue)
  }

  if (sign === '*' && (!leftValue.includes('+')) && (!leftValue.includes('-')) && (!leftValue.includes('*')) && (!leftValue.includes('/'))) {
    console.log('нахуя')
    result.innerHTML = Number(leftValue) * Number(rightValue)
  }
  else if (sign === '*') {
    console.log('правильгл', result.innerHTML)
    result.innerHTML = Number(result.innerHTML) * Number(rightValue)
  }
}

function equal() {

  console.log('equal')
  input.innerHTML = result.innerHTML;
  input.style.display = 'none';
  result.classList.add('show')
  sign = '';
  afterEqual = true;
}