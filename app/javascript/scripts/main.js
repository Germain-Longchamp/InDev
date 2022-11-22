import * as functions from './functions.js';

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

    // ----- Close User messages
    $(document).on('click', '.user-message__close', function () {
        $(this).parent().fadeOut();
    });

});
