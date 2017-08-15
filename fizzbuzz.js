for (var i = 1; i <= 30; i++) {
  var answer = solveAnswer(i)
  console.log(answer);
}

function solveAnswer (number) {
  var divisble3 = i % 3 == 0
  var divisible5 = i % 5 == 0
  if (divisble3 && divisible5) {
    return 'fizz buzz'
  } else if (divisble3) {
    return 'fizz'
  } else if (divisible5) {
    return 'buzz'
  } else return number
}
