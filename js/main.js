// SCROLL TO TOP BUTTON
const scrollToTop = document.getElementById("topIcon");

window.addEventListener('scroll', () => {
    scrollToTop.style.display = window.pageYOffset > 50 ? 'block' : 'none';
});

function scrollUp() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
}



// MOBILE NAME
var logo = document.getElementById("logo");

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 90) {
        logo.style.width = "125px";
        logo.style.position = "fixed";
        logo.style.transition = "all 0.5s ease";
        logo.style.margin = "10px 0";
        logo.style.zIndex = "25";
        logo.style.backgroundColor = "#fff";
        logo.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2)";
    } else {
        logo.style.position = "absolute";
        logo.style.padding = "unset";
        logo.style.transition = "all 0.5s ease";
        logo.style.backgroundColor = "unset";
        logo.style.boxShadow = "unset";
    }
})



// Accordion
const buttons = document.querySelectorAll(".accordion button");

for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(e) {
        var accquestion = e.target.getAttribute("data-id");
        var accdata = document.getElementById(accquestion);
        var icon = document.getElementById(accquestion + "icon");

        if(accdata.style.maxHeight) {
            icon.classList.add("fa-plus");
            icon.classList.remove("fa-minus");

            accdata.style.maxHeight = null;
            e.target.style.borderRadius = "3px";
        } else {
            icon.classList.remove("fa-plus");
            icon.classList.add("fa-minus");

            accdata.style.maxHeight = accdata.scrollHeight + "px";
            e.target.style.borderRadius = "0";
            e.target.style.borderTopLeftRadius = "3px";
            e.target.style.borderTopRightRadius = "3px";
        }
    })
}