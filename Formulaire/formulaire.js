const form = document.querySelector('#myForm'); //they store the form in a variable

form.addEventListener('submit', function (event) {
    event.preventDefault(); //stops the form from submitting and refreshing the page, so we can handle the form submission ourselves.

    const errorDiv = document.querySelector('.message-error');
    const successDiv = document.querySelector('.message-success');

    //vars for the success or error msg

    errorDiv.querySelector('ul').innerHTML = '';
    successDiv.textContent = '';
    //makes them empty

    const username = document.querySelector('#user');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const confPassword = document.querySelector('#confpassword');
    const terms = document.getElementById('termsncond')
    //create vars for the inputs 

    const errors = [];
    //list to store the error messages and display at the end

    function validateInput(input, condition, errorMessage) {
        if (condition) {
            input.classList.remove('invalid');
            input.classList.add('valid');
        } else {
            input.classList.remove('valid');
            input.classList.add('invalid');
            errors.push(errorMessage);
        }
    }//function that takes 3 arguments which will turn the input text box red and add the error message to the list or green depending on whether it meets the condition thats in the arguments

    validateInput(username, username.value.trim() !== '', 'The username is required.');
    validateInput(
        username,
        username.value.length >= 6,
        'The username must be at least 6 characters long.'
    );
    validateInput(email, email.value.trim() !== '', 'The email is required.');
    validateInput(
        email,
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value),
        'The email format is invalid.'
    );
    validateInput(password, password.value.trim() !== '', 'The password is required.');
    
    validateInput(
        password,
        password.value.length >= 8,
        'The password must be at least 8 characters long.'
    );
    validateInput(
        password,
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/.test(password.value),
        'The password must include at least one uppercase letter, one lowercase letter, and one number.'
    );
    validateInput(
        confPassword,
        confPassword.value === password.value && confPassword.value.trim() !== '',
        'You must confirm the password.'
    );

    validateInput(
        terms,
        terms.checked,
        'You must agree to the terms and conditions.'
    );

    //use of function to store the message in the error list 

    

    if (errors.length > 0) {
        errors.forEach((message) => {
            const li = document.createElement('li');
            li.textContent = message;
            document.querySelector('.errormsg').appendChild(li);
        });
        return; 
    } //if there are any error messages, create a list element for each message and write the messages in it 

    successDiv.textContent = 'Form sent successfully!';
    successDiv.style.display = "block";
    successDiv.classList.add('successmsg');  
    errorDiv.style.display = "none";  
    //the form is sent successfully and will hide the error display and show the new one while adding the css to it
});