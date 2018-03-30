new_h2 = document.createElement("h2");
new_h2.append("Change By Javascript");
new_h2.className += "header-js";
document.querySelector("header").replaceChild(new_h2,document.querySelector("header").childNodes[1]);