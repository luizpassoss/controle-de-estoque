document.getElementById("forgotPasswordForm").addEventListener("submit", function(event) {
    event.preventDefault();

   
    var email = document.getElementById("email").value;

   
    simulateResetPassword(email);
});

function simulateResetPassword(email) {
   
    setTimeout(function() {
     
        var successMessage = "Um email com as instruções para redefinir sua senha foi enviado para " + email;
        displayMessage(successMessage, "success");
    }, 1500);
}

function displayMessage(message, messageType) {
    var messageDiv = document.getElementById("message");
    messageDiv.innerHTML = message;
    messageDiv.className = messageType;
}
