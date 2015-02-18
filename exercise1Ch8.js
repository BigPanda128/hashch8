//Ryan Posmta
//CMP344
//2/17/2015
//Chapter 8 exercise 1
//create a basic dictionary using linear probing to store the definitions.

load("linearprobing.js");

var words = new HashTable();

words.put("superfluous", "exceeding what is sufficient or necessary");
words.put("deflagrate", "to burn rapidly with intense heat and sparks being given off");
words.put("overweening", "arrogant");
words.put("folderol", "a useless ornament or accessory");
words.put("untenable", "not able to be defended");
words.put("poignant", "painfully or deeply affecting the feelings");
words.put("eradicate", "to do away with as completely as if pulling up by the roots");
words.put("tantara", "the blare of a trumpet or horn");
words.put("smarmy", "revealing or marked by a smug, ingratiating, or false earnestness");
words.put("diapason", "the entire range of musical tones");
words.put("inimical", "being adverse often by reason of hostility or malevolence");
words.put("moxie", "energy");

words.showDistro();

