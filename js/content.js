

// 
const createBanner = () => {
  let div = document.createElement('div');

  div.setAttribute('id', `${_CONFIG.prefix}banner`);
  div.classList.add(`${_CONFIG.prefix}banner`);

  // Banner enabled
  chrome.storage.sync.get(['banner_enabled'], (item) => {

    var banner_enabled = _CONFIG.settings.banner_enabled.default;

    if (item.hasOwnProperty('banner_enabled')) {
      var banner_enabled = item.banner_enabled;
    }

    if (banner_enabled == "0") {
      div.classList.add(`${_CONFIG.prefix}banner-hidden`);
    }

  });

  // Banner position
  chrome.storage.sync.get(['banner_position'], (item) => {

    var banner_position = _CONFIG.settings.banner_position.default;

    if (item.hasOwnProperty('banner_position')) {
      var banner_position = item.banner_position;
    }

    div.classList.add(`${_CONFIG.prefix}banner-${banner_position}`);

  });

  // Banner theme
  chrome.storage.sync.get(['banner_theme'], (item) => {

    var banner_theme = _CONFIG.settings.banner_theme.default;

    if (item.hasOwnProperty('banner_theme')) {
      var banner_theme = item.banner_theme;
    }

    div.classList.add(`${_CONFIG.prefix}banner-theme-${banner_theme}`);

  });

  // Banner text
  chrome.storage.sync.get(['banner_text'], (item) => {

    var banner_text = _CONFIG.settings.banner_text.default;

    if (item.hasOwnProperty('banner_text') && item.banner_text != '') {
      var banner_text = item.banner_text;
    }

    div.textContent = banner_text;
  });

  document.body.appendChild(div);
};



// 
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {

  if (message.action === "createBanner") {
    createBanner();
  }

});
