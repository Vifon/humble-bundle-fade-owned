browser.pageAction.onClicked.addListener(tab =>
  browser.storage.sync.get("steam_id").then(storage => {
    fetch(
      "https://steamcommunity.com/id/"
        + storage.steam_id
        + "/games/?tab=all")
      .then(response => response.text())
      .then(text => {
        const gamesData = JSON.parse(text.match(/var rgGames = (\[.*\]);/)[1]);
        const normalizedGames = gamesData.map(x => x.name.toLowerCase());
        const games = new Set(normalizedGames);

        browser.tabs.sendMessage(tab.id, {games: games});
      })
  })
);
