let allowDownloadButton = true;

///set default local storage
if(!localStorage.allowDownloadButton){

  localStorage.setItem('allowDownloadButton', allowDownloadButton)
}

let deferredPrompt;
const addBtn = document.querySelector('.add-button');
const btnWrapper =document.querySelector('.button-wrapper')
const closeBtn = document.querySelector('.close');

closeBtn.addEventListener('click', function(){
  localStorage.setItem('allowDownloadButton', false)
  btnWrapper.style.display='none';
})
addBtn.style.display = 'none';
btnWrapper.style.display='none';

if(localStorage.allowDownloadButton!=='false'){



window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI to notify the user they can add to home screen
  addBtn.style.display = 'block';
  btnWrapper.style.display='block';
  addBtn.addEventListener('click', (e) => {
    // hide our user interface that shows our A2HS button
    addBtn.style.display = 'none';
    btnWrapper.style.display='none';
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


}