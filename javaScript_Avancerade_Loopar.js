//JavaScript Avancerade Loopar

const basket = ['applen', 'apelsiner', 'vindruvor'];

for (let i = 0; i < basket.length; i++) {
	console.log(basket[i]);
}

basket.forEach(item => {
	console.log(item);
})

//For of loop
//Iterating är ett exempel på nedan
//Iterating --> Betyder att man tittar på alla items en och en
//Detta fungerar eftersom JS har iterabals
for (item of basket) {
	console.log(item);
}


//For in loop
//Letar efter properties
//Det här är istället Enumerating
//Det här gäller bara för objekt
const detailedBasket = {
	applen: 3,
	apelsiner: 45, 
	vindruvor: 1000
}

for (item in detailedBasket) {
	console.log(item);
}