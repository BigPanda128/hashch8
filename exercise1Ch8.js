//Ryan Posmta
//CMP344
//2/17/2015
//Chapter 8 exercise 1
//create a basic dictionary using linear probing to store the definitions.

//gets access to linear probing
load("linearprobing.js");

//create a new hash table
var words = new HashTable();

//this doesnt have to be a function however i made it one
//for cleanliness
//it gets the list of words and definitions and separats them and stores
//them into the hash table
function getWords() {
	var word = read("words.txt").split("\n");
	for (var i = 0; i < word.length; ++i) {
		word[i] = word[i].trim();
	}
	for (var i = 0; i < word.length; ++i) {
		var both = word[i].split(".");
		words.put(both[0],both[1]);
	}
}

//calls the function so it does its process
getWords();

//displays the words so the user can choose one to type in
words.showDistro();

//lets user type in the word
print("Pick a word to see the definition: ");
var input = readline();

//prints the users definition of the word they selescted
print(words.get(input));
