# What is the difference between .map(), .every(), and .forEach()

**The difference is in the return values.**

- .map() returns a new Array of objects created by taking some action on the original item.

- .every() returns a boolean - true if every element in this array satisfies the provided testing function. An important difference with .every() is that the test function may not always be called for every element in the array. Once the testing function returns false for any element, no more array elements are iterated. Therefore, the testing function should usually have no side effects.

- .forEach() returns nothing - It iterates the Array performing a given action for each item in the Array.
