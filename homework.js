"use strict";
exports.__esModule = true;
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
var GANGOF4;
(function (GANGOF4) {
    var Response;
    (function (Response) {
        Response[Response["No"] = 0] = "No";
        Response[Response["Yes"] = 1] = "Yes";
    })(Response = GANGOF4.Response || (GANGOF4.Response = {}));
})(GANGOF4 || (GANGOF4 = {}));
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
exports.Greeter = Greeter;
var greeter = new Greeter("world");
function respond(recipient, message) {
    // ...
}
function product(settings) {
    var x = settings.name;
    respond(x, GANGOF4.Response.Yes);
}
respond("Princess Caroline", GANGOF4.Response.Yes);
