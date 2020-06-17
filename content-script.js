"use strict";

function fadeOutBundle(owned_games, box_class, title_class) {
  const bundled_games = document.getElementsByClassName(box_class);
  for (let bundled_game of bundled_games) {
    const titles = bundled_game.getElementsByClassName(title_class);
    for (let title of titles) {
      // Should be only one.

      const normalizedTitle = normalizeTitle(title.textContent);
      if (owned_games.has(normalizedTitle)) {
        bundled_game.style.opacity = 0.25;
      }
    }
  }
}

browser.runtime.onMessage.addListener(request => {
  const games = request.games;

  if (window.location.pathname.match("^/subscription")) {
    fadeOutBundle(games, 'content-choice', 'content-choice-title')
  } else {
    fadeOutBundle(games, 'game-boxes', 'front-page-art-image-text')
  }

  return Promise.resolve(null);
});
