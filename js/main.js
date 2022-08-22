// player selection 
document.getElementById('player-select').addEventListener('click', function (event) {
    const players = document.getElementById('player-list').children.length;
    if (players < 5) {
        if (event.target.matches('.selected')) {
            const player = document.createElement('li');
            player.innerText = (event.target.previousSibling).previousSibling.innerText;
            document.getElementById('player-list').appendChild(player);
            event.target.setAttribute('disabled', true);
            event.target.style.backgroundColor = 'grey';
        }
    }
    else {
        alert('Can not add more than five players');
    }
})
// get input field value
function getInputFieldValue(elementId) {
    const inputField = document.getElementById(elementId);
    const inputFieldString = inputField.value;
    const inputFieldNumber = Number(inputFieldString);

    return inputFieldNumber;
}
// get element value
function getElementValue(elementId) {
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const elementValueNumber = Number(elementValueString);

    return elementValueNumber;
}
// set element value
function setElementValue(elementId, value) {
    const element = document.getElementById(elementId);
    if (isNaN(value)) {
        element.innerText = 0;
        return;
    }
    element.innerText = value;
}
// budget per player calculation
document.getElementById('calculate').addEventListener('click', function () {
    const perPlayerCost = getInputFieldValue('per-player-cost');
    if (isNaN(perPlayerCost) || perPlayerCost === 0) {
        alert('Invalid Input');
    }
    const playerNumber = document.getElementById('player-list').children.length;
    if (playerNumber === 0) {
        alert('Select players');
        return;
    }
    const playerExpense = perPlayerCost * playerNumber;

    setElementValue('player-expenses', playerExpense);

})
// total calculation
document.getElementById('calculate-total').addEventListener('click', function () {
    const managerCost = getInputFieldValue('manager-cost');
    const coachCost = getInputFieldValue('coach-cost');
    const playerCost = getElementValue('player-expenses');
    const totalCost = managerCost + coachCost + playerCost;

    setElementValue('total-cost', totalCost);
})