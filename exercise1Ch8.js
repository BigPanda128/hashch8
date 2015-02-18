//Ryan Posmta
//CMP344
//2/17/2015
//Chapter 8 exercise 1
//create a basic dictionary using linear probing to store the definitions.

load("linearprobing.js");

var words = new HashTable();

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

getWords();
words.showDistro();
print("Pick a word to see the definition: ");
var input = readline();
print(words.get(input));
