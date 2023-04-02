let burger = document.querySelector(".burger");
let burger__nav = document.querySelector(".burger__nav");
let burger__line1 = document.querySelector(".burger__line1");
let burger__line2 = document.querySelector(".burger__line2");
let burger__line3 = document.querySelector(".burger__line3");



burger.onclick = () => { 

    burger__nav.classList.toggle("hidden");
    burger__line1.classList.toggle("hidden");
    burger__line2.classList.toggle("burger__line2_press");
    burger__line3.classList.toggle("burger__line3_press");
}

document.onclick = (event) => { 
    let check1 = event.composedPath().includes(burger__nav);
    let check2 = event.composedPath().includes(burger);

    if (check1 === false && check2 === false) { 
        burger__nav.classList.add("hidden");
        burger__line1.classList.remove("hidden");
        burger__line2.classList.remove("burger__line2_press");
        burger__line3.classList.remove("burger__line3_press");
    }
}