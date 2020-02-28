// Color adding + Color Choosing

let text_div = document.getElementById("text_div");

let colorMenu = document.querySelectorAll(".menu_colors li");

let changeColor = function() {
  
  colorMenu[1].addEventListener("click", function() {
    document.body.style.background = "blue";
    text_div.innerHTML = "Background Color changed blue";
  });
  
  colorMenu[2].addEventListener("click", function() {
    document.body.style.background = "yellow";
    text_div.innerHTML = "Background Color changed yellow";
  });
  
  colorMenu[3].addEventListener("click", function() {
    document.body.style.background = "red";
    text_div.innerHTML = "Background Color changed red";
  });
  
  colorMenu[4].addEventListener("click", function() {
    document.body.style.background = "orange";
    text_div.innerHTML = "Background Color changed orange";
  });
};

changeColor();


/*

let cont = document.querySelector('.menu_colors');
let dropDownm = document.querySelector('#dropDown')

function dropdownMenu () {
  if (cont.style.display === "none") {
    cont.style.display = "block";
  } else {
    cont.style.display = "none";
  }
}
 
dropDownm.addEventListener('click', dropdownMenu);
// WHY DOES THIS NOT WORK!
*/


// Show menu

function dropdown_menu() {
  document.querySelector("#myDropdown").classList.toggle("show");              
}

let dropDownm = document.querySelector(".dropbtn");

dropDownm.addEventListener('click', dropdown_menu);

// Close menu on link click

function removeClass() {
  document.getElementById("myDropdown").classList.remove("show"); 
}

let links = document.querySelectorAll(".color");

links.forEach(link => {
    link.addEventListener('click', removeClass);
});





