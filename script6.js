let eshop = {
    name: "Eshop",
    nomer: "+77082084757",
    products: [
        {
            productName: "Alma",
            category: "Jenister",
            price: 500,
            stock: 7
        },
        {
            productName: "Iphone",
            category: "Tehnika",
            price: 590+"myn",
            stock: 13
        },
        {
            productName: "Manty",
            category: "Tamaq",
            price: 800,
            stock: 9
        },
        {
            productName: "Juzym",
            category: "Jenister",
            price: 450,
            stock: 2
        },
        {
            productName: "Kivi",
            category: "Jenister",
            price: 800,
            stock: 3
        }
    ]
};

console.log(eshop);

eshop.changeShopName = function() {
    this.name = prompt("jana at engiz");
    console.log(`${this.name}`);
    
    let newNumber = prompt("jana nomer engiz");
    if (newNumber) {
        this.nomer = newNumber;
    }
    console.log(`${this.name}`);
    console.log(`${this.nomer}`);
}

eshop.changeShopName();
console.log(eshop);

eshop.listProductNames = function() {
    let productNames = this.products.map(product => product.productName);
    alert(productNames);
};

eshop.listProductNames();

eshop.newProduct = function() {
    let productName = prompt("onim atauy");
    let category = prompt("onim katygoriasy");
    let price = +prompt("onim bagasy");
    let stock = +prompt("koimadagy sany");

    let newProduct = {
        productName: productName,
        category: category,
        price: price,
        stock: stock
    };

    this.products.push(newProduct);
    console.log(this.products);
};

eshop.newProduct();
console.log(eshop.products);