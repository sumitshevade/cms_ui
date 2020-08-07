$(document).ready(function () {
    $("#contactForm").hide();

    $("#addContact").click(function () {
        $("#contactForm").toggle();
    });

    $("#cancelContact").click(function () {
        $("#contactForm").toggle();
    });

    $("#saveContact").click(function () {
        $("#contactForm").toggle();
    });
});