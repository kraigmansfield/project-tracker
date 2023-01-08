// Save reference to important DOM elememnts
var timeDisplayEl = $('#time-display');

//handle displaying the time
function displayTime() {
    var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a')
    timeDisplayEl.text(rightNow);
}



//read projects from the local storage and returns array of project objects
//return empty array 
function readProjectFromStorage() {


}

displayTime();
setInterval(displayTime, 1000)