document.querySelector('#localhost-banner-alert__popup-settings').addEventListener('click', () => {
    if (chrome.runtime.openOptionsPage) {
        chrome.runtime.openOptionsPage();
    } else {
        window.open(chrome.runtime.getURL('pages/settings.html'));
    }
});