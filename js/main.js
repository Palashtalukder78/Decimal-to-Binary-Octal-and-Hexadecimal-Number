const result1 = document.getElementById("result1");
const result2 = document.getElementById("result2");
const result3 = document.getElementById("result3");
const submit = document.getElementById("submit");

function binary(e){
  e.preventDefault();

  const number = document.getElementById("number").value;
  if(number == "" ){
    alert("Please Enter a Number");
  }else if(number < 0){
    alert("Please enter a Possitive Number");
  }else{
    result1.style.visibility = "visible";
    result2.style.visibility = "visible";
    result3.style.visibility = "visible";
  }

  //Converting
  binary = Number(number).toString(2) +  " [Binary]";
  octal = Number(number).toString(8) + " [Octal]";
  hexaDecimal = Number(number).toString(16)+ " [HexaDecimal]";
  result1.innerText = binary;
  result2.innerText = octal;
  result3.innerText = hexaDecimal;
}

submit.addEventListener("click", binary);
