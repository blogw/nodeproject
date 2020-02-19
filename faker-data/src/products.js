//import faker from "faker/locale/zh_CN";
import faker from "faker";

export function products() {
  faker.locale = "zh_CN";

  let products = [];
  for (let i = 0; i < 10; i++) {
    let name = faker.commerce.productName();
    let stock = faker.random.number(10);

    products.push({
      name: name,
      stock: stock,
      owner: faker.name.firstName() + faker.name.lastName()
    });
  }
  return products;
}
