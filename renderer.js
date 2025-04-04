// Sample game data (replace with your actual game data)
const games = [
    { id: 1, title: "My Awesome Game", path: "C:\\Games\\MyGame\\MyGame.exe", icon: "placeholder-icon.png" }, // Use placeholder images
    { id: 2, title: "Another Game", path: "C:\\Games\\AnotherGame\\Game.exe", icon: "placeholder-icon.png" },
    // ... more games
];

const gameList = document.getElementById('game-list');
const sidebarItems = document.querySelectorAll('#sidebar li');
const sections = document.querySelectorAll('#content > section');

// Function to create a game entry element
function createGameEntry(game) {
    const entry = document.createElement('div');
    entry.classList.add('game-entry');
    entry.innerHTML = `
        <img src="${game.icon}" alt="${game.title}">
        <div class="game-info">
            <h3>${game.title}</h3>
            <button class="launch-btn" data-path="${game.path}">Play</button>
        </div>
    `;

    entry.querySelector('.launch-btn').addEventListener('click', async () => {
        const result = await window.electronAPI.launchGame(game.path);
        if (!result.success) {
            alert(`Failed to launch game: ${result.error}`);
        }
    });

    return entry;
}

// Populate the game list
function renderGameList() {
    gameList.innerHTML = ''; // Clear existing entries
    games.forEach(game => {
        gameList.appendChild(createGameEntry(game));
    });
}

// Sidebar navigation
sidebarItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove active class from all items
        sidebarItems.forEach(i => i.classList.remove('active'));
        // Add active class to the clicked item
        item.classList.add('active');

        // Hide all sections
        sections.forEach(section => section.style.display = 'none');
        // Show the selected section
        const sectionId = item.dataset.section + '-section';
        document.getElementById(sectionId).style.display = 'block';

        if(item.dataset.section === "games") renderGameList();
    });
});


// Initial render
renderGameList();
document.querySelector("#sidebar li[data-section='games']").click(); //Show game section by default.