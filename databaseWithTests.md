## Testing Exercise

Create a simple class - Database. It should store integers. You should set the initial integers stored in the Database by constructor. Store them in an array. Your Database should have a functionality to add, remove and fetch all stored items. Your task is to test the class. In other words, create the class and write tests, so you are sure its methods are working as intended.

Constraints
* The database cannot store more than 16 integers.
* The `add` method, should add an element at the end of the array.
* If there are 16 elements in the Database and you try to add 17th, return a string "Database is full"
* The `remove` operation, should only remove the element at the last index. 
* If you try to remove element from empty Database return a string "Database is empty"
* The database constructor should take a list of integers, and store them in the array
* The `fetch` method should return the list of all the stored items.
