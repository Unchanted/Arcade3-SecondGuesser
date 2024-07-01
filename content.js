
document.addEventListener('click', (event) => {
  const userAction = event.target.innerText || event.target.value || event.target.alt;
  chrome.runtime.sendMessage({ action: 'user_event', data: { type: 'click', action: userAction } });
});

document.addEventListener('input', (event) => {
  const userInput = event.target.value;
  chrome.runtime.sendMessage({ action: 'user_event', data: { type: 'input', action: userInput } });
});

document.addEventListener('play', (event) => {
  if (event.target.nodeName === 'AUDIO' || event.target.nodeName === 'VIDEO') {
    chrome.runtime.sendMessage({ action: 'user_event', data: { type: 'play', action: event.target.src } });
  }
}, true);
