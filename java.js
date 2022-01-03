function myFunction() {
    var x = document.createElement("INPUT");
    x.setAttribute("type", "number");
    x.setAttribute("value", "12345");
    document.body.appendChild(x);
}
//convert number to a string, then extract the first digit
var one = String(x).charAt(0);

// convert the first digit back to an integer
var stage = Number(one); 
console.log(stage);