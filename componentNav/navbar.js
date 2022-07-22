let navbar =() =>{
     return `

     <div id="nav1">
    
     <a href="./index.html"><img src="https://d2v8elt324ukrb.cloudfront.net/static/riotuikit/images/logo.c72056a22f91.png" alt="" id="logo"></a>

    </div>

    <div id="nav2">
     
    <div class="dropdown">

       <button onclick="myFunction()" class="dropbtn"> <img src="https://dqcgrsy5v35b9.cloudfront.net/cruiseplanner/assets/img/icons/login-w-icon.png" alt=""></button>
       <div id="myDropdown" class="dropdown-content">
       <a href="./signIn_Login.html">Sign In</a>
       <a href="./signUp.html">Sign Up</a>
        </div>
    </div>

    
    <div class="dropdown">
   
        <button onclick="MyFunction()"  class="dropbtn">INR ^</button>
        <div id="myDropdowns" ; class="dropdown-content">
     
        <div>
            <a href="#">AED</a>
            <a href="#">CAD</a>
            <a href="#">DKK</a>
            <a href="#">HKD</a>
            <a href="#">INR</a>
            <a href="#">NOK</a>
            <a href="#">PLN</a>
            <a href="#">THB</a>
            <a href="#">USD</a>

        </div>
        <div>
          <a href="#">AUD</a>
          <a href="#">CHF</a>
          <a href="#">EUR</a>
          <a href="#">HUF</a>
          <a href="#">JPY</a>
          <a href="#">NZD</a>
          <a href="#">SEK</a>
          <a href="#">TRY</a>
        </div>

        <div>
            <a href="#">BRL</a>
            <a href="#">CZK</a>
            <a href="#">GBP</a>
            <a href="#">ILS</a>
            <a href="#">MXN</a>
            <a href="#">PHP</a>
            <a href="#">SGD</a>
            <a href="">TWD</a>

        </div>
     
    </div>

 
    <div class="dropdown">

          <button onclick="MyFunctionlast()" class="dropbtn"> 
               <img src="https://icon-library.com/images/three-bar-menu-icon/three-bar-menu-icon-3.jpg" alt=""></button>

          <div id="hamline" class="dropdown-content" >

          <a href="#"><h3>ARE YOU A PROPERTY OWNER/MANAGER?</h3></a>
          <a href="#"><p> List New Property</p></a>
          <a href="#"><p>Sign In To Your Dashboard</p></a>
          <hr>
          <a href="#"><h3>HOLIDAY HOMES FOR SALE</h3></a>
          <a href="#"><p>Tripvillas Managed</p></a>
          <a href="#"><p> Homes from A grade developers. Rentals guaranteed</p></a>
          <a href="#"><p> Marketplace</p></a>
          <a href="#"><p>See what homes are up for sale from different property owners.</p></a>
          <hr>
          <a href="#"><p>About Us</p></a>
          <a href="#"><p> Privacy Policy</p></a>
          <a href="#"><p>Terms of Use</p></a>
          <a href="#"><p>FAQs</p>  </a>
          <a href="#"><p> Contact Us</p></a>
          <hr>
          <a href="#"><p> © Tripvillas Pte Ltd</p></a>
            
        </div>
 
    </div>
    
</div>
 `;
};

export default navbar;

