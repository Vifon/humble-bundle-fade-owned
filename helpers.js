"use strict";

function normalizeTitle(title) {
  return (
    title
      .trim()
      .toLowerCase()
      .replace(/ \+(?: \d+)? dlcs?$/, '')
      .replace('®', '')
      .replace('™', '')
  );
}
