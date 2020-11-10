var display_value = "";

window.onload = function (){
   var year = new Date().getFullYear();
   document.getElementById("footer_year").innerHTML = year;
   document.getElementById("display_number").innerHTML=display_value;
};

function display(data){
      display_value = data; 
      document.getElementById("display_number").innerHTML+=display_value;
      
};

function clr(){
   display_value = " "
   document.getElementById("display_number").innerHTML=display_value;
};