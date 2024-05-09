document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  const messageList = document.getElementById('message-list'); 

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
      alert('Please fill out all fields.');
      return;
    }

    if (!isValidEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    const newMessage = document.createElement('div');
    newMessage.classList.add('message');

    const messageText = document.createElement('p');
    messageText.textContent = 'From: ' + name + ' (' + email + ')' + '\nMessage: ' + message;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-button'); // Add class for styling
    removeButton.addEventListener('click', function() {
      messageList.removeChild(newMessage);
    });

    newMessage.appendChild(messageText);
    newMessage.appendChild(removeButton);

    messageList.appendChild(newMessage);

    form.reset();
  });

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});
