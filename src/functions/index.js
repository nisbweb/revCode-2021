// Logic for Question 1
const Ques1 = (data) => {
  return data.split("1").length - 1;
};

// Logic for Question 1
const Ques2 = (data) => {
  var sieve = [],
    i,
    j,
    count = 0;
  for (i = 2; i <= data; ++i) {
    if (!sieve[i]) {
      // i has not been marked -- it is prime
      count += 1;
      for (j = i << 1; j <= data; j += i) {
        sieve[j] = true;
      }
    }
  }
  return count;
};

// Logic for Question 1
const Ques3 = (data) => {
  data = data.split(",");
  let returnArr = [];
  data.forEach((item) => {
    returnArr.push((parseInt(item) / data.length) | 0);
  });
  return returnArr.join(",");
};

// Logic for Question 1
const Ques4 = (data) => {
  var vowels = ["a", "e", "i", "o", "u"];
  if (vowels.includes(data[0])) {
    return data.split("").reverse().join("");
  }

  var returnString = "";
  for (var i = 0; i < data.length; i++) {
    var char = data[i].charCodeAt() + 1;
    if (char > 122) {
      char = 97;
    }
    returnString += String.fromCharCode(char);
  }
  return returnString;
};

// Logic for Question 1
const Ques5 = (data) => {
  var vowels = ["a", "e", "i", "o", "u"];
  var countConsonants = 0;
  var countVowels = 0;
  for (var letter of data) {
    if (vowels.includes(letter)) {
      countVowels += 1;
    } else {
      countConsonants += 1;
    }
  }
  return countConsonants - countVowels;
};

// Logic for Question 1
const Ques6 = (data) => {
  var primeNumbers = getPrimes(data.length);

  var returnSum = 0;
  for (var i = 0; i < data.length; i++) {
    if (primeNumbers.includes(i)) {
      returnSum += data[i].charCodeAt();
    }
  }
  return returnSum;
};

function getPrimes(max) {
  var sieve = [],
    i,
    j,
    primes = [];
  for (i = 2; i <= max; ++i) {
    if (!sieve[i]) {
      // i has not been marked -- it is prime
      primes.push(i);
      for (j = i << 1; j <= max; j += i) {
        sieve[j] = true;
      }
    }
  }
  return primes;
}

// Logic for getting ouput of code
const OutPut = (data) => {};

const expo = {
  ques1: Ques1,
  ques2: Ques2,
  ques3: Ques3,
  ques4: Ques4,
  ques5: Ques5,
  ques6: Ques6,
  output: OutPut,
};

export default expo;
