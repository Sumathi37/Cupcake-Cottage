document.getElementById('contactForm').addEventListener('submit', function(event){
    event.preventDefault();
    
    //get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    
    const message = document.getElementById('message').value.trim();
    
    let isValid =true;
    
    document.getElementById('errorName').textContent="";
    document.getElementById('errorEmail').textContent="";
    
    document.getElementById('errorMessage').textContent="";
    
    
    //name validation
    if (name===""){
        document.getElementById('errorName').textContent="please enter your name";
        isValid= false
    }
    //email validation
    const emailPattern=/^[^]+@[^]+\.[a-z]{2,3}$/;
    if(!emailPattern.test(email)){
        document.getElementById('errorEmail').textContent="please enter a valid email";
        isValid=false;
    
    }
    //message validation
    if(message==="")
    {
        document.getElementById('errorMessage').textContent="please enter a message";
        isValid=false;
    }
    //if the form is valid.submit or show a success message
    if(isValid){
        alert('Form Submitted Successfully');
    }
    });