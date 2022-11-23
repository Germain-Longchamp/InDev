//console.log('popin')

$(document).on('ready turbolinks:load', function () {
    function showPopIn() {
        console.log($(this))
        const hasPopInParent = $(this).parents('.has-popin')
        const popInToShow = hasPopInParent.find('.popin')
        popInToShow.addClass('displayed')
    }

    function hidePopIn() {
        const popInParent = $(this).parent()
        popInParent.removeClass('displayed')
    }

    $(document).on('click', '.popin-trigger', showPopIn);
    $(document).on('click', '.popin-close', hidePopIn);
});
