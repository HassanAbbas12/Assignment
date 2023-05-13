var square = document.getElementById("square");

square.addEventListener("click", function() {
    var colors = ["red", "blue", "green", "orange", "purple", "yellow"];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    square.style.backgroundColor = randomColor;
});