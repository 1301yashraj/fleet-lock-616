let websiteData=JSON.parse(localStorage.getItem("data_city"))
 console.log(websiteData)
    
  let mapOnPage=document.querySelector("#gmap_canvas")
  mapOnPage.src=`https://maps.google.com/maps?q=${websiteData[0].city}${websiteData[0].country}&t=&z=13&ie=UTF8&iwloc=&output=embed`
    let container=document.querySelector("#dataContainer")
function sort(){


    let val=document.querySelector("#SortByPrice");
    
    if(val.value=="Relevance"){
      
       
        displayData(websiteData)
        console.log(val.value)
    }else if(val.value=="Low To High"){
        websiteData.sort(function(a,b){
            return a.costpernight-b.costpernight;
        })
        console.log(val.value)
        container.innerHTML=null;
        displayData(websiteData)
    }else{
        websiteData.sort(function(a,b){
            return b.costpernight-a.costpernight;
        })
        console.log(val.value)
        container.innerHTML=null;
        displayData(websiteData)
    }
}
    
    displayData(websiteData)
    function displayData(data){
        
       
        data.forEach(function(elem){
            let div=document.createElement("div")     
                     
            let div1=document.createElement("div")                
            let a=document.createElement("a")
            let div2=document.createElement("div")
            div.setAttribute("id","cont")
            div2.setAttribute("id","cont2")

            a.onclick=function(){
               saveInLocal(elem)
               a.href="#"
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
          div2.append(ref,title,type,city,additional,price)
            div1.append(image)
            div.append(div1,div2)
            a.append(div)
            container.append(a)
        })
    }
    

    function saveInLocal(elem){

        let bookdata=JSON.parse(localStorage.getItem("book"))||[]
        bookdata.push(elem)
        localStorage.setItem("book",JSON.stringify(bookdata))
        console.log(bookdata)
    }
    // import navbar from "../componentNav/navbar.js";
    // console.log(navbar());
    // document.getElementById("navbar").innerHTML = navbar();
    

  