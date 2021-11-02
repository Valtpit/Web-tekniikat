/// <reference path="jquery-3.6.0.min.js" />
$(function(){
    $("#calculate1").on("click", function(){
        let kalorit = Number($("#amount1").val()) 
        let joulet = kalorit * 4.184
        $("#result1").html(joulet.toFixed(0) + " J")
    })

    $("#amount1").on("focusin", function(){
        $("#result1").html("")
        this.select()
    })

    $("#calculate4").on("click", function() {
        let luku1 = Number($("#num1").val())
        let luku2 = Number($("#num2").val())

        let rastit = $("[name=math]")
        for (let i = 0; i < rastit.length; i ++) {
            let rasti = rastit[i];
            if ($(rasti).prop("checked") === true) {
                let lasku = Number($(rasti).val())
                if (lasku === 1) {
                    let tulos = luku1 + luku2
                    $("#result4").append(luku1 + " + " + luku2 + " = " + tulos + "<br>" )
                }

                if (lasku === 3) {
                    let tulos = luku1 - luku2
                    $("#result4").append(luku1 + " - " + luku2 + " = " + tulos + "<br>" )
                }
            }
        }
    })

})


