function reverse(str){
  var newWord = [];
  for(i=str.length-1; i>=0; i--){
    newWord += str[i];
  }
  console.log(newWord)
}
reverse("Hello World");
