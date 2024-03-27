
// 
const saveOptions = (e) => {
  e.preventDefault();

  const banner_enabled = document.querySelector('.localhost-banner-alert__settings-container form #banner_enabled').value;
  const banner_text = document.querySelector('.localhost-banner-alert__settings-container form #banner_text').value;
  const banner_position = document.querySelector('.localhost-banner-alert__settings-container form #banner_position').value;
  const banner_theme = document.querySelector('.localhost-banner-alert__settings-container form #banner_theme').value;
  const banner_excludeUrls = document.querySelector('.localhost-banner-alert__settings-container form #banner_excludeUrls').value;

  chrome.storage.sync.set(
    {
      banner_enabled: banner_enabled,
      banner_text: banner_text,
      banner_position: banner_position,
      banner_theme: banner_theme,
      banner_excludeUrls: banner_excludeUrls
    },
    () => {
      const status = document.getElementById('localhost-banner-alert__status');
      status.innerHTML = '<span style="color: mediumseagreen">Settings saved 👍</span>';
      setTimeout(() => {
        status.innerHTML = '';
      }, 2500);
    }
  );
};

// 
const loadOptions = () => {

  const banner_enabled_select = document.querySelector('.localhost-banner-alert__settings-container form #banner_enabled');

  _CONFIG.settings.banner_enabled.params.forEach((param) => {

    let optionElement = document.createElement("option");
    optionElement.value = param.key;
    optionElement.text = param.label;

    banner_enabled_select.appendChild(optionElement);

  });


  const banner_position_select = document.querySelector('.localhost-banner-alert__settings-container form #banner_position');

  _CONFIG.settings.banner_position.params.forEach((param) => {

    let optionElement = document.createElement("option");
    optionElement.value = param.key;
    optionElement.text = param.label;

    banner_position_select.appendChild(optionElement);

  });


  const banner_theme_select = document.querySelector('.localhost-banner-alert__settings-container form #banner_theme');

  _CONFIG.settings.banner_theme.params.forEach((param) => {

    let optionElement = document.createElement("option");
    optionElement.value = param.key;
    optionElement.text = param.label;

    banner_theme_select.appendChild(optionElement);

  });

}

// 
const restoreOptions = () => {
  chrome.storage.sync.get(
    {
      banner_enabled: _CONFIG.settings.banner_enabled.default,
      banner_text: _CONFIG.settings.banner_text.default,
      banner_position: _CONFIG.settings.banner_position.default,
      banner_theme: _CONFIG.settings.banner_theme.default,
      banner_excludeUrls: _CONFIG.settings.banner_excludeUrls.default
    },
    (items) => {
      document.querySelector('.localhost-banner-alert__settings-container form #banner_enabled').value = items.banner_enabled;
      document.querySelector('.localhost-banner-alert__settings-container form #banner_text').value = items.banner_text;
      document.querySelector('.localhost-banner-alert__settings-container form #banner_position').value = items.banner_position;
      document.querySelector('.localhost-banner-alert__settings-container form #banner_theme').value = items.banner_theme;
      document.querySelector('.localhost-banner-alert__settings-container form #banner_excludeUrls').value = items.banner_excludeUrls;
    }
  );
};


document.addEventListener('DOMContentLoaded', () => {
  loadOptions();
  restoreOptions();
});

document.querySelector('.localhost-banner-alert__settings-container form input[type="submit"]').addEventListener('click', saveOptions);
