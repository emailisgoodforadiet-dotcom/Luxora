import { CONFIG } from "../config.js";

export function calculateMinesMultiplier(picks, bombs) {
  const safeTiles = 25 - bombs;
  let multiplier = 1;

  for (let i = 0; i < picks; i++) {
    multiplier *= (25 - i) / (safeTiles - i);
  }

  return multiplier * (1 - CONFIG.HOUSE_EDGE);
}

export function checkMineHit(bombs, picks) {
  const safeChance = (25 - bombs) / 25;
  for (let i = 0; i < picks; i++) {
    if (Math.random() > safeChance) return true;
  }
  return false;
}