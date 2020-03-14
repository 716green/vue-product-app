Vue.component('product', {
    template: `
    <div class="product">

            <div class="product-image">
                <img v-bind:src="image" />
            </div>

            <div class="product-info">
                <h1>{{ title }}</h1>
                <span v-show="onSale" :class="{ onSale: onSale }">On Sale!</span>

                <!--Check Quanity and Display Information-->
                <p v-if="inStock && !runningLow" :class="{ inStock: true }">[{{ variantCount }}] In Stock</p>
                <p v-else-if="runningLow && inStock" :class="{ limitedSupply: true }">[{{variantCount}}] Almost Sold
                    Out!</p>
                <p v-else :class="{ outOfStock: !inStock }">Out of Stock</p>


                <ul>
                    <li v-for="detail in details">{{ detail }}</li>
                </ul>

                <div v-for="(variant, index) in variants" :key="variant.variantId" class="color-box"
                    :style="{ backgroundColor: variant.variantColor }" @mouseover="updateProduct(index)">
                </div>
                <br>

                <!--Disable cart and cart button when no in stock-->
                <div class="cartButtons">
                    <button v-on:click="addToCart" :disabled="(inStock == false)"
                        :class="{ disabledButton: (inStock == false) }">Add to Cart</button>
                    <button class="empty" v-on:click="clearCart">Clear Cart</button>
                </div>

                <div class="cart">
                    <p>Cart({{cart}})</p>
                </div>
            </div>
        </div>
        `,

        // Data was converted from Data Object to Data Function to allow for use in multiple places
        data() {
            return {
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
                cart: 0, // Not sure about this comma
            }
        },

        // Methods (ES6 Syntax)
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

        // Computed Properties (Updates when dependancies change)
        computed: {
            title() {
                return this.brand + ' ' + this.product
            },
            image() {
                return this.variants[this.selectedVariant].variantImage
            },
            inStock() {
                if (this.variants[this.selectedVariant].variantQuantity > 0) {
                    return this.inStock = true
                } else {
                    return this.inStock = false
                }
            },
            runningLow() {
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

var app = new Vue({
    el: '#app'
})