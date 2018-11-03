
function handle_request(msg, callback) {

    console.log("Inside display Properties kafka backend");
    console.log(msg);
    const data = {
        message: msg,
        status: "display Property success"
    }
    callback(null, data);
    console.log("after callback");
};

exports.handle_request = handle_request;


