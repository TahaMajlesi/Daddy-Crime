$(document).ready(function() {

    $("#Setting-Window").css({
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    })


    $("#Setting-Btn").on("click", function() {
        if ($("#Setting-Window").hasClass("hidden")) {
            $("#Setting-Window").removeClass("hidden");
            $("#Setting-Window").addClass("flex");
        } else {
            $("#Setting-Window").addClass("hidden");
            $("#Setting-Window").removeClass("flex");
        }
    })

    $("#CloseSettings").on("click", function() {
        $("#Setting-Window").addClass("hidden");
        $("#Setting-Window").removeClass("flex");
    })



})