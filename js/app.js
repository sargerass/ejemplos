var app = new Vue({
    el: '#app',
    data: {
        arrayProducts,
        arrayUnits,
        produccCurrent: null,
        countProduct: 1,
        typeCurrent: null,
        priceFInal: null,
    },
    mounted() {
        this.typeCurrent = this.arrayUnits[0];
    },
    methods: {
        selectProduct() {
            console.log("produccCurrentID", this.produccCurrent);
        },
        calculate() {
            let price;
            if (this.produccCurrent.unitType == "unit") {
                price = this.getUnitPrice(this.countProduct, this.produccCurrent.off)
            } else {
                price = this.getGranelPrice(this.countProduct, this.typeCurrent.name, this.produccCurrent.price)
            }
            this.priceFInal = price;
            console.log("Precio", price);
        },
        getUnitPrice(counter, config) {
            let price = 0;
            config.forEach( value => {
                var count = Math.floor(counter / value.off);
                counter = counter % value.off;
                price += count*value.price;
            });
            return this.roundPrice(price);
        },
        getGranelPrice(cantidad, medida, precio) {
            var element = this.arrayUnits.find( res => {
                return res.name == medida;
            });
            price = cantidad*element.convertion*precio;
            return this.roundPrice(price);
        },
        roundPrice(price) {
            return Math.round(price*100)/100;
        }
        
    }
  })