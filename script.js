const nav = document.getElementById("nav");
    addEventListener("scroll", ()=>{
        if(scrollY >= 100){
            nav.classList.add("nav__black");
        }else{
            nav.classList.remove("nav__black");
        }
    })