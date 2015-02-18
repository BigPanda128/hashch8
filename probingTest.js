load("linearprobing.js");

var lTable = new HashTable();

lTable.put("hello", "world");

print(lTable.get("hello"));

lTable.showDistro();
