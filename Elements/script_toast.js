function myFunction() {
    let tshow = document.getElementById("toast");
    tshow.className = "show";
    setTimeout(function () { tshow.className = tshow.className.replace("show", ""); }, 3000);
}