// Shadowing
function foo() {
  var bar
  quux = 5
  function zip() {
    var quux = 7
  }
}
