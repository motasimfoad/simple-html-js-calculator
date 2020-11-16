var display_value = "";
var display_string;
var splited_string;
var result;
var flag = false;

window.onload = function (){
   var year = new Date().getFullYear();
   document.getElementById("footer_year").innerHTML = year;
   document.getElementById("display_number").innerHTML = display_value;
};

function display(data){
      display_value = data; 
      if (flag==false) {
         document.getElementById("display_number").innerHTML+=display_value;
         display_string = document.getElementById("display_number").innerText; 
      }
      else{
         document.getElementById("display_number").innerHTML = display_value;
         display_string = document.getElementById("display_number").innerText;
         flag = false; 
      }
};

function clr(){
   display_value = " "
   document.getElementById("display_number").innerHTML = display_value;
};

function backspace() {
      flag = true;
      display_value = display_string.slice(0, -1);
      document.getElementById("display_number").innerHTML = display_value;
      display(display_value)
}

function solve(){
   try {
      result = eval(display_string);
      if (result!=undefined) {
         document.getElementById("display_number").innerHTML=result;
      }
   } catch (error) {
      document.getElementById("display_number").innerHTML="Syntax Error!!";
   }
  
      
   
}