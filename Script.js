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

function CloseMenu() {
    document.getElementById("Sidebar").style.display = "none";
    //document.getElementById("Main").style.marginLeft = "0%";
    //document.getElementById("Sidebar").style.marginLeft = "0%";
    document.getElementById("ToggleMenu").onclick = OpenMenu;
}

function OpenMenu() {
    document.getElementById("Sidebar").style.display = "inline";
    //document.getElementById("Main").style.marginLeft = "10%";
    document.getElementById("ToggleMenu").innerHTML = "x";
    document.getElementById("ToggleMenu").onclick = CloseMenu;
}