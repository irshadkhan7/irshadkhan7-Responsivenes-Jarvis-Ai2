let icon = document.querySelector(".icon");
let  ul =  document.querySelector("ul");

icon.addEventListener("click", ()=>{
    ul.classList.toggle("showData");
    console.log(ul);
    
    if(ul.className == "showData"){
        document.getElementById("bar").className= "fa-solid fa-xmark";
    }else{
        document.getElementById("bar").className= "fa-solid fa-bars";
  
    }

})

/***********************navbar End********************/

let slide = document.querySelectorAll(".Customer");
let count = 0;
console.log(slide);

slide.forEach(function(customer, index){
    customer.style.left=`${index * 100}%`
})
function next(){
    count ++;
    if(count == slide.length){
        count=0;

    }
    bar()
}
function pre(){
count --;
if(count == -1){
    count = slide.length-1
}
    bar()
}
function bar (){
    slide.forEach(function(customer){
        customer.style.transform = `translateX(-${count * 100}%)`
    })
}


