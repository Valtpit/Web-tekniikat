/// <reference path="jquery-3.6.0.min.js" /> 
/*
* Your name: Valtteri Pitkänen
*/

$(function(){
    $("#going_in").on("click", function(){
        let date = new Date()
        let current_year = date.getFullYear()

        let year = Number($("#year").val())
        let age = current_year - year

        if (age < 18) {
            $("#allow").html("too young") 
        } else {
            $("#allow").html("welcome")
        }
    })

    $("#year").on("focusin", function(){
        this.select()
        $("#allow").html("")
    })

    $("#even_odd").on("click", function(){
        let number = Number($("#number").val())
        if (number % 2 === 0) {
            $("#even").addClass("selected")
        } else {
            $("#odd").addClass("selected")
        }
    })

    $("#pos_neg").on("click", function(){
        let number = Number($("#number").val())
        if (number < 0) {
            $("#neg").addClass("selected")
        } else {
            $("#pos").addClass("selected")
        }
    })

    $("#number").on("focusin", function(){
        this.select()
        $(".even_odd").removeClass("selected")
        $(".pos_neg").removeClass("selected")
    })

    function RNG(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    $("#throw_dice").on("click", function(){
        let selection = $("[name=dice]:checked").val()
        if (selection === "1") {
            let dice = RNG(1, 6)
            $("#result").html(dice)
        } else {
            let dice1 = RNG(1, 6)
            let dice2 = RNG(1, 6)
            $("#result").html(dice1 + " " + dice2)
        }
    })

    $("[name=dice]").on("click", function(){
        $("#result").html("")
    })

    $("body").on("click", "#flowers1 li", function(){
        let flower = $(this).html()
        $("#selected").html(flower)
        $($(this)).remove()
    })

    $("#selected").on("click", function(){
        let flower = $(this).html()
        $("#flowers1").append("<li>" + flower + "</li>")
        $(this).html("")
    })

    let flower_images = [
        '<img src="img/kuva1.png" alt="pic 1" >',
        '<img src="img/kuva2.png" alt="pic 2" >',
        '<img src="img/kuva3.png" alt="pic 3" >',
        '<img src="img/kuva4.png" alt="pic 4" >',
        '<img src="img/kuva5.png" alt="pic 5" >',
        '<img src="img/kuva6.jpg" alt="pic 6" >',
        '<img src="img/kuva7.png" alt="pic 7" >',
        '<img src="img/kuva8.jpg" alt="pic 8" >'
    ];

    $("#standard").on("click", function(){
        $("#flowers2").html("")
        for ( let i = 0; i < flower_images.length; i++) {
            $("#flowers2").append("<li>" + flower_images[i] + "</li>")
        }
    })

    $("#random").on("click", function(){
        $("#flowers2").html("")
        while (flower_images.length > 0) {
            let random = RNG(0, flower_images.length - 1)
            $("#flowers2").append("<li>" + flower_images[random] + "</li>")
            flower_images.splice(random, 1)
        }
        $("#standard").prop("disabled", true)
        $("#random").prop("disabled", true)
        $("#set_back").prop("disabled", false)
    })

    $("#set_back").on("click", function(){
        let flowers = $("#flowers2").children()
        for (let i = 0; i < flowers.length; i++) {
            let flower = $(flowers[i]).html()
            flower_images.push(flower)
        }
        $("#flowers2").html("")
        $("#standard").prop("disabled", false)
        $("#random").prop("disabled", false)
        $("#set_back").prop("disabled", true)
    })

    $(".vehicle1").on("click", function(){
        let print = $(this).attr("data-print")
        if ($(this).prop("checked") === true) {
            $(print).html($(this).val())
        } else {
            $(print).html("")
        }
    })

    $("#check").on("click", function(){
        let boxes = $(".vehicle2")
        $(boxes).each(function(){
            let print = $(this).attr("data-print")
            if($(this).prop("checked") === true) {
                $(print).html($(this).val())
            } else {
                $(print).html("")
            }
        })
    })
})