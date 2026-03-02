const achievements = {
  easy: [
    "Open Your Inventory",
    "Punch a Tree",
    "Craft a Crafting Table",
    "Make a Wooden Pickaxe",
    "Stone Age",
    "Acquire Hardware",
    "Cook and Eat Steak",
    "Bake Bread",
    "Plant a Seed",
    "Craft a Furnace",
    "Catch a Fish",
    "Sleep in a Bed",
    "Mine Coal",
    "Smelt an Iron Ingot",
    "Craft a Shield",
    "Tame a Cat",
    "Tame a Wolf",
    "Ride a Boat",
    "Trade with a Villager",
    "Craft a Chest"
  ],
  medium: [
    "Suit Up (Wear Full Iron Armor)",
    "Monster Hunter",
    "Enchant an Item",
    "Find a Village",
    "Brew a Potion",
    "Diamonds!",
    "Acquire Obsidian",
    "Construct a Nether Portal",
    "Find and Mine Redstone",
    "Ride a Minecart 500 Blocks",
    "Create a Map",
    "Breed Two Animals",
    "Harvest Honey",
    "Use a Loom",
    "Craft an Anvil",
    "Use a Blast Furnace",
    "Collect a Bucket of Lava",
    "Find an Amethyst Geode",
    "Use a Smithing Table",
    "Cook Kelp"
  ],
  hard: [
    "Enter The End",
    "Free the End",
    "Return to Sender",
    "A Furious Cocktail",
    "How Did We Get Here?",
    "Subspace Bubble",
    "Sniper Duel",
    "Hero of the Village",
    "Raid Captain",
    "Uneasy Alliance",
    "Arbalistic",
    "Cover Me in Debris",
    "Summon the Wither",
    "Create a Full Beacon",
    "Explore Every Biome",
    "Adventuring Time",
    "Ride a Strider on Lava",
    "All Effects Applied",
    "Defeat an Elder Guardian",
    "Find an Ancient City"
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

    const difficulty = document.createElement("div");
    difficulty.className = "difficulty";
    difficulty.textContent = item.difficulty.toUpperCase();

    cell.append(title, difficulty);
    bingoGrid.appendChild(cell);
  });
}

generateBtn.addEventListener("click", () => {
  const card = createCard();
  renderCard(card);
});
