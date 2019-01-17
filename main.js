$(document).ready(function () {
    let name = $(".inputName"),
        location = $(".inputLocation"),
        speed = $(".inputSpeed"),
        color = $(".inputColor"),
        this_;
    $(".edit").click(function () {
        this_ = $(this).parent();
        name.val(this_.find(".name").text());
        location.val(this_.find(".location").text());
        speed.val(this_.find(".speed").text());
        let hexColor = rgb2hex(this_.find(".color").css("background-color"));
        color.val(hexColor);
        $(".modal").modal("show");
    });

    $(".save").click(function () {
        this_.find(".name").text(name.val());
        this_.find(".location").text(location.val());
        this_.find(".speed").text(speed.val());
        this_.find(".color").css('background-color', color.val());
        if (speed.val() === "0") {
            this_.find(".speed").css('color', 'red');
        } else this_.find(".speed").css('color', 'black');
        $(".modal").modal("hide");
    })
});

function rgb2hex(orig) {
    var rgb = orig.replace(/\s/g, '').match(/^rgba?\((\d+),(\d+),(\d+)/i);
    return (rgb && rgb.length === 4) ? "#" +
        ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2) : orig;
}