var todaysDate = moment().format('L');
$("#currentDay").html("Current Date: " + todaysDate);

var currentHour = moment().hour();

function colorCode() {
    if (currentHour === 9) {
        $("#schedule-text").addClass("present");
    }
    else if (currentHour > 9) {
        $("#schedule-text").addClass("past");
    }
    else {
        $("#schedule-text").addClass("future");
    };

    if (currentHour === 10) {
        $("#schedule-text-1").addClass("present");
    }
    else if (currentHour > 10) {
        $("#schedule-text-1").addClass("past");
    }
    else {
        $("#schedule-text-1").addClass("future");
    };


}

colorCode();