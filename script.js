document.getElementById('signinform').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    var correctPassword = 'password123'; // Predefined correct password
    var enteredPassword = document.getElementById('password').value;
    var repeatPassword = document.getElementById('repeatpassword').value;
    var messageElement = document.getElementById('message');

    if (enteredPassword === '') {
        messageElement.textContent = 'Password is required!';
        messageElement.style.color = 'red';
    } else if (enteredPassword !== correctPassword) {
        messageElement.textContent = 'Incorrect password!';
        messageElement.style.color = 'red';
    } else if (enteredPassword !== confirmPassword) {
        messageElement.textContent = 'Passwords do not match!';
        messageElement.style.color = 'red';
    } else {
        messageElement.textContent = 'Password is correct and matches!';
        messageElement.style.color = 'green';
    }
});
