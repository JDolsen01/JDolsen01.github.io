const homeButton = document.getElementById("home-button");
homeButton.addEventListener("click", () => {
    window.location.href = "index.html";
});
homeButton.addEventListener("mouseenter", () => {
    document.getElementById("home").src = "images/home.png";
});
homeButton.addEventListener("mouseleave", () => {
    document.getElementById("home").src = "images/home-2.png";
});

