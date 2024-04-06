function notification() {
    alert("Bug Report");
    window.open('mailto:yigit.hatirnaz1@gmail.com');
}

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    
});

