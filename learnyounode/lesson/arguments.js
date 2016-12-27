let sum = parseInt(process.argv[2], 10)
if (process.argv.length > 2) {
  for (let i = 3; i < process.argv.length; i++) {
    sum += parseInt(process.argv[i], 10)
  }
}
console.log(sum)
