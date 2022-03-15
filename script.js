
});
$("#devimg").click(function() {
    $(this).hide();
    $("#devtxt").removeClass("devtxt");
});

$("#prodimg").click(function() {
    $(this).hide();
    $("#prodtxt").removeClass("prodtxt");
});

$("#designtxt").click(function() {
    $("#designimg").show();
    $("#designtxt").addClass("designtxt");
});

$("#devtxt").click(function() {
    $("#devimg").show();
    $("#devtxt").addClass("devtxt");
});

$("#prodtxt").click(function() {
    $("#prodimg").show();
    $("#prodtxt").addClass("prodtxt");
});

$("#pro2").hover(function() {
    console.log("hovered")
    $("this").addClass("mask");
});
