function myUniversal() {
  document.querySelector("*").style.backgroundColor = "red";
}

function myType() {
  document.querySelector("h1").style.backgroundColor = "yellow";
}

function myClass() {
  document.querySelector(".container").style.backgroundColor = "blue";
}

function myId() {
  document.querySelector("#logo").style.backgroundColor = "green";
}

function myAttribute() {
  document.querySelector("a[target]").style.backgroundColor = "orange";
}

function myGroup() {
  document.querySelector("h2,h1").style.backgroundColor = "cyan";
}
