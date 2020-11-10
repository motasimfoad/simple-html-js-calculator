var display_value = "";

window.onload = function (){
   var year = new Date().getFullYear();
   document.getElementById("footer_year").innerHTML = year;
   document.getElementById("display_number").innerHTML=display_value;
};

function display(data){
      display_value = data; 
      document.getElementById("display_number").innerHTML+=display_value;
      var dummy = dummy+data+"";  
       console.log(dummy);
};

function clr(){
   display_value = " "
   document.getElementById("display_number").innerHTML=display_value;
};