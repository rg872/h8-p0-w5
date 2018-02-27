function meleeRangedGrouping (str) {
  var ranged = [];
  var melee = [];
  var result = [];
  if (typeof str !== 'undefined' && str !== null && str.length !== null && str.length > 0) {
    str = str.split(',');
    for (var i = 0; i < str.length; i++) {
      if (/ranged/gi.test(str[i]) === true) {
        ranged.push(str[i].replace(/-ranged/gi, ''));
      } else {
        melee.push(str[i].replace(/-melee/gi, ''));
      }
    }
  } else {
    return result;
  }

  result = [ranged, melee];
  return result;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []
