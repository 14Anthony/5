//use moment js to display date and time. moment js. docs. 

const format = "LLLL";

const result = moment().format(format);

// console.log(result);

// append date to currentDay

const currentDay = $("#currentDay").append(result);
// const saveBtn = $(".btn");

if (currentDay > "9") {
    $('#9').addClass('past');
}