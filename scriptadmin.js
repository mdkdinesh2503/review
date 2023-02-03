// overall script starts

function OpenPage() {

    if (confirm("Redirect to home page..") == true) {
        window.location = "loginpage.html";
        return false;
    }

}

// Admin dashboard javascript starts here

function updateClock() {

    var now = new Date();

    var dname = now.getDay(),
        mo = now.getMonth(),
        dnum = now.getDate(),
        yr = now.getFullYear(),
        hou = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds(),
        pe = "AM";

    if (hou >= 12) {
        pe = "PM";
    }

    if (hou == 0) {
        hou = 12;
    }

    if (hou > 12) {
        hou = hou - 12;
    }

    Number.prototype.pad = function (digits) {
        for (var n = this.toString(); n.length < digits; n = 0 + n);
        return n;
    }

    var months = ["January", "February", "March", "April", "May", "June", "July", "Augest", "September", "October", "November", "December"];
    var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];
    var values = [week[dname], months[mo], dnum.pad(2), yr, hou.pad(2), min.pad(2), sec.pad(2), pe];

    for (var i = 0; i < ids.length; i++) {
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
    }

}

function initClock() {

    updateClock();
    window.setInterval("updateClock()", 1);

}

// Admin dashboard javascript ends here

// todo-list javascript section starts here

var list = document.getElementById("myList");

function js_func() {

    var value = document.getElementById("to-do").value;
    var li = document.createElement("LI");
    var textNode = document.createTextNode(value);
    li.appendChild(textNode);
    list.appendChild(li);

}

list.addEventListener("click", function (ev) {

    if (ev.target.tagName === "LI") {
        ev.target.classList.toggle("checked");
    }

}, false);

// todo-list javascript section ends here

// Admin Result page view individual section starts here 

function ResultPage() {
    window.location = "ResultViewPage.html";
    return false;
}

// Admin Result page view individual section ends here 
