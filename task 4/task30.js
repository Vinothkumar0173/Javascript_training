function welcome() {
    console.log("Welcome");
}

function execute(callback) {
    callback();
}

execute(welcome);