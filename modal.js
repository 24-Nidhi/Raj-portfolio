 // Open the modal for the specified work
 function openModal(work) {
    var modal = document.getElementById("modal-" + work);
    modal.style.display = "block";
}

// Close the modal when the close button is clicked
var closeButtons = document.getElementsByClassName("close");
for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].onclick = function () {
        var modal = this.parentElement.parentElement;
        modal.style.display = "none";
    }
}

// Close the modal when the user clicks anywhere outside of it
window.onclick = function (event) {
    var modals = document.getElementsByClassName("modal");
    for (var i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }
    }
}