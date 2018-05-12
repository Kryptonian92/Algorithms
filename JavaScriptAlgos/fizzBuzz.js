// The following algorithm returns "Fizz Buzz" if a number is a multiple
// or 3 and 5. If just 3, it returns buzz. If just 5, it returns 5.
function fizz(num){
  if(num%5===0 && num%3===0){
    console.log("Fizz Buz")
  }else if (num%5===0){
    console.log("Fizz")
  }else if (num%3===0){
    console.log("Buzz")
  }
}
fizz(15)
