"use strict";
var app = require('./lib/app');
var pool = require('./lib/utils/pool');
var PORT = process.env.PORT || 7890;
app.listen(PORT, function () {
    // eslint-disable-next-line no-console
    console.log("Started on " + PORT);
});
process.on('exit', function () {
    console.log('Goodbye!');
    pool.end();
});
