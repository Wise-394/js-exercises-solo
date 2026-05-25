let count = 0;

function cardCounter(card) {
  let specialCard = [10, "J", "Q", "K", "A"];

  if (card >= 2 && card <= 6) {
    count++;
  } else if (specialCard.includes(card)) {
    count--;
  }

  if (count > 0) {
    return `bet ${count}`;
  } else {
    return `hold ${count}`;
  }
}
