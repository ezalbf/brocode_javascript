function rollDice(){
    const numOfDice = document.getElementById("numOfDice");
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    let values =[];
    let images = [];

    for(let i =0; i < numOfDice.value; i++){
        const value = Math.floor(Math.random()*6) +1;
        values.push(value);

        images.push(`<img src="dice_images/${value}.jpg" alt="Dice ${value}">`);
    }

    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join("");

}