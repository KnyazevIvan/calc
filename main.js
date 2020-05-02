btn = document.querySelectorAll('.button')
input = document.querySelector('.input')
result = document.querySelector('.result')
afterEqual = false;

let left = 0;
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





let deferredPrompt;
const addBtn = document.querySelector('.add-button');
addBtn.style.opacity = 0;


window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI to notify the user they can add to home screen
  addBtn.style.opacity = 1;

  addBtn.addEventListener('click', (e) => {
    // hide our user interface that shows our A2HS button
    addBtn.style.opacity = 0;
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        deferredPrompt = null;
      });
  });
})