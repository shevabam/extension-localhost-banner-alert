let _CONFIG = {

    "debug": false,

    "prefix": "localhost-banner-alert__",

    "matchings": [
        { "type": "includes", "value": "localhost"}, 
        { "type": "includes", "value": ".local"}, 
        { "type": "includes", "value": "127.0.0."}, 
        { "type": "includes", "value": ".test"}
    ],

    "settings": {
        "banner_enabled": {
            "params": [
                { "key": "1", "label": "Yes" },
                { "key": "0", "label": "No" },
            ],
            "default": "1"
        },

        "banner_position": {
            "params" : [
                { "key": "topleft",   "label": "Top Left" },
                { "key": "topright",  "label": "Top Right" },
                { "key": "bottomleft",  "label": "Bottom Left" },
                { "key": "bottomright",  "label": "Bottom Right" },
            ],
            "default": "topright"
        },

        "banner_theme": {
            "params": [
                { "key": "orange",  "label": "Orange" },
                { "key": "red",     "label": "Red" },
                { "key": "yellow",  "label": "Yellow" },
                { "key": "blue",    "label": "Blue" },
                { "key": "purple",  "label": "Purple" },
                { "key": "green",   "label": "Green" },
            ],
            "default": "orange"
        },

        "banner_text": {
            "default": "LOCALHOST"
        },

        "banner_excludeUrls": {
            "default": ""
        }
    }

}