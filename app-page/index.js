document.addEventListener("contextmenu",(e) => {
    e.preventDefault();
})
const div1 = document.getElementById("div1");
const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");
const text3 = document.getElementById("text3");
const light = document.getElementById("light");
const dark = document.getElementById("dark-default");
const textDarkDefault = document.getElementById("text-dark-default");
const textLight = document.getElementById("text-light");
const bg = document.body;
const btn1 = document.getElementById("btn1");
const unknownTheme = document.getElementById("unknown-theme");
const unknownThemeText = document.getElementById("unknown-theme-text");
let themeCache = null;
function lightMode() {
    bg.style.backgroundColor = "rgb(230,230,230)";
    div1.style.backgroundColor = "rgb(220,220,220)";
    dark.classList.add("borderToggle");
    light.classList.add("borderToggle");
    textDarkDefault.style.color = "black";
    textLight.style.color = "black";
    text1.style.color = "black";
    text2.style.color = "black";
    unknownTheme.style.backgroundColor = "rgb(210,210,210)";
    unknownThemeText.style.color = "black";
}
function darkMode() {
    bg.style.backgroundColor = "rgb(30,30,30)";
    div1.style.backgroundColor = "rgb(50,50,50)";
    dark.classList.remove("borderToggle");
    light.classList.remove("borderToggle");
    textDarkDefault.style.color = "white";
    textLight.style.color = "white";
    text1.style.color = "white";
    text2.style.color = "white";
    unknownTheme.style.backgroundColor = "rgb(90,90,90)"
    unknownThemeText.style.color = "white";
}
function hiddenUnknownTheme() {
    unknownTheme.style.opacity = "0";
    unknownTheme.style.top = "92%";
    setTimeout(() => {
        unknownTheme.style.visibility = "hidden";
    },500)
}
function hiddenUnknownThemeBtn() {
    hiddenUnknownTheme();
}
function ifTheme() {
    const lst = localStorage.getItem("theme");
    if (lst === themeCache) return;
    themeCache = lst;
    if (lst === "dark") {
        hiddenUnknownTheme();
        darkMode();
    }
    else if (lst === "light") {
        hiddenUnknownTheme();
        lightMode();
    }
    else {
        unknownTheme.style.visibility = "visible";
        unknownTheme.style.opacity = "0";
        unknownTheme.style.top = "92%";
        requestAnimationFrame(() => {
            unknownTheme.style.opacity = "1";
            unknownTheme.style.top = "90%";
        });
    }
}
ifTheme();
function btn1jx() {
    dark.style.top = "210px";
    light.style.top = "210px";
    dark.style.opacity = "0";
    light.style.opacity = "0";
    textDarkDefault.style.top = "87%";
    textDarkDefault.style.opacity = "0";
    textLight.style.opacity = "0";
    textLight.style.top = "87%";
    text2.style.top = "36%";
    text2.style.opacity = "0";
    setTimeout(() => {
        dark.style.visibility = "hidden";
        light.style.visibility = "hidden";
        text2.style.visibility = "hidden";
    },500)
    setTimeout(() => {
        text3.style.top = "35%";
        text3.style.opacity = "1";
        text3.style.visibility = "visible";
        codeLanguageSelect();
    },500)
}
setInterval(ifTheme, 400);
div1.style.visibility = "hidden";
text2.style.visibility = "hidden";
light.onclick = () => {
    const ThemeData = "light";
    localStorage.setItem("theme", ThemeData);
    themeCache = ThemeData;
    lightMode();
    hiddenUnknownTheme();
}
dark.onclick = () => {
    const ThemeData = "dark";
    localStorage.setItem("theme", ThemeData);
    themeCache = ThemeData;
    darkMode();
    hiddenUnknownTheme();
}