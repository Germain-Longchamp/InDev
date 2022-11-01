console.log('dans main JS')

$(document).on('ready turbolinks:load', function () {

    function switchLayoutListClients(cookies) {
        switch (cookies) {
            case 'grid':
                $('#gridLayout').show()
                $('.change-layout').removeClass('right-choose').addClass('left-choose')
                break
            case 'list':
                $('#listLayout').show()
                $('.change-layout').removeClass('left-choose').addClass('right-choose')
                break
            default:
                $('#gridLayout').show()
                $('.change-layout').removeClass('right-choose').addClass('left-choose')
        }
    }

    // Get current Cookies
    const documentCookies = document.cookie.split('; ')
    const currentCookies = {};
    for (let i in documentCookies) {
        const cur = documentCookies[i].split('=');
        currentCookies[cur[0]] = cur[1];
    } // currentCookies for cookies


    // Let User change List layout Clients
    switchLayoutListClients(currentCookies.listLayout)

    $('.change-layout').on('click', function () {
        if ($(this).hasClass('left-choose')) {
            $(this).removeClass('left-choose').addClass('right-choose')
            document.cookie = 'listLayout=list;'
            $('#gridLayout').hide()
            $('#listLayout').show()
        } else {
            $(this).removeClass('right-choose').addClass('left-choose')
            document.cookie = 'listLayout=grid;'
            $('#listLayout').hide()
            $('#gridLayout').show()
        }
    });
});
