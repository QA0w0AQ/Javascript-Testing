# SD-150 Assignment #2

Your solution should contain 1 spec file and 1 src file which contains the object and functions, along with the the other files required by Jasmine.

You should submit upload your assignment to a new Git repository and send a link to your repository to me, via email, no later than 8:45 AM, Monday, May 28th, 2018

Any changes in your repository after the submission date will be disregarded.

See [Assignment #2](https://github.com/jniziol/Javascript-Testing/blob/master/SD150%20Assignment%20%232%20-%20Rubric.pdf) rubric for the evaluation criteria.

NO LATE ASSIGNMENTS WILL BE ACCEPTED

# Your Shopping Cart

Write a new `ShoppingCart` object that contains the following methods:

1) `scan(product)` to add an item to the shopping cart. You can not have more than 5 items in your cart. This method will return a string saying "Your cart is full." if you try to add more than 5 items.
2) `remove(product)` to remove an item from the shopping cart. You cannot remove items from an empty cart, so when you cart is empty and you try to remove an item, return the following string - "Your cart is empty."
3) `discount(10)` percentage of discount to apply to your cart. You cannot discount items more than 50% or the manager will get mad. If you attempt to discount items more than 50%, it discount only 50%.
4) `total()` to return the total of all items in the cart, after any discounts have been applied.

The `product` passed to the `scan` and `remove` methods should be JavaScript object literals. They must have a `price` property and a `itemId` property. Here are a few example items, but I expect you to create your own.

```javascript
orangeJuice = {
  itemId: 1,
  price: 5.00,
}

butter = {
  itemId: 243,
  price: 6.05,
}

chocolate = {
  itemId: 1242,
  price: 4.75,
}
```
