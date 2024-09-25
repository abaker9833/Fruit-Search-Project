const input = document.querySelector('#fruit'); //get the search field
const suggestions = document.querySelector('.suggestions ul'); //gets the suggestions drop down list from the associated div

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu']; //collects the fruits that can be suggested in search bar

function search(str) {
	let results = [];
	const lowerStr = str.toLowerCase();
	results = fruit.filter(f => f.toLowerCase().includes(lowerStr));
	return results;
}
//changes the string to lower case before filtering through the fruit array for anything that matches

function searchHandler(e) {
	const inputVal = e.target.value;
	const results = search (inputVal);
	showSuggestions(results, inputVal);
}
//Whatever the user types into the search bar is fed through search function before displaying the appropriate results

function showSuggestions(results, inputVal) {
	const ul = document.querySelector('.suggestions ul');
	ul.innerHTML = '';
	//Removes current list of suggestions

	if (results.length === 0 && inputVal.length > 0) {
		ul.innerHTML = '<li>No results found</li>';
		//If no suggestion is found a "No results found" message appears in the suggestion drop down
	} else {
		results.forEach(fruit => {
			const li = document.createElement('li');
			li.textContent = fruit;
			ul.appendChild(li);
			//If a suggestion is found a list item is created and appended to the ul
		});
	}
}


function useSuggestion(e) {
	if(e.target.tagName === 'LI') {
		input.value = e.target.textContent;
		document.querySelector('.suggestions ul').innerHTML = '';
	}
}
//If a list item is clicked then the input field is filled with that suggestion


input.addEventListener('keyup', searchHandler); //calls for the searchHandler function when the input field is typed in
suggestions.addEventListener('click', useSuggestion);//responsible for clicks on the suggestion list