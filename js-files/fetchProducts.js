//jeg starter med at tage fat i min div, hvor elementer skal placeres i
const divBox = document.querySelector(".productBox")
const PshownItems = document.querySelector("#shownItems")
const alreadyShown = document.querySelector("#alreadyShown")
const categoryPriceList = document.querySelector(".categoryPriceList")

let countItems = 0
//her tager jeg fat i selector med id'et "show"
const show = document.querySelector("#show")
show.addEventListener("input", function(){
   
    window.open("products.html?limit=" + this.value, "_self");
    
    
})


//her tager jeg fat i lsit itemsne som skal vises
const under200Item = document.querySelector("#under200")
const under300Item = document.querySelector("#under300")
const under500Item = document.querySelector("#under500")
const under1000Item = document.querySelector("#under1000")
const under2000Item = document.querySelector("#under2000")
const under3000Item = document.querySelector("#under3000")
const under4000Item = document.querySelector("#under4000")
//her tager jeg fat i alle list items med manufactor
const creekItem = document.querySelector("#creek")
const expItem = document.querySelector("#exp")
const exposureItem = document.querySelector("#exposure")
const parasoundItem = document.querySelector("#parasound")
const manleyItem = document.querySelector("#manley")
const projectItem = document.querySelector("#project")
const boesendorferItem = document.querySelector("#boesendorfer")
const eposItem = document.querySelector("#epos")
const harbethItem = document.querySelector("#harbeth")
const proItem = document.querySelector("#pro")
const jolidaItem = document.querySelector("#jolida")




//her tager jeg fat i den knap jeg trykkker på, så man kan se den valgte
const categoryList__Link = document.querySelectorAll(".categoryList__Link")
const categoryPriceListItem = document.querySelectorAll(".categoryPriceList")
const categorymanufactor__link = document.querySelectorAll(".categorymanufactor__link")


//laver sygt mange varibler, det lidt rodet, men med nærmere eftertanke, ville det godt kunne optimeres
//her laver jeg variabler for
let creek = 0;
let exp = 0;
let exposure = 0;
let parasound = 0;
let manley = 0;
let project = 0;
let boesendorfer = 0;
let epos = 0;
let harbeth = 0;
let pro = 0;
let jolida = 0;

//her laver jeg nogle variabler hvor jeg deler alle elementer op via pris
let under100 = 0;
let under200 = 0;
let under300 = 0;
let under500 = 0;
let under1000 = 0;
let under2000 = 0
let under3000 = 0
let under4000 = 0
let mellem100og300 = 0;
let mellem500og1000 = 0;

//her laver jeg search params
const params = new URLSearchParams(window.location.search );
const lessThanPrice = params.get("price")
const trueCompany = params.get("company")
const trueCategory = params.get("category")
let newFetch = params.get("newFetch")
let order = params.get("_order")
let limit = params.get("limit")

//her tager jeg fat i headingen som jeg så ændrer til den valgte kategori
if(trueCategory == null){
    //i denne if condition, sætter jeg h1'eren på side til den valgte kategori
document.querySelector(".productSelec__heading").textContent = "Alle produkter"
}else{
    document.querySelector(".productSelec__heading").textContent = trueCategory

}

//her tjekker vi om der skal sorteres i de forskellige
if(newFetch == null){
    
    newFetch = ""
    order = ""
    
}else{
    order = "&_order=" + order
}

// her senere hen, har jeg også lavet en med limit, så der gør jeg det samme som i newfetch
if(limit == null){
    limit = ""
}else{
    limit = "?_limit=" + limit
}

 

//nu fetcher jeg alle prdukterne


const response =  await fetch("http://localhost:3000/products" + newFetch + order + limit);
const data = await response.json();

//her kører jeg en foreach for hvert produkt
data.forEach(product => {

    //her tjekker den for om den er over den valgte price, firma eller category
     if(lessThanPrice !== null || trueCompany !== null || trueCategory !== null){

     
    if(Number(product.price) < Number(lessThanPrice) || product.company == trueCompany || product.category == trueCategory ){
       
    insertProduct(product)

   
    }}

    //her tjekker den om der er ingen ting i search paramters
    if(lessThanPrice == null & trueCompany == null & trueCategory  == null){
        insertProduct(product)
    }
    //her tjekker vi får priser
    if(product.price < 4000){
        under4000++
    }
     if(product.price < 3000){
        under3000++
       
    }
    if(product.price < 2000){
        under2000++
        
    }
    if(product.price < 1000){
        under1000++
        
    }
    if(product.price < 500){
        under500++
        
    }
    if(product.price < 300){
        under300++
    }
    if(product.price < 200){
        under200++
    }
    //Her tjekker den for hvilket firma produket kommer fra
    if(product.company == "creek"){
        creek++
    }
    if(product.company == "exp"){
        exp++
    }
    if(product.company == "exposure"){
        exposure++
    }
    if(product.company == "parasound"){
        parasound++
    }
    if(product.company == "manley"){
        manley++
    }
    if(product.company == "project"){
        project++
    }
    if(product.company == "boesendorfer"){
        boesendorfer++
    }
    if(product.company == "epos"){
        epos++
    }
    if(product.company == "harbeth"){
        harbeth++
    }
    if(product.company == "pro"){
        pro++
    }
    if(product.company == "jolida"){
        jolida++
    }
    



    
});


