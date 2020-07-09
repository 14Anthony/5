$(document).ready(function() {
    //use moment js to display date and time. moment js. docs. 
    //  Per JJ, on 7/7 preclass office hours, to satisfy the option  of happening to grab the if statement from the book Jquery, we need to discuss an options 
    // const formControl = $('.form-control');
    const formNine = $('#nine')
    const formTen = $('#ten')
    const formEleven = $('#eleven')
    const formTwelve = $('#twelve')
    const formOne = $('#one')
    const formTwo = $('#two')
    const formThree = $('#three')
    const formFour = $('#four')
    const formFive = $('#five')
    const timeD = document.querySelectorAll('.timeblock')
    const format = "LLLL";

    const result = moment().format(format);
    const startTime = moment().startOf('day').format();
    const current = moment().format('H');
    // console.log(current);
    // console.log(result);
    // console.log(startTime);

    // append date to currentDay

    const currentDay = $("#currentDay").append(result);
    // const saveBtn = $(".btn");


    // if (JSON.parse(current) > 9) {
    //     formControl9.addClass('past');
    //     console.log(current);

    // const timed = function(time, formControl) {

    // if statements for time, and Form Control,  I had nobody in the study group seems to like this code.  ???? WHY?////????

    /* if (currentDay >time)
        $('form-control').addClass('past');
    }
    if ( time === 9){
        $("#9").addClass('present');
    }
    if ( time < 9){
        $('#9').addClass('future');
    }*/
    // result()   THIS NIS NOGOOD
    // current = 13  testing to see if the grid changes at 1 oclock___________________________
    if (JSON.parse(current) > 9) {
        formNine.addClass('past');
        // formNine.removeClass('present'); testing to see if the add class will change the class to the css 
        // console.log(current);
    }
    if (JSON.parse(current) === 9) {
        formNine.addClass('present');

    }
    if (JSON.parse(current) < 9) {
        formNine.addClass('future');
    }

    if (JSON.parse(current) > 10) {
        formTen.addClass('past');
    }
    if (JSON.parse(current) === 10) {
        formTen.addClass('present');
    }
    if (JSON.parse(current) < 10) {
        formTen.addClass('future');
    }
    if (JSON.parse(current) > 11) {
        formEleven.addClass('past');
    }
    if (JSON.parse(current) === 11) {
        formEleven.addClass('present');
    }
    if (JSON.parse(current) < 11) {
        formEleven.addClass('future');
    }
    if (JSON.parse(current) > 12) {
        formTwelve.addClass('past');
    }
    if (JSON.parse(current) === 12) {
        formTwelve.addClass('present');
    }
    if (JSON.parse(current) < 12) {
        formTwelve.addClass('future');
    }
    if (JSON.parse(current) > 13) {
        formOne.addClass('past');
    }
    if (JSON.parse(current) === 13) {
        formOne.addClass('present');
    }
    if (JSON.parse(current) < 13) {
        formOne.addClass('future');
    }
    if (JSON.parse(current) > 14) {
        formTwo.addClass('past');
    }
    if (JSON.parse(current) === 14) {
        formTwo.addClass('present');
    }
    if (JSON.parse(current) < 14) {
        formTwo.addClass('future');
    }
    if (JSON.parse(current) > 15) {
        formThree.addClass('past');
    }
    if (JSON.parse(current) === 15) {
        formThree.addClass('present');
    }
    if (JSON.parse(current) < 15) {
        formThree.addClass('future');
    }
    if (JSON.parse(current) > 16) {
        formFour.addClass('past');
    }
    if (JSON.parse(current) === 16) {
        formFour.addClass('present');
    }
    if (JSON.parse(current) < 16) {
        formFour.addClass('future');
    }
    if (JSON.parse(current) > 17) {
        formFive.addClass('past');
    }
    if (JSON.parse(current) === 17) {
        formFive.addClass('present');
    }
    if (JSON.parse(current) < 17) {
        formFive.addClass('future');
    }
    // Second homework in a row , I don't know how to store to local storage
    // const notes = JSON.parse(localStorage.getItem('notes')) || [];
    // console.log(notes);







});