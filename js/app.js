var items = []; //global variable

function inputFunction() {
  boxvalue = document.getElementById("box").value; //local variable

  if (boxvalue != "") {
    items.push(boxvalue);
    document.getElementById("box").value = "";
    console.log(items);
    //   } else {
    //     document.getElementById("result").innerHTML = items;
  }
}

function ouputFunction() {
  document.getElementById("result").innerHTML = items;
}