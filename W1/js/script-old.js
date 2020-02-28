// DROPDOWN FUNCTION FOR MENU

function dropdown_menu() {
  document.getElementById("myDropdown").classList.toggle("show");               // Selecteren van de ID myDropdown om vervolgens de toggle te kunnen toevoegen voor de css class "show", deze zet de display van de dropdown op block waardoor deze zichtbaar wordt
}

// BLUE BACKGROUND
const colorBlue = document.querySelector(".color-blue");                        // Selecteren class .color-blue en toekennen aan let variabel: colorBlue

const changeBackgroundColorBlue = function() {                                  // Maak let variabel changeBackGroundColorBlue met bijbehorende functie
  const bodycolorblue = document.body;                                          // Nieuwe const variabel die gelijk wordt gesteld aan de body voor aanpassen achtergrond
  bodycolorblue.classList.add("blue-bg");                                       // Voeg de class .blue-bg toe om de achtergrond van kleur te veranderen
  bodycolorblue.classList.remove("red-bg", "yellow-bg", "orange-bg");           // Verwijder mogelijk reeds toegevoegde classes
};

const remove_previous_input = function () {
  const targetInput = document.querySelector('.text-coloredpages');
  if (targetInput === 'This is a yellow background.') {
    targetInput.removeChild(text-coloredpages);
  }
}

const addTextBlue = function () {                                               // Maken functie voor het toevoegen van tekst op body door gebruik van innerHTML
    const blueBody = document.querySelector(".text-coloredpages");
    const addTextBlueTest = document.createElement('h2')
    addTextBlueTest.innerHTML += "This is a blue background";
    blueBody.appendChild(addTextBlueTest);
}

colorBlue.addEventListener("click", function (e) {                              // Functie declaratie voor het callen van de changeBackGroundColorBlue en de addTextBlue functie
    changeBackgroundColorBlue();
    addTextBlue();
   
});       




// YELLOW BACKGROUND

let colorYellow = document.querySelector(".color-yellow");


const changeBackgroundColorYellow = function() {
  const bodycoloryellow = document.body;
  bodycoloryellow.classList.add("yellow-bg");
  bodycoloryellow.classList.remove("red-bg", "blue-bg", "orange-bg");
};

const addTextYellow = function () {
  const yellowBody = document.querySelector(".text-coloredpages");
  const addTextYellowTest = document.createElement('h2');
  addTextYellowTest.innerHTML += "This is a yellow background";
  yellowBody.appendChild(addTextYellowTest);
}


colorYellow.addEventListener("click", function (e) {
  changeBackgroundColorYellow();
  addTextYellow();
})
    



// RED BACKGROUND

let colorRed = document.querySelector(".color-red");

const changeBackgroundColorRed = function() {
  const bodycolorred = document.body;
  bodycolorred.classList.add("red-bg");
  bodycolorred.classList.remove("blue-bg", "yellow-bg", "orange-bg");
};

const addTextRed = function () {
  const redBody = document.querySelector(".text-coloredpages")
  const addTextRedTest = document.createElement('h2');
  addTextRedTest.innerHTML += "This is a red background";
  redBody.appendChild(addTextRedTest);
}


colorRed.addEventListener("click", function (e) {
  changeBackgroundColorRed();
  addTextRed();
})
    

// ORANGE BACKGROUND

let colorOrange = document.querySelector(".color-orange");

const changeBackgroundColorOrange = function() {
  const bodycolororange = document.body;
  bodycolororange.classList.add("orange-bg");
  bodycolororange.classList.remove("red-bg", "yellow-bg", "blue-bg");
};

const addTextOrange = function () {
  const orangeBody = document.querySelector(".text-coloredpages")
  const addTextOrangeTest = document.createElement('h2');
  addTextOrangeTest.innerHTML += "This is a orange background";
  orangeBody.appendChild(addTextOrangeTest);
}


colorOrange.addEventListener("click", function (e) {
  changeBackgroundColorOrange();
  addTextOrange();
})

