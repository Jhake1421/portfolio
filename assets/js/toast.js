const toast = document.getElementById("toast");
const toastTitle = document.getElementById("toastTitle");
const toastMessage = document.getElementById("toastMessage");
const toastIcon = document.getElementById("toastIcon");

function showToast(type, title, message){

    toast.className="toast "+type;

    toastTitle.textContent=title;

    toastMessage.textContent=message;

    if(type==="success"){

        toastIcon.className="fas fa-circle-check";

    }

    else if(type==="error"){

        toastIcon.className="fas fa-circle-xmark";

    }

    else{

        toastIcon.className="fas fa-triangle-exclamation";

    }

    toast.classList.add("show");

    setTimeout(()=>{

        toast.classList.remove("show");

    },4000);

}