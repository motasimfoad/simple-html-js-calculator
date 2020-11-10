var display_value = "";
var display_string;
var splited_string;

window.onload = function (){
   var year = new Date().getFullYear();
   document.getElementById("footer_year").innerHTML = year;
   document.getElementById("display_number").innerHTML=display_value;
};

function display(data){
      display_value = data; 
      document.getElementById("display_number").innerHTML+=display_value;
      display_string = document.getElementById("display_number").innerText;  
};

function clr(){
   display_value = " "
   document.getElementById("display_number").innerHTML=display_value;
};

function string_to_array(){
   splited_string = display_string.split("");
   // var x;
   // splited_string.map(item => {
   //    switch (item) {
   //       case item<10:
   //          x = item;
   //          return console.log(x);

   //       case item<10:
   //          x = item;
           
   //       case item<10:
   //          x = item;
         
   //       default:
   //          break;
   //    }
   // })
}

function solve(){
  string_to_array();
  console.log(eval(display_string));
}