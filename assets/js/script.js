//get the current day
//get the current hour
//get the events

//on load show the current day in id 'currentDay'
function showDate() {
    var today = new Date();
    document.getElementById('currentDay').innerText=today; //#currentDay is an element, has innerText property
    console.log(today);
    console.log(thisDay);
    
}

//*************************
// main
showDate(); // show today's date