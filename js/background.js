
importScripts('config.js');
importScripts('functions.js');


chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete' && tab.active) {
        let url = tab.url;

        if (_CONFIG.debug === true) {
            console.group("-- Debug extension Localhost Banner Alert --");
        }

        if (_CONFIG.debug === true) {
            console.log(`URL: ${url}`);
        }


        let showBanner = false;

        if (url) {

            let hostname = parseUrl(url).host;

            if (_CONFIG.debug === true) {
                console.log(`hostname: ${hostname}`);
            }

            isUrlExcluded(hostname, function(isExcluded) {
                if (_CONFIG.debug === true) {
                    console.log(`isUrlExcluded: ${isExcluded}`);
                }

                if (false === isExcluded) {
                    _CONFIG.matchings.forEach(function(elt) {

                        if (elt.type == "includes") {
                            if (hostname.includes(elt.value)) {

                                if (_CONFIG.debug === true) {
                                    console.log(`Matching with ${elt.value}`);
                                }

                                showBanner = true;

                            }
                        }

                    })
                }

                if (_CONFIG.debug === true) {
                    console.log(`showBanner: ${showBanner}`)
                }

                if (showBanner === true) {
                    if (_CONFIG.debug === true) {
                        console.log('Message sended');
                    }
                    
                    chrome.tabs.sendMessage(tabId, { action: "createBanner" });
                }


                if (_CONFIG.debug === true) {
                    console.groupEnd();
                }
            });

        }

    }
});
