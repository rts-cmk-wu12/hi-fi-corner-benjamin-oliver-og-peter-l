//først tager jeg fat i elementerne jeg skal bruge
const burgermneuButton = document.querySelector(".burgermneuButton")
const navrbarList = document.querySelector(".navbar_list")
const burgermneuCloseButton = document.querySelector(".burgermneuCloseButton")
//nu giver vi knappen en eventlistener
burgermneuButton.addEventListener("click", burgermenu)
burgermneuCloseButton.addEventListener("click", burgermenu)

//her giver jeg window en eventlistener så man kan holde øje med om den bliver resized

window.addEventListener("resize", checkWindow)

function checkWindow(){
    console.log(this.innerWidth)
    if(this.innerWidth > 600){
        navrbarList.classList.remove("navbar_list--burger")
        navrbarList.classList.add("navbar_list")
        burgermneuCloseButton.classList.remove("burgermneuCloseButton--open")
        burgermneuCloseButton.classList.add("burgermneuCloseButton")
    }
}

function burgermenu(){
    //først tager vi classen på vores element
    navrbarListClass = navrbarList.getAttribute("class")
if(navrbarListClass == "navbar_list"){
    navrbarList.classList.add("navbar_list--burger")
    navrbarList.classList.remove("navbar_list")
    burgermneuCloseButton.classList.add("burgermneuCloseButton--open")
    burgermneuCloseButton.classList.remove("burgermneuCloseButton")
}else{
    navrbarList.classList.remove("navbar_list--burger")
    navrbarList.classList.add("navbar_list")
    burgermneuCloseButton.classList.remove("burgermneuCloseButton--open")
    burgermneuCloseButton.classList.add("burgermneuCloseButton")
}
}