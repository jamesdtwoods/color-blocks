function onReady() {
    console.log('Yay!, onReady() got called when the page loaded.');
  }

// Will call onReady() when the page loads.
onReady()

console.log('🟥 🟦 🟩 🟨');

function onRedButtonClick () {
    console.log('you clicked the red button');
    let redButton = document.getElementById('blocks');
    console.log(redButton);
    redButton.innerHTML += `<div onclick="removeRedBlock(event)" class="block red-fill"></div>`;
}

function removeRedBlock (event) {
    event.target.remove();
}

function onBlueButtonClick () {
    console.log('you clicked the blue button');
    let blueButton = document.getElementById('blocks');
    console.log(blueButton);
    blueButton.innerHTML += `<div onclick="removeBlueBlock(event)" class="block blue-fill"></div>`;
}

function removeBlueBlock (event) {
    event.target.remove();
}

function onGreenButtonClick () {
    console.log('you clicked the green button');
    let greenButton = document.getElementById('blocks');
    console.log(greenButton);
    greenButton.innerHTML += `<div onclick="removeGreenBlock(event)" class="block green-fill"></div>`;
}

function removeGreenBlock (event) {
    event.target.remove();
}

function onYellowButtonClick () {
    console.log('you clicked the yellow button');
    let yellowButton = document.getElementById('blocks');
    console.log(yellowButton);
    yellowButton.innerHTML += `<div onclick="removeYellowBlock(event)" class="block yellow-fill"></div>`;
}

function removeYellowBlock (event) {
    event.target.remove();
}