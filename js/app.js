var display_value = "";
var display_string;
var splited_string;
var result;
var flag = false;
var dummyVar = "";

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

function dummy(a) {
   switch (a) {
      case "Math.PI":
         console.log('pi');
         break;
      
      case 'Math.sqrt(':
         console.log('root');
         break;
   
      default:
        console.log(a);
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
      result = parseFloat(result.toFixed(8));
      if (result!=undefined) {
         document.getElementById("display_number").innerHTML=result;
       }
   } catch (error) {
      document.getElementById("display_number").innerHTML="Syntax Error!!";
   }
  
      
   
}