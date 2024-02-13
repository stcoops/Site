function ToggleDark() {
    var element = document.body;
    element.classList.toggle("dark");
    var button = document.getElementById("DarkButton");
    if (element.classList.contains("dark")) {
        button.innerHTML = "Light Mode"
    } else {
        button.innerHTML = "Dark Mode"
    }
}