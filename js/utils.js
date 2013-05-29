(function () {
    'use strict';

    window.app = window.app || {};
    app.utils = app.utils || {};

    var templatesCache = {};

    app.utils.getTemplate = function (template, callback) {
        callback = callback || $.noop;
        if (templatesCache[template]) {
            callback(templatesCache[template]);
        } else {
            $.get('tpl/' + template + '.html', function (data) {
                templatesCache[template] = data;
                callback(templatesCache[template]);
            });
        }
    }

})();