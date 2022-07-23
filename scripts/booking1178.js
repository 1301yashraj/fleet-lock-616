let booking_ls = JSON.parse(localStorage.getItem("book"));
console.log(booking_ls)

booking_ls.forEach(el => {
  let title = document.getElementById("title_h3");
title.innerText = el.title;

let country = document.getElementById("ins_country")
country.innerText = el.country;

let city = document.getElementById("ins_city");
city.innerText = el.city;

let avatar = document.getElementById("img_1");
avatar.src = el.img_url

let property_id = document.getElementById("ins_property")
property_id.innerText = el.refid;

let property_type = document.getElementById("priV_button");
if(el.type_of_property==undefined){
 let Resort = property_type.innerText = "Resort";
  document.getElementById("typepropery").innerText = property_type.innerText;
}else{
  let Resort = property_type.innerText = el.type_of_property;
  document.getElementById("typepropery").innerText = property_type.innerText;
}

console.log(el.type_of_property)
let bathroom = document.getElementById("bathroom_dom");
bathroom.innerText = el.bathroom;


let max_guest = document.getElementById("max_guest_dom");
max_guest.innerText = el.maxguests;
document.getElementById("max_guest_button").innerText = `${max_guest.innerText} Max guest`;


let address = document.getElementById("title_location");
address.innerText = `${el.city} | ${el.country}`


let ammenit_1 = document.getElementById("amm1");
ammenit_1.innerText = el.Ammenities[0]


let ammenit_2 = document.getElementById("amm2");
ammenit_2.innerText = el.Ammenities[1]

let ammenit_3 = document.getElementById("amm3");
ammenit_3.innerText = el.Ammenities[2]

let ammenit_4 = document.getElementById("amm4");
if(el.Ammenities[3]==undefined){
  ammenit_4.innerText= "Kitchen"
}else{
  ammenit_4.innerText = el.Ammenities[3]
}




let url = `https://maps.google.com/maps?q=${el.city}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

let mapframe = document.getElementById("gmap_canvas")
mapframe.src = url;


let cost_p_night = document.getElementById("cost_per_night");
  cost_p_night.innerText = `RS ${el.costpernight}`;
  document.getElementById("cost_pe_total").innerText = `RS ${el.costpernight}`;
  let rate_num=el.costpernight;
rate_num = +rate_num;

console.log((rate_num))

let instant = document.getElementById("instant_button");
instant.addEventListener("click",()=>{

  
  let no_o_guest =  +document.getElementById("guests").value
 
  

  // console.log(no_o_guest)
   let start_date = document.getElementById("from_date").value;
   let end_date = document.getElementById("end_date").value;
 

   let obj={
    city: el.city,
    country :el.country,
    title: el.title,
    img_url: el.img_url,
    guest: no_o_guest,
    bathroom: el.bathroom,
    bedroom: el.bedroom,
    type: el.type_of_property,
    unit: 1,
    maxguests: el.maxguests,
    start_date: start_date,
    end_date: end_date,
    refid:el.refid,
    total: rate_num*no_o_guest,
   };
   let booking_done = [];
   booking_done.push(obj);
   localStorage.setItem("bookingdone", JSON.stringify(booking_done))
  console.log(booking_done)

  /// add location here praful
  window.location.href="./checkoutPD.html"

})









});

