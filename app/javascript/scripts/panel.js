$(document).on('ready turbolinks:load', function () {
    function showPanel() {
        let targetData = $(this).attr('data-target')
        let panelToShow = $('.panel[data-panel="' + targetData + '"]')
        panelToShow.addClass('slided')
    }

    function hidePanel() {
        $(this).parents('.panel').removeClass('slided')
    }

    // Show Panel
    $('.js-show-panel').on('click', showPanel);

    // Show Panel When query
    const query = location.search
    const urlWithoutQuery = document.location.href.replace(query, '')
    query == '?addPanel=true' ? $('.panel').addClass('slided') : $('.panel').removeClass('slided')

    $('.panel__close').on('click', function () {
        window.history.pushState({ path: urlWithoutQuery }, '', urlWithoutQuery);
    });

    // Hide Panel
    $('.panel__close, .panel__overlay').on('click', hidePanel);
});
