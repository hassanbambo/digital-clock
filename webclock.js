let hrs = document.getElementById("hours");
let mins = document.getElementById("minutes");
let sec = document.getElementById("seconds");



setInterval(()=> {
    let theCurrentDateTime = new Date();

    hrs.innerHTML = theCurrentDateTime.getHours() < 10 ? "0"+ theCurrentDateTime.getHours() : theCurrentDateTime.getHours();
    mins.innerHTML = theCurrentDateTime.getMinutes() < 10 ? "0"+ theCurrentDateTime.getMinutes() : theCurrentDateTime.getMinutes();
    sec.innerHTML = (theCurrentDateTime.getSeconds() < 10 ? "0" : "") + theCurrentDateTime.getSeconds();

}, 1000);















console.log('Done!');