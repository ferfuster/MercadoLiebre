(function () {
    let movil = document.getElementById("mobile");
    let menu = document.getElementById("nav");
    console.log(movil, menu);

    movil.addEventListener("click", function () {
        menu.style.display = menu.style.display == "block" ? "none" : "block";
    });
})();