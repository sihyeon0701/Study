const button = document.querySelector("button");
function changebackground() {
    document.body.style.backgroundColor = "green";
}

button.addEventListener("click",changebackground);