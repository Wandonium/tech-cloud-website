
function teamModal(num) {

    var modal, close;

    switch(num) {
        case 1:
            modal = document.getElementById("teamModal1");
            close = document.getElementById("close1");
        break;
        case 2:
            modal = document.getElementById("teamModal2");
            close = document.getElementById("close2");
        break;
        case 3:
            modal = document.getElementById("teamModal3");
            close = document.getElementById("close3");
        break;
        case 4:
            modal = document.getElementById("teamModal4");
            close = document.getElementById("close4");
        break;
        case 5:
            modal = document.getElementById("teamModal5");
            close = document.getElementById("close5");
        break;
        case 6:
            modal = document.getElementById("teamModal6");
            close = document.getElementById("close6");
        break;
        default:
            console.log("No modal selected!!!");
    }

    // When the user clicks the button, open the modal 
    modal.style.display = "block";

    // When the user clicks on <span> (x), close the modal
    close.onclick = function() {
    modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}