 document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let isValid = true;
    document.querySelectorAll(".error").forEach(el => el.textContent = "");
    document.getElementById("formMessage").textContent = "";

    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();
    let subject = document.querySelector("input[name='subject']:checked");

    let firstNamePattern = /^[A-Za-z]+$/;
    if (!firstName || !firstNamePattern.test(firstName)) {
      isValid = false;
      document.getElementById("firstNameError").textContent = "Please enter a valid first name.";
    }

    let lastNamePattern = /^[A-Za-z]+$/;
    if (!lastName || !lastNamePattern.test(lastName)) {
      isValid = false;
      document.getElementById("lastNameError").textContent = "Please enter your last name.";
    } 

    let emailPattern =  /^[A-Za-z][^\s@]*@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
      isValid = false;
      document.getElementById("emailError").textContent = "Enter a valid email address.";
    }

    let phonePattern = /^[0-9]{10,15}$/;
    if (!phone || !phonePattern.test(phone)) {
      isValid = false;
      document.getElementById("phoneError").textContent = "Enter a valid phone number.";
    }

    if (!subject) {
      isValid = false;
      document.getElementById("subjectError").textContent = "Please select a subject.";
    }

    let messagePattern = /^[A-Za-z0-9\s]+$/; 
    if (!message || !messagePattern.test(message)) {
      isValid = false;
      document.getElementById("messageError").textContent = "Message cannot be empty.";
    }

    if (isValid) {
      document.getElementById("formMessage").innerHTML = '<p class="success">Message sent successfully!</p>';
      document.getElementById("contactForm").reset();
    }
  });





  // Accordian start



$(document).ready(function() {
    $('.accordion-content').hide();
    $('.accordion-header').click(function() {
  
        $(this).toggleClass('active');
        $('.accordion-header').not(this).removeClass('active');
 
        $('.accordion-content').not($(this).next()).slideUp(300);
      
        $(this).next().slideToggle(300);
    });
});