//her viser jeg alle valuesne på  company listerne
creekItem.textContent = creek
expItem.textContent = exp
exposureItem.textContent = exposure
parasoundItem.textContent = parasound
manleyItem.textContent = manley
projectItem.textContent = project
boesendorferItem.textContent = boesendorfer
eposItem.textContent = epos
harbethItem.textContent = harbeth
proItem.textContent = pro
jolidaItem.textContent = jolida

//her viser jeg alle valuesne på listerne
under200Item.textContent = under200
under300Item.textContent = under300
under500Item.textContent = under500
under1000Item.textContent = under1000
under2000Item.textContent = under2000
under3000Item.textContent = under3000
under4000Item.textContent = under4000
// nu laver jeg koden som skrive

// her sker alle ekstra ting, som at indsætte navne og dataer
PshownItems.textContent = countItems + "item(s)"
alreadyShown.textContent =  countItems

//her tager jeg fat i min sotby option input
const sortBy = document.querySelector("#sortBy")
sortBy.addEventListener("input", sortByFunc)
//her kører vi en sortby function
function sortByFunc(){
    const categories = [lessThanPrice,trueCompany,trueCategory, "price", "company", "category"]

for(let i  = 0; i < 3 ; i++){
console.log(categories[i])
if(categories[i] !== null){
     window.open("products.html?newFetch=" + sortBy.value+"&"+ categories[i+3] +"=" + categories[i], "_self")
     return
}
}
console.log(categories)
    window.open("products.html?newFetch=" + sortBy.value, "_self");
}









//her functionene der indsætter produktet

function insertProduct(product){
    countItems++
     //her laver jeg en div som skal omkrandse hele prodktet
     const productDiv = document.createElement("article")
     productDiv.classList.add("product")
     divBox.appendChild(productDiv)
     //nu laver jeg en div der er med til at putte billede ind i en firkant
     const imageDiv = document.createElement("div")
     imageDiv.classList.add("product__imageDiv")
     productDiv.appendChild(imageDiv)
     //putter imageDiv ind i produtDiv
     //nu adder jeg billede et
     const image = document.createElement("img")
     image.classList.add("product__image")
     //putter imageDiv ind i produtDiv
     //for at finde frem til det rigtige billede bliver koden lidt mærkelig men det er fordi at billeder er delt op i forskellige mapper
     //denne if tjekker om billederne er et array eller ej
     if(typeof product.image == "object" ){
         image.setAttribute("src", "images/" + product.image[0])
     }else{
     image.setAttribute("src", "images/"  + product.image)
 }
     imageDiv.appendChild(image)
     //nu kommer vi til produktet navnet
     const productName = document.createElement("h2")
     productName.textContent = product.name
     productName.classList.add("product__name")
     productDiv.appendChild(productName)
 
     //nu kommer det til prisen på prduktet
     const productPrice = document.createElement("p")
     productPrice.textContent = product.price + "kr."
     productPrice.classList.add("product__price")
     productDiv.appendChild(productPrice)
     //nu tilføjer vi linket til knappen
     const productLink = document.createElement("a")
     productLink.textContent = "View more"
     productLink.classList.add("product__link")
     productLink.setAttribute("href", "single-product-view-page.html?name=" + product.name)
     productDiv.appendChild(productLink)

}



//hernede laver jeg en foreach, der skal ændre farverne på den valgte knap
categoryList__Link.forEach(element =>{
   
    if(element.textContent == trueCategory ){
        element.classList.add("selectedCat")
    }else if(trueCategory == null){
        categoryList__Link[0].classList.add("selectedCat")

    }else{
        element.classList.remove("selectedCat")
    }
})

// her foregår det på priserne

categoryPriceListItem.forEach(element =>{
      
      //her bliver jeg nødt til at splitte textcontent op, da den består af mere end bare tal
      let textcontetSplited = element.textContent.split(' ');
      //nu bliver jeg nødt til at splite den igen, fordi at der ikke er mellemrum mellem " " og ( 
        textcontetSplited = textcontetSplited[1].split("(")
    
    if(textcontetSplited[0] == lessThanPrice){
        element.classList.add("selectedPrice")
    }else if(lessThanPrice == null){
        categoryPriceListItem[0].classList.add("selectedPrice")

    }else{
        element.classList.remove("selectedPrice")
    }
})

//nu gør vi det også med manufactor, man ville godt kunnne rode lidt op i koden, så man ikke skal gentage sig selv igen, det gør jeg hvis vi får mere tid
categorymanufactor__link.forEach(element =>{
   // her bliver jeg igen nød til at splitte ordet op
   let textcontetSplited = element.textContent.split('(');
   
    if(textcontetSplited[0] == trueCompany ){
        element.classList.add("selectedManu")
    }else if(trueCompany == null){
        categorymanufactor__link[0].classList.add("selectedManu")

    }else{
        element.classList.remove("selectedManu")
    }
})


//hernede sammensætter jeg sorteringen, med alle kategorier

