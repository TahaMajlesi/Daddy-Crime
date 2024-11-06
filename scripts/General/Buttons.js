$(document).ready(function() {

    $("#Setting-Btn").hover(function() {
            $("#Setting-Btn>i").addClass("rotate-180");
            $("#Setting-Btn>i").removeClass("rotate-0");

        },
        function() {
            $("#Setting-Btn>i").addClass("rotate-0");
            $("#Setting-Btn>i").removeClass("rotate-180");
        }
    )
    $("#Save-Btn").hover(function() {
            $("#Save-Btn>i").addClass("rotate-180");
            $("#Save-Btn>i").removeClass("rotate-0");

        },
        function() {
            $("#Save-Btn>i").addClass("rotate-0");
            $("#Save-Btn>i").removeClass("rotate-180");
        }
    )
    $("#Hint-Btn").hover(function() {
            $("#Hint-Btn>i").addClass("rotate-180");
            $("#Hint-Btn>i").removeClass("rotate-0");

        },
        function() {
            $("#Hint-Btn>i").addClass("rotate-0");
            $("#Hint-Btn>i").removeClass("rotate-180");
        }
    )
})