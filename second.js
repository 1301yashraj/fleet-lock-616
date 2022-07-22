document.querySelector("#btn1").addEventListener("click", myfun1)
let cont1=document.querySelector("#cont1")
   

import {sendData,sendTypeData} from "./component/cities.js"


cont1.innerHTML=sendData();

function myfun1(){
//    cont1.innerHTML=null;
   cont1.innerHTML=sendData();
}
document.querySelector("#btn2").addEventListener("click", myfun2)
 

function myfun2(){
    cont1.innerHTML=null;
    cont1.innerHTML=sendTypeData();
}
 let websiteData=[
    {
    Ammenities: ['Swimming Pool', 'Air Conditioner', 'Internet', 'Television', 'Parking', 'Housekeeping', 'Washing Machine', 'Refrigerator', 'Spa', 'Cook On'],
    bathroom: "4",
    bedroom: "5",
    city: "Goa",
    costpernight: "10000",
    country: "India",
    img_url: "https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/55791061/ed5eb2012c2711e8b2ea0a92a929817e_watermarked_image_1024.jpeg",
    maxguests: "10",
    refid: "200",
    title: "Jomtien Paradise Villa | 5 Bed Property With Jet Pool And Sauna In Goa",
    type_of_property: "Villa",
    Rating:4,
    Rated:"Excelent Stay",
    },
    {
    Ammenities:['Swimming Pool', 'Air Conditioner', 'Internet', 'Television'],
    bathroom: "5",
    bedroom: "5",
    city: "Goa",
    costpernight: "80000",
    country: "India",
    img_url: "https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/46007896/0b5364faa2c711e783140a92a929817e_watermarked_image_1024.jpeg",
    
    maxguests: "10",
    refid: "201",
    title: "Baan Chokdee | 5 Bed Pool Villa Near Jomtien Beach In South Goa",
    type_of_property: "Villa",
    Rating:5,
    Rated:"Pleasent Stay",
    },
    {
    Ammenities:['Swimming Pool', 'Air Conditioner', 'Internet', 'Television', 'Parking', 'Spa'],
    bathroom: "2",
    bedroom: "2",
    city: "Goa",
    costpernight: "4000",
    country: "India",
    img_url: "https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/36952294/7819757aa2c511e783140a92a929817e_watermarked_image_1024.jpeg",
    maxguests: "5",
    refid: "202",
    title: "Pratumnak Regal Villa | 2 Bed Pool Home At Pratumnak Hill In Goa",
    type_of_property: "Hotel/Delux",
    Rating:"3",
    Rated:"Good for Stay",
    },
    {
    Ammenities:['Internet', 'Television', 'Parking'],
    bathroom: "1",
    bedroom: "2",
    city: "Goa",
    costpernight: "3000",
    country: "India",
    img_url: "https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/72289717/255_watermarked_image_1024.jpeg",
    maxguests: "4",
    refid: "203",
    title: "Boutique Resort For Rent - Pepper Villa (2 Bedrooms) Stay",
    type_of_property: "Farm",
    Rating:"5",
    Rated:"Excelent Stay",
    },
    {
    Ammenities:['Swimming Pool', 'Air Conditioner', 'Internet', 'Parking', 'Spa', 'Cook On'],
    bathroom: "2",
    bedroom: "3",
    city: "Goa",
    costpernight: "5000",
    country: "India",
    img_url: "https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/32358195/82ededb7a2ca11e783180a92a929817e_watermarked_image_1024.jpeg",
    maxguests: "6",
    refid: "204",
    title: "Thammachat P3 Victoria | 3 Bedroom Pattaya Pool Villa In Bangsaray",
    type_of_property: "Home Stay",
    Rating:"4.5",
    Rated:"Pleasent Stay",
    },


    
      {
        Ammenities: [
          "Swimming Pool",
          "Air Conditioner",
          "Housekeeping",
          "Functional Kitchen",
          "Washing Machine",
          "Dish Washer",
        ],
        bathroom: "4",
        bedroom: "4",
        city: "goa",
        costpernight: "20000",
        country: "India",
        img_url:
          "https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/29525985/85be9537001f11e890160a8e1b1ce4da_watermarked_image_1024.jpeg",
        maxguests: "12",
        refid: "",
        title: "Luxury Villa With Private Swimming Pool",
        type_of_property: "Villa",
        Rating:"5",
        Rated:  "Peace belongs here",
      },
    
      {
        Ammenities: ["Internet", "Parking", "Refrigerator"],
        bathroom: "1",
        bedroom: "1",
        city: "goa",
        costpernight: "4000",
        country: "India",
        img_url:
          "https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/87277489/bn4a2377_watermarked_image_1024.jpeg",
        maxguests: "4",
        refid: "456",
        title: "",
        type_of_property: "Homestay",
        Rating:"4.5",
        Rated:"Relaxing",
      },{
        Ammenities: [
          "Air Conditioner",
          "Internet",
          "Television",
          "Parking",
          "Functional Kitchen",
          "Refrigerator",
          "Spa",
          "Cook On",
        ],
        bathroom: "2",
        bedroom: "2",
        city: "goa",
        costpernight: "8000",
        country: "India",
        img_url:
          "https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/20236617/d8d719d1038011ea92530a8e1b1ce4da_watermarked_image_1024.jpeg",
        maxguests: "4",
        refid: "791",
        title: "2 Bedroom Ac Villa",
        type_of_property: "Villa",
        Rating:"4",
    Rated:"Amazing Expeience here",
      },
      {
        Ammenities: [
          "Air Conditioner",
          "Internet",
          "Parking",
          "Housekeeping",
          "Functional Kitchen",
          "Dish Washer",
          "Refrigerator",
          "Gym",
          "Spa",
        ],
        bathroom: "3",
        bedroom: "3",
        city: "goa",
        costpernight: "7000",
        country: "India",
        img_url:
          "https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/82258333/p6050305_watermarked_image_1024.jpeg",
        maxguests: "8",
        refid: "654",
        title: "3 Bedroom Bungalow At Villa Venus In Candolim, Goa",
        type_of_property: "Villa",
        Rating:"3",  
        Rated:"All good",
      },
    
      {
        Ammenities: [
          "Swimming Pool",
          "Air Conditioner",
          "Internet",
          "Television",
          "Functional Kitchen",
        ],
        bathroom: "2",
        bedroom: "2",
        city: "goa",
        costpernight: "5000",
        country: "India",
        img_url:
          "https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/30910222/screenshot008_watermarked_image_1024.jpeg",
        maxguests: "6",
        refid: "897",
        title: "2bhk Pool Facing Apartment.",
        type_of_property: "Villa",
        Rating:"3",
       Rated:"Affordable",
      },
    
    ]


    displayData(websiteData)
    function displayData(data){
        
        let container=document.querySelector("#container")
        data.forEach(function(elem){
            let div=document.createElement("div")
            let a=document.createElement("a")
           
            a.onclick=function(){
               saveInLocal(elem)
               a.href="second.html"
            }

            let image=document.createElement("img")
            image.src=elem.img_url;
            let ref=document.createElement("p")
            ref.innerText=`Ref Id #${elem.refid}`
            ref.style.color="grey"
            let type=document.createElement("p")
            type.innerText=`${elem.type_of_property} Stay`
            type.style.color="blue"
            let city=document.createElement("p")
            city.innerText=`${elem.city}, ${elem.country}`
            let title=document.createElement("p")
            title.innerText=elem.title
            let additional=document.createElement("p")
            
            additional.innerText=`${elem.type_of_property}| AC| ${elem.bathroom}Bath| ${elem.bedroom}Bed| `
            additional.style.color="blue"
            let price=document.createElement("p")
            price.innerText=`₹${elem.costpernight} per night`
          
            div.append(image,ref,title,type,city,additional,price)
            a.append(div)
            container.append(a)
        })
    }
