
/*
 * Parse an URL to return host, protocol, ...
 */
function parseUrl(url) {
    return new URL(url);
}


function isUrlExcluded(hostname, callback) {
    var urlInExcludeList = false;

    chrome.storage.sync.get(['banner_excludeUrls'], (item) => {
        var banner_excludeUrls = _CONFIG.settings.banner_excludeUrls.default;

        if (item.hasOwnProperty('banner_excludeUrls') && item.banner_excludeUrls != '') {
            banner_excludeUrls = item.banner_excludeUrls.split("\n");
        }
        
        urlInExcludeList = banner_excludeUrls.includes(hostname);

        callback(urlInExcludeList);
    });
}

