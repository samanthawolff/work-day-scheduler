var todaysDate = moment().format('L');
$("#currentDay").html("Current Date: " + todaysDate);

var currentHour = moment().hour();
console.log(currentHour);

function colorCode() {
    // 9AM color coding and test dummy
    if (currentHour === 9) {
        $("#schedule-text").addClass("present");
    }
    else if (currentHour > 9) {
        $("#schedule-text").addClass("past");
    }
    else if (currentHour < 9) {
        $("#schedule-text").addClass("future");
    }; 

    // 10AM color coding
    if (currentHour === 10) {
        $("#schedule-text-1").addClass("present");
    }
    else if (currentHour > 10) {
        $("#schedule-text-1").addClass("past");
    }
    else {
        $("#schedule-text-1").addClass("future");
    };

    // 11AM color coding
    if (currentHour === 11) {
        $("#schedule-text-2").addClass("present");
    }
    else if (currentHour > 11) {
        $("#schedule-text-2").addClass("past");
    }
    else {
        $("#schedule-text-2").addClass("future");
    };

    // 12PM color coding
    if (currentHour === 12) {
        $("#schedule-text-3").addClass("present");
    }
    else if (currentHour > 12) {
        $("#schedule-text-3").addClass("past");
    }
    else {
        $("#schedule-text-3").addClass("future");
    };

    // 1PM color coding
    if (currentHour === 13) {
        $("#schedule-text-4").addClass("present");
    }
    else if (currentHour > 13) {
        $("#schedule-text-4").addClass("past");
    }
    else {
        $("#schedule-text-4").addClass("future");
    };

    // 2PM color coding
    if (currentHour === 14) {
        $("#schedule-text-5").addClass("present");
    }
    else if (currentHour > 14) {
        $("#schedule-text-5").addClass("past");
    }
    else {
        $("#schedule-text-5").addClass("future");
    };

    // 3PM color coding
    if (currentHour === 15) {
        $("#schedule-text-6").addClass("present");
    }
    else if (currentHour > 15) {
        $("#schedule-text-6").addClass("past");
    }
    else {
        $("#schedule-text-6").addClass("future");
    };

    // 4PM color coding
    if (currentHour === 16) {
        $("#schedule-text-7").addClass("present");
    }
    else if (currentHour > 16) {
        $("#schedule-text-7").addClass("past");
    }
    else {
        $("#schedule-text-7").addClass("future");
    };

    // 5PM color coding
    if (currentHour === 17) {
        $("#schedule-text-8").addClass("present");
    }
    else if (currentHour > 17) {
        $("#schedule-text-8").addClass("past");
    }
    else {
        $("#schedule-text-8").addClass("future");
    };


}

colorCode();