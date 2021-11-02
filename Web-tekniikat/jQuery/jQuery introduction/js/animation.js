/// <reference path="jquery-3.6.0.min.js" />
$(function(){

    $(".fa").on("click", function(){
        $(this).parent().next().slideToggle(3000, function(){
            let paikka = $(this).prev().children().first()
            if (paikka.hasClass("fa-minus-circle")) {
                paikka.removeClass("fa-minus-circle").addClass("fa-plus-circle")
            } else {
                paikka.removeClass("fa-plus-circle").addClass("fa-minus-circle")
            }
        })
    })





    $("#flower1").on("click", function(){
        $("#flower1").hide(2500, function(){
            $("#peony1").show(2500)
        })
    })

    $("#peony1").on("click", function(){
        $(this).fadeOut(1250, function(){
            $("#flower1").fadeIn(2500)
        })
    })

    $("#flower2").on("click", function(){
        $("#flower2").hide(2500, function(){
            $("#peony2").show(2500)
        })
    })

    $("#peony2").on("click", function(){
        $(this).fadeOut(1250, function(){
            $("#flower2").fadeIn(2500)
        })
    })
})