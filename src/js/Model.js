export default class Model {
  constructor() {
    this.products = [];
  }

  save(product) {
    this.products.push(product);
  }

  delete(id) {
    this.products = this.products.filter((elem) => elem.id !== Number(id));
  }

  find(id) {
    return this.products.find((elem) => elem.id === Number(id));
  }

  update(product) {
    const index = this.products.findIndex((elem) => elem.id === product.id);
    this.products[index] = product;
  }
}
