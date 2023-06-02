const buttons = document.querySelectorAll('#button');
const thankContainer = document.querySelector('.thank-container');
const containerOne = document.querySelector('.container1');
const submitBtn = document.querySelector('#submit');
const para = document.querySelector('.selected');

// Submit button is disabled by default
submitBtn.disabled = true;

// Function to give active state to rating buttons and also remove the active state
buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      // Remove "active" class from all buttons
      buttons.forEach(function(btn) {
        btn.classList.remove('active');
      });
  
      // Add "active" class to the clicked button
      this.classList.add('active');
  
    //   Enabling the submit button after choosing a rating
      submitBtn.disabled = false; 
      para.textContent = `You selected ${this.textContent} out of 5`;
    });
  });
  
//   Function to make the one container disappear and other one appear but clicking the clicking the submit button after choosing a rating
function showMessage() {
    containerOne.style.display = 'none';
    thankContainer.style.display = 'flex';
}
submitBtn.addEventListener('click', showMessage);
