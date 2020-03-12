var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: './images/vmSocks-green.jpg',
        inventory: 8,
        onSale: true,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "Green"
             },
             {
                variantId: 2235,
                variantColor: "Blue"
             }
        ]
    }
})