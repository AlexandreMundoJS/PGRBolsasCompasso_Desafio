const chk = document.getElementById('checkbox');
const cardTextOne = document.getElementById('card-text-1');
const cardTextTwo = document.getElementById('card-text-2');
const cardTextThree = document.getElementById('card-text-3');


chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
    document.body.classList.toggle('dark-h1');
    cardTextOne.classList.toggle('dark-p');
    cardTextTwo.classList.toggle('dark-p');
    cardTextThree.classList.toggle('dark-p');



});
    
