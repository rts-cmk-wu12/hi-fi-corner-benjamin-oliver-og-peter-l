//først tager jeg fat i de elementer jeg skal bruge
const productshow = document.querySelector(".product-show");
const productshowImg = document.querySelector(".product-show__productImg");
const productshowHeading = document.querySelector(".product-show__productName");
const productshow__arrows = document.querySelectorAll(".product-show__arrows i")
let show = 1
//her giver jeg eventlisteners til de forskellige knapper
productshow__arrows.forEach(element=> {
element.addEventListener("click", slideShow)
})


function slideShow(th){
   console.log(this)
    const idofElement = this.getAttribute("id");
    console.log(idofElement)
    if(idofElement == "prev"){
        show--
        if(show < 0){
          show =  tal.length - 1
        }
       
     
     
    }else{
        show++
        //her tjekker den om vi er kommet til den sidste (grunden til at vi siger length -1 er fordi et array starter med 0)
        if(show > tal.length - 1){
            show = 0
        }
    }
        console.log(show)
       insertProduct()
}

console.log(productshowHeading);
productshowHeading.textContent ="herher";

//nu fetcher jeg dataen

const response = await fetch("http://localhost:3000/products")
const data  = await response.json()

const selectedprducts = []
//her tager jeg fat i et random tal som jeg derefter bruger til at tag random tal 
const tal =[]
//vi kører denne tre gange, fordi vi indsætter 3 produkter
for(let  i = 0; i<3 ;i++){
    //først opretter jeg et random tal, som jeg lager i en let
    let nyTal = Math.floor(Math.random() * data.length -2) + 3 - 1 
    //her kører vi functionen som tjekker om tallet allerede er optaget
   
    checNumber(nyTal)
}
function checNumber(vale){
    //her tjekker den igennem alle tal i tal arrayet
    
    for(let val = 0; val < tal.length; val++){
        
      //her tjekker jeg om valuen svarer til en af de andre ting i arrayest value
        if(tal[val] == vale){
            //hvis valuen er det samme kører den functionen igen 
         checNumber(Math.floor(Math.random() * data.length ) + 3) - 1
        }else{
            //hvis tallet ikke er det samme, indsætte det tallet i arrayet 
            // men hvis den har indsat 3 tal, stopper hel funktionen
            if(tal.length == 3){
                return
            }
            tal.push(vale)
        }
        
    }
    //denne kører i starten, fordi at lengthen på tal = 0 i starten
    if(tal.length == 0){
        tal.push(vale)
    }
    
    
    
}
console.log(tal)
//arrayet der holder de forskellige tal hedder... prøv at gætteeee........ taL!
insertProduct()
//her starter jeg med at indsætte den første random item 
console.log(data[tal[0]])
function insertProduct(){

productshowHeading.textContent = data[tal[show]].name

console.log(data[tal[show]].image)
if(Array.isArray(data[tal[show]].image)){
    productshowImg.setAttribute("src","images/"+data[tal[show]].image[0])
}else{
productshowImg.setAttribute("src","images/"+data[tal[show]].image)}
}


//den varibel der holder øje med hvilket produkt der aktuelt bliver vist 

console.log(data.length)
