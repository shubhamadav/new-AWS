document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const signupButton = document.getElementById('signupButton');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        
        const formData = new FormData(loginForm);
        const userData = {
            useremail: formData.get('useremail'),
            userpass: formData.get('userpass')
        };

       
        fetch('YOUR_API_URL', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(response => response.json())
        .then(data => {
           
            console.log(data); 
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });

    signupButton.addEventListener('click', function () {
        
    });
});