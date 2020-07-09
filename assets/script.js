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
    const format = "LLLL";

    const result = moment().format(format);
    const startTime = moment().startOf('day').format();
    const current = moment().format('H');
    // console.log(current);
    // console.log(result);
    // console.log(startTime);

    // append date to currentDay

    const currentDay = $("#currentDay").append(result);
    // Second homework in a row , I don't know how to store to local storage.  I am unable to get any of these to work.  
    //-----------------------------------------------------------attempts at local storage------------------------------------------------------------------------

    /// ++++++WHOMEVER IS GRADING PLEASE HELP ME UNDERSTAND HOW TO "LOCALSTORAGE"  and how this works for this assignment+++++++  THIS IS THE SECOND HOMEWORK< AND I STILL DON"T KNOW+++++++++++++

    // thank you!!



    // Here is a function that detects whether localStorage is both supported and available:

    // function storageAvailable(type) {
    //     var storage;
    //     try {
    //         storage = window[type];
    //         var x = '__storage_test__';
    //         storage.setItem(x, x);
    //         storage.removeItem(x);
    //         return true;
    //     }
    //     catch(e) {
    //         return e instanceof DOMException && (
    //             // everything except Firefox
    //             e.code === 22 ||
    //             // Firefox
    //             e.code === 1014 ||
    //             // test name field too, because code might not be present
    //             // everything except Firefox
    //             e.name === 'QuotaExceededError' ||
    //             // Firefox
    //             e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
    //             // acknowledge QuotaExceededError only if there's something already stored
    //             (storage && storage.length !== 0);
    //     }
    // }
    // And here is how you would use it:

    // if (storageAvailable('localStorage')) {
    //   // Yippee! We can use localStorage awesomeness
    // }
    // else {
    //   // Too bad, no localStorage for us
    // }
    // You can test for sessionStorage instead by calling storageAvailable('sessionStorage').

    // See here for a brief history of feature-detecting localStorage.


    //  W3 SCHOOLS:: 

    // var input = document.getElementById("nine");
    // input.addEventListener("keyup", function(event) {
    //     if (event.keyCode === 13) {
    //         event.preventDefault();
    //         document.getElementById("button-addon2").click();
    //         localStorage.setItem(formNine, hour)
    //     }
    // });

    // localStorage.removeItem("");



    // MDN   ::   The following snippet accesses the current domain's local Storage object and adds a data item to it using Storage.setItem().

    // localStorage.setItem('myCat', 'Tom');
    // The syntax for reading the localStorage item is as follows:


    // var cat = localStorage.getItem('myCat');
    // The syntax for removing the localStorage item is as follows:

    // localStorage.removeItem('myCat');
    // The syntax for removing all the localStorage items is as follows:

    // // Clear all items
    // localStorage.clear();
    // Note: Please refer to the Using the Web Storage API article for a full example.

    // Specifi




    // const notes = $(".form-control");
    // const notes = document.querySelectorAll(".form_control")
    // const action = $("#button-addon2");
    // const timeD = $('.timeblock')

    // let note = localStorage.getItem(notes.val);
    // console.log(formNine.innertext, timeD);

    // const notes = JSON.parse(localStorage.getItem(".form-control")) || [];
    // console.log(notes);


    //     // Grab an html element  , querySelect is a method ,
    // var counter = document.querySelector("#counter"); // query selecting
    // var addButton = document.querySelector("#add");
    // var subtractButton = document.querySelector("#subtract");
    // // call local storage and request the value of property count
    // var count = localStorage.getItem("count");
    // console.log(count);
    // console.log("Count: ");
    // // object {}
    // var countObj = {
    //   count: 4,
    // };
    // // access value by key
    // // dot notation  use key to access value
    // console.log(countObj.count);
    // // Bracket Notation -- great for use a variable to access
    // // a key value
    // var countVar = "count";
    // console.log(countObj["count"]);
    // console.log(countObj[countVar]);
    // // function definition
    // function coolFunction() {
    //   console.log("Cool Function Running");
    // }
    // // execute function
    // coolFunction();
    // counter.textContent = count;
    // addButton.addEventListener("click", function () {
    //   count++;
    //   // update element with new count
    //   counter.textContent = count;
    //   // creation      key in local storage ,
    //   localStorage.setItem("counter", count);
    //   var newerCount = localStorage.getItem("counter");
    //   console.log(newerCount);
    //   // target element
    //   var newEl = document.getElementById("new");
    //   newEl.textContent = newerCount;
    //   // One liner that does all of above
    //   // textContent property to update
    //   // document.getElementById('new').textContent = localStorage.getItem('counter');
    // });
    // // addButton.addEventListener("click", addButton);
    // // event listner executes addButton for us
    // // addButton(event)  <-- done by event listener
    // // function addButton(event) {
    // //   count++;
    // //   // update element with new count
    // //   counter.textContent = count;
    // //   // creation      key in local storage ,
    // //   localStorage.setItem("counter", count);
    // // }
    // function add(num1, num2) {
    //   console.log(num1);
    //   console.log(num2);
    // }
    // //called with arguments 5 , 10
    // // represented by parametere num1 , num2
    // // in that order
    // add(5, 10);
    // subtractButton.addEventListener("click", function () {
    //   count--;
    //   // update counter element to now have text equal to count
    //   counter.textContent = count;
    //   localStorage.setItem("count", count);
    // });
    //--------------------------------------------------------------------------------------------------------------------------------------------------------

    // $(notes).localStorage.setItem(text, formNine)
    // const saveBtn = $(".btn");


    // if (JSON.parse(current) > 9) {
    //     formControl9.addClass('past');
    //     console.log(current);

    // const timed = function(time, formControl) {

    // if statements for time, and Form Control,  I had nobody in the study group seems to like this code.  ???? WHY?////????
    //it works....so keep it.


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


});