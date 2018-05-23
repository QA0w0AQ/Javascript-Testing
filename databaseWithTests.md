## Testing Exercise

Create a simple class - Database. It should store integers. You should set the initial integers stored in the Database by constructor. Store them in array. Your Database should have a functionality to add, remove and fetch all stored items. Your task is to test the class. In other words, create the class and write tests, so you are sure its methods are working as intended.

Constraints
* The database cannot store more than 16 integers.
* The `Add` method, should add an element at the end of the array.
* If there are 16 elements in the Database and you try to add 17th, return a string "Database is full"
* The `Remove` operation, should only remove the element at the last index. 
* If you try to remove element from empty Database return a string "Database is empty"
* The database constructor should take a list of integers only, and store them in the array
* The `Fetch` method should take 2 parameters and return all the elements starting at element `a` and ending at element `b`
