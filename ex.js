function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  

  function MyFunction() {
    
    
    let x=document.getElementById("myDropdowns").style.visibility||"hidden";
   
 if(x=="hidden"){
    document.getElementById("myDropdowns").style.visibility = "visible";
 }else{
    document.getElementById("myDropdowns").style.visibility = "hidden";
 }
  }
 
    

  // function MyFunctionlast(){
  //   let y =document.getElementById("hamline").style.visibility
  //   if( y=="hidden"){
  //     document.getElementById("hamline").style.visibility = "visible";

  //   }else{
  //     document.getElementById("hamline").style.visibility = "hidden"
  //   }
  // }