console.log('dans crate account')

// -----Script for creating account
$(document).on('ready turbolinks:load', function () {
    /*
    $('#startSignUp').click(function() {
        $('#screenStart').hide();
        $('#screenCompany').show();
    });
    */

    //------------- Create Company with ajax // Method 2
    $('#createCompany').on('submit', function (e) {
        e.preventDefault();
        datas = $(this).serializeArray();

        console.log(datas)

        $.ajax({
            type: 'POST',
            url: '/companies',
            data: datas,
            success: function (data) {
                $('.step1').hide();
                $('.step2').show();
                /*
                setTimeout(
                    function () {
                        $('#screenWaiting').hide();
                        $('#screenUser').show();
                    }, 3000);
                 */
            },
            error: function (response) { }
        });


    });
});