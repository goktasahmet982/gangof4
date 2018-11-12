enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
}
interface Mysettings{
    name:string;
    calculatorCost():number
}
namespace GANGOF4{
    export enum Response {
        No = 0,
        Yes = 1,
    }
}

export class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");

function respond(recipient: string, message: GANGOF4.Response): void {
    // ...

}
function product(settings:Mysettings){
    let x = settings.name;
    respond(x,GANGOF4.Response.Yes);
}
respond("Princess Caroline", GANGOF4.Response.Yes);