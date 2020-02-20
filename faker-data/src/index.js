#! /usr/bin/evn node

let commander = require("commander");
let products = require("./products");

const program = new commander.Command();
program
  .version("0.0.1", "-v, --version")
  .option("-p, --product", "output product json")
  .parse(process.argv);

if (program.product) {
  console.log(products());
}
