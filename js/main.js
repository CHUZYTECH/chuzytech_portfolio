$(document).ready(function () {
    // Custom behavior for toggling offcanvas, etc.
    console.log("Custom JS is working!");

    // You can add more interactivity here if needed
    $('.nav-link').on('click', function () {
        console.log($(this).text() + " clicked!");
    });
});


$(document).ready(function () {

    // code for menubar
    var i = 0;
    $('#toggle').click(function () {
        if (i == 0) {
            $('.menu').css('right', '0px');
            i += 1;
        } else {
            $('.menu').css('right', '-300px');
            i -= 1;
        }
    });

   
});

(function () {
    emailjs.init('LeFZbz7thEM4bz-8m'); // Replace 'YOUR_USER_ID' with your actual user ID from EmailJS
})();

$('#contactForm').on('submit', function (event) {
    event.preventDefault();

    const serviceID = 'service_pslkehx'; // Replace 'YOUR_SERVICE_ID' with your actual service ID from EmailJS
    const templateID = 'template_15dlrjl'; // Replace 'YOUR_TEMPLATE_ID' with your actual template ID from EmailJS

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            alert('Your message has been sent successfully!');
            $('#contactForm')[0].reset(); // Reset the form after submission
        }, (err) => {
            alert('There was an error sending your message.');
        });
});



        $(document).ready(function() {
            $("#contactForm").on("submit", function(event) {
                event.preventDefault();

                var name = $("#name").val();
                var email = $("#email").val();
                var message = $("#message").val();

                if (name && email && message) {
                    alert("Thank you, " + name + "! Your message has been received.");
                    $(this)[0].reset();
                } else {
                    alert("Please fill out all fields before submitting the form.");
                }
            });
        });
  




