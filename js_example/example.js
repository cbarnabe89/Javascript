var fname = "Molly";
var csign = "Montague House";
var tiles = csign.length;
var subtotal = csign.length * 5;
var shipping = 7;
var total = subtotal + shipping;

var elname = document.getElementById("name");
elname.textContent = "Howdy! " + fname + " please check your order!";

var elcsign = document.getElementById("csign");
elcsign.textContent = csign;

var eltiles = document.getElementById("tiles");
eltiles.textContent = tiles;

var elsubtotal = document.getElementById("subtotal");
elsubtotal.textContent = "$" + subtotal;

var elshipping = document.getElementById("shipping");
elshipping.textContent = "$" + shipping;

var eltotal = document.getElementById("total");
eltotal.textContent = "$" + total;