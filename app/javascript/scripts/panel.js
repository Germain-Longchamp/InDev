//console.log('dans panel js')
function showPanel() {
    let targetData = $(this).attr('data-target')
    let panelToShow = $('.panel[data-panel="' + targetData + '"]')
    panelToShow.addClass('slided')
}

function hidePanel() {
    $(this).parents('.panel').removeClass('slided')
}



$(document).on('ready turbolinks:load', function () {
    // Show Panel
    $('.js-show-panel').on('click', showPanel);
    // Hide Panel
    $('.panel__close').on('click', hidePanel);
});
