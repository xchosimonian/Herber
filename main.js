modal = document.getElementById("sevfon");
img = document.querySelectorAll("img");
console.log(img);
modalImg = document.getElementById("img1");
captionText = document.getElementById("mek");
let imgs = document.querySelectorAll(".pow1");
for (let i = 0; i < img.length; i++) {
    img[i].onclick = function () {
        console.log(1);
        modal.style.display = "block";
        modalImg.src = this.src;
        for (let i = 0; i < imgs.length; i++) {
            imgs[i].style = "border:2px solid black";
        }
        this.style = "border:2px solid green";
    };
}
span = document.getElementsByClassName("close")[0];
span.onclick = function () {
    modal.style.display = "none";
};
document.getElementById("slaq").style = "display:none";
let n = document.getElementById("our").offsetTop;
let m = document.getElementById("par").offsetTop;
let s1 = 0;
let z = true;
let t;
let s2 = 0;
let s3 = 0;
let s4 = 0;
document.getElementById("yy1").innerHTML = s1;
document.getElementById("yy2").innerHTML = s2;
document.getElementById("yy3").innerHTML = s3;
document.getElementById("yy4").innerHTML = s4;
function numanimet() {
    if (s1 <= 12) {
        s1++;
        document.getElementById("yy1").innerHTML = s1;
    }
    if (s2 < 345) {
        s2 = s2 + 31;
        document.getElementById("yy2").innerHTML = s2;
    }
    if (s3 < 500) {
        s3 = s3 + 35;
        document.getElementById("yy3").innerHTML = s3;
    }
    if (s4 < 250) {
        s4 = s4 + 16;
        document.getElementById("yy4").innerHTML = s4;
    }
}
window.onscroll = function () {
    if (window.scrollY > m - 500) {
        if (z) {
            z = false;
            t = setInterval(numanimet, 50);
        }
    }
    if (window.scrollY > n) {
        document.getElementById("slaq").style = "display:block";
    } else {
        document.getElementById("slaq").style = "display:none";
    }
};
document.getElementById("aaj").style = "display:none";
document.getElementById("bars").addEventListener("click", function () {
    document.getElementById("aaj").style = "display:block";
});
document.getElementById("tictac").addEventListener("click", function () {
    document.getElementById("aaj").style = "display:none";
});
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", reveal);