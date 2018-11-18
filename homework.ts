<<<<<<< HEAD
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
=======
//Deniz Sariaslan
enum Types {
    Neapolitan = 1,
    Chicago,
    Newyork,
    Sicilian,
    Mediterranean,
  }
  enum Typesa {
    xname = 'Neapolitan',
    size = '16 inc',
    Xtype = 'thin crust',
  }
  
  interface Pizza {
    xname: string;
    size: string;
    Xtype: string;
  }
  
  
  class PizzaMaker {
    create(event: Pizza) {
      return { xname: event.xname, size: event.size, Xtype: event.Xtype };
    }
  }
  
  const pizzaMaker = new PizzaMaker();
  
  const pizza = pizzaMaker.create({
    xname: 'Newyork',
    size: '12 inc',
    Xtype: 'Gluten free'
  });
  
  
  console.log(Types);
  
  console.log(pizza);
  
  console.log(Typesa);
  
  function greeters(Pizza: any) {
    return " Order Name:" + pizza.xname + ", Size:" + pizza.size + ", Type: " + pizza.Xtype;
  }
  
  document.body.innerHTML = greeters(0);
  
  
>>>>>>> 30fc8425a1f202e1f3833b2e1befa983552c2930
