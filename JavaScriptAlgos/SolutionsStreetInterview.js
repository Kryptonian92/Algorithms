function test(str){
  var newWord=""
  var oldWord=""
  for(var j=0; j<str.length; j++){
    if(str[j]!=" "){
      oldWord += str[j];
    }
  }
  for(var i=str.length-1; i>=0; i--){
    if(str[i]!=" "){
      newWord += str[i];
    }
  }
  console.log (newWord);
  if(newWord === oldWord){
    console.log("Palindrome!")
  }else{
    console.log("Sorry not a Palindrome!")
  }
}
test("race car");
