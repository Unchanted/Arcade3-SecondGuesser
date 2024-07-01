chrome.runtime.onInstalled.addListener(() => {
  console.log('Second Guesser installed');
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'user_event') {
    const userEvent = message.data;
    let response = '';

    if (userEvent.type === 'click') {
      response = 'sauce daba diya';
    } else if (userEvent.type === 'input') {
      response = 'angrez ki aulaad hindi me likh';
    } else if (userEvent.type === 'play') {
      response = 'nanha munna rahi hu';
    } else {
    }

    chrome.runtime.sendMessage({ action: 'action', data: response });
  }
});
