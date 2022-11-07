$(document).on('ready turbolinks:load', function () {
    function createCookie(name, value, days) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            var expires = "; expires=" + date.toGMTString();
        } else {
            var expires = "";
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    }

    function readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1, c.length);
            }
            if (c.indexOf(nameEQ) == 0) {
                return c.substring(nameEQ.length, c.length);
            }
        }
        return null;
    }

    function eraseCookie(name) {
        createCookie(name, "", -1);
    }

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
            createCookie('listLayout', 'list', 1)
            showClientsList()
        } else {
            createCookie('listLayout', 'grid', 1)
            showClientsGrid()
        }
    });

    //console.log(document.cookie)
});
