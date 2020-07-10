$(document).ready(function() {
    //--------formatting of the Clock database------------
    const formNine = $('#nine');
    const formTen = $('#ten');
    const formEleven = $('#eleven');
    const formTwelve = $('#twelve');
    const formOne = $('#one');
    const formTwo = $('#two');
    const formThree = $('#three');
    const formFour = $('#four');
    const formFive = $('#five');

    const format = "LLLL";

    const result = moment().format(format);
    const startTime = moment().startOf('day').format();
    const current = moment().format('H');
    // console.log(current);
    // console.log(result);
    // console.log(startTime);

    // append date to currentDay

    const currentDay = $("#currentDay").append(result);
    //use moment js to display date and time. moment js. docs. 
    //  Per JJ, on 7/7 preclass office hours, to satisfy the option  of happening to grab the if statement from the book Jquery, we need to discuss an options 
    // const formControl = $('.form-control');
    //-------------Pulling IDs for the Local Storage ----------------


    //-------------Pulling ID for the if Statements-----------------



    // Second homework in a row , I don't know how to store to local storage.  I am unable to get any of these to work.  
    //-----------------------------------------------------------attempts at local storage------------------------------------------------------------------------

    /// ++++++WHOMEVER IS GRADING PLEASE HELP ME UNDERSTAND HOW TO "LOCALSTORAGE"  and how this works for this assignment+++++++  THIS IS THE SECOND HOMEWORK< AND I STILL DON"T KNOW+++++++++++++

    // thank you!!

    // COMMON LANGUAGE:::::::::

    // When the website is opened I would like to collect whatever information is stored in local storage, and place it in the appropriate containers.description
    // ON the button click or enter is pressed (keyup), I would like to collect the text inputed in the contanier and place it in the local storage.   


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


    //THIS DIDN"T WORK EITHER>  it runs into an error from the javascript.min.js

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

    // THIS DIDN"T WORK EITHER>  it runs into an error from the javascript.min.js
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

    // ----------------------------------This didn't work, althought I got it up to the storage, just not the content--------------------------
    const counter = $('.form-control');
    const endorse = $('.btn');

    let count = localStorage.getItem("count");

    counter.text(count);


    $(".btn").on("click", function() {
        // console.log("FOOOY")
        const nine = $('#nine').val().trim()
            // console.log(nine);
        counter.text(count);

        JSON.stringify(localStorage.setItem("count", nine))
    });

    $(".btn").on("click", function() {
        // console.log("FOOOY")
        const ten = $('#ten').val().trim()
            // console.log(ten);
        counter.text(count);

        JSON.stringify(localStorage.setItem("count", ten))
    });

    $(".btn").on("click", function() {
        // console.log("FOOOY")
        const eleven = $('#eleven').val().trim()
            // console.log(eleven);
        counter.text(count);

        JSON.stringify(localStorage.setItem("count", eleven))
    });

    $(".btn").on("click", function() {
        // console.log("FOOOY")
        const twelve = $('#twelve').val().trim()
            // console.log(twelve);
        counter.text(count);

        JSON.stringify(localStorage.setItem("count", twelve))
    });

    $(".btn").on("click", function() {
        // console.log("FOOOY")
        const one = $('#one').val().trim()
            // console.log(one);
        counter.text(count);

        JSON.stringify(localStorage.setItem("count", one))
    });

    $(".btn").on("click", function() {
        // console.log("FOOOY")
        const two = $('#two').val().trim()
            // console.log(two);
        counter.text(count);

        JSON.stringify(localStorage.setItem("count", two))
    });

    $(".btn").on("click", function() {
        // console.log("FOOOY")
        const three = $('#three').val().trim()
            // console.log(three);
        counter.text(count);

        JSON.stringify(localStorage.setItem("count", three))
    });

    $(".btn").on("click", function() {
        // console.log("FOOOY")
        const four = $('#four').val().trim()
            // console.log(four);
        counter.text(count);

        JSON.stringify(localStorage.setItem("count", four))
    });

    $(".btn").on("click", function() {
        // console.log("FOOOY")
        const five = $('#five').val().trim()
            // console.log(five);
        counter.text(count);

        JSON.stringify(localStorage.setItem("count", five))
    });
    //-------------------------------------------------------------------------------------------------------------------------------------------------------

    //save txtarea input local storage ..  THIS DIDN"T WORK EITHER>  it runs into an error from the javascript.min.js
    // function SaveBtn() {
    //     const input_textarea = document.querySelector('#result');
    //     const save_button = document.querySelector('#sBtn');

    //     save_button.addEventListener('click', updateOutput);

    //     input_textarea.textContent = localStorage.getItem('content');
    //     input_textarea.value = localStorage.getItem('content');

    //     function updateOutput() {
    //         Del();
    //         localStorage.setItem('content', input_textarea.value);
    //         input_textarea.textContent = input_textarea.value;
    //     }
    // }

});