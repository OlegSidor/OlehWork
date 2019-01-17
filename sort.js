$(document).ready(function () {
    if (localStorage.getItem("sorting") != null) {
        $("body").html(localStorage.getItem("sorting"));
    }
    $(".sortable").sortable({
        connectWith: ".sortable",
        placeholder: "sortable-placeholder m-2",
        handle: '.title',
        start: function (event, ui) {
            let item = ui.item,
                placeholder = $('.sortable-placeholder');
            placeholder.css('width', item.width());
            placeholder.css('height', item.height());

        },
        stop: function () {
            localStorage.setItem("sorting", $("body").html());
        }
    });
});