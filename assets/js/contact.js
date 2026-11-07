console.log("Contact.js Loaded");
// ==============================
// Initialize EmailJS
// ==============================

emailjs.init({
    publicKey: "obqNd1YxUwqocc0BA"
});

// ==============================
// Contact Form
// ==============================

const contactForm = document.getElementById("contactForm");
const sendBtn = document.getElementById("sendBtn");

contactForm.addEventListener("submit", function(e){

    e.preventDefault();

    sendBtn.disabled = true;

    sendBtn.innerHTML =
    `<i class="fas fa-spinner fa-spin"></i> Sending...`;

    emailjs.sendForm(

        "service_orwpvnp",
        "template_7ywzubr",
        contactForm

    )

    .then(function(){

        showToast(
            "success",
            "Message Sent",
            "Thank you! Your message has been sent successfully."
        );

        contactForm.reset();

    })

    .catch(function(error){

        console.error(error);

        showToast(
            "error",
            "Sending Failed",
            "Unable to send your message. Please try again."
        );

    })

    .finally(function(){

        sendBtn.disabled = false;

        sendBtn.innerHTML =
        `<i class="fas fa-paper-plane"></i>
        <span>Send Message</span>`;

    });

});