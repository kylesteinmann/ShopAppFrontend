export class Item {
  id="";
  name = "";
  description = "";
  price = "";
  stock = "";
  constructor(name="", description="", price="", stock="", id="") {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.stock = stock;
  }
}
