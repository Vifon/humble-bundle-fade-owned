"use strict";

browser.runtime.onMessage.addListener(request => {
  const games = request.games;

  const choices = document.getElementsByClassName('content-choice');
  for (let choice of choices) {
    const titles = choice.getElementsByClassName('content-choice-title');
    for (let title of titles) {
      // Should be only one.

      const normalizedTitle = normalizeTitle(title.textContent);
      if (games.has(normalizedTitle)) {
        choice.style.opacity = 0.25;
      }
    }
  }

  return Promise.resolve(null);
});
