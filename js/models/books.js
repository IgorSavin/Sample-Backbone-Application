(function () {
    'use strict';

    window.app = window.app || {};
    app.models = app.models || {};

    app.models.Book = Backbone.Model.extend({
        defaults: {
            Id: null,
            Title: null,
            Author: null,
            Publisher: null,
            Selected: null
        },
        idAttribute: 'Id',

        url: function () {
            return 'book_' + this.get('Id') + '.php';
        }
    });

    app.models.Books = Backbone.Collection.extend({
        model: app.models.Book,
        url: 'books.php',
        ready: false,

        load: function (options) {
            this.fetch({
                reset: true,
                success:_.bind(function () {
                    this.ready = true;
                }, this)
            })
        }
    });

})();