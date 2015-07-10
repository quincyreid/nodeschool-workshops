# Scope, Chains and Closures

## Scopes

Lexical Scope is created within a function. In the example below `var x` is lexically scoped. Ex.
````
function () {
  var x
}
````

### Scope Chains

Scopes can be nested within each other. All nested scopes follow the same rule: Each nested inner scope has access to
outer scope variables, but NOT vice-versa. For the example below the function inner() has access to `var in` and `var out`. Function outer() has access to `var out` only. Ex.
````
function outer () {
  var out
  function inner () {
    var in
  }
}
````

## Global Scope

The global scope is the scope outside of a function and gives access to all functions. In the example below `var global` is outside of function crisp() so now crisp has access to `var global`.
````
var global = 2

function crisp () {
  var crispy = 1 + global // Returns 3 since we have access to the globally scoped variable
}
````

## Shadowing

Shadowing is when a variable is being defined in two functions: outer function and nested inner function. The variable in the inner function shadows the variable from the outer function and only has access to the inner function. In the example below, `var foo` in the function inner() is shadowing `var foo` from the function outer().
````
function outer () {
   var foo = 2;
   function inner () {
      var foo = 3;
   }
}
````

## Closures

Closures occur when a variable is accessed from it's parent scope. The child scope closes over the variable referenced from it's parent scope. In the example below the zip() closes over bar from its parent scope foo().
````
function foo() {
  var bar
  function zip() {
    bar = true
  }
  return zip
}
````
## Garbage Collection

Garbage Collection is the process automatically managing when/if to release any allocated memory. In the example below the variable bar is marked as reachable memory since it is used in both functions. Once variable bar is no longer required it can be marked for garbage collection.
````
function foo() {
  var bar
  function zip() {
    bar = true
  }
}
````
