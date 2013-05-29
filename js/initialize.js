(function () {
    'use strict';

    window.app = window.app || {};

    app.models.books = new app.models.Books();
    var router = new app.Router();

    $(function () {
        //var main = new app.ui.Main();
        Backbone.history.start();
    });
})();