function toggleMenu(event) {
    if (event) {
        event.preventDefault(); 
    }

    const menuBtn = document.getElementById("menu-button")
    const additionalItems = document.getElementById("additional-items");
    if (additionalItems.style.display === "none") {
        additionalItems.style.display = "flex"; // Use "flex" to maintain the layout
        additionalItems.scrollIntoView({ behavior: "smooth" }); // Scroll to the additional items
        menuBtn.innerText = "Show Less"
    } else {
        additionalItems.style.display = "none";
        menuBtn.innerText = "Full Menu"
    }
}

const delay = 3000;

window.addEventListener('load', function(){
    const preloader = document.getElementById('preloader');
    const delay = 1000;

    this.setTimeout(() => {
        preloader.style.display = 'none';
    },delay);
})


