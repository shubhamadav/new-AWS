document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const signupButton = document.getElementById('signupButton');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting normally
        
        const formData = new FormData(loginForm);
        const userData = {
            useremail: formData.get('useremail'),
            userpass: formData.get('userpass')
        };

        // Replace 'YOUR_API_URL' with the actual backend API URL
        fetch('YOUR_API_URL', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(response => response.json())
        .then(data => {
            // Handle the response from the backend
            console.log(data); // You can customize this based on your API response
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });

    signupButton.addEventListener('click', function () {
        // Redirect to the signup page or show a signup modal
        // You need to implement this behavior based on your app's structure
    });
});