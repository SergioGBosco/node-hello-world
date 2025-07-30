let message

if (process.argv[2]) {
  message = process.argv[2] + `` + process.argv[3]
}

else {
  message = `Rimane Hello word `
}
console.log(process.argv)
console.log(message)