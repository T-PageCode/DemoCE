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
const btn2 = document.getElementById("btn2");
const backbtn1 = document.getElementById("backbtn1");
const unknownTheme = document.getElementById("unknown-theme");
const unknownThemeText = document.getElementById("unknown-theme-text");
const codeLanguageSelectTop = document.querySelectorAll(".code-language-select-top");
const codeLanguageSelectDown = document.querySelectorAll(".code-language-select-down");
const allLangCards = document.querySelectorAll(".code-language-select-top, .code-language-select-down");
let selectedLang = null;
allLangCards.forEach((langcard) => {
    langcard.addEventListener("click", () => {
        allLangCards.forEach((c) => c.classList.remove("langselected"));
        langcard.classList.add("langselected");
        selectedLang = langcard.id;
    });
});
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
    text3.style.color = "black";
    unknownTheme.style.backgroundColor = "rgb(210,210,210)";
    unknownThemeText.style.color = "black";
    codeLanguageSelectTop.forEach((clstforeach) => {
        clstforeach.style.backgroundColor = "rgb(200,200,200)";
    })
    codeLanguageSelectDown.forEach((clsdforeach) => {
        clsdforeach.style.backgroundColor = "rgb(200,200,200)";
    })
    div1.classList.add("langselect-light-theme")
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
    text3.style.color = "white";
    unknownTheme.style.backgroundColor = "rgb(90,90,90)"
    unknownThemeText.style.color = "white";
    codeLanguageSelectTop.forEach((clstforeach) => {
        clstforeach.style.backgroundColor = "rgb(120,120,120)";
    })
    codeLanguageSelectDown.forEach((clsdforeach) => {
        clsdforeach.style.backgroundColor = "rgb(120,120,120)";
    })
    div1.classList.remove("langselect-light-theme")
}
function btn1hidden() {
    btn1.style.opacity = "0";
    btn1.style.top = "1010px";
    setTimeout(() => {
        btn1.style.visibility = "hidden";
        btn2.style.visibility = "visible";
        btn2.style.opacity = "1";
        btn2.style.top = "1010px";
        backbtn1.style.visibility = "visible";
        backbtn1.style.opacity = "1";
        backbtn1.style.top = "1010px";
    }, 500)
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
        unknownTheme.style.opacity = "1";
        unknownTheme.style.top = "90%";
    }
}
function codeLanguageSelect() {
    codeLanguageSelectDown.forEach((codeLanguageSelectDownForEach) => {
        codeLanguageSelectDownForEach.style.visibility = "visible";
        codeLanguageSelectDownForEach.style.opacity = "1";
        codeLanguageSelectDownForEach.style.top = "75%";
    })
    codeLanguageSelectTop.forEach((codeLangSelectTopForEach) => {
        codeLangSelectTopForEach.style.visibility = "visible";
        codeLangSelectTopForEach.style.opacity = "1";
        codeLangSelectTopForEach.style.top = "25%";
    })
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
function backbtn1back() {
    codeLanguageSelectTop.forEach((codeLangSelectTopForEach) => {    
        codeLangSelectTopForEach.style.top = "23%";
        codeLangSelectTopForEach.style.opacity = "0";
        codeLangSelectTopForEach.style.visibility = "hidden";
    })
    codeLanguageSelectDown.forEach((codeLangSelectDownForEach) => {
        codeLangSelectDownForEach.style.top = "77%";
        codeLangSelectDownForEach.style.opacity = "0";
        codeLangSelectDownForEach.style.visibility = "hidden";
    })
    setTimeout(() => {
        dark.style.visibility = "visible";
        light.style.visibility = "visible";
        dark.style.opacity = "1";
        light.style.opacity = "1";
        textDarkDefault.style.opacity = "1";
        textDarkDefault.style.top = "85%";
        textLight.style.opacity = "1";
        textLight.style.top = "85%";
        dark.style.top = "200px";
        light.style.top = "200px";
    },500)
    btn2.style.top = "1000px";
    btn2.style.opacity = "0";
    setTimeout(() => {
        btn2.style.visibility = "hidden";
    }, 500);
    backbtn1.style.top = "1000px";
    backbtn1.style.opacity = "0";
    setTimeout(() => {
        backbtn1.style.visibility = "hidden";
    }, 500);
    setTimeout(() => {
        btn1.style.visibility = "visible";
        btn1.style.opacity = "1";
        btn1.style.top = "1000px";
    },500);
    text3.style.opacity = "0";
    text3.style.top = "34%";
    setTimeout(() => {
        text3.style.visibility = "hidden";
        text2.style.visibility = "visible";
        text2.style.opacity = "1";
        text2.style.top = "35%";
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