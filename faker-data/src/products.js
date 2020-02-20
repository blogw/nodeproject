//如果直接用下面的import，则不需要执行faker.locale
//import faker from "faker/locale/zh_CN";
const faker = require("faker");

function products() {
  //修改默认locale为中国
  faker.locale = "zh_CN";

  //定义数组对象
  let products = [];

  for (let i = 0; i < 10; i++) {
    //faker.random.number可以不指定参数
    products.push({
      name: faker.commerce.productName(),
      stock: faker.random.number(10),
      owner: faker.name.firstName() + faker.name.lastName()
    });
  }

  //返回数组对象
  return products;
}

module.exports = products;
