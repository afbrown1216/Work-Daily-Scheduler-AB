// GIVEN I am using a daily planner to create a schedule



// hours col

// WHEN I click into a timeblock
// THEN I can enter an event
// when you click on the itmeblock make it an input or modal hmmmm 
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
//do a get set for that time block probaly save the time and text 
// WHEN I refresh the page
// THEN the saved events persist
//create a getlocalstorage at the top of the script to get it from time probaly a document ready








//variables 
//#currentDay 
//#container for time blocks 
var currentDayEl = $("#currentDay");
var containerEl = $(".container");

//event listeners 
// save button in timeblock to setthe local storage 

//functions 
//


// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// ajax get call to return the current day in the #currentDay element 

function getCurrentDay (){
    var currentDay = moment().format('MMMM Do YYYY');
    console.log(currentDay);
    currentDayEl.text(currentDay);
}


// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// create blocks of time for the day with an ajax get call of the hours 9AM -5PM and save button that triggers the setlocalstorage

function createTimeBlocks () {
    //for loop that creates 8 columns with the time 
    for (var i = 9; i > 1;i--){
        //create a row 
    var row = $("<div>");
    console.log(row);
    //add attributes to the div 
    row.attr("class","row");
    //create the columns 
    //time column
    var timeCol = $("<div>")
    var time = $("<h3>");
    timeCol.attr("class", "col-sm-2 hour");
   
    //textarea column 
    var textCol = $("<textarea>");
    textCol.attr("class", "col-sm-8 time-block");
    textCol.text("Todo");
    // figure out the time block coloring conditional statement 
    //addClass() removeClass() 
    //save button column 
    var saveCol = $("<div>");
    var saveImg = $("<img>")
    saveCol.attr("class", "col-sm-2 saveBtn btn");
    // saveImg.attr("src","https://cdn2.iconfinder.com/data/icons/actions-states-vol-1-colored/48/JD-03-512.png" );
   saveCol.text("save");
    

    containerEl.append(row);
    row.append(timeCol);
    timeCol.append(time);
    row.append(textCol);
    row.append(saveCol);
    // saveCol.append(saveImg);

    }
    



}





// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// create a conditional statment to change the color styling of the block based on past present or future 

// function timeIndicator (){
//     if()
// }



$(document).ready(function () {
    getCurrentDay();
    createTimeBlocks();

    



})