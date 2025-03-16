<<<<<<< HEAD
function swapTheme() {
    let app = document.getElementById("app");
    let button = document.getElementById("swap");

    if (app.classList.contains("day")) {
        app.classList.remove("day");
        app.classList.add("night");
        button.classList.remove("button_day");
        button.classList.add("button_night");
    } else {
        app.classList.remove("night");
        app.classList.add("day");
        button.classList.remove("button_night");
        button.classList.add("button_day");
    }
}
function createDiv(width, height, text)
{
    let newdiv=document.createElement("div");
    newdiv.style.width=width+"px";
    newdiv.style.height=height+"px";
    newdiv.textContent=text;
    document.getElementById("container").appendChild(newdiv);
}

function toggleVisibility() {
    let para = document.getElementById("useless-paragraph");

    if (para) {
        para.parentNode.removeChild(para);
    } else {
        let newPara = document.createElement("p");
        newPara.id = "useless-paragraph";
        newPara.textContent = "Useless paragraph.";
        document.body.insertBefore(newPara, document.querySelector("button"));
    }
}

//fourth question

document.getElementById("colorchange").addEventListener("click", function () {
    let color = document.getElementById("colorbox").value;
    document.getElementById("text-container").style.color = color;
});

document.getElementById("fontsize").addEventListener("input", function () {
    let size = document.getElementById("fontsize").value + "px";
    document.getElementById("text-container").style.fontSize = size;
});

document.getElementById("italic").addEventListener("click", function () {
    let text = document.getElementById("text-container");
    text.style.fontStyle = text.style.fontStyle === "italic" ? "normal" : "italic";
});

document.getElementById("underline").addEventListener("click", function () {
    let text = document.getElementById("text-container");
    text.style.textDecoration = text.style.textDecoration === "underline" ? "none" : "underline";
});

document.getElementById("bold").addEventListener("click", function () {
    let text = document.getElementById("text-container");
    text.style.fontWeight = text.style.fontWeight === "bold" ? "normal" : "bold";
});

document.getElementById("list").addEventListener("change", function () {
    let font = document.getElementById("list").value;
    document.getElementById("text-container").style.fontFamily = font;
});

document.getElementById("getstyle").addEventListener("click", function () {
    let text = document.getElementById("text-container");
    let styles = window.getComputedStyle(text);
    
    let cssProps = `color: ${styles.color}; font-size: ${styles.fontSize}; font-family: ${styles.fontFamily};`;

    if (styles.fontStyle === "italic") {
        cssProps += " font-style: italic;";
    }
    if (styles.textDecoration.includes("underline")) {
        cssProps += " text-decoration: underline;";
    }
    if (styles.fontWeight === "700" || styles.fontWeight === "bold") {
        cssProps += " font-weight: bold;";
    }

    document.getElementById("css-props").textContent = cssProps;
});
=======
function swapTheme() {
    let app = document.getElementById("app");
    let button = document.getElementById("swap");

    if (app.classList.contains("day")) {
        app.classList.remove("day");
        app.classList.add("night");
        button.classList.remove("button_day");
        button.classList.add("button_night");
    } else {
        app.classList.remove("night");
        app.classList.add("day");
        button.classList.remove("button_night");
        button.classList.add("button_day");
    }
}
function createDiv(width, height, text)
{
    let newdiv=document.createElement("div");
    newdiv.style.width=width+"px";
    newdiv.style.height=height+"px";
    newdiv.textContent=text;
    document.getElementById("container").appendChild(newdiv);
}

function toggleVisibility() {
    let para = document.getElementById("useless-paragraph");

    if (para) {
        para.parentNode.removeChild(para);
    } else {
        let newPara = document.createElement("p");
        newPara.id = "useless-paragraph";
        newPara.textContent = "Useless paragraph.";
        document.body.insertBefore(newPara, document.querySelector("button"));
    }
}

//fourth question

document.getElementById("colorchange").addEventListener("click", function () {
    let color = document.getElementById("colorbox").value;
    document.getElementById("text-container").style.color = color;
});

document.getElementById("fontsize").addEventListener("input", function () {
    let size = document.getElementById("fontsize").value + "px";
    document.getElementById("text-container").style.fontSize = size;
});

document.getElementById("italic").addEventListener("click", function () {
    let text = document.getElementById("text-container");
    text.style.fontStyle = text.style.fontStyle === "italic" ? "normal" : "italic";
});

document.getElementById("underline").addEventListener("click", function () {
    let text = document.getElementById("text-container");
    text.style.textDecoration = text.style.textDecoration === "underline" ? "none" : "underline";
});

document.getElementById("bold").addEventListener("click", function () {
    let text = document.getElementById("text-container");
    text.style.fontWeight = text.style.fontWeight === "bold" ? "normal" : "bold";
});

document.getElementById("list").addEventListener("change", function () {
    let font = document.getElementById("list").value;
    document.getElementById("text-container").style.fontFamily = font;
});

document.getElementById("getstyle").addEventListener("click", function () {
    let text = document.getElementById("text-container");
    let styles = window.getComputedStyle(text);
    
    let cssProps = `color: ${styles.color}; font-size: ${styles.fontSize}; font-family: ${styles.fontFamily};`;

    if (styles.fontStyle === "italic") {
        cssProps += " font-style: italic;";
    }
    if (styles.textDecoration.includes("underline")) {
        cssProps += " text-decoration: underline;";
    }
    if (styles.fontWeight === "700" || styles.fontWeight === "bold") {
        cssProps += " font-weight: bold;";
    }

    document.getElementById("css-props").textContent = cssProps;
});
>>>>>>> caee9e8 (Initial commit)
