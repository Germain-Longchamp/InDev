//--- Test function
export function sayHello() {
    console.log('say hello')
    alert('say hello')
}
window.sayHello = sayHello;


//--- Show User Message Function
export function showUserMessage(message) {
    let $messageContainer = $('.user-message')
    let $svgClose = '<span class="user-message__close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg></span>'
    let $message = `<span class="user-message-success__txt">${message}</span>`

    $messageContainer.addClass('displayed user-message--success')
    $messageContainer.append($message, $svgClose)

    setTimeout(
        function () {
            $messageContainer.removeClass('displayed user-message--success')
        }, 5000);
}
window.showUserMessage = showUserMessage;

//--- Go tu url
export function goToUrl(url) {
    if (url) {
        window.location = url;
    }
    return false;
}

//--- open Url in new tab
export function openUrlInNewTab(url) {
    if (url) {
        window.open(url, '_blank')
    }
    return false;
}
