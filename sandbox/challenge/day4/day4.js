const title = document.querySelector("#title");
const body = document.querySelector("body");

const BASE_COLOR = "#344495e";
const OTHER_COLOR = "rgb(255,255,204)"

const CLICKED_CLASS = "clicked";

function handleClick(){

    const hasClass = title.classList.contains(CLICKED_CLASS)
    if (hasClass){
        document.body.style.backgroundColor = "black"
        title.classList.remove(CLICKED_CLASS);
    }else{
        document.body.style.backgroundColor = "black"
        title.classList.add(CLICKED_CLASS);
    }

    // console.log(background)
    // body.style.backgroundColor = "black"
    document.body.style.backgroundColor = "black"
    // const currentColor = title.style.color;
    // console.log(currentColor)
    // if (currentColor === BASE_COLOR){
    //     title.style.color = OTHER_COLOR
    // }else
    //     title.style.color = BASE_COLOR
    
}

function simplehandleClick(){
    title.classList.toggle(CLICKED_CLASS)
}

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("click",simplehandleClick)
    window.addEventListener("resize",handleResize)
}

function handleResize(){
    var width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;
    console.log(width)
}

init();