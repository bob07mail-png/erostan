(function () {
    'use strict';

    function startPlugin() {
        if (window.plugin_erotica_ready) return;
        window.plugin_erotica_ready = true;

        function addMenuButton() {
            if ($('.menu .menu__item[data-action="erotica_movies"]').length) return;

            var button = $('<li class="menu__item selector" data-action="erotica_movies">' +
                '<div class="menu__ico">' +
                    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" xmlns="http://www.w3.org/2000/svg">' +
                        '<rect x="2" y="7" width="20" height="15" rx="2" stroke="currentColor"/>' +
                        '<polyline points="17 2 12 7 7 2" stroke="currentColor"/>' +
                    '</svg>' +
                '</div>' +
                '<div class="menu__text">Фільми 18+</div>' +
            '</li>');

            button.on('hover:enter', function () {
                Lampa.Activity.push({
                    title: 'Фільми 18+',
                    component: 'category_full',
                    source: 'tmdb',
                    card_type: 'movie',
                    page: 1,
                    url: function (params) {
                        return Lampa.TMDB.api('discover/movie?with_keywords=910|738|3260|3456|6373|11534|9838|33451|155535|158713|186071|192188|208433|267122|282903&sort_by=popularity.desc&page=' + params.page);
                    }
                });
            });

            $('.menu .menu__list').eq(0).append(button);
        }

        function init() {
            addMenuButton();
        }

        if (window.appready) {
            init();
        } else {
            Lampa.Listener.follow('app', function (e) {
                if (e.type === 'ready') init();
            });
        }
    }

    startPlugin();
})();
