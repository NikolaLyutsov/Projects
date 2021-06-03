let index = 1;

function plusIndex(n) {
  index = index + 1;
  showImage(index);
}

showImage(1);

function showImage(n) {
  let i;
  let x = document.getElementsByClassName("slides");
  if (n > x.length) { index = 1 };
  if (n < 1) { index = x.length };
  for (let i = 0; i < x.length; i += 1) {
    x[i].style.display = "none";
  }
  x[index - 1].style.display = "block";
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (e) {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}