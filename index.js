counterEl = document.querySelector(".counter");
loadingBarEl = document.querySelector(".loading-front");
hEl = document.querySelector("h1");
let i = 0;

update();
function update() {
    counterEl.innerText = i + "%";
    loadingBarEl.style.width = i + "%";
    hEl.innerText = "Loading Complete";
    if (i < 100) {
        hEl.innerText = "Loading...";

        setTimeout(update, 22);
        i++;
    }
}
