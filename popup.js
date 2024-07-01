
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'action') {
    document.getElementById('sujhav').innerText = message.data;
  }
});
