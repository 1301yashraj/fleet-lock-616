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
 let websiteData=JSON.parse(localStorage.getItem("data_city"))
 console.log(websiteData)
    
    let City=document.querySelector("#city")
    City.innerText=`${websiteData[0].city} Holiday Homes`
    let City1=document.querySelector("#city1")
    City1.innerText=`${websiteData[0].city} Holiday Homes`
    let City2=document.querySelector("#city2")
    City2.innerText=`${websiteData[0].city} `
    let Contry=document.querySelector("#country")
    Contry.innerText=`${websiteData[0].country} `
    let mapOnPage=document.querySelector("#gmap_canvas")
    mapOnPage.src=`https://maps.google.com/maps?q=${websiteData[0]} ${websiteData[0].country}&t=&z=13&ie=UTF8&iwloc=&output=embed`

    displayData(websiteData)
    function displayData(data){
     
        let container=document.querySelector("#container")
        data.forEach(function(elem){
       
            let div=document.createElement("div")
            let a=document.createElement("a")
           
            a.onclick=function(){
               saveInLocal(elem)
            //   a.href="second.html"
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
            // let rate=document.createElement("p")
            // rate.innerText=`Rated #${elem.Rating}`
            // rate.style.color="blue"
            let type=document.createElement("p")
            type.innerText=elem.type_of_property
            let title=document.createElement("p")
            title.innerText=elem.title
            type.style.color="blue"
            div.append(image,title)
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
window.location.href="booking_TU.html"
}


document.querySelector("#submit").addEventListener("click",submitFUn)
  function submitFUn(){
   
   window.location.href="secondGoa.html"
  }




// function loadData(){
//   window.location.reload;
// }