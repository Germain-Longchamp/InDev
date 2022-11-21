//console.log('dans main JS')

$(document).on('ready turbolinks:load', function () {


    //----- Init Chosen JS on Select Inputs
    // Input Select Client
    if ($('#design_client_id').is(':visible')) {
        $('#design_client_id').chosen({
            max_selected_options: 1,
            allow_single_deselect: true,
            width: '100%',
            placeholder_text_single: 'Sélectionner un client'
        });
    }

    const $messageContainer = $('.user-message-success')
    const $svgClose = '<span class="user-message-success__close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg></span>'
    const message = `<span class="user-message-success__txt">L'utilisateur a bien été ajouté</span>`
    $messageContainer.append(message, $svgClose)

});
