let cart = [];

function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    alert(name + " has been added to your cart!");

    console.log(cart);

}