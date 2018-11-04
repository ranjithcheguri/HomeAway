var returnMessage = [];

function handle_request(msg, callback) {

    console.log("File: Messages.js", "Inside book kafka backend");
    console.log(msg);

    returnMessage.push(msg);
    callback(null, JSON.stringify(returnMessage));
    console.log("after callback");
};

exports.handle_request = handle_request;


