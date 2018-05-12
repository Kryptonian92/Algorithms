// The following are different versions of fibonacci

var fibonacci_series = function (n)
{
  if (n===1)
  {
    return [0, 1];
  }
  else
  {
    var s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};
 console.log(fibonacci_series(8));


var i;
var fib = []; // Initialze array

fib[0] = 0;
fib[1] = 1;
for(i=2; i<10; i++)
{
  //next fib number = prev + one
  fib[i] = fib[i-2] + fib[i-1];
  fib.push(i);
}
console.log(fib);
