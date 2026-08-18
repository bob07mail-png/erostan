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
                        '<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/>' +
                    '</svg>' +
                '</div>' +
                '<div class="menu__text">Фільми 18+</div>' +
            '</li>');

            button.on('hover:enter', function () {
                Lampa.Activity.push({
                    title: 'Фільми 18+',
                    component: 'category_full',
                    source: 'tmdb',
                    url: 'discover/movie?with_keywords=190378|9882&include_adult=true',
                    page: 1
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
