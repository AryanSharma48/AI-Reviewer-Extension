document.getElementById('get-review').addEventListener('click', () => {
  chrome.runtime.sendMessage({ action: 'get-reviews' });
});
