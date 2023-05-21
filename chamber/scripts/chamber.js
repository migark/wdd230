// menuBtn menuItems
function toggleMenu() {
    // console.log("It worked!");
    document.getElementById("menuItems").classList.toggle("open");
    document.getElementById("webName").classList.toggle("showOff");
    document.getElementById("socialHeader").classList.toggle("showOff");
    document.getElementById("dayInfo").classList.toggle("showOff");
    document.getElementById("headerNav").classList.toggle("wideNav");
}

const x = document.getElementById("menuBtn")
x.onclick = toggleMenu;

// Actual date
const dayNames = ["Sunday", "Monday","Tuesday","wedneday","Thursday","Friday","Saturday"];
const monthnames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
let dayInfo = new Date();     // 'May 15, 2023 23:15:30'
let dayName = dayNames[dayInfo.getDay()];
let monthName = monthnames[dayInfo.getMonth()];
let year = dayInfo.getFullYear;
// let finalDate = dayName + ", " + dayData.getDate() + " " + monthName + ", " + dayData.getFullYear();
let finalDate = `${dayName}, ${dayInfo.getDate()} ${monthName} ${dayInfo.getFullYear()}`;
document.getElementById('dayInfo').innerHTML = finalDate;

//banner
const banner = document.querySelector("#banner");
today = dayInfo.getDay();
// console.log(today);
if(today == 1 || today == 2){
    banner.classList.toggle("showOn");
}
else {
    banner.classList.toggle("showOff");
}

// Last update 
let dayData = new Date(document.lastModified);

let fulldate = `${dayData.getMonth()+1}/${dayData.getDate()}/${dayData.getFullYear()}`;
let hourDate = `${dayData.getHours()}:${('0'+ dayData.getMinutes()).slice(-2)}:${('0'+ dayData.getSeconds()).slice(-2)}`
let otherDate = `${fulldate} ${hourDate}`;

document.querySelector('#copyYear').innerHTML = dayData.getFullYear();
document.getElementById('lastUpdate').innerHTML = otherDate;

