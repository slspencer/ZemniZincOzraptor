//get the current day
var currentDate = new Date();
//get the current hour
var currentHour = currentDate.getHours();

//get the eventList from local storage
if (localStorage.getItem("username") === null) {
    //read in the local storage dat
}
else {
    // create the list
    var eventList = []; //24 events per day
}

//on load show the current day in id 'currentDay'
function showDate() {
    var today = new Date();
    document.getElementById('currentDay').innerText=today; //#currentDay is an element, has innerText property
    console.log(today);
    console.log(thisDay);    
}

function showEventGrid() {
    // read local storage for eventList
    // create the event grid
    //for each hour 1 to 24
    //   create an event:
    //   1. add a eventBox w/ color, border, hover changes color, (listen for change of hour -- if past change color)
    //      - put in the eventHour & am or pm
    //      - put in the eventName if it exists & set color, else 'event' with default color
    //      - put in the save icon (listen if clicked, change color, save eventName and eventHour to local storage eventList)
    //   2. add eventBox to eventGrid
    //   3. display eventGrid
}

function saveEvents() {
    //listener - if any save icon is clicked
    // change color
    // append or update eventList for that hour
    // save event to local storage

}

//*************************
// main
showDate(); // show today's date
showEventGrid(); //show the event Grid
showEvents(); //show events from local storage