document.addEventListener("DOMContentLoaded", () => {
    const stoneCount = document.getElementById('stone_count');
    const goldCount = document.getElementById('gold_count');
    const diamondCount = document.getElementById('diamond_count');
    // More resources
    const ironCount = document.getElementById('iron_count');

    let stone = loadProgress('stone') || 0;
    let gold = loadProgress('gold') || 0;
    let diamond = loadProgress('diamond') || 0;
    let iron = loadProgress('iron') || 0; // New resource

    // Increase resources over time
    setInterval(() => {
        stone++;
        iron += 2; // New resource increases by 2 every tick
        if (stone % 10 === 0) {
            gold++;
        }
        if (gold % 10 === 0) {
            diamond++;
        }

        // Save progress
        saveProgress('stone', stone);
        saveProgress('gold', gold);
        saveProgress('diamond', diamond);
        saveProgress('iron', iron); // New resource

        // Update the UI with short numbers format
        stoneCount.textContent = formatNumber(stone);
        goldCount.textContent = formatNumber(gold);
        diamondCount.textContent = formatNumber(diamond);
        ironCount.textContent = formatNumber(iron); // New resource
    }, 1000); // Update every second
});

function saveProgress(key, value) {
    localStorage.setItem(key, value);
}

function loadProgress(key) {
    return parseInt(localStorage.getItem(key));
}

function formatNumber(num) {
    if (num < 1000) return num; // less than a thousand
    if (num < 1000000) return (num / 1000).toFixed(1) + 'K'; // less than a million
    if (num < 1000000000) return (num / 1000000).toFixed(1) + 'M'; // less than a billion
    return (num / 1000000000).toFixed(1) + 'B'; // billion or more
}
