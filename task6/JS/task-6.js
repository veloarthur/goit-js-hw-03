const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];
const calculateTotalPrice = function (allProdcuts, productName) {
  let multiply = 0;
  for (const product of products) {
    if (productName === product.name) {
      multiply = product.price * product.quantity;
    }
  }
  return multiply;
};
console.log(calculateTotalPrice(products, "Радар")); // 5200

console.log(calculateTotalPrice(products, "Дроид")); // 2800