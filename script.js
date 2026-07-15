function nextPage(page){

document.querySelectorAll(".page")
.forEach(p=>p.classList.remove("active"));

document
.getElementById("page"+page)
.classList.add("active");

window.scrollTo(0,0);

}

document.querySelectorAll(".locked-card").forEach(card=>{

card.onclick=()=>{

alert("🔒 Achievement Locked\n\nComing Soon ❤️");

}

})

document.getElementById("ending").onclick=()=>{

document.getElementById("comingSoon").style.display="block";

}
