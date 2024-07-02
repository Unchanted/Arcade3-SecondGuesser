chrome.runtime.onInstalled.addListener(() => {
  console.log('Second Guesser installed');
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "secondGuess") {
    console.log("Second-guessing action:", request.category);
    sendResponse({ success: true });
  }
  return true;
});
