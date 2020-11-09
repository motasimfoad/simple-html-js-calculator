window.onload = function (){
   var year = new Date().getFullYear();
   document.getElementById("footer_year").innerHTML = year;
   function display(data){
      document.getElementById("display").value+=data+" ";
   };
   };

