function onReady() {
    console.log('Yay!, onReady() got called when the page loaded.');
  }

// Will call onReady() when the page loads.
onReady()

console.log('🟥 🟦 🟩 🟨');

let redCounter = 0;
let blueCounter = 0;
let greenCounter = 0;
let yellowCounter = 0;


function onRedButtonClick () {
    console.log('you clicked the red button');
    let redButton = document.getElementById('blocks');
    console.log(redButton);
    redButton.innerHTML += `<div onclick="removeRedBlock(event)" class="block red-fill"></div>`;
    redCounter++;
    document.getElementById('red-count').textContent = redCounter;
}



function removeRedBlock (event) {
    event.target.remove();
    redCounter--;
    document.getElementById('red-count').textContent = redCounter;

}

function onBlueButtonClick () {
    console.log('you clicked the blue button');
    let blueButton = document.getElementById('blocks');
    console.log(blueButton);
    blueButton.innerHTML += `<div onclick="removeBlueBlock(event)" class="block blue-fill"></div>`;
    blueCounter++;
    document.getElementById('blue-count').textContent = blueCounter;
}

function removeBlueBlock (event) {
    event.target.remove();
    blueCounter--;
    document.getElementById('blue-count').textContent = blueCounter;
}

function onGreenButtonClick () {
    console.log('you clicked the green button');
    let greenButton = document.getElementById('blocks');
    console.log(greenButton);
    greenButton.innerHTML += `<div onclick="removeGreenBlock(event)" class="block green-fill"></div>`;
    greenCounter++;
    document.getElementById('green-count').textContent = greenCounter;
}

function removeGreenBlock (event) {
    event.target.remove();
    greenCounter--;
    document.getElementById('green-count').textContent = greenCounter;
}

function onYellowButtonClick () {
    console.log('you clicked the yellow button');
    let yellowButton = document.getElementById('blocks');
    console.log(yellowButton);
    yellowButton.innerHTML += `<div onclick="removeYellowBlock(event)" class="block yellow-fill"></div>`;
    yellowCounter++;
    document.getElementById('yellow-count').textContent = yellowCounter;
}

function removeYellowBlock (event) {
    event.target.remove();
    yellowCounter--;
    document.getElementById('yellow-count').textContent = yellowCounter;
}