let frm = document.querySelector("form");
 let arrayOfHotels =JSON.parse(localStorage.getItem("hotels"))||[]
console.log(arrayOfHotels)

class hotelinfo{
constructor(city,country,title,img_url,type_of_property,bedroom,bathroom,maxguests,costpernight,refid ,...Ammenities)
{
    this.city=city
    this.country=country
    this.title=title
    this.img_url=img_url
    this.type_of_property=type_of_property
    this.bedroom=bedroom
    this.bathroom=bathroom
    this.maxguests=maxguests
    this.costpernight=costpernight
    this.refid=refid
    this.Ammenities=Ammenities
}
}
 frm.addEventListener("submit", makeobject)

 function makeobject(){
    event.preventDefault();
let city = frm.city.value
let country=frm.country.value
let title=frm.title.value
let img_url=frm.img_url.value
let type_of_property=frm.type_of_property.value
let bedroom=frm.bedroom.value
let bathroom =frm.bathroom.value
let maxguests=frm.maxguests.value
let costpernight=frm.costpernight.value
let refid=frm.refid.value

let am =document.querySelectorAll(".Ammenities");
let arr=[];

am.forEach((x)=>{
  if(x.checked)
  arr.push(x.value);
  
})

let hotelinfos =new hotelinfo(city,country,title,img_url,type_of_property,bedroom,bathroom,maxguests,costpernight,refid,arr);

console.log(hotelinfos)

arrayOfHotels.push(hotelinfos)

localStorage.setItem("hotels",JSON.stringify(arrayOfHotels))
window.location.reload()
 }