const params = new URLSearchParams( window.location.search );

const productname = params.get("name");

const response = await fetch('db.json');
const data = await response.json();

function getProductByName (name, products) {
    return products.find(product => product['name'] == name );
}

const product = getProductByName(productname, data.products);

console.log(product)

function setTextContentByElementId (elementId, TextContent) {
    const elementInHTML = document.getElementById(elementId);

    if(typeof(TextContent) == 'string', Array) {
        elementInHTML.textContent = TextContent;
    } else {
        elementInHTML.textContent = TextContent.join(", ");
    }    
}

function setInnerHTMLByElementId (elementId, innerHTML) {
    const elementInHTML = document.getElementById(elementId);

    elementInHTML.innerHTML = innerHTML;
}

setInnerHTMLByElementId(
    'image',
    `<img src=images/${product['image']}>`
);

setTextContentByElementId('name', product['name']);
setTextContentByElementId('price', product['price']);
setTextContentByElementId('description', product['description']);
setTextContentByElementId('company', product['company']);
setTextContentByElementId('billedoplosning', product['billedoplosning']);
setTextContentByElementId("videoudgange", product['videoudgange']);
setTextContentByElementId('lydudgange', product['lydudgange']);
setTextContentByElementId('formater', product['formater']);
setTextContentByElementId('funktioner', product['funktioner']);
setTextContentByElementId( "stromforbrug", product["stromforbrug"]);
setTextContentByElementId( "skaermtype", product["skaermtype"]);
setTextContentByElementId( "mediekontroller", product["mediekontroller"]);
setTextContentByElementId( "kompatible_regioner", product["kompatible_regioner"]);
//her kommer køb fuktionen
//hvor at det bliver indsat produkter i localstorage

//her tager fat i knappen
const buyButton= document.querySelector("#buy")
const antalKnap = document.querySelector("#antal")
//her giver vi den valgte knap en eventlistener
buyButton.addEventListener("click", buyItem)
//her functionenen som indsætter det i localstorage
function buyItem(){
    //her tjekker jeg om der allerde er en vare i vognen
    let cartvalue = localStorage.getItem("cart")
    console.log(cartvalue)
    if(cartvalue == null){
        //hvis der ikke er noget i forvejen overskriver den bare alt og indsætter et nyt produkt
        localStorage.setItem("cart",product['name']+ ":"+ product['price']+ ":"+product['image']+":"+ antalKnap.value )

    }else{
       const cartArray = cartvalue.split(",")
       cartArray.push(product['name']+ ":"+ product['price']+ ":"+product['image']+":"+ antalKnap.value)
       localStorage.setItem("cart",cartArray )
       window.open("products.html", "_self")
    }
    
    console.log(product['image'])
}