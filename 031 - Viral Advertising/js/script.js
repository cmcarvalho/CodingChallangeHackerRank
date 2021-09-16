"use strict";

function viralAdvertising(n) {
  // DAY 01
  let shared = 5;
  let liked = Math.floor(shared / 2);
  let cumulative = liked;
  console.log(liked);

  for (let i = 2; i <= n; i++) {
    shared = liked * 3;
    liked = Math.floor(shared / 2);
    cumulative = cumulative + liked;

    console.log(
      `Day ${i + 1},`,
      `Shared: ${shared}`,
      `Liked: ${liked}`,
      `Cumulative: ${cumulative}`
    );
  }

  return cumulative;
}

viralAdvertising(5);
