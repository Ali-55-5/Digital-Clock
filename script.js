
function clock() {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, '0');
    const mins = date.getMinutes().toString().padStart(2, '0');
    const sec = date.getSeconds().toString().padStart(2, '0');

    document.getElementById("hours").innerHTML = hours;
    document.getElementById("mins").innerHTML = mins;
    document.getElementById("sec").innerHTML = sec;
}
 
setInterval(clock, 1000);
 
clock();