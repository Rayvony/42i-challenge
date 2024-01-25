export default function minChange(coins) {
  if (!Array.isArray(coins) || coins.some((coin) => typeof coin !== "number" || coin <= 0)) {
    throw new Error("Input must be an array of positive integers.");
  }
  coins.sort((a, b) => a - b);

  let minChange = 1;

  for (const coin of coins) {
    if (coin > minChange) {
      break;
    }
    minChange += coin;
  }

  return minChange;
}
