const achievements = {
  easy: [
    "Taking Inventory",
    "Getting Wood",
    "Benchmarking",
    "Time to Mine!",
    "Hot Topic",
    "Acquire Hardware",
    "Time to Farm!",
    "Bake Bread",
    "The Lie",
    "Getting an Upgrade",
    "Delicious Fish",
    "Cow Tipper",
    "MOAR Tools",
    "Leader Of The Pack",
    "Dispense With This",
    "Repopulation",
    "Overkill",
    "Inception"
  ],
  medium: [
    "Time to Strike!",
    "Monster Hunter",
    "Sniper Duel",
    "Diamonds!",
    "Enchanter",
    "Librarian",
    "Into Fire",
    "Local Brewery",
    "The End?",
    "The End.",
    "On A Rail",
    "Adventuring Time",
    "Overpowered",
    "When Pigs Fly",
    "Diamonds to You!",
    "Return to Sender"
  ],
  hard: [
    "Into the Nether",
    "Ghast Tear",
    "Blaze Rod",
    "Potion",
    "The Enderdragon",
    "The Beginning?",
    "Beaconator",
    "Zombie Doctor",
    "The Beginning.",
    "The End... Again...",
    "You Need a Mint",
    "Super Sonic",
    "Lion Hunter",
    "Stayin' Frosty",
    "Chestful of Cobblestone"
  ]
};

const distribution = {
  easy: 10,
  medium: 9,
  hard: 6
};

const generateBtn = document.getElementById("generate-btn");
const bingoGrid = document.getElementById("bingo-grid");

function shuffle(items) {
  const array = [...items];
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function pickUnique(items, count) {
  return shuffle(items).slice(0, count);
}

function createCard() {
  const chosen = [
    ...pickUnique(achievements.easy, distribution.easy).map((title) => ({ title, difficulty: "easy" })),
    ...pickUnique(achievements.medium, distribution.medium).map((title) => ({ title, difficulty: "medium" })),
    ...pickUnique(achievements.hard, distribution.hard).map((title) => ({ title, difficulty: "hard" }))
  ];

  return shuffle(chosen);
}

function renderCard(card) {
  bingoGrid.innerHTML = "";

  card.forEach((item) => {
    const cell = document.createElement("article");
    cell.className = `bingo-cell ${item.difficulty}`;

    const title = document.createElement("div");
    title.className = "title";
    title.textContent = item.title;

    cell.append(title);
    bingoGrid.appendChild(cell);
  });
}

generateBtn.addEventListener("click", () => {
  const card = createCard();
  renderCard(card);
});