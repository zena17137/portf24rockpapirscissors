const resultDisplay = document.querySelector('#result');
const choicesDisplay = document.querySelector('#choices');
const choices = ['rock (Камінь)', 'paper (Папір)', 'scissors (Ножниці)'];

const handleClick = (e) => {
	getResults(e.target.innerHTML, choices[Math.floor(Math.random() * choices.length)]);
};
choices.forEach((choice) => {
	const button = document.createElement('button');
	button.innerHTML = choice;
	button.addEventListener('click', handleClick);
	choicesDisplay.appendChild(button);
});

const getResults = (userChoice, computerChoice) => {
	switch (userChoice + computerChoice) {
		case 'scissors (Ножниці)paper (Папір)':
		case 'rock (Камінь)scissors (Ножниці)':
		case 'paper (Папір)rock (Камінь)':
			resultDisplay.innerHTML =
				'You chose ' + userChoice + ' and the computer chose ' + computerChoice + ' , YOU WIN!';
			break;
		case 'paper (Папір)scissors (Ножниці)':
		case 'scissors (Ножниці)rock (Камінь)':
		case 'rock (Камінь)paper (Папір)':
			resultDisplay.innerHTML =
				'You chose ' + userChoice + ' and the computer chose ' + computerChoice + ' , YOU LOSE!';
			break;
		case 'scissors (Ножниці)scissors (Ножниці)':
		case 'rock (Камінь)rock (Камінь)':
		case 'paper (Папір)paper (Папір)':
			resultDisplay.innerHTML =
				'You chose ' + userChoice + ' and the computer chose ' + computerChoice + ' , ITS A DRAW!';
			break;
	}
};
