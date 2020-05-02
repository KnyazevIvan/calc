btn = document.querySelectorAll('.button')
input = document.querySelector('.input')
result = document.querySelector('.result')

let leftValue = 0;
let sign = '';


for (const el of btn) {
  el.addEventListener('click', calc);
}

function calc() {
  console.log(sign)
  
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
    input.innerHTML = result.innerHTML;
    sign = '';
    return;
  }

  input.innerHTML += this.value



  if (this.value === 'C') {
    input.innerHTML = '';
    result.innerHTML = '';
    sign = '';
  }

  if (sign != '' && input.innerHTML.slice(leftValue.length + 1).length!==0 ) {
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
    console.log('правильгл',result.innerHTML)
    result.innerHTML = Number(result.innerHTML) * Number(rightValue)
  }
}

function equal(clear) {


  sign = '';
}