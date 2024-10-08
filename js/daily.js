t = setInterval(getTime,60000);

function getTime() {

    var isoString = new Date().toISOString()
    var utc= (new Date(isoString)).toUTCString()

    var day = new Date(utc).getUTCDay()
    var month = new Date(utc).getUTCMonth()
    var daynum = new Date(utc).getUTCDate()
    var hour = new Date(utc).getUTCHours()
    var minute = new Date(utc).getUTCMinutes()
    var year = new Date(utc).getFullYear()

    if (minute < 10) {
        minute = "0"+minute
    }

    if (day == 0 ) {
        day = "Sunday"
    } else if (day == 1) {
        day = "Monday"
    } else if (day == 2) {
        day = "Tuesday"
    } else if (day == 3) {
        day = "Wednesday"
    } else if (day == 4) {
        day = "Thursday"
    } else if (day == 5) {
        day = "friday"
    } else if (day == 6) {
        day = "Saturday"
    }

    if (month == 0 ) {
        month = "January"
    } else if (month == 1) {
        month = "February"
    } else if (month == 2) {
        month = "March"
    } else if (month == 3) {
        month = "April"
    } else if (month == 4) {
        month = "May"
    } else if (month == 5) {
        month = "June"
    } else if (month == 6) {
        month = "July"
    } else if (month == 7) {
        month = "August"
    } else if (month == 8) {
        month = "September"
    } else if (month == 9) {
        month = "October"
    } else if (month == 10) {
        month = "November"
    } else if (month == 12) {
        month = "December"
    }

    var headerdate = day + " " + month + " " + daynum + ", " + year + " " + hour + ":" + minute + " UTC"

    document.getElementById("header-date").innerHTML = ""
    document.getElementById("header-date").innerHTML = headerdate
}

var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest()
    xhr.open('GET', url, true)
    xhr.responseType = 'json'
    xhr.onload = function() {
      var status = xhr.status
      if (status === 200) {
        callback(null, xhr.response)
      } else {
        callback(status, xhr.response)
      }
    }
    xhr.send()
}

getTime()
getJSON('https://services.swpc.noaa.gov/products/noaa-scales.json',
    function(err, data) {
        if (err !== null) {
        document.getElementById("header-solar").innerHTML = "Error loading conditions"
        } else {
        document.getElementById("header-solar").innerHTML = "G"+data[0]["G"]["Scale"]+" "+data[0]["G"]["Text"]
        }
    })