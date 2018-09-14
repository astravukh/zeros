module.exports = function getZerosCount(number) {
  // your implementation
  var count5 = 0;
  for(var i=1; i<=number; i++){    
    var j = i;
    while(j%5 == 0){
      j = j/5;
      count5++;
    }
  }
  return count5;
}
