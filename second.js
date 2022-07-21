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
    city: "Pataya",
    costpernight: "10000",
    country: "Thailand",
    img_url: "https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/55791061/ed5eb2012c2711e8b2ea0a92a929817e_watermarked_image_1024.jpeg",
    maxguests: "10",
    refid: "200",
    title: "Jomtien Paradise Villa | 5 Bed Property With Jet Pool And Sauna In Pattaya",
    type_of_property: "Villa"
    },
    {
    Ammenities:['Swimming Pool', 'Air Conditioner', 'Internet', 'Television'],
    bathroom: "5",
    bedroom: "5",
    city: "Pataya",
    costpernight: "80000",
    country: "Thailand",
    img_url: "https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/46007896/0b5364faa2c711e783140a92a929817e_watermarked_image_1024.jpeg",
    
    maxguests: "10",
    refid: "201",
    title: "Baan Chokdee | 5 Bed Pool Villa Near Jomtien Beach In South Pattaya",
    type_of_property: "Villa"
    },
    {
    Ammenities:['Swimming Pool', 'Air Conditioner', 'Internet', 'Television', 'Parking', 'Spa'],
    bathroom: "2",
    bedroom: "2",
    city: "Pataya",
    costpernight: "4000",
    country: "Thailand",
    img_url: "https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/36952294/7819757aa2c511e783140a92a929817e_watermarked_image_1024.jpeg",
    maxguests: "5",
    refid: "202",
    title: "Pratumnak Regal Villa | 2 Bed Pool Home At Pratumnak Hill In Pattaya",
    type_of_property: "Hotel/Delux"
    },
    {
    Ammenities:['Internet', 'Television', 'Parking'],
    bathroom: "1",
    bedroom: "2",
    city: "Pataya",
    costpernight: "3000",
    country: "Thailand",
    img_url: "https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/72289717/255_watermarked_image_1024.jpeg",
    maxguests: "4",
    refid: "203",
    title: "Boutique Resort For Rent - Pepper Villa (2 Bedrooms) Stay",
    type_of_property: "Farm",
    },
    {
    Ammenities:['Swimming Pool', 'Air Conditioner', 'Internet', 'Parking', 'Spa', 'Cook On'],
    bathroom: "2",
    bedroom: "3",
    city: "Pataya",
    costpernight: "5000",
    country: "Thailand",
    img_url: "https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/32358195/82ededb7a2ca11e783180a92a929817e_watermarked_image_1024.jpeg",
    maxguests: "6",
    refid: "204",
    title: "Thammachat P3 Victoria | 3 Bedroom Pattaya Pool Villa In Bangsaray",
    type_of_property: "Home Stay",
    }
    ]


    displayData(websiteData)
    function displayData(data){
        
        let container=document.querySelector("#container")
        data.forEach(function(elem){
            let div=document.createElement("div")
            let a=document.createElement("a")
            a.href="second.html"

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
            let additional=document.createElement("p")
            
            additional.innerText=`${elem.type_of_property}| AC| ${elem.bathroom}Bath| ${elem.bedroom}Bed| `
            additional.style.color="blue"
            let price=document.createElement("p")
            price.innerText=`₹${elem.costpernight} per night`
          
            div.append(image,ref,type,city,additional,price)
            a.append(div)
            container.append(a)
        })
    }


