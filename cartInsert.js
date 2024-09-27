//først tager jeg fat i diven ehvor produkterne skal være i
const checkout_btn = document.querySelector(".checkout_btn")
const totalAmount = document.querySelector("#total-amount")
const subtotalAmount = document.querySelector("#subtotal-amount")
const buyedproducts = ["varer:1:Produktbilleder/cd-afspillere/creek_Destiny_CD.jpg:12", "højtaler:2:Produktbilleder/cd-afspillere/creek_Destiny_CD.jpg:2"]
//her laver jeg en varibel, det tæller prisen i alt
let priceOfALL = 0
console.log(buyedproducts)
const cart_items = document.querySelector(".cart_items")
//først deler jeg det array op, der er indsat
let localstoragecartItem  = localStorage.getItem("cart")
console.log(localstoragecartItem)
const myArray = localstoragecartItem.split(",");
console.log(myArray)
//nu kører jeg en foreach
myArray.forEach( element => {
    //her opdeler jeg poduktet ud fra de punktemmer det er i hvert elemet i arrayet
    const opdelt  = element.split(":")
    console.log(opdelt[0])
    //nu kommer koden til at indsætte hvert element på siden på en flot måde
    const parentDiv = document.createElement("article")
    parentDiv.classList.add("cartProduct")
    const heading = document.createElement("h2")
    heading.textContent = opdelt[0]
    parentDiv.appendChild(heading)
    const price = document.createElement("p")
    price.textContent= opdelt[1]
    parentDiv.appendChild(price)
    const count = document.createElement("input")
    count.addEventListener("input",changeValue)
    count.type  = "number"
    count.value= Number(opdelt[3])
    parentDiv.appendChild(count)
    const image = document.createElement("img")
    image.setAttribute("src", "images/" + opdelt[2])
    parentDiv.appendChild(image)
    //her indsætter vi slet knappe
    const delbutton = document.createElement("button")
    delbutton.textContent   ="Slet produktet"
    delbutton.addEventListener("click", delItem)
    parentDiv.appendChild(delbutton)
    cart_items.appendChild(parentDiv)
    //her sætter jeg prisen
    
    let productAllPrice = Number(opdelt[3]) * Number(opdelt[1])
    console.log(productAllPrice)
    priceOfALL = priceOfALL + productAllPrice

} )

//her fetcher jeg alle produkter 

function changeValue(){
    //først tager jeg fat i navnet på varen
    let nameofElement = this.parentElement.querySelector("h2").textContent
    
    myArray.forEach( element => {
        //her opdeler jeg poduktet ud fra de punktemmer det er i hvert elemet i arrayet
        const opdelt  = element.split(":")
        console.log(opdelt[0] ==nameofElement)
        if(opdelt[0] ==nameofElement){
            opdelt[1] = this.value
            //nu skal vi vide hvor i arrayet dette produkt er 
            let chosenArray = myArray[myArray.indexOf(element)]
            console.log(chosenArray)
            //nu splitter jeg arrayet
            const splittedchossenArray = chosenArray.split(":")
            console.log(splittedchossenArray[3])
            splittedchossenArray[3] = this.value
            //nu sætter vi så arrayet ind igen
            console.log(splittedchossenArray)
            myArray.splice(myArray.indexOf(element), 1, splittedchossenArray.join(":"))
            console.log(myArray)
        }
    })
    localStorage.setItem("cart", myArray)
    console.log(myArray)
    
}
//her kommer function der sletter hvert item fra vognene

function delItem(){
    //her laver vi en variabel, hvor vi tager fat i navnet på produktet, så vi har et kendetegn
    let productName = this.parentElement.querySelector("h2").textContent
    console.log(productName)
    //her tjekker vi hver element i localstorage igennem
    //vi bruger bare my array fra tidligere fordi, det har vi fat i alle items
    myArray.forEach(element => {
        //her bruger vi den samme split metode 
        const elementIntoArray = element.split(":")
        if(elementIntoArray[0] == productName){
           const indexDelete =  myArray.indexOf(element)
           myArray.splice(indexDelete, 1)
        }
console.log(myArray)
localStorage.setItem("cart", myArray)
location.reload()
    })
}
subtotalAmount.textContent = priceOfALL + ".kr";
totalAmount.textContent = priceOfALL + ".kr";


//hernede laver jeg functionen der sender en til checkout siden
checkout_btn.addEventListener("click", function(){
    window.open("checkout.html", "_self")
})