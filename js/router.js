(function () {
    'use strict';

    window.app = window.app || {};

    app.Router = Backbone.Router.extend({

        routes: {
            '': 'main',
            'book/:id': 'book',
            'book/:id/': 'book'
        },

        _currentPage: null,
        _pages: {},

        main: function () {
            this._open('Main');
        },

        book: function (id) {
            this._open('Book', id);
        },

        _open: function (page, opt_args) {
            if (this._currentPage) {
                this._pages[this._currentPage].close();
            }
            if (!this._pages[page]) {
                this._pages[page] = new app.ui[page]();
            }
            var args = Array.prototype.slice.call(arguments, 1);
            this._pages[page].open(args);
            this._currentPage = page;
        }

    });

})();