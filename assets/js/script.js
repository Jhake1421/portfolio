/*==================================================
    QUALIFICATION MODAL
==================================================*/

const modal = document.getElementById("qualificationModal");

const cards = document.querySelectorAll(
    ".qualification-card:not(.static-card)"
);

const closeButton = document.querySelector(".modal-close");

const modalLogo = document.getElementById("modalLogo");
const modalTitle = document.getElementById("modalTitle");
const modalIssuer = document.getElementById("modalIssuer");
const modalQualification = document.getElementById("modalQualification");
const modalNumber = document.getElementById("modalNumber");
const modalIssued = document.getElementById("modalIssued");
const modalValidity = document.getElementById("modalValidity");

/* Open */

cards.forEach(card => {

    card.addEventListener("click", () => {

        const id = card.dataset.id;

        const info = qualifications[id];

        if (!info) return;

        modalLogo.src = info.logo;
        modalLogo.alt = info.issuer;

        modalTitle.textContent = info.title;
        modalIssuer.textContent = info.issuer;

        modalQualification.textContent = info.qualification;

        modalNumber.textContent =
            info.certificateNumber || "Not yet added";

        modalIssued.textContent =
            info.issued || "Not yet added";

        modalValidity.textContent =
            info.validity || "Not yet added";

        modal.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});

/* Close Button */

closeButton.addEventListener("click", closeQualificationModal);

/* Click Outside */

modal.addEventListener("click", e => {

    if (e.target === modal) {

        closeQualificationModal();

    }

});

/* ESC */

document.addEventListener("keydown", e => {

    if (e.key === "Escape") {

        closeQualificationModal();

    }

});

/* Close Function */

function closeQualificationModal(){

    modal.classList.remove("active");

    document.body.style.overflow = "";

}


const topButton=document.getElementById("backToTop");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topButton.style.display="block";

}else{

topButton.style.display="none";

}

});

topButton.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }

    });

},{
    threshold:0.15
});

reveals.forEach(section =>{

    observer.observe(section);

});

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if(window.scrollY >= sectionTop &&
           window.scrollY < sectionTop + sectionHeight){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});