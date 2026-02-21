export function blackjackRound() {
  const player = Math.floor(Math.random() * 11) + 16;
  const dealer = Math.floor(Math.random() * 11) + 16;

  if (player > 21) return "lose";
  if (dealer > 21) return "win";
  if (player > dealer) return "win";
  if (player === dealer) return "push";
  return "lose";
}