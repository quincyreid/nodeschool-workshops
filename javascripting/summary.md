# Javascripting

## Data Types
#### Variables

Variables - Allows you to pass a value. It is defined by using `var [variable name] = [value]`

#### Strings

Strings - A string is any value surrounded by quotes. Single or double quotes may be used. Ex. `var string = 'I am a string'`

**Useful functions for strings:**
* .length - returns the length of the string. `string.length`

Ex.
````
var string = 'football'
console.log(string.length) // Returns a value of 8
````

* replace() - allows you to replace a string or part of the string with another value
Ex.
````
var string = 'This is an object'
string.replace('an object', 'a string') // Returns an updated string - 'This is a string'
````

#### Numbers

Numbers - Numbers can be integers, decimals or floats. Ex. `var number = 7`

**Math object**

The Math object has built in properties and methods for mathematical constants and functions.
One useful method is `Math.round(x)` which rounds a decimal to the nearest whole number.

Ex.
`Math.round(3.2) // This will round down to 3`

**Useful functions for numbers:**

* toString() - Allows you to convert a number to a string using `number.toString()`

#### Arrays

Arrays - A list of values. Arrays can have a mix of data types. Ex. `var array = ['hello', 1, 'world']``

**Useful functions for numbers:**

filter() - Allows you to filter certain values from an array.  Ex.
````
var numbers = [1, 2, 3, 4, 5, 6, 7]
var total = 0
var filtered = numbers.filter(function divisibleByThree (number) {
  return number % 3 === 0
})

console.log(filtered) // Returns [ 3, 6 ]
````
#### Functions

Functions - A function is a block of code that takes input, processes that input and then produces output. The input for the function is called an argument and can take any name. There can be as many arguments as you would like to execute. A function is only executed when called.
Ex.
````
function thisIsAFunction (x) {
  return x
}

thisIsAFunction(5) // This will return 5
````

#### Objects

Objects - A list of values that are identified by keys. Ex. `var object = { key1: 'string value', key2: 2 }`

To access the first value of the example object, you would use the following syntax: `object[key1] = 'string value'`
You can also use dot notation which would be `object.key1 = 'string value'`.

#### Control Flow

**Conditional Statements**

If statements are used to alter the control flow of a program, based on a specified boolean condition.
It is formed by a logic statement that is either true or false. An else can be used as another option if the logic statement is false. See the example below.
````
if (logic statement) {
  // Do something
} else {
  // Do something else
}
````

#### Loops

The for statement creates a loop using three expressions: initialization, condition and final expression. The initialization initializes the variable with the number to start at. The condition is what you compare the variable to in order
