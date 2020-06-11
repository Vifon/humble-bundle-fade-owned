function saveOptions(e) {
  e.preventDefault();
  browser.storage.sync.set({
    steam_id: document.getElementById("steam_id").value
  });
}

function restoreOptions() {

  function setCurrentChoice(result) {
    document.getElementById("steam_id").value = result.steam_id || "";
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  let getting = browser.storage.sync.get("steam_id");
  getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.getElementById("settings").addEventListener("submit", saveOptions);
