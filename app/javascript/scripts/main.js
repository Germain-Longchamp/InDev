import * as functions from './functions.js';

$(document).on('turbolinks:before-cache', function () {
    $('.panel').removeClass('slided')
});

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

    // Input Select Client Index Clients
    if ($('#searchClient').is(':visible')) {
        $('#searchClient').chosen({
            max_selected_options: 1,
            allow_single_deselect: true,
            width: '100%',
            placeholder_text_single: 'Chercher un client'
        });

        $('#searchClient').on('change', function () {
            var url = $(this).val();
            functions.goToUrl(url)
        });
    }

    // Input Select Design
    if ($('#searchDesign').is(':visible')) {
        $('#searchDesign').chosen({
            max_selected_options: 1,
            allow_single_deselect: true,
            width: '100%',
            placeholder_text_single: 'Chercher une maquette'
        });

        $('#searchDesign').on('change', function () {
            var url = $(this).val();
            functions.openUrlInNewTab(url)
        });
    }


    // ----- Close User messages
    $(document).on('click', '.user-message__close', function () {
        $(this).parent().fadeOut();
    });

});
