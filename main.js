var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: './images/vmSocks-green.jpg',
        inventory: 9,
        inStock: true,
        onSale: true,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "Green",
                variantImage: './images/vmSocks-green.jpg'
             },
             {
                variantId: 2235,
                variantColor: "Blue",
                variantImage: './images/vmSocks-blue.jpg'
             }
        ],
        cart: 0
    },
    // Older methods use anonymous function, ES6 syntax will work in modern browsers
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateProduct(variantImage) {
            this.image = variantImage
        },
        clearCart() {
            this.cart = 0
        }
    }
})