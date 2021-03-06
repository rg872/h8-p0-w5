function graduates (students) {
  var kelas = [];
  var result = new Object();
  for (var i = 0; i < students.length; i++) {
    if (students[i].score > 75) {
      if (i > 0) {
        var check = true;
        for (var x = 0; x < kelas.length; x++) {
          if (kelas[x] === students[i].class) {
            check = false;
            result[kelas[x]].push({ name: students[i].name, score: students[i].score});
            break;
          }
        }
        if (check === true) {
          kelas.push(students[i].class);
          result[students[i].class] =  [{ name: students[i].name, score: students[i].score}];
        }
      } else {
        kelas.push(students[0].class);
        result[students[0].class] =  [{ name: students[0].name, score: students[0].score}];
      }
    }
  }

  return result;
}

console.log(graduates([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(graduates([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }


console.log(graduates([])); //{}
