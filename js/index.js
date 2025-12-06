
document.getElementById("heroTitle").onclick = function () {
  document.getElementById("heroTitle").textContent = "Your Next Home Awaits!";
};



let cards = [
  { id: "c1", name: "3BHK Apartment" },
  { id: "c2", name: "Luxury Villa" },
  { id: "c3", name: "2BHK Flat" },
  { id: "c4", name: "Modern House" },
  { id: "c5", name: "Beach Villa" },
  { id: "c6", name: "Penthouse" }
];

for (let i = 0; i < cards.length; i++) {
  let card = document.getElementById(cards[i].id);

  card.onclick = function () {
    alert("Selected Property: " + cards[i].name);
  };
}
