btn = document.querySelectorAll('.button')
input = document.querySelector('.input')
result = document.querySelector('.result')
afterEqual = false;

let left = 0;
let sign = '';





for (const el of btn) {
  el.addEventListener('mousedown', calc);
}

function calc() {


  this.style.background='#64d735';
  setTimeout(() => {
    if (this.dataset.value==='C')
    this.style.background='#ff2d7a';
    else
    this.style.background='#0c2433';
  }, 100);

  if (afterEqual) {
    console.log('нахуй ты здесь')
    input.style.display = 'block'
    result.classList.remove('show');
    afterEqual = false;
    result.innerHTML = '';
    if (this.dataset.value != '+' && this.dataset.value != '-' && this.dataset.value != '*' && this.dataset.value != '/' && this.dataset.value != '=') {
      input.innerHTML = '';
    }
  }

  if (this.dataset.value === '+') {
    sign = '+';
    left = input.innerHTML
  }

  if (this.dataset.value === '-') {
    sign = '-';
    left = input.innerHTML
  }


  if (this.dataset.value === '*') {
    sign = '*';
    left = input.innerHTML;
  }


  if (this.dataset.value === '/') {
    sign = '/';
    left = input.innerHTML;
  }

  if (this.dataset.value === '=') {
    console.log('right dataset.value',input.innerHTML.slice(left.length + 1))
    if (input.innerHTML.slice(left.length + 1).length!==0)
    {
      equal();
    }
    
    return;
  }

  input.innerHTML += this.dataset.value



  if (this.dataset.value === 'C') {
    input.innerHTML = '';
    result.innerHTML = '';
    sign = '';
  }

  if (sign != '' && input.innerHTML.slice(left.length + 1).length !== 0) {
    prevCalc(input.innerHTML.slice(left.length + 1))
  }

}

function prevCalc(right) {
  console.log(left, right.length)


  if (sign === '+' && (!left.includes('+')) && (!left.includes('-')) && (!left.includes('*')) && (!left.includes('/'))) {
    result.innerHTML = Number(left) + Number(right)
  }
  else if (sign === '+') {
    result.innerHTML = Number(result.innerHTML) + Number(right)
  }

  if (sign === '-' && (!left.includes('+')) && (!left.includes('-')) && (!left.includes('*')) && (!left.includes('/'))) {
    result.innerHTML = Number(left) - Number(right)
  }
  else if (sign === '-') {
    result.innerHTML = Number(result.innerHTML) - Number(right)
  }

  if (sign === '/' && (!left.includes('+')) && (!left.includes('-')) && (!left.includes('*')) && (!left.includes('/'))) {
    result.innerHTML = Number(left) / Number(right)
  }
  else if (sign === '/') {
    result.innerHTML = Number(result.innerHTML) / Number(right)
  }

  if (sign === '*' && (!left.includes('+')) && (!left.includes('-')) && (!left.includes('*')) && (!left.includes('/'))) {
    console.log('нахуя')
    result.innerHTML = Number(left) * Number(right)
  }
  else if (sign === '*') {
    console.log('правильгл', result.innerHTML)
    result.innerHTML = Number(result.innerHTML) * Number(right)
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
