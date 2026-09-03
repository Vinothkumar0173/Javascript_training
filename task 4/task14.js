let product = {
    productName: "Laptop",
    price: 55000,
    brand: "Dell",
    category: "Electronics",
    stock: 10
};

for (let key in product) {
    console.log(key, product[key]);
}