//console.log('dans clients index js')

$(document).on('ready turbolinks:load', function () {

    function showClientsGrid() {
        $('#gridLayout').show()
        $('#listLayout').hide()
        $('.change-layout').removeClass('right-choose').addClass('left-choose')
    }

    function showClientsList() {
        $('#listLayout').show()
        $('#gridLayout').hide()
        $('.change-layout').removeClass('left-choose').addClass('right-choose')
    }

    function switchLayoutListClients(cookies) {
        switch (cookies) {
            case 'grid':
                showClientsGrid()
                break
            case 'list':
                showClientsList()
                break
            default:
                showClientsGrid()
        }
    }

    // Get current Cookies
    const documentCookies = document.cookie.split('; ')
    const currentCookies = {};
    // Tranform string to JSON
    for (let i in documentCookies) {
        const cur = documentCookies[i].split('=');
        currentCookies[cur[0]] = cur[1];
    }

    switchLayoutListClients(currentCookies.listLayout)


    // Let User change List layout Clients
    $('.change-layout').on('click', function () {
        if ($(this).hasClass('left-choose')) {
            document.cookie = 'listLayout=list;'
            showClientsList()
        } else {
            document.cookie = 'listLayout=grid;'
            showClientsGrid()
        }
    });
});
