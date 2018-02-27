function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  var result = [];

  for (var i = 0; i < arrPenumpang.length; i++) {
    var origin;
    var destination;
    for (var x = 0; x < rute.length; x++) {
      if (rute[x] === arrPenumpang[i][1]) {
        origin = x;
      } else if (rute[x] === arrPenumpang[i][2]) {
        destination = x;
      }
    }

    result.push({ penumpang: arrPenumpang[i][0], naikDari: arrPenumpang[i][1], tujuan: arrPenumpang[i][2],
      bayar: (destination - origin) * 2000 });
  }

  return result;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
