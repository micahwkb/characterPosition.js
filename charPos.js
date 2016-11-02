var array = process.argv.slice(2);

if (!array[0]) console.log("Please provide some text!");
else console.log(countLetters(array));

function iterateAndPush(a, b, c) {
      a ++;
      b.push(c);
      return a, b, c;
    }

function countLetters(array) {
  var countStats = {};
  var string = array.join("").split("");

  string.forEach(function(char, index) {
    if (!countStats.hasOwnProperty(char)) {
      countStats[char] = {count: 1, positions: [index]};
    } else {
      countStats[char].count ++;
      countStats[char].positions.push(index);
    }
  });
  return countStats;
}