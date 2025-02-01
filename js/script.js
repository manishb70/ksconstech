console.log("grgrg")

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  var userName = document.getElementById('user_name').value;
  var userEmail = document.getElementById('user_email').value;
  var message = document.getElementById('user_message').value;

  // Replace the Service ID, Template ID, and User ID with your own credentials
  emailjs.send("service_cawqdft","template_cesdga7",{
    from_name: userName,
    message: message,
    sernder_email: userEmail,
    reply_to: userEmail,
    to_name: userName,
    replly_to: userEmail,
    })
  .then(function(response) {
    alert('Message sent successfully!', response);
    document.getElementById('contact-form')
    document.getElementById('contact-form').reset();
  }, function(error) {
    alert('Failed to send message. Please try again.', error);
  });
});

