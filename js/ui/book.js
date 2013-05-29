(function () {
    'use strict';

    window.app = window.app || {};
    app.ui = app.ui || {};

    app.ui.Book = Backbone.View.extend({

        _template: 'book-full',
        _model: null,

        initialize: function () {
            this.setElement('.j-book');
        },

        open: function (id) {
            this.$el.show();
            if (app.models.books.ready) {
                this._model = app.models.books.get(id);
                this._render();
            } else {
                this._model = new app.models.Book({ Id: id });
                this._model.fetch({
                    success:_.bind(function () {
                        this._render();
                    }, this),
                    error:_.bind(function () {
                        this.$el.html('<p>Ошибка. Книга не найдена</p>');
                    }, this)
                });
            }
        },

        close: function () {
            this.$el.html('');
            this.$el.hide();
        },

        _render: function () {
            app.utils.getTemplate(this._template, _.bind(function (template) {
                var bookHtml = _.template(template, this._model.toJSON());
                this.$el.html(bookHtml);
            }, this));
        }

    });
})();