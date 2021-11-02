function getBMI(height, weight) {
    let height1 = height / 100
    let BMI = (weight / (Math.pow(height1, 2.5))) * 1.3
    return BMI.toFixed(1)
}

function getWeightLimit(value, factor) {
    let limit = (factor / 1.3) * Math.pow(value / 100, 2.5)
    limit = limit.toFixed(0)
    return limit
}

function validateInput() {
    let today = new Date()
    let current_year = today.getFullYear()
    let year = current_year - $("#year").val

    if (Number($("#year").val()) == 0 || Number($("#weight").val()) == 0 || Number($("#height").val()) == 0) {
        $("#m_title").html("Missing input")
        $("#m_body").html("You need to write all input data")
        return false
    } else if (year < 20 || year > 60) {
        $("#m_title").html("Note the age")
        $("#m_body").html("BMI results are for person aged 20-60")
        return false
    } else {
        return true
    }
}

function message() {
    var myModal = new bootstrap.Modal(document.getElementById('mymessage'), {backdrop: "static"})
    myModal.show()
}

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

$("#year, #weight, #height").on("click", function(){
    for (let index = 0; index < 8; index++) {
        $("#BMIResult").html("")
        $("#val1").html("")
        $("#val2").html("")
        $("#BMI" + index).removeClass("tausta")
    }
})



$("#calc").on("click", function(){
    if(validateInput() === false) {
        message()
        return
    }
    for (let index = 0; index < 8; index++) {
        $("#BMI" + index).removeClass("tausta")
        
    }

    let weight = $("#weight").val()
    let height = $("#height").val()
    let BMI = getBMI(height, weight)
    $("#BMIResult").html(BMI)

    if($("#BMIrange").val = true) {
        let val1 = getWeightLimit(height, 18.5)
        let val2 = getWeightLimit(height, 24.9)
        $("#val1").html(val1)
        $("#val2").html(val2)

        if (BMI < 17) {
            $("#BMI1").addClass("tausta")
        } else if (BMI >= 17 && BMI < 18.5) {
            $("#BMI2").addClass("tausta")
        } else if (BMI >= 18.5 && BMI < 25) {
            $("#BMI3").addClass("tausta")
        } else if (BMI >= 25 && BMI < 30) {
            $("#BMI4").addClass("tausta")
        } else if (BMI >= 30 && BMI < 35) {
            $("#BMI5").addClass("tausta")
        } else if (BMI >= 35 && BMI < 40) {
            $("#BMI6").addClass("tausta")
        } else if (BMI >= 40) {
            $("#BMI7").addClass("tausta")
        }
    }
})




$("#waist").on("click", function(){
    for (let index = 0; index < 4; index++) {
        $("#waist" + index).removeClass("tausta")
    }

    $("#waist").val("")
})

$("[name=gender]").on("click", function(){
    for (let index = 0; index < 4; index++) {
        $("#waist" + index).removeClass("tausta")
    }
    $("#waist").focus()
    $("#waist").val("")
})

$("#waistButton").on("click", function(){
    let waist = $("#waist").val()

    let gender = Number($("[name=gender]:checked").val())
    if (gender === 1) {
        if (waist < 90) {
            $("#waist1").addClass("tausta")
        } else if (waist >= 90 && waist <= 100) {
            $("#waist2").addClass("tausta")
        } else {
            $("#waist3").addClass("tausta")
        }
    } else if (waist < 80) {
        $("#waist1").addClass("tausta")
    } else if (waist >= 80 && waist <= 90) {
        $("#waist2").addClass("tausta")
    } else {
        $("#waist3").addClass("tausta")
    }
})