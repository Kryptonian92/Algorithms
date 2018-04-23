// the following program prints every 3rd number, tells if its an even or odd,
// and tells if its a small or large number


for(i = 1; i<=50; i++){
  if(i%3===0){
    if(i%2===0){
      if(i>15){
        console.log(i + "This is a LARGE even number")
      }else{
        console.log(i + "This is a SMALL even number")
      }
    }
    if(i%2===1){
      if(i>15){
        console.log(i + "This is a LARGE odd number")
      }else{
        console.log(i + "This is a SMALL odd number")
      }
    }
  }
}

// the following program concacts the variables into "YOU A BITCH" and prints it 100x
//
// var ne = "YO"
// var five = "TC"
// var two = "U"
// var nine = "TEST"
// var three = "A"
// var six = "H"
// var get = "NOW"
// var four = "BI"
// var tie = " "
// var eight = "NEW"
// var word = ne + two + tie + three + tie + four + five + six
// for(i=0; i<100; i++){
// console.log(word)
// }
//
//
// var word = ["one", "two", "you", "Test", "Yo", "Micah", "Bitch", " "];
// var test = []
// for(i=1; i<10; i++){
//   test.push(word[4] + word[7] + word[5]+ word[7] + word[2] + word[7] + word[6])
// }
// console.log(test)
