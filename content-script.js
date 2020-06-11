browser.runtime.onMessage.addListener(request => {
  const games = request.games;

  const choices = document.getElementsByClassName('content-choice');
  for (let choice of choices) {
    const titles = choice.getElementsByClassName('content-choice-title');
    for (let title of titles) {
      // Should be only one.
      if (games.has(title.textContent.trim().toLowerCase())) {
        choice.style.opacity = 0.25;
      }
    }
  }

  return Promise.resolve(null);
});
