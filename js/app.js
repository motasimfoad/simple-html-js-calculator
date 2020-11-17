var display_value = "";
var display_string;
var display_string_back;
var result;
var flag = false;
var display_back = "";

window.onload = function (){
   var year = new Date().getFullYear();
   document.getElementById("footer_year").innerHTML = year;
   document.getElementById("display_number").innerHTML = display_value;
   document.getElementById("display_back").innerHTML = display_back;
};

function display(data1, data2){
      display_value = data1; 
      display_back = data2;
      if (flag==false) {
         document.getElementById("display_number").innerHTML+=display_value;
         display_string = document.getElementById("display_number").innerText;
         document.getElementById("display_back").innerHTML+=display_back;
         display_string_back = document.getElementById("display_back").innerText;
      }
      else{
         document.getElementById("display_number").innerHTML = display_value;
         display_string = document.getElementById("display_number").innerText;
         document.getElementById("display_back").innerHTML = display_back;
         display_string_back = document.getElementById("display_back").innerText;
         flag = false; 
      }
};

function clr(){
   display_value = " "
   document.getElementById("display_number").innerHTML = display_value;
   display_back = " "
   document.getElementById("display_back").innerHTML = display_back;
};

function backspace() {
      flag = true;
      display_value = display_string.slice(0, -1);
      display_back = display_string_back.slice(0, -1);
      document.getElementById("display_number").innerHTML = display_value;
      document.getElementById("display_back").innerHTML = display_back;
      display(display_value, display_back);
}

function solve(){
   try {
      result = eval(display_string_back);
      result = parseFloat(result.toFixed(8));
      if (result!=undefined) {
         document.getElementById("display_number").innerHTML=result;
       }
   } catch (error) {
      document.getElementById("display_number").innerHTML="Syntax Error!!";
   }
}