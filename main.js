var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        brand: 'VueJS',
        selectedVariant: 0,
        onSale: true,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "Green",
                variantImage: './images/vmSocks-green.jpg',
                variantQuantity: 12
             },
             {
                variantId: 2235,
                variantColor: "Blue",
                variantImage: './images/vmSocks-blue.jpg',
                variantQuantity: 9
             }
        ],
        cart: 0
    },
    // Older methods use anonymous function, ES6 syntax will work in modern browsers
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateProduct(index) {
            this.selectedVariant = index
            console.log(index)
        },
        clearCart() {
            this.cart = 0
        }
    },
    // Updates when dependancies change
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            //if (this.inventory > 0) {
            if (this.variants[this.selectedVariant].variantQuantity > 0) {
                return this.inStock = true
            } else {
                return this.inStock = false
            }
        },
        runningLow() {
            //if (this.inventory > 0 && this.inventory < 10) {
            if (this.variants[this.selectedVariant].variantQuantity > 0 && this.variants[this.selectedVariant].variantQuantity < 10) {
                return this.runningLow = true
            } else {
                return this.runningLow = false
            }
        },
        variantCount() {
            return this.variants[this.selectedVariant].variantQuantity
        }
    }
})