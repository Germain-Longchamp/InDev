//console.log('dans clients index js')

$(document).on('ready turbolinks:load', function () {
    const query = location.search.replace('?', '')
    const urlWithoutQuery = document.location.href.replace('?addClient=true', '')
    query == 'addClient=true' ? $('.panel').addClass('slided') : $('.panel').removeClass('slided')

    $('.panel__close').on('click', function () {
        window.history.pushState({ path: urlWithoutQuery }, '', urlWithoutQuery);
    });
});
