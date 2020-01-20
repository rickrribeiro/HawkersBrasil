setInterval(function () {
    second1Play()
}, 1000);


setInterval(function () {
    second2Play()
}, 10000);

setInterval(function () {
    minute1Play()
}, 60000);
setInterval(function () {
    minute2Play()
}, 600000);

function second1Play() {
$("body").removeClass("play");
var aa = $("ul.second1Play li.active");

if (aa.html() == undefined) {
    aa = $("ul.second1Play li").eq(0);
    aa.addClass("before")
        .removeClass("active")
        .next("li")
        .addClass("active")
        .closest("body")
        .addClass("play");

}
else if (aa.is(":last-child")) {
    $("ul.secondPlay li").removeClass("before");
    aa.addClass("before").removeClass("active");
    aa = $("ul.secondPlay li").eq(0);
    aa.addClass("active")
        .closest("body")
        .addClass("play");
}
else {
    $("ul.second1Play li").removeClass("before");
    aa.addClass("before")
        .removeClass("active")
        .next("li")
        .addClass("active")
        .closest("body")
        .addClass("play");
}

}

function second2Play() {
$("body").removeClass("play");
var aa = $("ul.second2Play li.active");

if (aa.html() == undefined) {
    aa = $("ul.second2Play li").eq(0);
    aa.addClass("before")
        .removeClass("active")
        .next("li")
        .addClass("active")
        .closest("body")
        .addClass("play");

}
else if (aa.is(":last-child")) {
    $("ul.second2Play li").removeClass("before");
    aa.addClass("before").removeClass("active");
    aa = $("ul.second2Play li").eq(0);
    aa.addClass("active")
        .closest("body")
        .addClass("play");
}
else {
    $("ul.second2Play li").removeClass("before");
    aa.addClass("before")
        .removeClass("active")
        .next("li")
        .addClass("active")
        .closest("body")
        .addClass("play");
}

}


function minute1Play() {
    $("body").removeClass("play");
    var aa = $("ul.minute1Play li.active");
    
    if (aa.html() == undefined) {
        aa = $("ul.minute1Play li").eq(0);
        aa.addClass("before")
            .removeClass("active")
            .next("li")
            .addClass("active")
            .closest("body")
            .addClass("play");
    
    }
    else if (aa.is(":last-child")) {
        $("ul.minute1Play li").removeClass("before");
        aa.addClass("before").removeClass("active");
        aa = $("ul.minute1Play li").eq(0);
        aa.addClass("active")
            .closest("body")
            .addClass("play");
    }
    else {
        $("ul.minute1Play li").removeClass("before");
        aa.addClass("before")
            .removeClass("active")
            .next("li")
            .addClass("active")
            .closest("body")
            .addClass("play");
    }
    
    }

    
function minute2Play() {
    $("body").removeClass("play");
    var aa = $("ul.minute2Play li.active");
    
    if (aa.html() == undefined) {
        aa = $("ul.minute2Play li").eq(0);
        aa.addClass("before")
            .removeClass("active")
            .next("li")
            .addClass("active")
            .closest("body")
            .addClass("play");
    
    }
    else if (aa.is(":last-child")) {
        $("ul.minute2Play li").removeClass("before");
        aa.addClass("before").removeClass("active");
        aa = $("ul.minute2Play li").eq(0);
        aa.addClass("active")
            .closest("body")
            .addClass("play");
    }
    else {
        $("ul.minute2Play li").removeClass("before");
        aa.addClass("before")
            .removeClass("active")
            .next("li")
            .addClass("active")
            .closest("body")
            .addClass("play");
    }
    
    }