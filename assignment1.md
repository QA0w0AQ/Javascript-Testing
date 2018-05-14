# SD150 Assignment 1

[Dropbox](https://www.dropbox.com/request/9KQvyk0EvEgJUN1aNvE4)

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
}
```

Write a series of unit tests that will validate the following assumptions:

1. When a number is divisible by both of the provided divisors, it should return true.
2. When the number is larger then both the provided divisors, it should return false.
3. When the number is not divisible by only one of the provided divisors it should return false.
4. When the number is not divisible by any of the provided divisors it should return false.

## 3

Given the following JavaScript function

```javascript
const solution => (str) str.split('').reverse().join('')
```

Write a series of unit tests that will validate the following assumptions:

1. When there is only 1 characters in the string, it returns itself
2. When there are multiple characters in the string it returns the string, reversed.
3. When there are no characters in the string, it returns empty string.
