let toggleNavStatus = false;

let toggleNav = function () {
  let getSidebar = document.querySelector(".nav-sidebar");
  let getSidebarUl = document.querySelector(".nav-sidebar ul");

  if (toggleNavStatus === false) {
    getSidebar.style.visibility = "visible";
    getSidebar.style.width = "270px";

    toggleNavStatus = true;
  } else if (toggleNavStatus === true) {
    getSidebar.style.visibility = "hidden";
    getSidebar.style.width = "0px";

    toggleNavStatus = false;
  }
};

function openBar() {
  sidebar.classList.add("translate");
}
function closeBar() {
  sidebar.classList.remove("translate");
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
