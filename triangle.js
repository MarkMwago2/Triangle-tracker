function display() {
var length1 = parseInt(document.getElementById('length1').value);
var length2 = parseInt(document.getElementById('length2').value);
var length3 = parseInt(document.getElementById('length3').value);
if (length1 + length2 <= length3 || length2 + length3 <= length1 || length1 + length3 <= length2){
   alert("not a TRIANGLE");
}else if (length1===length2 && length2===length3 && length3===length1) {
  alert("this is an equilateral triangle");
}else if (length1===length2 || length2===length3 || length3===length1){
  alert("this is an isosceles");
}else{
   alert("this is a scalene traingle");
 }
}
