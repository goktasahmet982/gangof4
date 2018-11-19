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
  
  