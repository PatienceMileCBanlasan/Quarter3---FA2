function sumfunction() {
    x = document.getElementById("text1").value;
    y = document.getElementById("text2").value;
    z = sumnum(x,y);
    document.getElementById("demo").innerHTML = "The sum is " + z;
}
function sumnum(n1,n2) {
    return parseFloat(n1) + parseFloat(n2);
}
function diffunction() {
    x = document.getElementById("text1").value;
    y = document.getElementById("text2").value;
    z = difnum(x,y);
    document.getElementById("demo").innerHTML = "The difference is " + z;
}
function difnum(n1,n2) {
    return parseFloat(n1) - parseFloat(n2);
}
function prodfunction() {
    x = document.getElementById("text1").value;
    y = document.getElementById("text2").value;
    z = prodnum(x,y);
    document.getElementById("demo").innerHTML = "The product is " + z;
}
function prodnum(n1,n2) {
    return parseFloat(n1) * parseFloat(n2);
}
function quotfunction() {
    x = document.getElementById("text1").value;
    y = document.getElementById("text2").value;
    z = quotnum(x,y);
    document.getElementById("demo").innerHTML = "The quotient is " + z;
}
function  quotnum(n1,n2) {
    return parseFloat(n1) / parseFloat(n2);
}
function remfunction() {
    x = document.getElementById("text1").value;
    y = document.getElementById("text2").value;
    z = remnum(x,y);
    document.getElementById("demo").innerHTML = "The remainder is " + z;
}
function remnum(n1,n2) {
    return parseFloat(n1) % parseFloat(n2);
}