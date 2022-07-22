let slider = document.querySelector("#slide");
let div_in_slider = document.querySelectorAll("#slide div");
console.log(div_in_slider.length);
let next = document.querySelector("#btnnext");
let prev = document.querySelector("#btnprev");

let count = 1;
console.log(div_in_slider[count].id);
let size = div_in_slider[0].clientWidth + 45;
console.log(size);

slider.style.transform = `translateX(${-size * count}px)`;

next.addEventListener("click", moveright);

function moveright() {
  slider.style.transition = "transform 0.4s ease-in-out";
  count++;
  if (count == div_in_slider.length) {
    slider.style.transition = "none";
    count = 1;
  }
  slider.style.transform = `translateX(${-size * count}px)`;
}

prev.addEventListener("click", moveleft);

function moveleft() {
  slider.style.transition = "transform 0.4s ease-in-out";
  count--;
  if (count == -1) {
    slider.style.transition = "none";
    count = div_in_slider.length - 1;
  }
  slider.style.transform = `translateX(${-size * count}px)`;
}
