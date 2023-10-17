const arrows = document.querySelectorAll(".arrow");
const cardList = document.querySelector(".cardList");
console.log(arrows);

arrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    console.log(e.target.dataset.direction);
    const direction = e.target.dataset.direction === "left" ? -1 : 1;
    const scrollAmt = cardList.clientWidth * direction;
    cardList.scrollBy({ left: scrollAmt, behavior: "smooth" });
  });
});
