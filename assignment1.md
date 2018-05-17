# SD150 Assignment 1

Your solution should contain 1 spec file and 1 file which contains the functions, along with the the other files required by Jasmine.

You should submit upload your assignment to a new Git repository and send a link to your repository to me, via email, no later than 8:45 AM, Tuesday, May 22nd, 2018

Any changes in your repository after the submission date will be disregarded. 

See [Assignment #1 rubric](https://github.com/jniziol/Javascript-Testing/blob/master/SD150%20Assignment%20%231%20-%20Rubric.pdf) for the evaluation criteria.

**NO LATE ASSIGNMENTS WILL BE ACCEPTED**


## 1

Given the following JavaScript function

```javascript
const positiveSum = (numbers) => {
  let sum = 0;
	
	for(const number of numbers) {
		if(number > 0){
			sum += number;
		}
	}
	
  return sum;
}
```

Write a series of unit tests that will validate the following assumptions:

1. When the numbers are all positive, it should return the sum of all the numbers
2. When there is a negative number in the provided array, it should not be included as part of the sum
3. When the provided array is empty, it should return a sum of 0
4. When the provided array is all negative numbers, it should return a sum of 0

## 2

Given the following JavaScript function

```javascript
const isDivisible = (number, divisorA, divisorB) => number % divisorB === 0 && number % divisorA === 0
```

Write a series of unit tests that will validate the following assumptions:

1. When a number is divisible by both of the provided divisors, it should return true.
2. When the number is smaller then both the provided divisors, it should return false.
3. When the number is not divisible by only one of the provided divisors it should return false.
4. When the number is not divisible by any of the provided divisors it should return false.

## 3

Given the following JavaScript function

```javascript
const solution = (str) => str.split('').reverse().join('')
```

Write a series of unit tests that will validate the following assumptions:

1. When there is only 1 characters in the string, it returns itself
2. When there are multiple characters in the string it returns the string, reversed.
3. When there are no characters in the string, it returns empty string.

## 4

Write at least 3 of your own _unique_ unit tests for the following function.

```javascript
const reverseSeq = (n) => {
  let answer = [];          //intialize an array
  
  for (let i=n; i>0; i--){  //loop down from n to 1
    answer.push(i);         //push each i to the answer array
  }
  
  return answer;            //return answer;
};
```

