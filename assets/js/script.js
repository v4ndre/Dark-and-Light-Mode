const changeThemeBtn = document.querySelector("#change_theme")

//Toggle Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle("dark")
}

// Load Light or Dark Mode
function loadTheme() {
    const darkMode = localStorage.getItem("dark");


if (darkMode) {
    toggleDarkMode();
}
}

loadTheme();

changeThemeBtn.addEventListener("change", function(){
    toggleDarkMode();

    // Save or Remove Dark Mode from localStorage
    localStorage.removeItem("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("dark", 1)
    }
})