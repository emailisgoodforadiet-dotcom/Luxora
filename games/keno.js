function playKeno() {
    // Keno game logic goes here
    const drawnNumbers = drawNumbers();
    const userSelections = getUserSelections();
    const matches = drawnNumbers.filter(num => userSelections.includes(num));
    return matches.length;
}

function drawNumbers() {
    // Sample implementation to draw 20 random numbers from 1 to 80
    const numbers = Array.from({ length: 80 }, (_, index) => index + 1);
    const shuffled = numbers.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 20);
}

function getUserSelections() {
    // This should return user's selected numbers, for now it returns a static sample.
    return [1, 2, 3, 4, 5]; // Replace with dynamic user input in the real implementation
}