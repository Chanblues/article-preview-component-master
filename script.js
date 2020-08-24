let share_btn = document.getElementById("share");
let social_tab = document.getElementById("social_link");
let share_arrow = document.querySelector(".fas");

share_btn.addEventListener('click', () => {
    if (social_tab.style.display == "none") {
        social_tab.style.display = "flex";
        share_btn.style.backgroundColor = "hsl(212, 23%, 69%)";
        share_arrow.style.color = "white";
    } else {
        social_tab.style.display = "none";
        share_btn.style.backgroundColor = "hsl(210, 46%, 95%)";
        share_arrow.style.color = "#6E8098";
    }
})