export function rollColourDice(selectedColour) {
  const colours = ["🟥","🟦","🟩","🟨","🟪","🟧"];
  const results = [];

  for (let i = 0; i < 6; i++) {
    results.push(colours[Math.floor(Math.random() * colours.length)]);
  }

  const matches = results.filter(c => c === selectedColour).length;

  let multiplier = 0;

  if (matches === 1) multiplier = 2;
  if (matches === 2) multiplier = 0.5;
  if (matches === 3) multiplier = 3;
  if (matches === 4) multiplier = 4;
  if (matches === 5) multiplier = 5;
  if (matches === 6) multiplier = 6;

  return { results, matches, multiplier };
}