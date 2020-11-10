var display_value = 0;

window.onload = function (){
   var year = new Date().getFullYear();
   document.getElementById("footer_year").innerHTML = year;
   document.getElementById("display_number").innerHTML=display_value;
};

function display(data){
      display_value = data; 
      document.getElementById("display_number").innerHTML+=display_value;
      console.log(display_value);
   };

function clear(){
   display_value = ""
}