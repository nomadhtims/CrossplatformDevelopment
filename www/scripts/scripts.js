// use when testing phone gap as will not get fired in browser
document.addEventListener("deviceready", function () {
    console.log('device ready');
    setup();
});

// use when  in browser
$(document).ready(function () {
    console.log('ready');
    setup();

});

function setup() {

}