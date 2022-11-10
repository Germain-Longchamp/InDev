console.log('dans main JS')

$(document).on('ready turbolinks:load', function () {

    if ($('#design_client_id').is(':visible')) {
        $('#design_client_id').chosen({
            max_selected_options: 1,
            allow_single_deselect: true,
            width: '100%',
            placeholder_text_single: 'Sélectionner un client'
        });
    }

});
