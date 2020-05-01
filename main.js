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

  if (result.innerHTML !== '') {
    result.innerHTML = '';
  }



  if (this.value === '+') {
    if (sign !== '') {
      equal();
      return;
    }
    else {
      sign = '+';
      leftValue = input.innerHTML
    }
  }
  
  if (this.value === '-') {
    if (sign !== '') {
      equal();
      return;
    }
    else {
      sign = '-';
      leftValue = input.innerHTML
    }
  }
  

  if (this.value === '*') {
    if (sign !== '') {
      equal();
      return;
    }
    else {
      sign = '*';
      leftValue = input.innerHTML
    }
  }


  if (this.value === '/') {
    if (sign !== '') {
      equal();
      return;
    }
    else {
      sign = '/';
      leftValue = input.innerHTML
    }
  }

  if (this.value === '=') {
    equal();
    return;
  }






  input.innerHTML += this.value

  if (this.value === 'C') {
    input.innerHTML = ''
  }


}

function equal() {

  let rightValue = input.innerHTML.slice(leftValue.length + 1);
  console.log(leftValue, rightValue)
  if (sign === '+') {
    result.innerHTML = Number(leftValue) + Number(rightValue)
  }
  if (sign === '-') {
    result.innerHTML = Number(leftValue) - Number(rightValue)
  }
  if (sign === '*') {
    result.innerHTML = Number(leftValue) * Number(rightValue)
  }
  if (sign === '/') {
    result.innerHTML = Number(leftValue) / Number(rightValue)
  }

  input.innerHTML = result.innerHTML; 

  rightValue = '';
  sign = '';
}