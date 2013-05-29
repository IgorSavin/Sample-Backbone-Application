(function () {
    'use strict';

    window.app = window.app || {};
    app.ui = app.ui || {};

    app.ui.Main = Backbone.View.extend({

        events: {
            'click .j-book_title': '_onClickBook'
        },

        _template: 'book-short',
        _compiledTemplate: null,

        initialize: function () {
            this.setElement('.j-main');
        },

        open: function () {
            this.$el.show();
            app.models.books.on('change', this._onChangeModel, this);
            if (app.models.books.ready) {
                this._buildBooksList();
            } else {
                app.models.books.on('reset', this._buildBooksList, this);
                app.models.books.load()
            }
            this.delegateEvents();
        },

        close: function () {
            app.models.books.off('change', this._onChangeModel, this);
            app.models.books.off('reset', this._buildBooksList, this);
            this.undelegateEvents();
            this.$el.html('');
            this.$el.hide();
        },

        _buildBooksList: function () {
            app.utils.getTemplate(this._template, _.bind(function (template) {
                this._compiledTemplate = _.template(template);
                var documentFragment = '';
                for (var i = 0, length = app.models.books.length; i < length; i += 1) {
                    documentFragment += this._compiledTemplate(app.models.books.at(i).toJSON());
                }
                this.$el.html(documentFragment);
            }, this));
        },

        _onChangeModel: function (model) {
            var bookHtml = this._compiledTemplate(model.toJSON());
            this.$('.j-book[data-id=' + model.get('Id') + ']')
                .replaceWith(bookHtml);
        },

        _onClickBook: function (e) {
            var book = $(e.target).closest('.j-book'),
                bookId = book.data('id'),
                bookModel = app.models.books.get(bookId),
                prevSelected = bookModel.get('Selected');
            bookModel.set('Selected', !prevSelected);
        }
    });
})();