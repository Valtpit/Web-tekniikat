/// <reference path="jquery-3.6.0.min.js" /> 
/*
 * Your name: Valtteri Pitkänen 16.4
 */
let count = 0

$(function(){
    /**
     * Generates a random number in a min - max range
     * 
     * @param {Number} min  minimum value for a random number
     * @param {Number} max  maximum value for a random number
     * @returns {Number}    generated random number
     */
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    } 

    /**
     * Calculates the around of circle or square
     * 
     * @param {Number} value    radius or side measurement
     * @param {Number} type     1 = circle, 2 = square
     * @returns {String}        result of a calculation
     */
    function calculateAround(value, type) {
        let result = "";
        if (type === 1) {
            let around = 2 * Math.PI * value;
            result = "Circle around: " + around.toFixed(1);
        } else {
            let around = value * 4;
            result = "Square around: " + around.toFixed(1);
        }
        return result;
    }
    
    // dice images, use indexes 1 - 6
    let dice = [
        '',
        '<span><img src="img/noppa1.png" class="img-fluid" alt=""/></span>',
        '<span><img src="img/noppa2.png" class="img-fluid" alt=""/></span>',
        '<span><img src="img/noppa3.png" class="img-fluid" alt=""/></span>',
        '<span><img src="img/noppa4.png" class="img-fluid" alt=""/></span>',
        '<span><img src="img/noppa5.png" class="img-fluid" alt=""/></span>',
        '<span><img src="img/noppa6.png" class="img-fluid" alt=""/></span>'
    ];
    
    
    // red and blue flower
    let pair = [
        '<span><img src="img/flower1.png" class="img-fluid" alt=""/></span>',
        '<span><img src="img/flower2.png" class="img-fluid" alt=""/></span>'
    ];    

// Exercise 1. Circle or Square
    $("#calculate").on("click", function(){
        let type = Number($("[name=rad_cir_opt]:checked").val())
        let value = Number($("#radius_side").val())

        $("#result").html(calculateAround(value, type))
    })

    $("[name=rad_cir_opt]").on("click", function(){
        $("#radius_side").trigger("focus")
    })

    $("#radius_side").on("focusin", function(){
        this.select()
        $("#result").html("")
    })

// Exercise 2. Circle and Square    
    $(".rad_cir").on("click", function(){
        let button = $(this).attr("data-content")
        let result = $(this).attr("data-result")


        if ($(this).prop("checked") === true) {
            $(button).val("")
            $(button).removeClass("invisible")
            $(button).trigger("focus")
        } else {
            $(button).addClass("invisible")
        }

        $(result).html("")
    })

    $("#calculate2").on("click", function(){
        let buttons = $(".rad_cir")
        buttons.each(function(){
            if ($(this).prop("checked") === true) {
                let button = $(this).attr("data-content")
                let amount = Number($(button).val())
                let type = Number($(this).val())
                let result = $(this).attr("data-result")
                $(result).html(calculateAround(amount, type))
            }
        })
    })
    
// Exercise 3. Random numbers 1    
    
    $("#numbers").on("click", function(){
        let size = $("[name=num_scale]:checked").attr("id")
        let min = Number($("#" + size).attr("data-min"))
        let max = Number($("#" + size).attr("data-max"))

        let number = getRndInteger(min, max)
        $("#rnd_numbers").append(number + " ")

        count = count + 1
        $("#total").html(count)
    })

    $("[name=num_scale]").on("click", function (){
        $("#rnd_numbers").html("")
        count = 0
        $("#total").html(count)
    })

// Exercise 4. Random numbers 2           

    $("#random").on("click", function(){
        let min = Number($("#min").val())
        let max = Number($("#max").val())
        $("#randoms").html("")

        for (let index = 0; index < 10; index++) {
            let number = getRndInteger(min, max)
            $("#randoms").append(number + " ")
        }
    })

    $(".min_max").on("click", function(){
        $("#randoms").html("")
        $(this).select()
    })
    
// Exercise 5. Throw dices    
    $("#throw").on("click", function () {
        let pairs = [0, 0, 0, 0, 0, 0, 0]
        $("#dices").html("")
        $("#pairs").html("")

        for (let index = 0; index < 100; index++) {
            let dice1 = getRndInteger(1, 6)
            let dice2 = getRndInteger(1, 6)
            if (dice1 === dice2) {
                pairs[0] = pairs[0] +1
                pairs[dice1] = pairs[dice1] +1
                if (dice1 === 6) {

                    $("#dices").append("<li>" + dice[dice1] + dice[dice2] + pair[1] + "</li>")
                } else {
                    $("#dices").append("<li>" + dice[dice1] + dice[dice2] + pair[0] + "</li>")
                }
            } else {
                $("#dices").append("<li>" + dice[dice1] + dice[dice2] + "</li>")
            }
        }
        for (let i = 1; i < 7; i++) {
            $("#pairs").append("<span class='badge bg-primary'>" + i + ":" + pairs[i] + "</span>")
            
        }
        $("#pairs").append("<span class='badge bg-secondary'>" + "all" + ":" + pairs[0] + "</span>")
    })
    

});