document.querySelector("#right").addEventListener("click",rightfun)
    function rightfun(){
        
            document.querySelector('#container').style.scrollBehavior="smooth"
            document.querySelector('#container').scrollLeft +=500;
    }
    document.querySelector("#left").addEventListener("click",leftfun)
    function leftfun(){
    
        document.querySelector("#container").scrollLeft -=500;
        document.querySelector('#container').style.scrollBehavior="smooth"
    }
    
   
    //Top rated Data
    displayData1(websiteData)
    function displayData1(data){
        
        let container=document.querySelector("#container2")
        data.forEach(function(elem){
            let div=document.createElement("div")
            let a=document.createElement("a")
            a.onclick=function(){
              saveInLocal(elem,a)
            }

            let image=document.createElement("img")
            image.src=elem.img_url;
            let rate=document.createElement("p")
            rate.innerText=`Rated #${elem.Rating}`
            rate.style.color="blue"
            let type=document.createElement("p")
            type.innerText=elem.Rated
            let title=document.createElement("p")
            title.innerText=elem.title
            type.style.color="blue"
            div.append(image,rate,title,type)
            a.append(div)
            container2.append(a)
        })
    }
    document.querySelector("#right1").addEventListener("click",rightfun1)
    function rightfun1(){
        
            document.querySelector('#container2').style.scrollBehavior="smooth"
            document.querySelector('#container2').scrollLeft +=500;
    }
    document.querySelector("#left1").addEventListener("click",leftfun2)
    function leftfun2(){
    
        document.querySelector("#container2").scrollLeft -=500;
        document.querySelector('#container2').style.scrollBehavior="smooth"
    }

function saveInLocal(elem,a){
console.log(a)

let bookdata=[]
bookdata.push(elem)
localStorage.setItem("book",JSON.stringify(bookdata))
console.log(bookdata)
// a.href="second.html"
}


document.querySelector("#submit").addEventListener("click",submitFUn)
  function submitFUn(){
   
   window.location.href="secondGoa.html"
  }

  import navbar from "../componentNav/navbar.js";
console.log(navbar());
document.getElementById("navbar").innerHTML = navbar();



