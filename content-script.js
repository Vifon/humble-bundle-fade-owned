"use strict";

function fadeOutBundle(owned_games, box_find_func, title_find_func) {
  const bundled_games = box_find_func(document);
  for (let bundled_game of bundled_games) {
    const titles = title_find_func(bundled_game);
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
    fadeOutBundle(
      games,
      x => x.getElementsByClassName('content-choice'),
      x => x.getElementsByClassName('content-choice-title')
    )
  } else if (window.location.pathname.match("^/home/keys")) {
    fadeOutBundle(
      games,
      x => x.querySelectorAll(".unredeemed-keys-table > tbody > tr"),
      x => x.querySelectorAll(".game-name > h4")
    )
  } else {
    fadeOutBundle(
      games,
      x => x.getElementsByClassName('game-boxes'),
      x => x.getElementsByClassName('front-page-art-image-text')
    )
  }

  return Promise.resolve(null);
});
