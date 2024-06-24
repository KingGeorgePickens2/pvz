const configGameURL = "game/iframe.html";

if (document.location.href.includes('chrome-extension://') == false) {
    document.location.replace(configGameURL);
}

document.title = 'Plants vs. Zombies MODDED Official';

var iframe = document.createElement('iframe');
iframe.src = configGameURL;
iframe.class = 'iframe';
iframe.scrolling = 'no';

var container = document.getElementById('iframe-container');
container.appendChild(iframe);

function openFullscreenURL() {
    // window.open('https://example.com', '_blank', 'fullscreen=yes');
}

function openExtensionRateLink() {
    const extensionId = chrome.runtime.id;
    const extensionRateLink = `https://chrome.google.com/webstore/detail/${extensionId}/reviews`;
    window.open(extensionRateLink, '_blank');
}

document.getElementById('fullscreenButton').addEventListener('click', openFullscreenURL);
document.getElementById('rateButton').addEventListener('click', openExtensionRateLink);
