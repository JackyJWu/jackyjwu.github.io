var http = require("http");
setInterval(function() {
    http.get("http://jackywu.me");
}, 300000); // every 5 minutes (300000)

setInterval();
