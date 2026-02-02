document.getElementById('btn').addEventListener('click', e => {
    console.log('[Popup] Toggle button clicked');
    chrome.runtime.sendMessage({ action: "toggle-sidepanel" });

    setTimeout(() => {
        window.close();
    }, 50);
})