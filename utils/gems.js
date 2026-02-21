export function parseGems(input) {
  input = input.toLowerCase().replace(/,/g, "");
  if (input.includes("b")) return Math.floor(parseFloat(input) * 1e9);
  if (input.includes("m")) return Math.floor(parseFloat(input) * 1e6);
  if (input.includes("k")) return Math.floor(parseFloat(input) * 1e3);
  return parseInt(input);
}

export function formatGems(num) {
  if (num >= 1e9) return (num / 1e9).toFixed(1) + "b";
  if (num >= 1e6) return (num / 1e6).toFixed(1) + "m";
  if (num >= 1e3) return (num / 1e3).toFixed(1) + "k";
  return num.toString();
}